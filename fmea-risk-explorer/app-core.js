function icon(name){return `<svg viewBox="0 0 24 24" aria-hidden="true">${icons[name]||icons.grid}</svg>`}
document.querySelectorAll('[data-icon]').forEach(el=>el.innerHTML=icon(el.dataset.icon));
let state={page:'overview',stage:'all',search:'',scale:'s',solutionFilter:'all',simRisk:'K2',sim:{s:9,o:4,d:8}};
const screen=document.getElementById('screen');
const titles={overview:'Tổng quan',errors:'13 kiểu lỗi',simulator:'Mô phỏng RPN',solutions:'Giải pháp',scale:'Thang S–O–D'};
function syncNavigation(){document.getElementById('crumb-title').textContent=titles[state.page];document.querySelectorAll('[data-nav]').forEach(b=>b.classList.toggle('active',b.dataset.nav===state.page))}
function nav(page){state.page=page;syncNavigation();render()}
document.addEventListener('click',e=>{
 const n=e.target.closest('[data-nav]');if(n){nav(n.dataset.nav);return}
 const stage=e.target.closest('[data-stage]');if(stage){state.stage=stage.dataset.stage;state.search='';state.page='errors';syncNavigation();render();return}
 const risk=e.target.closest('[data-risk]');if(risk){openRisk(risk.dataset.risk);return}
 const tab=e.target.closest('[data-scale]');if(tab){state.scale=tab.dataset.scale;renderScale();return}
 const solutionTab=e.target.closest('[data-solution-filter]');if(solutionTab){state.solutionFilter=solutionTab.dataset.solutionFilter;renderSolutionFilters();return}
 const act=e.target.closest('[data-action]');if(act){if(act.dataset.action==='close')closeModal();if(act.dataset.action==='about')openAbout();if(act.dataset.action==='reset-sim')resetSim();return}
 const sr=e.target.closest('[data-sim-risk]');if(sr){state.simRisk=sr.dataset.simRisk;const r=findRisk(state.simRisk);state.sim={...r.scores};renderSimulator();return}
});
document.addEventListener('input',e=>{
 if(e.target.id==='risk-search'){state.search=e.target.value;renderErrors()}
 if(e.target.matches('[data-slider]')){const k=e.target.dataset.slider;state.sim[k]=Number(e.target.value);updateSimReadout()}
});
document.addEventListener('change',e=>{
 if(e.target.id==='sim-risk-select'){state.simRisk=e.target.value;state.sim={...findRisk(state.simRisk).scores};renderSimulator()}
});
function findRisk(code){return riskData.find(r=>r.code===code)}
function pageHead(eyebrow,title,subtitle,tag=''){return `<div class="page-head"><div><div class="eyebrow">${eyebrow}</div><h1 class="page-title">${title}</h1>${subtitle?`<p class="page-subtitle">${subtitle}</p>`:''}</div>${tag?`<span class="model-tag">${tag}</span>`:''}</div>`}
function render(){document.title=`${titles[state.page]} · FMEA Risk Explorer`;syncNavigation();if(state.page==='overview')screen.innerHTML=renderOverview();if(state.page==='errors')screen.innerHTML=renderErrorsHTML();if(state.page==='simulator')screen.innerHTML=renderSimulatorHTML();if(state.page==='solutions')screen.innerHTML=renderSolutions();if(state.page==='scale')screen.innerHTML=renderScaleHTML()}
