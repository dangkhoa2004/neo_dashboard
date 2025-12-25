<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
    <NeoCard class="p-5 flex items-center justify-between bg-purple-50">
      <div>
        <p class="text-xs font-bold uppercase text-gray-500 mb-1">Tổng gói đăng ký</p>
        <p class="text-3xl font-black text-black">1,240</p>
      </div>
      <div class="w-10 h-10 border-2 border-black rounded-full bg-white flex items-center justify-center shadow-neo-sm">
        <i class="fa-solid fa-file-invoice-dollar text-lg"></i>
      </div>
    </NeoCard>
    
    <NeoCard class="p-5 flex items-center justify-between bg-blue-50">
      <div>
        <p class="text-xs font-bold uppercase text-gray-500 mb-1">MRR (Doanh thu tháng)</p>
        <p class="text-3xl font-black text-black">185Tr</p>
      </div>
      <div class="w-10 h-10 border-2 border-black rounded-full bg-white flex items-center justify-center shadow-neo-sm">
        <i class="fa-solid fa-chart-line text-lg"></i>
      </div>
    </NeoCard>

    <NeoCard class="p-5 flex items-center justify-between bg-pink-50">
      <div>
        <p class="text-xs font-bold uppercase text-gray-500 mb-1">Tỷ lệ chuyển đổi</p>
        <p class="text-3xl font-black text-black">2.4%</p>
      </div>
      <div class="w-10 h-10 border-2 border-black rounded-full bg-white flex items-center justify-center shadow-neo-sm">
        <i class="fa-solid fa-arrow-right-arrow-left text-lg"></i>
      </div>
    </NeoCard>
  </div>
</template>

<script setup>
import NeoCard from '../common/NeoCard.vue';
</script>