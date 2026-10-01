// js/components/common.js
import { h } from '../core/dom.js';
import { STATUS } from '../data/config.js';
export const svg=s=>{const d=document.createElement('div');d.innerHTML=s;return d.firstChild};
export const Badge=s=>h('span',{class:'badge b-'+s},STATUS[s]);
export const Link=(href,text,cls='')=>h('a',{href:'#'+href,class:cls},text);
export const Path=(...a)=>h('div',{class:'path'},a.flatMap((x,i)=>i?[h('span',{class:'arr','aria-hidden':'true'},'\u2192'),x]:[x]));
export const Logo=()=>svg('<svg viewBox="0 0 48 48" width="42" height="42" aria-hidden="true"><circle cx="24" cy="24" r="22" fill="none" stroke="#14284b" stroke-width="3"/><circle cx="24" cy="15" r="5" fill="#c8892b"/><path d="M11 35q13-16 26 0" fill="none" stroke="#c8892b" stroke-width="4" stroke-linecap="round"/><path d="M24 4v4M8 14l3 2M40 14l-3 2" stroke="#c8892b" stroke-width="2.5" stroke-linecap="round"/></svg>');
export const NAV=[['/','Home'],['/about','About'],['/work','Our Work'],['/shs','Synchronized Human System'],['/education','Education'],['/opportunities','Opportunity'],['/partners','Partners'],['/stories','Stories'],['/events','Events'],['/engage/involve','Get Involved'],['/contact','Contact']];
export const Header=cur=>h('header',{class:'top'},h('div',{class:'wrap'},
 h('a',{href:'#/',class:'brand'},Logo(),h('span',{},'L.I.G.O.',h('br'),'SPACE')),
 h('nav',{'aria-label':'Main'},NAV.map(([p,t])=>h('a',{href:'#'+p,'aria-current':(p===cur||(p!=='/'&&p.startsWith(cur+'/')))?'page':null},t))),
 Link('/engage/partner','Partner with us','btn')));
export const Footer=()=>h('footer',{},h('div',{class:'wrap'},h('div',{class:'grid'},
 h('div',{},h('h3',{},'Site'),NAV.slice(0,6).map(([p,t])=>Link(p,t)),Link('/impact','Impact'),Link('/future','Future Initiatives')),
 h('div',{},h('h3',{},'Social'),['TikTok','Facebook','Instagram','YouTube','LinkedIn'].map(s=>h('p',{},s))),
 h('div',{},h('h3',{},'Contact'),h('p',{},'Samuel M.K., Founder & President'),h('p',{},'+254 791 236 179'),h('p',{},'Kajiado South, Kenya'))),
 h('p',{},'Humanity First. Every Life Matters. What Crowns Us: Love.'),
 h('p',{style:'font-size:.85rem'},'Future initiatives are shown by their actual status and are not available until legally established and authorized.')));
export const Section=(title,...c)=>h('section',{},h('div',{class:'wrap'},title&&h('h2',{},title),c));
