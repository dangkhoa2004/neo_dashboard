<template>
  <aside class="w-64 shrink-0 flex flex-col h-full bg-neo-bg lg:bg-transparent">
    
    <div class="mb-8 flex justify-between items-start">
      <div>
        <h2 class="font-bold text-xl">Admin Portal</h2>
        <p class="text-sm text-gray-500">Quản lý hệ thống</p>
      </div>
      
      <button 
        v-if="isMobile" 
        @click="$emit('close-sidebar')"
        class="lg:hidden border-2 border-black w-8 h-8 flex items-center justify-center rounded bg-white shadow-neo-sm active:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
      >
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>

    <ul class="space-y-4 font-semibold px-2 flex-1 overflow-y-auto">
      <li v-for="(item, index) in menuItems" :key="index">
        <router-link 
           :to="item.link" 
           @click="handleItemClick"
           :class="[
             'flex items-center gap-3 px-4 py-3 transition-transform',
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

// Nhận props để biết có phải đang render dạng mobile popup không
const props = defineProps({
  isMobile: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['close-sidebar']);
const route = useRoute();

const menuItems = [
  { name: 'Tổng Quan', icon: 'fa-solid fa-table-columns', link: '/quan-tri' },
  { name: 'Thành Viên', icon: 'fa-solid fa-users', link: '/quan-tri/members' },
  { name: 'Gói Cước', icon: 'fa-solid fa-cube', link: '/quan-tri/packages' },
  { name: 'Mã Giảm Giá', icon: 'fa-solid fa-ticket', link: '/quan-tri/coupons' },
  { name: 'Cài Đặt', icon: 'fa-solid fa-gear', link: '/quan-tri/settings' },
];

const isActive = (path) => {
  if (path === '/quan-tri') {
    return route.path === '/quan-tri';
  }
  return route.path.startsWith(path);
};

// Khi click vào menu trên mobile thì đóng sidebar lại
const handleItemClick = () => {
  if (props.isMobile) {
    emit('close-sidebar');
  }
};
</script>