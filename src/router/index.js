import { createRouter, createWebHistory } from 'vue-router';
import DefaultLayout from '../layouts/DefaultLayout.vue';

// Import các view
import Dashboard from '../views/Dashboard.vue';
import Members from '../views/Members.vue';
import Packages from '../views/Packages.vue';
import Coupons from '../views/Coupons.vue';
import Settings from '../views/Settings.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/quan-tri',
      component: DefaultLayout,
      children: [
        { 
          path: '', // Để trống -> Khi vào /quan-tri sẽ load Dashboard
          name: 'Dashboard', 
          component: Dashboard 
        },
        { 
          path: 'members', // URL sẽ là: /quan-tri/members
          name: 'Members', 
          component: Members 
        },
        { 
          path: 'packages', // URL sẽ là: /quan-tri/packages
          name: 'Packages', 
          component: Packages 
        },
        { 
          path: 'coupons', // URL sẽ là: /quan-tri/coupons
          name: 'Coupons', 
          component: Coupons 
        },
        { 
          path: 'settings', // URL sẽ là: /quan-tri/settings
          name: 'Settings', 
          component: Settings 
        },
      ]
    },
    // (Tùy chọn) Chuyển hướng trang chủ về trang quản trị
    {
      path: '/',
      redirect: '/quan-tri'
    }
  ]
});

export default router;