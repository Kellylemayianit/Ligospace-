// js/data/api.js
import { disk } from '../core/dom.js';

export const api={
  saveSubmission(rec){const all=disk.get('submissions',[]);all.push({...rec,at:new Date().toISOString()});disk.set('submissions',all);return Promise.resolve({ok:true})},
  impact:()=>disk.get('impact',null),
  saveImpact:v=>disk.set('impact',v)
};
