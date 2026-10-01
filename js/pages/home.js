// js/pages/home.js
import { h } from '../core/dom.js';
import { Section, Link, Path } from '../components/common.js';
import { Roadmap } from '../components/roadmap.js';
import { HexDiagram, CircleDiagram, Spark } from '../components/diagrams.js';
const tile=(cls,href,title,...c)=>h('a',{class:'tile '+cls,href:'#'+href},h('h2',{},title),c);
export const Home=()=>h('main',{},
 h('div',{class:'hero'},h('div',{class:'wrap'},h('h1',{},'Humanity first. Every life matters.',h('span',{},'What crowns us: ',h('b',{style:'color:var(--gold)'},'Love.'))),
  h('p',{style:'font-size:1.15rem'},'A human-centered institution building pathways of dignity, opportunity, connection and purposeful living.'),
  h('p',{},'Founded by Samuel M.K. \u00b7 Official launch: 5 December 2026'),
  h('div',{class:'row'},Link('/about','Discover L.I.G.O. SPACE','btn'),Link('/engage/partner','Partner with us','btn ghost'),Link('/engage/involve','Get involved','btn ghost'),Link('/shs','Explore our vision','btn ghost')))),
 Section('',h('div',{class:'tiles'},
  tile('navy','/about','Who we are',h('p',{},'People often have potential without access to structure, opportunity and pathways. We help restore them.'),Spark()),
  tile('terra','/about','The challenge',h('ul',{},['Unemployment','Limited access to opportunity','Educational barriers','Youth disengagement','Lack of mentorship'].map(x=>h('li',{},x)))),
  tile('ochre','/shs','The Synchronized Human System\u2122',HexDiagram()))),
 Section('Our work',h('div',{class:'split'},
  h('div',{},h('ul',{class:'dots'},['Youth & young people','Children & vulnerable communities','Education & human development','Talent & creativity','Families & relationships','Livelihoods & employment'].map(x=>h('li',{},x))),Link('/work','See all programs','btn')),
  h('div',{class:'card'},h('h3',{style:'text-align:center'},'The L.I.G.O. Opportunity Circle'),CircleDiagram()))),
 Section('Future initiatives',h('p',{},'Our full ambition, shown honestly by what exists today, what is being built and what is still a vision.'),Roadmap(),h('div',{class:'row'},Link('/future','See every initiative','btn'))),
 h('div',{class:'band'},Section('Founder\u2019s message',h('div',{class:'row',style:'align-items:center;flex-wrap:nowrap'},h('div',{class:'avatar','aria-hidden':'true'},'S'),
  h('div',{},h('p',{class:'quote',style:'color:#fff'},'\u201cL.I.G.O. SPACE began with a simple conviction: that people should not have to face life\u2019s challenges without pathways to opportunity, dignity, connection and purpose.\u201d'),h('p',{},'Samuel M.K., Founder & President'))),
  h('h3',{style:'margin-top:24px'},'Our story'),Path('Vision','Community','L.I.G.O. SPACE','Human development','Synchronized Human System','Partnerships','Digital ecosystem','Future institutions'))),
 Section('Upcoming events',h('div',{class:'grid'},h('div',{class:'card'},h('h3',{},'Official launch'),h('p',{},'5 December 2026. Community, leadership, academia, partners and young people.'),h('div',{class:'row'},Link('/events','Event details','btn sm'),Link('/engage/involve','Register interest','btn ghost sm'))),h('div',{class:'photo'},'Photos and gallery will appear here'))),
 Section('Impact stories',h('div',{class:'grid'},[1,2,3].map(()=>h('div',{},h('div',{class:'photo'},'Story coming soon'),h('p',{style:'margin-top:8px;color:var(--mute)'},'Shared only with consent, with dignity.')))),h('div',{class:'row'},Link('/impact','See the impact baseline','btn ghost'))));
