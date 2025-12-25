<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
    <NeoCard class="p-5 flex items-center justify-between bg-blue-50">
      <div>
        <p class="text-xs font-bold uppercase text-gray-500 mb-1">Tổng mã giảm giá</p>
        <p class="text-3xl font-black text-black">{{ total }}</p>
      </div>
      <div class="w-10 h-10 border-2 border-black rounded-full bg-white flex items-center justify-center shadow-neo-sm">
        <i class="fa-solid fa-ticket text-lg"></i>
      </div>
    </NeoCard>
    
    <NeoCard class="p-5 flex items-center justify-between bg-green-50">
      <div>
        <p class="text-xs font-bold uppercase text-gray-500 mb-1">Đang hoạt động</p>
        <p class="text-3xl font-black text-neo-green drop-shadow-sm">{{ active }}</p>
      </div>
      <div class="w-10 h-10 border-2 border-black rounded-full bg-white flex items-center justify-center shadow-neo-sm">
        <i class="fa-regular fa-circle-check text-lg"></i>
      </div>
    </NeoCard>

    <NeoCard class="p-5 flex items-center justify-between bg-yellow-50">
      <div>
        <p class="text-xs font-bold uppercase text-gray-500 mb-1">Tổng lượt dùng</p>
        <p class="text-3xl font-black text-black">{{ usage }}</p>
      </div>
      <div class="w-10 h-10 border-2 border-black rounded-full bg-white flex items-center justify-center shadow-neo-sm">
        <i class="fa-solid fa-users text-lg"></i>
      </div>
    </NeoCard>
  </div>
</template>

<script setup>
import NeoCard from '../common/NeoCard.vue';

defineProps({
  total: { type: Number, default: 0 },
  active: { type: Number, default: 0 },
  usage: { type: Number, default: 0 }
});
</script>