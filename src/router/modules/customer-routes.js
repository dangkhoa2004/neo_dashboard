// customer-routes.js
const customerRoutes = [
  {
    path: '/thong-tin',
    name: 'Information',
    // Giả sử bạn sẽ tạo file Info.vue, tạm thời dùng test.vue nếu chưa có
    component: () => import('@/views/customer-perform/test.vue'), 
    meta: { title: 'Thông tin' }
  },
  {
    path: '/khach-hang',
    name: 'CustomerPage',
    component: () => import('@/views/customer-perform/test.vue'),
    meta: { title: 'Khách hàng' }
  }
];

export default customerRoutes;