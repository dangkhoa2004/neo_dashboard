import { createRouter, createWebHistory } from "vue-router";

// 1. Import Modules Routes
import adminRoutes from "./modules/admin-routes";
import customerRoutes from "./modules/customer-routes";
import authRoutes from "./modules/auth-routes";

// 2. Import Config Nâng cao
import { setupRouterGuards, scrollBehavior } from "./config-routes";

const router = createRouter({
  history: createWebHistory(),
  // Sử dụng cấu hình scroll từ file config
  scrollBehavior, 
  routes: [
    // --- Các Route Cấp Cao ---
    {
      path: "/trang-chu",
      name: "TrangChu",
      component: () => import("@/views/customer-perform/HomePage.vue"),
      meta: { title: "Trang chủ" },
    },
    {
      path: "/",
      redirect: "/trang-chu",
    },

    // --- Gộp các Module ---
    ...authRoutes,
    ...customerRoutes,
    ...adminRoutes,

    // --- Catch-all 404 ---
    {
      path: "/:pathMatch(.*)*",
      component: () => import("@/components/common/NeoNotFound.vue"),
      meta: { title: "Not Found | 404" },
    },
  ],
});

// 3. Kích hoạt các Guards (Logic Auth, Loading, Title...)
setupRouterGuards(router);

export default router;