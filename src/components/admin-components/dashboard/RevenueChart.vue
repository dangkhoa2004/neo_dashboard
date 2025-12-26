<template>
  <NeoCard class="p-6 xl:col-span-2 min-h-[450px] flex flex-col">
    <div class="flex justify-between items-center mb-8">
      <h3 class="font-bold text-xl uppercase border-l-4 border-neo-green pl-3">Phân Tích Doanh Thu</h3>
      <button class="text-xs font-bold underline hover:text-neo-green">Tải báo cáo CSV</button>
    </div>
    
    <div class="flex-1 h-64 flex items-end justify-between gap-2 sm:gap-4 px-2 pb-4 border-b-2 border-black relative z-0">
        <div v-for="(item, i) in chartData" :key="i" class="w-full flex flex-col items-center justify-end h-full group">
          
          <div class="mb-[10px] opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 transform translate-y-2 text-xs font-bold bg-black text-white px-2 py-1 rounded shadow-lg whitespace-nowrap z-20">
            {{ formatNumber(item.amount) }} tr
          </div>
          
          <div 
            :style="{ height: item.height + '%' }" 
            class="w-full bg-neo-green bg-green-500 border-2 border-black border-b-0 
                   relative cursor-pointer flex items-end justify-center
                   transition-all duration-300 ease-out origin-bottom
                   group-hover:bg-black group-hover:text-white
                   group-hover:shadow-[0px_0px_15px_rgba(0,0,0,0.2)]"
          >
            <div class="w-full h-2 bg-white/30 absolute top-0" v-if="item.height > 0"></div>
          </div>
          
          <span class="mt-2 text-xs font-bold text-gray-500 transition-colors group-hover:text-black group-hover:font-extrabold">{{ item.month }}</span>
        </div>
    </div>
    
    <div class="mt-4 flex gap-6 justify-center">
        <div class="flex items-center gap-2">
            <div class="w-3 h-3 bg-neo-green bg-green-500 border-2 border-black"></div>
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
import { computed } from 'vue';
import NeoCard from '../common/NeoCard.vue';

const props = defineProps({
  data: {
    type: Array,
    default: () => []
  }
});

const formatNumber = (num) => {
    return new Intl.NumberFormat('vi-VN').format(num);
};

const chartData = computed(() => {
  if (!props.data || props.data.length === 0) return [];
  
  const cleanData = props.data.map(item => ({
      ...item,
      amountNum: Number(item.amount) || 0
  }));

  const maxAmount = Math.max(...cleanData.map(item => item.amountNum));
  
  return cleanData.map(item => {
    // Giới hạn chiều cao tối đa là 85% để chừa chỗ hiển thị số liệu phía trên
    // Nếu để 100%, cột cao nhất sẽ đẩy số liệu ra khỏi khung
    let heightPercent = maxAmount > 0 ? (item.amountNum / maxAmount) * 85 : 0;
    
    if (item.amountNum > 0 && heightPercent < 1) heightPercent = 1;

    return {
      ...item,
      height: heightPercent
    };
  });
});
</script>