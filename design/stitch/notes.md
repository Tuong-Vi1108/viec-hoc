# Ghi chú thiết kế - Việc học của tôi

## Quy tắc chung
- Font: Be Vietnam Pro (hỗ trợ tiếng Việt), các cỡ chữ đậm 400/500/600/700
- Màu chính: xanh dương đậm #0050CB (nút chính, checkbox, liên kết, tab đang chọn)
- Nền trang: #F8F9FF; thẻ và form: nền trắng, bo góc lớn, bóng đổ nhẹ
- Nền xanh nhạt (nút Sửa, ô nhập, checkbox trống): #DCE6FF
- Nhãn học kỳ / môn: nền xanh ngọc nhạt #7BEFDD, chữ xanh lá đậm #006B5E
- Nút Xóa, Đăng xuất: chữ đỏ #BA1A1A, nền đỏ rất nhạt
- Chữ chính: #191C20
- Mọi màn hình phải co lại tốt ở 390 px, không tràn ngang
- Nút và ô nhập dùng được bằng bàn phím, có khung focus rõ

## Ảnh tham chiếu
- login-desktop.png: /login bản máy tính
- login-mobile.png: /login bản điện thoại
- tasks-desktop.png: /tasks bản máy tính
- tasks-mobile.png: /tasks bản điện thoại

## Trang /login
### Desktop (login-desktop.png)
- Chia 2 cột. Trái: logo, tiêu đề "Chào mừng bạn quay lại Việc học của tôi!", đoạn giới thiệu, 3 thẻ tính năng, câu trích dẫn. Phải: thẻ trắng chứa form
- Form: nhãn "Đăng nhập tài khoản", ô Email học tập (placeholder vidu@hocsinh.edu.vn), ô Mật khẩu có nút hiện/ẩn, ô "Ghi nhớ đăng nhập", liên kết "Quên mật khẩu?", nút xanh "Đăng nhập"
- Chân trang: bản quyền và hai liên kết nhỏ
### Mobile (login-mobile.png)
- 1 cột, canh giữa: vòng tròn biểu tượng sách, nhãn "Việc học của tôi", tiêu đề "Chào mừng bạn trở lại!", dòng phụ, rồi thẻ form
- Ẩn cột trái giới thiệu tính năng
- Dòng bảo mật nhỏ bên dưới form
### Bài 1
- Form chỉ là giao diện mẫu: không lưu, không gửi mật khẩu, không giả vờ đăng nhập
- Có liên kết "Xem giao diện công việc" dẫn đến /tasks
- Không làm: nút "Tài khoản trường", "Mã định danh", "Đăng ký lớp học" (không thuộc bài 1)

## Trang /tasks
### Desktop (tasks-desktop.png)
- Thanh trên cùng: logo, menu (Bài học, Luyện tập, Sổ từ vựng, Ngữ pháp), tên người dùng, nút Đăng xuất
- Thẻ tiêu đề: "Danh sách công việc học tập hôm nay", hiển thị ngày
- Thẻ thao tác: ô nhập tên công việc, nút xanh "Thêm công việc"
- Tab lọc: Tất cả / Chưa xong / Đã xong, mỗi tab kèm số lượng; bên phải ghi "Đã hoàn thành 2/5 mục"
- Mỗi công việc: checkbox, tên, nhãn môn và ghi chú nhỏ, nút Sửa, nút Xóa
- Công việc đã xong: dấu tích xanh, chữ gạch ngang và mờ
- Có trạng thái: danh sách rỗng, đang tải, lỗi kèm nút "Thử lại"
### Mobile (tasks-mobile.png)
- 1 cột: tiêu đề "Kế hoạch hôm nay", ô nhập, nút "Thêm công việc" rộng hết chiều ngang
- Tab lọc nằm trên danh sách, nút Sửa/Xóa nằm dưới tên công việc
- Khối thông tin người dùng và nút Đăng xuất ở cuối trang
