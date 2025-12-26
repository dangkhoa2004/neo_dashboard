# Neo-Brutalism Admin Dashboard 🟢

Một giao diện quản trị (Admin Dashboard) hiện đại, đậm chất cá tính với phong cách thiết kế **Soft Neo-Brutalism** (Tân Thô Mộc). Dự án được xây dựng trên nền tảng **Vue 3** (Vite) và **Tailwind CSS**.

![Project Preview](./public/preview.png)

## ✨ Đặc điểm nổi bật

* **Phong cách Neo-Brutalism:** Sử dụng viền đen dày, đổ bóng cứng (hard shadow), màu sắc tương phản cao (Kem/Đen/Xanh lá) và typography đậm.
* **Công nghệ mới nhất:** Vue 3 (Composition API + `<script setup>`) và Vite cho tốc độ phát triển siêu nhanh.
* **Responsive Layout:** Bố cục Sidebar cố định, nội dung cuộn độc lập (Fixed Sidebar, Scrollable Main Content).
* **Tùy biến cao:** Hệ thống màu sắc và đổ bóng được cấu hình tập trung trong `tailwind.config.js`.
* **Component hóa:** Tái sử dụng code hiệu quả với các component `NeoCard`, `Sidebar`, `Header`.
* **Routing:** Cấu hình Vue Router chuẩn cho các trang quản trị (`/quan-tri`).
* **Custom Scrollbar:** Thanh cuộn được tùy biến riêng để đồng bộ với phong cách thiết kế.

## 🛠️ Công nghệ sử dụng

* [Vue.js 3](https://vuejs.org/) - Framework JavaScript chính.
* [Vite](https://vitejs.dev/) - Build tool & Server phát triển.
* [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework.
* [Vue Router 4](https://router.vuejs.org/) - Quản lý điều hướng trang.
* [FontAwesome](https://fontawesome.com/) - Bộ icon (sử dụng qua CDN).
* [Google Fonts](https://fonts.google.com/) - Font chữ "Public Sans".

## 📂 Cấu trúc dự án

```text
src/
├── api/                          # Xử lý gọi API (Axios/Fetch)
│   ├── modules/                  # API riêng cho từng tính năng
│   │   ├── auth.js               # Bổ sung: Login/Register/Logout
│   │   ├── coupons.js
│   │   ├── ...
│   ├── index.js                  # Export chung
│   └── apiClient.js              # Cấu hình Axios instance
│
├── assets/                       # Tài nguyên tĩnh
│   ├── images/
│   ├── icons/                    # vue.svg, logo...
│   └── styles/
│
├── components/                   # Các thành phần giao diện (UI)
│   ├── common/...                # Component dùng chung cho TOÀN BỘ 
│   ├── admin/...                 # Components chỉ dành cho Admin
│   └── customer/...              # Components dành cho phía Khách hàng
│
├── composables/                  # Vue Composables (Logic tái sử dụng)
│   ├── useAuth.js                # Bổ sung: Logic đăng nhập/user
│   ├── useLoader.js              # Logic loading state
│   ├── useNotification.js        # Bổ sung: Toast message
│   └── useTheme.js               # Bổ sung: Dark/Light mode
│
├── router/                       # Cấu hình định tuyến
│   ├── index.js                  # Main router config
│   └── routes.js                 # Tách danh sách routes ra cho gọn
│
├── store/                        # Quản lý State (Pinia/Vuex)
│   ├── modules/...
│   └── index.js
│
├── utils/                        # Các hàm tiện ích thuần JS
│   ├── constants.js              # Hằng số (API_URL, Roles...)
│   ├── ...
│
├── views/                        # Các trang màn hình (Pages)
│   ├── Login.vue                 # Bổ sung: Trang đăng nhập
│   ├── Dashboard.vue
│   ├── Members.vue
│   ├── Packages.vue
│   ├── Coupons.vue
│   ├── Settings.vue
│   └── NotFound.vue              # Bổ sung: Trang 404
│
├── App.vue                       # Component gốc
├── main.js                       # Entry point
└── style.css                     # Global CSS (Tailwind imports etc.)
```

## 🚀 Cài đặt và Sử dụng

Đảm bảo máy tính của bạn đã cài đặt [Node.js](https://nodejs.org/) (phiên bản 16+).

### 1. Clone dự án

```bash
git clone [https://github.com/dangkhoa2004/neo_dashboard.git](https://github.com/dangkhoa2004/neo_dashboard.git)
cd neo-dashboard

```

### 2. Cài đặt các gói phụ thuộc

```bash
npm install

```

### 3. Chạy môi trường phát triển (Dev Server)

```bash
npm run dev

```

Truy cập vào địa chỉ: `http://localhost:5173/quan-tri`

### 4. Build để triển khai (Production)

```bash
npm run build

```

## 🎨 Hướng dẫn tùy biến (Customization)

### Thay đổi màu sắc chủ đạo

Mở file `tailwind.config.js` và chỉnh sửa phần `colors`:

```javascript
colors: {
  'neo-bg': '#F7F5F0',       // Màu nền trang (Kem)
  'neo-green': '#22c55e',    // Màu nhấn chủ đạo (Xanh lá) -> Đổi thành màu bạn thích
},

```

### Thay đổi độ đổ bóng (Shadow)

Cũng trong `tailwind.config.js`, chỉnh sửa phần `boxShadow`:

```javascript
boxShadow: {
  'neo': '5px 5px 0px 0px rgba(0,0,0,1)',      // Bóng mặc định
  'neo-hover': '7px 7px 0px 0px rgba(0,0,0,1)', // Bóng khi di chuột
}

```

## 📝 Các trang hiện có

1. **/quan-tri**: Dashboard thống kê (Biểu đồ giả lập CSS, Thẻ số liệu).
2. **/quan-tri/members**: Danh sách thành viên (Table style Neo-Brutalism).
3. **/quan-tri/packages**: Gói cước dịch vụ (Grid Layout).
4. **/quan-tri/coupons**: Mã giảm giá (Thiết kế dạng vé/ticket).
5. **/quan-tri/settings**: Form cài đặt (Inputs, Checkbox custom).

## 🤝 Đóng góp

Dự án được xây dựng bởi **DangKhoa**. Mọi ý kiến đóng góp xin vui lòng tạo Issue hoặc Pull Request.

## 📄 License

MIT License.