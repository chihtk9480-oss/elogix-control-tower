# Ghi chú nguồn dữ liệu — FMEA Risk Explorer

## Nguồn chính: slide PDF của Nhóm 4

- Slide 5: mô hình Multi-SKU Fulfillment Center tham chiếu, luồng vận hành và hệ thống OMS/WMS/PDA/Barcode.
- Slide 6: danh sách 13 Failure Modes thuộc Picking (P1–P4), Packing (K1–K4), Inventory Control & Put-away (I1–I5).
- Slide 8: công thức RPN = S × O × D và nguyên tắc chọn Top 5, đồng thời xem xét riêng lỗi có S ≥ 9.
- Slide 9: tổng RPN 3.068; Top 5 gồm I1 (336), P1 (288), K2 (288), I4 (256), P4 (252); Top 5 đóng góp 46,28%; I3 có S = 9, RPN = 243.
- Slide 10: Ishikawa 4M1E và minh họa 5 Whys cho P1.
- Slide 11–15: công nghệ/Poka-Yoke, Slotting, Cycle Counting, SOP, đào tạo, quản trị mùa cao điểm, Exception Handling, bảo hiểm và SLA.
- Slide 16–17: nguyên tắc đánh giá lại S–O–D và nhóm KPI của Dashboard.
- Slide 18–19: kết luận, giới hạn nghiên cứu và kiến nghị.

## Workbook Excel tham khảo

- `Quy_uoc_chung`: mô hình tham chiếu; phạm vi quy trình; phân biệt công nghệ hiện trạng và công nghệ đề xuất; quy tắc RPN và giới hạn dữ liệu.
- `Thang_SOD`: định nghĩa S, O, D theo thang 1–10 và mẫu số Occurrence theo nhóm lỗi.
- `Mo_hinh_kho`: mô hình Fulfillment Center dùng chung và các giả định nghiên cứu.
- `FMEA_13_loi`, `Lien_ket_Giai_phap`, `RPN_Sau_cai_tien`: nhiều trường hiện còn để `84` (placeholder) hoặc để trống; các giá trị đó không được coi là điểm số hay kết quả đã xác nhận.

## Bộ điểm cơ sở được app công bố

| Mã lỗi | S | O | D | RPN |
|---|---:|---:|---:|---:|
| I1 | 8 | 6 | 7 | 336 |
| P1 | 8 | 6 | 6 | 288 |
| K2 | 9 | 4 | 8 | 288 |
| I4 | 8 | 4 | 8 | 256 |
| P4 | 7 | 6 | 6 | 252 |
| I3 | 9 | 3 | 9 | 243 |

Các lỗi còn lại không được tự gán điểm S–O–D trong app. Tổng RPN 3.068 và tỷ trọng Top 5 46,28% được thể hiện đúng theo slide; app không tự tính lại tổng từ 6 lỗi được công bố riêng.

## Quy ước thể hiện

- RPN là chỉ số ưu tiên tương đối, không phải tổn thất bằng tiền.
- Điểm mô phỏng S/O/D chỉ là kịch bản người dùng thử nghiệm; không ghi đè điểm cơ sở và không chứng minh mức giảm rủi ro thực tế.
- Các KPI gắn theo từng lỗi và bộ lọc nhóm giải pháp là cách tổ chức nội dung slide để người dùng dễ khám phá; cần được nhóm rà soát nếu muốn dùng như ma trận liên kết chính thức.
