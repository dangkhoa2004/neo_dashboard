<template>
  <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
    <NeoCard v-for="(stat, index) in stats" :key="index" class="p-5 flex flex-col justify-between min-h-[160px] group hover:bg-neo-bg transition-colors">
      <div class="flex justify-between items-start">
        <div class="flex flex-col">
          <span class="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">{{ stat.title }}</span>
          <span class="text-3xl font-black" :class="stat.isGreen ? 'text-neo-green drop-shadow-sm' : 'text-black'">
            {{ stat.value }}
          </span>
        </div>
        <div class="w-10 h-10 border-2 border-black rounded-full flex items-center justify-center bg-white group-hover:scale-110 transition-transform shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          <i :class="stat.icon"></i>
        </div>
      </div>
      
      <div class="mt-4 pt-4 border-t-2 border-black border-dashed flex items-center gap-2">
        <span class="px-2 py-0.5 text-xs font-bold border-2 border-black rounded bg-white" 
          :class="stat.trend > 0 ? 'text-green-600' : 'text-red-600'">
          <i :class="stat.trend > 0 ? 'fa-solid fa-arrow-trend-up' : 'fa-solid fa-arrow-trend-down'"></i>
          {{ Math.abs(stat.trend) }}%
        </span>
        <span class="text-xs font-bold text-gray-500">{{ stat.desc }}</span>
      </div>
    </NeoCard>
  </div>
</template>

<script setup>
import NeoCard from '../common/NeoCard.vue';

defineProps({
  stats: {
    type: Array,
    required: true
  }
});
</script>