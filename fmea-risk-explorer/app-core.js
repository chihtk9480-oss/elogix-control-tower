const SCORE_STORAGE_KEY='fmea-risk-explorer-score-overrides-v1';
function readScoreOverrides(){try{return JSON.parse(localStorage.getItem(SCORE_STORAGE_KEY)||'{}')}catch{return {}}}
let scoreOverrides=readScoreOverrides();
function persistScoreOverrides(){try{localStorage.setItem(SCORE_STORAGE_KEY,JSON.stringify(scoreOverrides))}catch{}}
function currentScore(r){return scoreOverrides[r.code]||r.scores||null}
function currentRpn(r){const s=currentScore(r);return s?s.s*s.o*s.d:null}
function scoredRisks(){return riskData.filter(r=>currentScore(r))}
function scoredCount(){return scoredRisks().length}
function topRisks(){return [...scoredRisks()].sort((a,b)=>currentRpn(b)-currentRpn(a)).slice(0,5)}
function priorityCodes(){const scored=scoredRisks();return new Set([...topRisks().map(r=>r.code),...scored.filter(r=>currentScore(r).s>=9).map(r=>r.code)])}
function isPriority(r){return priorityCodes().has(r.code)}
function isUserScored(r){return Boolean(scoreOverrides[r.code])}
function icon(name){return `<svg viewBox="0 0 24 24" aria-hidden="true">${icons[name]||icons.grid}</svg>`}
document.querySelectorAll('[data-icon]').forEach(el=>el.innerHTML=icon(el.dataset.icon));
let state={page:'overview',stage:'all',search:'',scale:'s',solutionFilter:'all',simRisk:'K2',sim:{...currentScore(riskData.find(r=>r.code==='K2'))}};
const screen=document.getElementById('screen');
const titles={overview:'Tổng quan',errors:'13 kiểu lỗi',simulator:'Mô phỏng RPN',solutions:'Giải pháp',scale:'Thang S–O–D'};
function syncNavigation(){document.getElementById('crumb-title').textContent=titles[state.page];document.querySelectorAll('[data-nav]').forEach(b=>b.classList.toggle('active',b.dataset.nav===state.page))}
function refreshSimulatorSelection(){let selected=findRisk(state.simRisk);if(!currentScore(selected)){selected=scoredRisks()[0]||findRisk('K2');state.simRisk=selected.code}state.sim={...currentScore(selected)}}
function nav(page){if(page==='simulator')refreshSimulatorSelection();state.page=page;syncNavigation();render()}
function showToast(message){let el=document.getElementById('app-toast');if(!el){el=document.createElement('div');el.id='app-toast';el.className='app-toast';document.body.appendChild(el)}el.textContent=message;el.classList.add('show');clearTimeout(showToast.timer);showToast.timer=setTimeout(()=>el.classList.remove('show'),2200)}
function saveRiskScore(code,values){scoreOverrides[code]=values;persistScoreOverrides();if(state.simRisk===code)refreshSimulatorSelection();render();openRisk(code);showToast('Đã lưu đánh giá '+code)}
function resetRiskScore(code){delete scoreOverrides[code];persistScoreOverrides();if(state.simRisk===code)refreshSimulatorSelection();render();openRisk(code);showToast('Đã khôi phục điểm ban đầu')}
document.addEventListener('click',e=>{
 const n=e.target.closest('[data-nav]');if(n){nav(n.dataset.nav);return}
 const stage=e.target.closest('[data-stage]');if(stage){state.stage=stage.dataset.stage;state.search='';state.page='errors';syncNavigation();render();return}
 const risk=e.target.closest('[data-risk]');if(risk){openRisk(risk.dataset.risk);return}
 const tab=e.target.closest('[data-scale]');if(tab){state.scale=tab.dataset.scale;renderScale();return}
 const solutionTab=e.target.closest('[data-solution-filter]');if(solutionTab){state.solutionFilter=solutionTab.dataset.solutionFilter;renderSolutionFilters();return}
 const act=e.target.closest('[data-action]');if(act){if(act.dataset.action==='close')closeModal();if(act.dataset.action==='about')openAbout();if(act.dataset.action==='reset-sim')resetSim();return}
 const reset=e.target.closest('[data-reset-score]');if(reset){resetRiskScore(reset.dataset.resetScore);return}
});
document.addEventListener('submit',e=>{
 const form=e.target.closest('[data-score-form]');if(!form)return;
 e.preventDefault();
 const values={s:Number(form.elements.s.value),o:Number(form.elements.o.value),d:Number(form.elements.d.value)};
 const feedback=form.querySelector('.form-feedback');
 if(Object.values(values).some(v=>!Number.isInteger(v)||v<1||v>10)){if(feedback)feedback.textContent='Chọn đủ cả ba mức điểm để lưu.';return}
 saveRiskScore(form.dataset.scoreForm,values);
});
document.addEventListener('input',e=>{
 if(e.target.id==='risk-search'){state.search=e.target.value;renderErrors()}
 if(e.target.matches('[data-slider]')){const k=e.target.dataset.slider;state.sim[k]=Number(e.target.value);updateSimReadout()}
});
document.addEventListener('change',e=>{
 if(e.target.id==='sim-risk-select'){state.simRisk=e.target.value;state.sim={...currentScore(findRisk(state.simRisk))};renderSimulator()}
});
function findRisk(code){return riskData.find(r=>r.code===code)}
function pageHead(eyebrow,title,subtitle,tag=''){return `<div class="page-head"><div><div class="eyebrow">${eyebrow}</div><h1 class="page-title">${title}</h1>${subtitle?`<p class="page-subtitle">${subtitle}</p>`:''}</div>${tag?`<span class="model-tag">${tag}</span>`:''}</div>`}
function render(){document.title=`${titles[state.page]} · FMEA Risk Explorer`;syncNavigation();if(state.page==='overview')screen.innerHTML=renderOverview();if(state.page==='errors')screen.innerHTML=renderErrorsHTML();if(state.page==='simulator')screen.innerHTML=renderSimulatorHTML();if(state.page==='solutions')screen.innerHTML=renderSolutions();if(state.page==='scale')screen.innerHTML=renderScaleHTML()}
