<template>
  <aside class="w-64 shrink-0 flex flex-col">
    <div class="mb-8">
      <h2 class="font-bold text-xl">Admin Portal</h2>
      <p class="text-sm text-gray-500">Quản lý hệ thống</p>
    </div>

    <ul class="space-y-4 font-semibold flex-1">
      <li v-for="(item, index) in menuItems" :key="index">
        <router-link 
           :to="item.link" 
           :class="[
             'flex items-center gap-3 px-4 py-3 transition-transform',
             // Logic Active: Nếu isActive trả về true thì hiển thị style Neo-Brutalism
             isActive(item.link) 
               ? 'bg-white border-2 border-black rounded-xl shadow-neo' 
               : 'hover:translate-x-1'
           ]">
          
          <i :class="[item.icon, isActive(item.link) ? '' : 'text-gray-500']"></i>
          
          {{ item.name }}
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<script setup>
import { useRoute } from 'vue-router';

// Lấy thông tin route hiện tại để so sánh
const route = useRoute();

// Danh sách menu với đường dẫn chuẩn
const menuItems = [
  { name: 'Tổng Quan', icon: 'fa-solid fa-table-columns', link: '/quan-tri' },
  { name: 'Thành Viên', icon: 'fa-solid fa-users', link: '/quan-tri/members' },
  { name: 'Gói Cước', icon: 'fa-solid fa-cube', link: '/quan-tri/packages' },
  { name: 'Mã Giảm Giá', icon: 'fa-solid fa-ticket', link: '/quan-tri/coupons' },
  { name: 'Cài Đặt', icon: 'fa-solid fa-gear', link: '/quan-tri/settings' },
];

// Hàm kiểm tra xem mục menu có đang được chọn hay không
const isActive = (path) => {
  // Trường hợp đặc biệt: Trang Dashboard (Trang chủ của admin)
  if (path === '/quan-tri') {
    return route.path === '/quan-tri';
  }
  // Các trang con: Chỉ cần URL bắt đầu bằng path của menu là được active
  // Ví dụ: Đang ở /quan-tri/members/edit vẫn sáng đèn menu 'Thành Viên'
  return route.path.startsWith(path);
};
</script>