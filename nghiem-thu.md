# Nghiệm thu bài 1

| Mã | Việc kiểm tra | Kết quả | Bằng chứng |
|---|---|---|---|
| B1 01 | Mở /login và /tasks không lỗi | Đạt | ket-qua-login-desktop.png, ket-qua-tasks-desktop.png |
| B1 02 | So với Stitch (bố cục, màu, font) | Đạt | design/stitch và các ảnh ket-qua-* |
| B1 03 | Thêm, sửa, lọc, hoàn thành, xóa | Đạt 
| B1 04 | Tên rỗng/chỉ dấu cách báo lỗi | Đạt | nghiem-thu-b1-04-bao-loi.png |
| B1 05 | Màn hình 390 px và phím Tab | Đạt | ket-qua-tasks-mobile.png, nghiem-thu-b1-05-focus.png |
| B1 06 | Lint, typecheck, build không lỗi | Đạt | 

Ghi chú: chưa có database, chưa có đăng nhập thật, dữ liệu là tạm.

# Câu hỏi kiểm tra hiểu bài
1. Vì sao reload làm mất thay đổi?
Danh sách công việc chỉ nằm trong state của React (bộ nhớ tạm của trình duyệt). Reload thì code chạy lại từ đầu và state quay về dữ liệu mẫu. Bài 1 chưa có database hay nơi lưu lâu dài nên mọi thay đổi bị mất.

2. page.tsx khác TaskItem thế nào?
page.tsx là một trang có địa chỉ URL riêng (ví dụ /tasks). TaskItem là một component, tức mảnh giao diện nhỏ chỉ hiển thị một công việc, không có địa chỉ riêng và được trang hoặc component khác gọi tới để dùng lại.

3. Vì sao form đăng nhập chưa phải thật?
Form chỉ là giao diện mẫu: email và mật khẩu không được gửi đi hay kiểm tra với tài khoản nào, vì chưa có backend xác thực. Đăng nhập thật cần máy chủ xác thực, bài 2 sẽ dùng Supabase Auth.