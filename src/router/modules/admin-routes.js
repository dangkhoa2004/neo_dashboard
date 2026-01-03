// admin-routes.js
import DefaultLayout from '@/components/admin-components/layouts/DefaultLayout.vue';

const adminRoutes = [
  {
    path: '/quan-tri',
    component: DefaultLayout,
    meta: { 
      requiresAuth: true,
      title: 'Quản trị hệ thống' 
    },
    children: [
      { 
        path: '', 
        name: 'Dashboard', 
        component: () => import('@/views/admin-portal/Dashboard.vue'),
        meta: { title: 'Tổng quan' } 
      },
      { 
        path: 'members', 
        name: 'Members', 
        component: () => import('@/views/admin-portal/Members.vue'),
        meta: { title: 'Quản lý thành viên' }
      },
      { 
        path: 'packages', 
        name: 'Packages', 
        component: () => import('@/views/admin-portal/Packages.vue'),
        meta: { title: 'Gói dịch vụ' }
      },
      { 
        path: 'coupons', 
        name: 'Coupons', 
        component: () => import('@/views/admin-portal/Coupons.vue'),
        meta: { title: 'Mã giảm giá' }
      },
      { 
        path: 'settings', 
        name: 'Settings', 
        component: () => import('@/views/admin-portal/Settings.vue'),
        meta: { title: 'Cài đặt' }
      },
    ]
  }
];

export default adminRoutes;