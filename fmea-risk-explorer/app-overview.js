function renderOverview(){
 const top=topRisks();
 const extras=[...priorityCodes()].filter(code=>!top.some(r=>r.code===code)).map(findRisk);
 const assessed=scoredCount();
 const total=riskData.every(r=>currentScore(r))?riskData.reduce((sum,r)=>sum+currentRpn(r),0):3068;
 return `${pageHead('WAREHOUSE RISK CONTROL','Nhìn thấy rủi ro.<br><span class="accent">Chủ động kiểm soát.</span>','Theo dõi lỗi vận hành, đánh giá mức độ ưu tiên và chọn giải pháp phù hợp.','MULTI-SKU FULFILLMENT CENTER')}
 <section class="hero-panel"><div class="hero-copy"><div class="hero-kicker"><span></span> FMEA · RISK MANAGEMENT</div><h2 class="hero-title">Một quy trình.<br><em>13 điểm cần kiểm soát.</em></h2><p class="hero-desc">Từ nhặt hàng đến kiểm soát tồn kho — khám phá rủi ro và giải pháp trên cùng một màn hình.</p></div><div class="hero-visual"><div class="hero-grid">${Array.from({length:15},()=>'<span></span>').join('')}</div><div class="hero-score"><small>TỔNG RPN</small><strong>${total.toLocaleString('vi-VN')}</strong></div></div></section>
 <section class="stats-grid">
  <article class="stat-card"><div class="stat-top">Tổng điểm RPN <span class="stat-icon">${icon('chart')}</span></div><div class="stat-value">${total.toLocaleString('vi-VN')}<span>điểm</span></div><div class="stat-foot">Chỉ số ưu tiên rủi ro</div></article>
  <article class="stat-card"><div class="stat-top">Kiểu lỗi <span class="stat-icon">${icon('layers')}</span></div><div class="stat-value">13<span>lỗi</span></div><div class="stat-foot">Picking · Packing · Inventory</div></article>
  <article class="stat-card"><div class="stat-top">Đã chấm điểm <span class="stat-icon">${icon('check')}</span></div><div class="stat-value">${assessed}<span>/13</span></div><div class="stat-foot">Tiến độ đánh giá S–O–D</div></article>
 </section>
 <div class="overview-grid">
  <section class="panel rank-panel"><div class="panel-head"><div><h3 class="panel-title">Rủi ro ưu tiên</h3><div class="panel-meta">Xếp hạng theo RPN hiện tại</div></div><button class="text-button" data-nav="errors">Tất cả lỗi ↗</button></div>
  <div class="rank-list">${top.map((r,i)=>`<button class="rank-row" data-risk="${r.code}"><span class="rank-no">${i+1}</span><span class="rank-main"><b class="rank-code">${r.code}</b><span class="rank-name">${r.title}</span></span><span class="rank-track"><span class="rank-fill ${i===0?'':i===1||i===2?'coral':i===3?'amber':''}" style="width:${currentRpn(r)/Math.max(...top.map(x=>currentRpn(x)))*100}%"></span></span><b class="rank-value">${currentRpn(r)}</b></button>`).join('')}</div>
  ${extras.length?`<div class="extra-priority"><span>Ưu tiên bổ sung</span>${extras.map(r=>`<button data-risk="${r.code}"><b>${r.code}</b><span>${r.title}</span><strong>${currentRpn(r)}</strong></button>`).join('')}</div>`:''}
  <div class="priority-rule"><span>${icon('target')}</span><div><strong>Nguyên tắc ưu tiên</strong><small>Top 5 RPN và mọi lỗi có Severity từ 9 trở lên.</small></div></div>
  </section>
  <section class="panel"><div class="panel-head"><div><h3 class="panel-title">Theo công đoạn</h3><div class="panel-meta">Chọn để khám phá các lỗi liên quan</div></div></div>
   <div class="stage-summary"><button class="stage-line" data-stage="Picking"><div class="stage-symbol">P</div><div><strong>Picking</strong><small>Nhặt hàng</small></div><b>04 <span>↗</span></b></button><button class="stage-line" data-stage="Packing"><div class="stage-symbol amber">K</div><div><strong>Packing</strong><small>Đóng gói</small></div><b>04 <span>↗</span></b></button><button class="stage-line" data-stage="Inventory"><div class="stage-symbol blue">I</div><div><strong>Inventory Control</strong><small>Kiểm soát tồn kho & Put-away</small></div><b>05 <span>↗</span></b></button></div>
   <div class="mini-callout"><span>${icon('alert')}</span><div><strong>Đừng bỏ qua lỗi nghiêm trọng</strong><small>Mọi lỗi có Severity từ 9 trở lên đều cần được xem xét riêng.</small></div></div>
  </section>
 </div>
 <section class="panel process-panel"><div class="panel-head"><div><h3 class="panel-title">Hành trình của một đơn hàng</h3><div class="panel-meta">Chọn công đoạn trọng tâm để xem rủi ro</div></div><span class="section-label">PROCESS FLOW</span></div>
  <div class="process-flow">${processes.map((p,i)=>{const stage=({2:'Inventory',3:'Inventory',5:'Picking',7:'Packing'})[i];return stage?`<button class="process-step process-step-scope" data-stage="${stage}">${icon(p[1])}<span>${p[0]}</span></button>`:`<div class="process-step process-step-muted">${icon(p[1])}<span>${p[0]}</span></div>`}).join('')}</div>
  <div class="process-note"><b>Inventory Control</b><span>được kiểm soát xuyên suốt quy trình.</span></div>
  <div class="systems-row"><div class="system-chip"><b>OMS</b><span>Đơn hàng</span></div><div class="system-chip"><b>WMS</b><span>Tồn kho & vị trí</span></div><div class="system-chip"><b>PDA / Barcode</b><span>Quét & xác nhận</span></div><div class="system-chip"><b>Cân / Camera</b><span>Kiểm tra & truy xuất</span></div></div>
 </section>`;
}
