// js/components/common.js
import { h } from '../core/dom.js';
import { STATUS } from '../data/config.js';

export const Badge=s=>h('span',{class:'badge b-'+s},STATUS[s]);
export const Link=(href,text,cls='')=>h('a',{href:'#'+href,class:cls},text);
export const Path=(...a)=>h('div',{class:'path'},a.flatMap((x,i)=>i?[h('span',{class:'arr','aria-hidden':'true'},'\u2192'),x]:[x]));
export const Rays=()=>{const n=24;let r='';for(let i=0;i<n;i++){const a=i*360/n;r+=`<line x1="320" y1="320" x2="320" y2="${i%2?60:20}" transform="rotate(${a} 320 320)" stroke="#f2b01e" stroke-width="${i%2?3:6}" stroke-linecap="round" opacity="${i%2?.45:.8}"/>`}
 const w=document.createElement('div');w.innerHTML=`<svg viewBox="0 0 640 640" aria-hidden="true">${r}<circle cx="320" cy="320" r="120" fill="none" stroke="#f2b01e" stroke-width="3"/><circle cx="320" cy="262" r="26" fill="#f2b01e"/><path d="M270 372q50-70 100 0" fill="none" stroke="#f2b01e" stroke-width="10" stroke-linecap="round"/></svg>`;return w.firstChild};
export const Header=cur=>{const l=[['/','Home'],['/about','About'],['/shs','Synchronized Human System'],['/future','Future Initiatives'],['/opportunities','Opportunities'],['/impact','Impact']];
 return h('header',{class:'top'},h('div',{class:'wrap'},Link('/','L.I.G.O. SPACE','brand'),h('nav',{'aria-label':'Main'},l.map(([p,t])=>h('a',{href:'#'+p,'aria-current':cur===p?'page':null},t))),Link('/engage/partner','Partner with us','btn sm')))};
export const Footer=()=>h('footer',{},h('div',{class:'wrap'},h('h3',{},'Humanity First. Every Life Matters.'),h('p',{},'What Crowns Us: Love. From Foundation to Action.'),h('p',{},'Founder & President: Samuel M.K. \u00b7 +254 791 236 179 \u00b7 Kajiado South, Kenya'),h('p',{},'Future initiatives are shown by their actual status and are not available until legally established and authorized.')));
export const Section=(title,...c)=>h('section',{},h('div',{class:'wrap'},title&&h('h2',{},title),c));
