function renderOverview(){
 const top=[...riskData.filter(r=>r.priority)].sort((a,b)=>b.rpn-a.rpn).slice(0,5);
 return `${pageHead('BẢNG ĐIỀU KHIỂN · NHÓM 4','Nhìn thấy rủi ro.<br><span class="accent">Chủ động kiểm soát.</span>','Khám phá các điểm lỗi trong quy trình hoàn tất đơn hàng thương mại điện tử.','MULTI-SKU FULFILLMENT CENTER')}
 <section class="hero-panel"><div class="hero-copy"><div class="hero-kicker"><span></span> FMEA · WAREHOUSE RISK CONTROL</div><h2 class="hero-title">Một quy trình.<br><em>13 điểm có thể sai.</em></h2><p class="hero-desc">Từ nhặt hàng đến kiểm soát tồn kho — nhận diện lỗi, đọc mức độ ưu tiên và xem cách phòng ngừa trên cùng một màn hình.</p></div><div class="hero-visual"><div class="hero-grid">${Array.from({length:15},()=>'<span></span>').join('')}</div><div class="hero-score"><small>TỔNG RPN</small><strong>3.068</strong></div></div></section>
 <section class="stats-grid">
  <article class="stat-card"><div class="stat-top">Tổng điểm RPN <span class="stat-icon">${icon('chart')}</span></div><div class="stat-value">3.068<span>điểm</span></div><div class="stat-foot">Theo kết quả trên slide</div></article>
  <article class="stat-card"><div class="stat-top">Kiểu lỗi nhận diện <span class="stat-icon">${icon('layers')}</span></div><div class="stat-value">13<span>lỗi</span></div><div class="stat-foot">Picking · Packing · Inventory</div></article>
  <article class="stat-card"><div class="stat-top">Lỗi trọng yếu <span class="stat-icon">${icon('target')}</span></div><div class="stat-value">06<span>lỗi</span></div><div class="stat-foot">Top 5 RPN + I3 có S = 9</div></article>
 </section>
 <div class="overview-grid">
  <section class="panel rank-panel"><div class="panel-head"><div><h3 class="panel-title">Top 5 RPN cao nhất</h3><div class="panel-meta">Xếp hạng theo điểm RPN trong slide 9</div></div><button class="text-button" data-nav="errors">Tất cả lỗi ↗</button></div>
  <div class="rank-list">${top.map((r,i)=>`<button class="rank-row" data-risk="${r.code}"><span class="rank-no">${i+1}</span><span class="rank-main"><b class="rank-code">${r.code}</b><span class="rank-name">${r.title}</span></span><span class="rank-track"><span class="rank-fill ${i===0?'':i===1||i===2?'coral':i===3?'amber':''}" style="width:${r.rpn/336*100}%"></span></span><b class="rank-value">${r.rpn}</b></button>`).join('')}</div>
  <div class="rank-i3"><div><strong>I3 · Thất thoát hoặc mất cắp nội bộ</strong><span> Bổ sung do Severity = 9</span></div><b>243 RPN</b></div>
  <div class="contribution"><div class="donut"><strong>46,28%</strong></div><div class="contribution-copy"><strong>Đóng góp RPN của Top 5</strong><small>Tỷ trọng trên tổng RPN 3.068 — không phải tỷ lệ số lần lỗi hay thiệt hại tiền.</small></div></div>
  </section>
  <section class="panel"><div class="panel-head"><div><h3 class="panel-title">Phạm vi phân tích</h3><div class="panel-meta">3 cụm công đoạn trọng tâm</div></div></div>
   <div class="stage-summary"><div class="stage-line"><div class="stage-symbol">P</div><div><strong>Picking</strong><small>Nhặt hàng</small></div><b>04</b></div><div class="stage-line"><div class="stage-symbol amber">K</div><div><strong>Packing</strong><small>Đóng gói</small></div><b>04</b></div><div class="stage-line"><div class="stage-symbol blue">I</div><div><strong>Inventory Control</strong><small>Kiểm soát tồn kho & Put-away</small></div><b>05</b></div></div>
   <div class="mini-callout"><span>${icon('alert')}</span><div><strong>Quy tắc ưu tiên</strong><small>Top 5 RPN và mọi lỗi có S ≥ 9 đều được xem xét.</small></div></div>
  </section>
 </div>
 <section class="panel process-panel"><div class="panel-head"><div><h3 class="panel-title">Hành trình của một đơn hàng</h3><div class="panel-meta">Chọn công đoạn để lọc các lỗi liên quan</div></div><span class="section-label">PROCESS FLOW</span></div>
  <div class="process-flow">${processes.map((p,i)=>{const stage=({2:'Inventory',3:'Inventory',5:'Picking',7:'Packing'})[i];return stage?`<button class="process-step process-step-scope" data-stage="${stage}">${icon(p[1])}<span>${p[0]}</span></button>`:`<div class="process-step process-step-muted">${icon(p[1])}<span>${p[0]}</span></div>`}).join('')}</div>
  <div class="process-note"><b>Inventory Control</b><span>được thực hiện xuyên suốt quy trình vận hành.</span></div>
  <div class="systems-row"><div class="system-chip"><b>OMS</b><span>Quản lý đơn hàng</span></div><div class="system-chip"><b>WMS</b><span>Tồn kho & vị trí</span></div><div class="system-chip"><b>PDA / Barcode</b><span>Quét & xác nhận</span></div><div class="system-chip"><b>Cân / Camera</b><span>Kiểm tra & truy xuất</span></div></div>
 </section>
 <div class="source-note"><span class="source-dot"></span><span>Mô hình tham chiếu — không phải dữ liệu nội bộ đã xác minh của một doanh nghiệp cụ thể.</span></div>`;
}
