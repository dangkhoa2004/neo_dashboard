<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
    <NeoCard class="p-5 flex items-center justify-between bg-white">
      <div>
        <p class="text-xs font-bold uppercase text-gray-500 mb-1">Tổng thành viên</p>
        <p class="text-3xl font-black text-black">{{ total }}</p>
      </div>
      <div class="w-10 h-10 border-2 border-black rounded-full bg-gray-100 flex items-center justify-center shadow-neo-sm">
        <i class="fa-solid fa-users text-lg"></i>
      </div>
    </NeoCard>
    
    <NeoCard class="p-5 flex items-center justify-between bg-yellow-50">
      <div>
        <p class="text-xs font-bold uppercase text-gray-500 mb-1">Thành viên VIP</p>
        <p class="text-3xl font-black text-black">{{ vip }}</p>
      </div>
      <div class="w-10 h-10 border-2 border-black rounded-full bg-white flex items-center justify-center shadow-neo-sm">
        <i class="fa-solid fa-crown text-lg text-yellow-600"></i>
      </div>
    </NeoCard>

    <NeoCard class="p-5 flex items-center justify-between bg-green-50">
      <div>
        <p class="text-xs font-bold uppercase text-gray-500 mb-1">Mới hôm nay</p>
        <p class="text-3xl font-black text-neo-green">+{{ newToday }}</p>
      </div>
      <div class="w-10 h-10 border-2 border-black rounded-full bg-white flex items-center justify-center shadow-neo-sm">
        <i class="fa-solid fa-user-plus text-lg"></i>
      </div>
    </NeoCard>
  </div>
</template>

<script setup>
import NeoCard from '../common/NeoCard.vue';

defineProps({
  total: { type: Number, default: 0 },
  vip: { type: Number, default: 0 },
  newToday: { type: Number, default: 0 }
});
</script>