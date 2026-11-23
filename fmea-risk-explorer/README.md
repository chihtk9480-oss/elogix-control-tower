# FMEA Risk Explorer — Nhóm 4

Ứng dụng web tương tác, mobile-first, minh họa đề tài **Ứng dụng phương pháp FMEA trong nhận diện và phòng ngừa rủi ro vận hành kho hàng thương mại điện tử**.

## Chạy local

Mở terminal trong thư mục `fmea-risk-explorer` rồi chạy:

```bash
python -m http.server 4173
```

Truy cập `http://localhost:4173`. App là static site, không cần backend, database, API key hay biến môi trường.

## Cấu trúc chính

- `index.html`: khung giao diện và điểm nạp các module.
- `data.js`: dữ liệu 13 lỗi, thang S–O–D, quy trình và các nhóm giải pháp.
- `app-core.js`, `app-overview.js`, `app-errors.js`, `app-simulator.js`, `app-solutions.js`, `app-scale.js`: các màn hình và tương tác.
- `styles*.css`: giao diện nền, các thành phần, responsive và theme.
- `DATA-NOTES.md`: ghi chú nguồn dữ liệu và giới hạn.
- `vercel.json`: cấu hình static hosting.

## Tính năng

- Tổng quan: tổng RPN, Top 5, tỷ trọng đóng góp RPN, 6 lỗi trọng yếu và quy trình kho.
- 13 kiểu lỗi: lọc theo Picking, Packing, Inventory; tìm kiếm và xem chi tiết.
- Mô phỏng RPN: thay đổi S, O, D trên 6 lỗi có điểm cơ sở và xem RPN thay đổi trực tiếp.
- Giải pháp: lọc nhóm công nghệ, quy trình, con người; xem liên kết lỗi – hướng kiểm soát – KPI.
- Thang S–O–D: xem tiêu chí chấm 1–10 và mẫu số Occurrence theo từng nhóm lỗi.
- Responsive: thanh điều hướng bên trái trên desktop, điều hướng đáy trên điện thoại.

## Quy tắc dữ liệu và giới hạn

- Số liệu tổng RPN 3.068, Top 5, tỷ trọng 46,28% và điểm của I3 được hiển thị theo slide.
- Điểm S–O–D công bố trong slide cho 6 lỗi: I1 (8–6–7), P1 (8–6–6), K2 (9–4–8), I4 (8–4–8), P4 (7–6–6), I3 (9–3–9).
- Bảy lỗi còn lại vẫn xuất hiện trong thư viện nhưng không được tự gán điểm vì slide không công bố bộ điểm S–O–D cho chúng.
- Workbook có nhiều ô `84` là placeholder, không phải điểm đánh giá; app không dùng các ô đó để tính RPN.
- Mô phỏng chỉ là kịch bản thử nghiệm, không ghi đè điểm cơ sở và không phải kết quả cải tiến đã xác minh.
- RPN là chỉ số ưu tiên rủi ro tương đối, không phải giá trị thiệt hại bằng tiền.
- Mô hình kho là mô hình tham chiếu, không đại diện cho dữ liệu nội bộ đã xác minh của doanh nghiệp cụ thể.

## Triển khai Vercel

Import repository `chihtk9480-oss/elogix-control-tower`, chọn branch `fmea-risk-explorer`, đặt Root Directory là `fmea-risk-explorer`, Framework Preset là `Other`; Build Command để trống và Output Directory là `.`.
