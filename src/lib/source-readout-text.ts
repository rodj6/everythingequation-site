import {parseFragment} from 'parse5';
export function sourcePlainText(html: string) {
  const tree=parseFragment(html);
  function visit(node: any): string {
    if(node.nodeName==='#text')return node.value;
    const classes=node.attrs?.find((a: any)=>a.name==='class')?.value||'';
    if(classes.split(' ').includes('katex-html')||classes.split(' ').includes('sr-formula-transcript'))return '';
    if(['script','style','svg'].includes(node.nodeName))return '';
    if(node.nodeName==='math'){
      function annotation(n: any): string {if(n.nodeName==='annotation')return(n.childNodes||[]).map(visit).join('');return(n.childNodes||[]).map(annotation).join('');}
      return ' '+annotation(node)+' ';
    }
    if(node.nodeName==='img')return ' '+(node.attrs?.find((a: any)=>a.name==='alt')?.value||'')+' ';
    return (node.childNodes||[]).map(visit).join(' ');
  }
  return visit(tree).replace(/\s+/g,' ').trim();
}
