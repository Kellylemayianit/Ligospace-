// js/main.js
import { Header, Footer } from './components/common.js';
import { Home } from './pages/home.js';
import { About } from './pages/about.js';
import { SHSPage } from './pages/shs.js';
import { Future } from './pages/future.js';
import { Opps } from './pages/opportunities.js';
import { Impact } from './pages/impact.js';
import { Engage } from './pages/engage.js';
import { Info } from './pages/info.js';

const routes={'':[Home,'/'],about:[About,'/about'],shs:[SHSPage,'/shs'],future:[Future,'/future'],opportunities:[Opps,'/opportunities'],impact:[Impact,'/impact'],engage:[Engage,'/engage'],work:[Info('work'),'/work'],education:[Info('education'),'/education'],partners:[Info('partners'),'/partners'],stories:[Info('stories'),'/stories'],events:[Info('events'),'/events'],contact:[Info('contact'),'/contact']};
function render(){const [,seg,...rest]=(location.hash||'#/').split('/');const [Page,cur]=routes[seg||'']||routes[''];
 document.getElementById('app').replaceChildren(Header(cur),Page(rest),Footer());window.scrollTo(0,0)}
addEventListener('hashchange',render);render();
