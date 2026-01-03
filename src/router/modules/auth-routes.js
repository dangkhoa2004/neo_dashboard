// auth-routes.js
const authRoutes = [
  {
    path: "/dang-nhap",
    name: "DangNhap",
    component: () => import("@/views/customer-perform/Sign-In.vue"),
    meta: { title: "Đăng nhập" },
  },
  {
    path: "/dang-ky",
    name: "DangKy",
    component: () => import("@/views/customer-perform/Sign-Up.vue"),
    meta: { title: "Đăng Ký" },
  },
  {
    path: "/quen-mat-khau",
    name: "QuenMatKhau",
    component: () => import("@/views/customer-perform/ForgotPassword.vue"),
    meta: { title: "Quên mật khẩu" },
  },
];

export default authRoutes;
