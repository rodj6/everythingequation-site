#!/usr/bin/env python3
"""Reproduce finite checks in Sealed_or_Leaky_v3.1 (Python 3, stdlib only).

No trial records are generated or read. The Bell coefficients are the published
Data Set 5 Table 1 decimal rationals (Bierhorst et al., arXiv:1803.06219v1).
Interval calculations use exact rational arithmetic with explicit series tails.
Randomized sanity checks are supplementary, never substitutes for manuscript proofs.
"""
from fractions import Fraction as F
from itertools import product
from decimal import Decimal, localcontext
from pathlib import Path
import argparse
import json
import math
import random
import re


def decimal(q: F, digits: int = 28) -> str:
    with localcontext() as ctx:
        ctx.prec = digits
        return str(Decimal(q.numerator) / Decimal(q.denominator))


def add(a, b):
    return a[0]+b[0], a[1]+b[1]


def scale(a, c):
    c=F(c)
    return (a[0]*c,a[1]*c) if c >= 0 else (a[1]*c,a[0]*c)


def log_unit_bounds(x: F, terms: int = 20):
    """ln(x) interval for 1<=x<=2 from the positive atanh series."""
    assert 1 <= x <= 2
    y=(x-1)/(x+1)
    lo=2*sum((y**(2*j+1)/F(2*j+1) for j in range(terms)),F(0))
    remainder=2*y**(2*terms+1)/(F(2*terms+1)*(1-y*y))
    return lo,lo+remainder


LN2=log_unit_bounds(F(2))


def ln_bounds(x: F):
    assert x>0
    k=0
    while x<1:
        x*=2;k-=1
    while x>=2:
        x/=2;k+=1
    return add(log_unit_bounds(x),scale(LN2,k))


def ratio_posden(a,b):
    assert 0 < b[0] <= b[1]
    vals=[x/y for x in a for y in b]
    return min(vals),max(vals)


def log2_bounds(x):
    return ratio_posden(ln_bounds(F(x)),LN2)


def expm1_bounds(t, terms=4):
    assert 0 <= t[0] <= t[1] < 1
    def series(x):
        return sum((x**j/F(math.factorial(j)) for j in range(1,terms+1)),F(0))
    lo=series(t[0]);x=t[1]
    hi=series(x)+x**(terms+1)/F(math.factorial(terms+1))/(1-x/F(terms+2))
    return lo,hi


def neglog1m_bounds(u,terms=4):
    assert 0 <= u[0] <= u[1] < 1
    def series(x):
        return sum((x**j/F(j) for j in range(1,terms+1)),F(0))
    lo=series(u[0]);x=u[1]
    hi=series(x)+x**(terms+1)/(F(terms+1)*(1-x))
    return lo,hi


def entropy_production_bounds(n,p,v,m):
    t=scale(ln_bounds(p*v),F(1,n))
    u=scale(expm1_bounds(t),F(1)/(2*m))
    return ratio_posden(scale(neglog1m_bounds(u),n),LN2)


def format_interval(a):
    return {'lower':decimal(a[0]),'upper':decimal(a[1])}


def run():
    results={}
    rows=[['1.0243556353','0.9704647804','0.9735507658','1'],
          ['1.0256127409','0.9491951243','0.9960775334','1'],
          ['1.0227274988','0.9962782754','0.9461091383','1'],
          ['0.9273040563','1.0037217225','1.0039224645','1']]
    b=[[F(x) for x in row] for row in rows]
    local=[]
    for a0,a1,b0,b1 in product(range(2),repeat=4):
        aa=[a0,a1];bb=[b0,b1]
        local.append(sum((b[2*x+y][2*aa[x]+bb[y]] for x,y in product(range(2),repeat=2)),F(0))/4)
    pr=[]
    for r,s,t in product(range(2),repeat=3):
        pr.append(sum((b[2*x+y][2*a+(a^(x*y)^(r*x)^(s*y)^t)]
                       for x,y,a in product(range(2),repeat=3)),F(0))/8)
    assert max(local)==1
    assert sorted(local)[-2]==1-F('5.25e-10')
    assert max(pr)==F('1.01004250775') and max(pr[1:])<1
    # Original all-nondetection entries are exactly 1 by the published constraint;
    # every other local strategy has more margin than the entire rounding envelope.
    assert max(local[:-1])+F('1e-10')<1
    mplus=F('0.01004250785')
    results['bell_vertices']={'local_count':16,'PR_count':8,'local_max':decimal(max(local)),
        'next_local_max':decimal(sorted(local)[-2]),'NS_max_printed':decimal(max(pr)),
        'conservative_original_m_upper':decimal(mplus),'original_local_bound_certified_from_rounding':True}
    n=55110210;p=F('9.025e-25');kap=F('9.5e-13');v=F('1.5e32');ext=F('5e-14')
    assert p==kap**2
    bd=entropy_production_bounds(n,p,v,mplus)
    assert F('1344.91401726')<bd[0] and bd[1]<F('1344.91401728')
    lk=log2_bounds(kap)
    ext_rhs=add(add(bd,lk),add(scale(log2_bounds(ext),5),(F(-11),F(-11))))
    smooth=add(bd,lk)
    shannon=scale(add(bd,log2_bounds(kap-p)),1-p/kap)
    assert ext_rhs[0]>F('1073.05')>1064
    assert smooth[0]>F('1304.97') and shannon[0]>F('1304.97')
    # delta+ < 2^-1000 gives an intentionally loose exact bound on ordinary guessing.
    ordinary=scale(log2_bounds((p+F(1,2**1000))/kap),-1)
    assert ordinary[0]>F('39.93')
    ex_ordinary=scale(log2_bounds(F(1,2**1024)+F('1e-12')),-1)
    assert ex_ordinary[0]>F('39.86')
    eps=F('1e-12')
    entropy_loss=add((1024*eps,1024*eps),add(scale(log2_bounds(eps),-eps),scale(log2_bounds(1-eps),-(1-eps))))
    assert entropy_loss[1]<F('1.1e-9')
    # EPT range test checked using logarithms and m_act >= printed m.
    range_rhs=scale(ln_bounds(1+F(3,2)*F('0.01004250775')),n)
    assert ln_bounds(p*v)[1] < range_rhs[0]
    results['rational_intervals']={
        'b_plus':format_interval(bd),'extractor_constraint_rhs':format_interval(ext_rhs),
        'deletion_smooth_min_entropy':format_interval(smooth),'conditional_shannon':format_interval(shannon),
        'ordinary_min_entropy_conservative':format_interval(ordinary),
        'extractor_only_ordinary_min_entropy':format_interval(ex_ordinary),
        'extracted_Shannon_loss_upper_bound':format_interval(entropy_loss),
        'threshold_null_probability':decimal(1/v)}
    # Trine pointwise inequalities and saturation: exact arithmetic.
    for xi,xj,xk in product([F(0),F(1)],repeat=3):
        D=2*(xi-xj);f=-D*(2*xk-1)/4
        lhs=[f/2,f/2,-f/2,-f/2]
        rhs=[xi/4-xj/4-xk/2,-F(1,2)-xi/4+xj/4+xk/2,
             -xi/4+xj/4-xk/2,-F(1,2)+xi/4-xj/4+xk/2]
        assert all(a>=b for a,b in zip(lhs,rhs))
    states=list(product(range(2),repeat=3))
    for bits in states:
        if sum(bits)==0: h=[-F(1,2)]*3
        elif sum(bits)==3:h=[F(1,2)]*3
        else:
            minority=1 if sum(bits)==1 else 0
            h=[F(1,2) if bit==minority else -F(1,2) for bit in bits]
        H=sum(h)
        for i in range(3):
            oth=sum(bits[j] for j in range(3) if j!=i)
            assert h[i]/2-H/3 >= F(1,4)+F(bits[i],6)-F(oth,2)
            assert h[i]/2 >= -F(3,4)+F(oth,2)
    muplus=[];muminus=[]
    for i in range(3):
        law={b:F(0) for b in states}
        e=tuple(int(j==i) for j in range(3));law[e]=F(1,2)
        for j in range(3):
            if j!=i: law[tuple(int(k in [i,j]) for k in range(3))]=F(1,4)
        muplus.append(law)
        muminus.append({b:law[tuple(1-c for c in b)] for b in states})
    nus=[{b:(muplus[i][b]+muminus[i][b])/2 for b in states} for i in range(3)]
    nu4={b:sum(muplus[i][b] for i in range(3))/3 for b in states}
    tv=lambda a,b:sum(abs(a[x]-b[x]) for x in states)/2
    assert all(tv(nus[i],nus[j])==F(1,4) for i in range(3) for j in range(i))
    assert all(tv(nus[i],nu4)==F(1,6) for i in range(3))
    results['trine_checks']={'pair_inequality_vertices':8,'sum_inequality_states':8,
        'pair_saturation':'1/4','mixture_distance_each':'1/6'}
    # The critical finite-transfer lemma: supplementary finite-law sanity tests.
    rng=random.Random(310921)
    cases=0
    for _ in range(300):
        ne,nz,nc=3,7,4
        law=[[rng.random() for z in range(nz)] for e in range(ne)]
        total=sum(map(sum,law));law=[[x/total for x in row] for row in law]
        fun=[[rng.randrange(nc) for z in range(nz)] for e in range(ne)]
        passes=[[rng.random() for z in range(nz)] for e in range(ne)]
        pe=list(map(sum,law));delta=rng.uniform(.15,.75)
        pc=[[sum(law[e][z] for z in range(nz) if fun[e][z]==c)/pe[e] for c in range(nc)] for e in range(ne)]
        passed=[[law[e][z]*passes[e][z] for z in range(nz)] for e in range(ne)]
        pi=sum(map(sum,passed))
        bad=sum(passed[e][z] for e in range(ne) for z in range(nz) if pc[e][fun[e][z]]>delta)
        good=[[passed[e][z]/pi if pc[e][fun[e][z]]<=delta else 0.0 for z in range(nz)] for e in range(ne)]
        assert sum(max(row) for row in good)<=delta/pi+1e-12
        pg=sum(max(row) for row in passed)/pi
        assert pg<=(delta+bad)/pi+1e-12
        h=0.0
        for row in passed:
            er=sum(row)
            if er>0: h+=sum(-x/pi*math.log2(x/er) for x in row if x>0)
        lo=(1-bad/pi)*max(0,math.log2((pi-bad)/delta)) if pi>bad else 0
        assert h+1e-12>=lo
        cases+=1
    results['supplementary_transfer_sanity_checks']=cases
    # Exact premiss-preservation and formal-environment checks when sources are adjacent.
    root=Path(__file__).resolve().parent
    original=root/'Sealed_or_Leaky_v3.tex';revised=root/'Sealed_or_Leaky_v3.1.tex'
    if not original.exists():
        original=root/'original_inputs/Sealed_or_Leaky_v3.tex'
    if revised.exists():
        s=revised.read_text()
        names=['theorem','proposition','lemma','corollary']
        formal=list(re.finditer(r'\\begin\{('+('|'.join(names))+r')\}(?:\[[^\]]*\])?',s))
        for m in formal:
            text=s[m.end():]
            prefix=re.match(r'(?:\s|\\label\{[^}]+\})*',text).end()
            assert text[prefix:].startswith('\\status'),m.group()
        labels=re.findall(r'\\label\{([^}]+)\}',s)
        assert len(labels)==len(set(labels))
        refs=re.findall(r'\\(?:eqref|ref)\{([^}]+)\}',s)
        assert set(refs)<=set(labels),set(refs)-set(labels)
        prohibited=re.compile(r'\b(?:awareness|unsplit|CSCF)\b|\\mathsf\{U\}')
        for proof in re.findall(r'\\begin\{proof\}(.*?)\\end\{proof\}',s,re.S):
            assert not prohibited.search(proof)
        results['formal_environments_status_tagged']=len(formal)
        if original.exists():
            a=original.read_text()
            for premise in ['SO','D','MI','NS']:
                pat=r'\\item\[\('+premise+r'\).*?(?=\n\\item|\n\\end\{description\})'
                assert re.search(pat,a,re.S).group()==re.search(pat,s,re.S).group(),premise
            results['unchanged_premises']=['SO','D','MI','NS']
    results['status']='All executed exact checks and supplementary sanity checks passed.'
    return results


def main():
    ap=argparse.ArgumentParser(description=__doc__)
    ap.add_argument('--output',type=Path,help='Optional JSON report path.')
    args=ap.parse_args()
    results=run()
    report=json.dumps(results,indent=2)
    if args.output:
        args.output.write_text(report+'\n')
    print(report)


if __name__=='__main__':
    main()
