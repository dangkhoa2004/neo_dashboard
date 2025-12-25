<template>
  <div>
    <div class="mb-8">
      <h1 class="text-4xl font-black mb-1 flex items-center gap-2">
        <span class="text-3xl">$</span> Dashboard
      </h1>
      <p class="text-gray-600">Tổng quan hoạt động của hệ thống. Xin chào, Admin User 👋</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
      <NeoCard v-for="(stat, index) in stats" :key="index" class="p-5 flex flex-col justify-between h-40">
        <div class="flex justify-between items-start">
          <span class="text-xs font-bold uppercase text-gray-500">{{ stat.title }}</span>
          <i :class="stat.icon"></i>
        </div>
        <div>
          <div :class="[stat.isGreen ? 'text-neo-green' : 'text-black', 'text-2xl font-black']">{{ stat.value }}</div>
          <div class="text-xs font-bold mt-1">{{ stat.desc }}</div>
        </div>
      </NeoCard>
    </div>

    <div class="grid grid-cols-1 xl:grid-cols-3 gap-6">
      <NeoCard class="p-6 xl:col-span-2 min-h-[400px]">
        <h3 class="font-bold text-lg uppercase mb-8">Tổng Quan Doanh Thu</h3>
        <div class="flex items-end justify-between h-64 gap-2 sm:gap-4 px-2">
           <div v-for="(h, i) in chartData" :key="i" class="w-full flex flex-col items-center gap-2 group">
             <div :style="{ height: h + '%' }" class="w-full bg-neo-green border-2 border-black border-b-0 hover:bg-green-400 transition-colors relative"></div>
             <span class="text-xs font-bold text-gray-500">{{ months[i] }}</span>
           </div>
        </div>
      </NeoCard>

      <NeoCard class="p-6 h-full min-h-[400px]">
        <h3 class="font-bold text-lg uppercase mb-2">Giao Dịch Gần Đây</h3>
        <p class="text-xs font-bold mb-6">0 giao dịch mới nhất.</p>
        <div class="h-64 flex flex-col items-center justify-center text-gray-400 border-2 border-dashed border-gray-300 rounded-lg">
          <i class="fa-solid fa-receipt text-3xl mb-2"></i>
          <span class="text-sm font-bold">Chưa có dữ liệu</span>
        </div>
      </NeoCard>
    </div>
  </div>
</template>

<script setup>
import NeoCard from '../components/NeoCard.vue';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const chartData = [40, 55, 30, 35, 85, 80, 60, 35, 30, 50, 40, 75];

const stats = [
  { title: 'Tổng doanh thu', value: '100.000.000đ', desc: '+20.1% so với tháng trước', icon: 'fa-solid fa-dollar-sign', isGreen: true },
  { title: 'Đăng ký mới', value: '10', desc: '+180.1% so với tháng trước', icon: 'fa-solid fa-user-plus' },
  { title: 'Thành viên', value: '200', desc: '+19% so với tháng trước', icon: 'fa-solid fa-hard-drive' },
  { title: 'Hoạt động', value: '+573', desc: '+201 kể từ giờ trước', icon: 'fa-solid fa-bolt' },
];
</script>