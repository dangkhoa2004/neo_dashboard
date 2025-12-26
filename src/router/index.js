import { createRouter, createWebHistory } from 'vue-router';
import { useUIStore } from '@/store/ui';
import DefaultLayout from '@/components/admin-components/layouts/DefaultLayout.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/quan-tri',
      component: DefaultLayout,
      children: [
        { 
          path: '', 
          name: 'Dashboard', 
          component: () => import('@/views/Dashboard.vue'),
          meta: { title: 'Tổng quan' } 
        },
        { 
          path: 'members', 
          name: 'Members', 
          component: () => import('@/views/Members.vue'),
          meta: { title: 'Quản lý thành viên' }
        },
        { 
          path: 'packages', 
          name: 'Packages', 
          component: () => import('@/views/Packages.vue'),
          meta: { title: 'Gói dịch vụ' }
        },
        { 
          path: 'coupons', 
          name: 'Coupons', 
          component: () => import('@/views/Coupons.vue'),
          meta: { title: 'Mã giảm giá' }
        },
        { 
          path: 'settings', 
          name: 'Settings', 
          component: () => import('@/views/Settings.vue'),
          meta: { title: 'Cài đặt' }
        },
      ]
    },
    {
      path: '/',
      redirect: '/quan-tri'
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/quan-tri'
    }
  ]
});

router.beforeEach((to, from, next) => {
  const uiStore = useUIStore();
  uiStore.startLoading('Chờ một xíu he...');
  document.title = to.meta.title ? `${to.meta.title} - Admin` : 'Admin Dashboard';
  next();
});

router.afterEach(() => {
  const uiStore = useUIStore();
  setTimeout(() => {
    uiStore.stopLoading();
  }, 800);
});

export default router;