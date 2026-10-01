// js/pages/home.js
import { h } from '../core/dom.js';
import { Section, Link, Path, Rays } from '../components/common.js';
import { SHS } from '../data/config.js';
import { Roadmap } from '../components/roadmap.js';

export const Home=()=>h('main',{},
 h('div',{class:'hero'},Rays(),h('div',{class:'wrap'},h('h1',{},'Humanity First.',h('br'),'Every Life Matters.'),h('p',{class:'crown'},'What Crowns Us: Love.'),h('p',{class:'lede'},'A human-centered institution building pathways of dignity, opportunity, connection and purposeful living.'),h('p',{},'Founded by Samuel M.K. \u00b7 Official launch: 5 December 2026'),
  h('div',{class:'row'},Link('/about','Discover L.I.G.O. SPACE','btn'),Link('/engage/partner','Partner with us','btn ghost'),Link('/engage/involve','Get involved','btn ghost'),Link('/shs','Explore our vision','btn ghost')))),
 Section('Where you fit',h('div',{class:'path'},['Who we are','What we do','What we are building','Our impact','Where you fit','How to engage'].flatMap((t,i)=>i?[h('span',{class:'arr'},'\u2192'),t]:[t])),h('div',{class:'row'},Link('/engage/partner','I represent an organization','btn'),Link('/engage/involve','I want to take part','btn ghost'),Link('/opportunities','I\u2019m looking for opportunities','btn ghost'))),
 Section('Our roots and expansion',Path('Kajiado South','Kenya','Africa','Global ecosystem')),
 Section('The Synchronized Human System\u2122',h('p',{class:'quote'},'\u201cMost people are not necessarily lost; many are simply unsynchronized.\u201d'),h('div',{class:'shs'},SHS.map(([t,d])=>h('div',{class:'card'},h('h3',{},t),h('p',{},d)))),h('p',{style:'margin-top:14px'},'A developing framework, open to academic examination, critique and refinement.')),
 Section('Ecosystem roadmap',Roadmap()),
 Section('',h('div',{class:'card'},h('h2',{},'We cannot build alone.'),h('p',{},'Bring your expertise, technology, network, resources and experience.'),Link('/engage/partner','Let\u2019s build together','btn'))));
