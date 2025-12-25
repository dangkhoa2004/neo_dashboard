<template>
  <NeoCard class="p-6 h-[500px] overflow-hidden flex flex-col">
    <h3 class="font-bold text-lg uppercase mb-6">Hoạt Động Hệ Thống</h3>
    
    <div class="overflow-y-auto pr-2 custom-scrollbar flex-1">
        <div class="relative pl-6 border-l-2 border-black ml-2 space-y-8 py-2">
            <div v-for="(act, idx) in activities" :key="idx" class="relative group">
                <div class="absolute -left-[31px] w-4 h-4 rounded-full border-2 border-black bg-white group-hover:bg-neo-green transition-colors z-10"></div>
                
                <div class="bg-white border-2 border-black p-3 rounded shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform">
                    <div class="flex justify-between items-start mb-1">
                        <span class="text-xs font-bold text-gray-500">{{ act.time }}</span>
                        <i :class="act.icon" class="text-sm"></i>
                    </div>
                    <p class="font-bold text-sm leading-tight mb-1">{{ act.title }}</p>
                    <p class="text-xs text-gray-600">{{ act.desc }}</p>
                </div>
            </div>
        </div>
    </div>
  </NeoCard>
</template>

<script setup>
import NeoCard from '../common/NeoCard.vue';

defineProps({
  activities: Array
});
</script>