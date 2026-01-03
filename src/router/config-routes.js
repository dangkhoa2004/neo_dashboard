// config-routes.js
import { useUIStore } from "@/store/ui";

/**
 * Cấu hình hành vi cuộn trang (Scroll Behavior)
 * Giúp trang luôn cuộn lên đầu khi chuyển route
 */
export const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition;
  } else {
    return { top: 0, behavior: 'smooth' };
  }
};

/**
 * Cấu hình các Navigation Guards (Middleware)
 * @param {Router} router - Instance của Vue Router
 */
export const setupRouterGuards = (router) => {
  
  // --- BEFORE EACH ---
  router.beforeEach((to, from, next) => {
    const uiStore = useUIStore();

    // 1. Bật Loading
    uiStore.startLoading("Đang tải dữ liệu...");

    // 2. Cập nhật Title
    const defaultTitle = "Neo Dashboard";
    document.title = to.meta.title ? `${to.meta.title} - ${defaultTitle}` : defaultTitle;

    // 3. LOGIC AUTH (Kiểm tra quyền truy cập)
    const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
    const token = localStorage.getItem("access_token");

    if (requiresAuth && !token) {
      // Cần Auth nhưng chưa có Token -> Đá về đăng nhập
      // Lưu lại redirect để sau khi login xong quay lại đúng trang đó
      next({ name: "DangNhap", query: { redirect: to.fullPath } });
    } else if (token && to.name === 'DangNhap') {
      // Đã có Token mà cố vào trang Đăng nhập -> Đá về trang chủ hoặc Dashboard
      next({ path: '/' });
    } else {
      // Hợp lệ -> Cho qua
      next();
    }
  });

  // --- AFTER EACH ---
  router.afterEach(() => {
    const uiStore = useUIStore();
    // Tắt loading nhẹ nhàng
    setTimeout(() => {
      uiStore.stopLoading();
    }, 300); // Tăng delay xíu cho mượt
  });
};