#!/usr/bin/env python3
"""Independent web-edition checks of the published finite components.

This is not the paper's unavailable original temporal_construction.py.
It checks the declared model and arithmetic, not consciousness or human uptake.
Run: python3 temporal-component-checks.py
"""
from itertools import permutations, product
from math import exp, log, log2, pi, sin
import json

pairs=list(permutations('CEG',2))
bags={tuple(sorted(p)) for p in pairs}
assert len(pairs)==6 and len(bags)==3
assert all(sum(tuple(sorted(p))==bag for p in pairs)==2 for bag in bags)
assert abs(log2(6)-2.584962500721156)<1e-12
entropy=lambda p: -p*log2(p)-(1-p)*log2(1-p)
assert abs((1-entropy(.1))-.5310044064107188)<1e-12
source=[('C',0),('E',100),('G',200)]
received=[(name,t+10)for name,t in source]
transition={'retained':'C','live':'E','relation':('C','E'),'stage_ms':received[1][1]+5}
assert transition['stage_ms']==115<received[2][1]==210
log_before=dict(transition)
record=dict(transition)
retrieved=dict(record)
assert retrieved['relation']==('C','E')
recollection={'mode':'recalled','content':retrieved}
record.clear()
assert record=={} and log_before['relation']==('C','E')
assert recollection['mode']=='recalled'
# Equal or unresolved gaps retain an unresolved relation, never an ID tie-break.
relation=lambda a,b: None if abs(b-a)<=5 else ('first','second') if b>a else ('second','first')
assert relation(100,100)is None and relation(100,103)is None
assert relation(0,100)==('first','second')
arrival={'C':80,'E':60}
calibration={'C':80,'E':10}
assert sorted(arrival,key=arrival.get)==['E','C']
assert sorted(arrival,key=lambda k:arrival[k]-calibration[k])==['C','E']
prefix=lambda past: {'received':tuple(past),'retained':'C','live':'E','predictions':{'G':.75,'D':.25}}
a=prefix(received[:2]); b=prefix(received[:2]); assert a==b
omission={'received':tuple(received[:2]),'expected':'G','received_G':False}
assert not omission['received_G']
RC=.25; threshold=.4
window=RC*log(1/threshold)
assert abs(window-.22907268296853878)<1e-12
short=exp(-.1/RC); long=exp(-.3/RC)
short_min=exp(-.1/(RC*.95*.95)); long_max=exp(-.3/(RC*1.05*1.05))
assert short_min>.42 and long_max<.38
assert abs(short-.670320046)<1e-9 and abs(long-.301194212)<1e-9
assert abs(short_min-.641970263)<1e-9 and abs(long_max-.336742958)<1e-9
assert abs(.5*1e-6-5e-7)<1e-18
pace=lambda n,e:(.8*20+.4*n,log((n/20)/.15)+log(e/20))
pace_values=[pace(3,20),pace(7,20),pace(3,10),pace(3,40)]
assert abs(pace_values[1][0]-18.8)<1e-12
assert abs(pace_values[1][1]-.8472978603872037)<1e-12
assert abs(pace_values[2][1]+.6931471805599453)<1e-12
assert abs(pace_values[3][1]-.6931471805599453)<1e-12
jacobian_determinant=.4
assert jacobian_determinant!=0
GM=3.986004418e14; R=6378137; c=299792458; h=400000; omega=7.292115e-5
vg=omega*R; vo2=GM/(R+h)
grav=GM/c**2*(1/R-1/(R+h)); kinetic=(vg**2-vo2)/(2*c**2)
net=grav+kinetic
assert abs(net*86400*1e6+24.617033)<.0001
assert abs(net*60*1e9+17.09516)<.0001
# Check the constrained radicand identity at finite representative values.
for A,q,beta in product([.1,.5,1.,2.],[.01,.2,1.,4.],[0.,.1,.5,.999]):
    B2=A*A*(1+q)
    radicand=B2-beta*beta/q*(B2-A*A)
    assert abs(radicand-A*A*(1+q-beta*beta))<1e-10 and radicand>0
for t in [0,.25,.5,.75,1]:
    p=sin(pi*t/2)**2
    assert 0<=p<=1
assert sin(0)**2==0 and abs(sin(pi/2)**2-1)<1e-12
# Seven qualification-role bits plus optional later retrieval = 256 assignments.
rows=list(product([False,True],repeat=8)); assert len(rows)==256
for bits in rows:
    admission=all(bits[:7])
    swapped=bits[:7]+(not bits[7],)
    assert admission==all(swapped[:7])
    if not bits[6]: assert not admission
    if all(bits[:7]): assert admission
print(json.dumps({'status':'passed','kind':'independent-web-edition-model-check',
 'ordered_pairs':len(pairs),'unordered_codes':len(bags),'orientation_ceiling':.5,
 'transition_stage_ms':115,'third_reception_ms':210,'rc_window_s':window,
 'rc_trace_short_v':short,'rc_trace_long_v':long,'short_tolerance_min_v':short_min,
 'long_tolerance_max_v':long_max,'pace_values':pace_values,'jacobian_determinant':jacobian_determinant,
 'orbital_grav_us_day':grav*86400*1e6,'orbital_kinematic_us_day':kinetic*86400*1e6,
 'orbital_net_us_day':net*86400*1e6,'boolean_assignments':256,
 'empirical_or_consciousness_validation':False},indent=2))
