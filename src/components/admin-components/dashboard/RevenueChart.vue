<template>
  <NeoCard class="p-6 xl:col-span-2 min-h-[450px] flex flex-col">
    <div class="flex justify-between items-center mb-8">
      <h3 class="font-bold text-xl uppercase border-l-4 border-neo-green pl-3">Phân Tích Doanh Thu</h3>
      <button class="text-xs font-bold underline hover:text-neo-green">Tải báo cáo CSV</button>
    </div>
    
    <div class="flex-1 flex items-end justify-between gap-2 sm:gap-4 px-2 pb-4 border-b-2 border-black">
        <div v-for="(item, i) in data" :key="i" class="w-full flex flex-col items-center gap-2 group relative">
          <div class="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-xs font-bold px-2 py-1 rounded whitespace-nowrap z-10 pointer-events-none">
            {{ item.amount }} tr
          </div>
          
          <div 
            :style="{ height: item.height + '%' }" 
            class="w-full bg-neo-green border-2 border-black border-b-0 hover:bg-black hover:text-white transition-all relative cursor-pointer flex items-end justify-center"
          >
            <div class="w-full h-2 bg-white/20 absolute top-0"></div>
          </div>
          <span class="text-xs font-bold text-gray-600 group-hover:text-black">{{ item.month }}</span>
        </div>
    </div>
    
    <div class="mt-4 flex gap-6 justify-center">
        <div class="flex items-center gap-2">
            <div class="w-3 h-3 bg-neo-green border-2 border-black"></div>
            <span class="text-xs font-bold">Thực đạt</span>
        </div>
        <div class="flex items-center gap-2">
            <div class="w-3 h-3 bg-gray-300 border-2 border-black"></div>
            <span class="text-xs font-bold">Dự kiến</span>
        </div>
    </div>
  </NeoCard>
</template>

<script setup>
import NeoCard from '../common/NeoCard.vue';

defineProps({
  data: Array
});
</script>