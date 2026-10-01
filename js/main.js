// js/main.js
import { Header, Footer } from './components/common.js';
import { Home } from './pages/home.js';
import { About } from './pages/about.js';
import { SHSPage } from './pages/shs.js';
import { Future } from './pages/future.js';
import { Opps } from './pages/opportunities.js';
import { Impact } from './pages/impact.js';
import { Engage } from './pages/engage.js';

const routes={'':[Home,'/'],about:[About,'/about'],shs:[SHSPage,'/shs'],future:[Future,'/future'],opportunities:[Opps,'/opportunities'],impact:[Impact,'/impact'],engage:[Engage,'/engage']};
function render(){const [,seg,...rest]=(location.hash||'#/').split('/');const [Page,cur]=routes[seg||'']||routes[''];
 document.getElementById('app').replaceChildren(Header(cur),Page(rest),Footer());window.scrollTo(0,0)}
addEventListener('hashchange',render);render();
