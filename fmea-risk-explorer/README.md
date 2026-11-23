# FMEA Risk Explorer — Nhóm 4

Ứng dụng web tương tác minh họa đề tài **Ứng dụng phương pháp FMEA trong nhận diện và phòng ngừa rủi ro vận hành kho hàng thương mại điện tử**.

## Chạy local

Mở `index.html` bằng trình duyệt hoặc dùng Live Server. Đây là static app, không cần backend hay biến môi trường.

## Nội dung

- Tổng quan quy trình kho, 13 dạng lỗi và kết quả RPN được công bố trên slide.
- Thư viện 13 Failure Modes, lọc theo Picking / Packing / Inventory.
- Mô phỏng S–O–D cho các lỗi có điểm cơ sở trong slide.
- Bản đồ giải pháp và thang điểm S–O–D.

## Lưu ý về dữ liệu

App lấy số liệu đánh giá cơ sở từ slide 8–9. Chỉ 6 lỗi I1, P1, K2, I4, P4 và I3 có đủ điểm S–O–D/RPN được công bố. 7 lỗi còn lại được hiển thị mà không tự gán điểm. Các giá trị kéo trong phần mô phỏng là kịch bản giả định, không phải kết quả cải tiến đã xác minh.

Workbook có các ô `84` dạng placeholder và bảng RPN sau cải tiến chưa có điểm hoàn chỉnh; không dùng các placeholder đó làm dữ liệu tính toán.

## Triển khai Vercel

Static deployment: Framework Preset `Other`, Build Command để trống, Output Directory `.`. Root Directory nếu triển khai từ repository gốc: `fmea-risk-explorer`.
