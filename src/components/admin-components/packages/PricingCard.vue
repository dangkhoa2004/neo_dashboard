<template>
  <NeoCard 
    class="flex flex-col relative overflow-hidden transition-transform hover:-translate-y-2"
    :class="[
        plan.recommend ? 'border-2 md:scale-105 z-10 shadow-neo-hover' : 'shadow-neo',
        plan.bgClass
    ]"
  >
    <div v-if="plan.recommend" class="absolute top-0 right-0 bg-neo-green border-l-2 border-b-2 border-black px-3 py-1 font-bold text-xs uppercase z-10">
      Phổ biến nhất
    </div>

    <div class="p-6 border-b-2 border-black border-dashed">
        <h3 class="text-xl font-black uppercase mb-1">{{ plan.name }}</h3>
        <p class="text-sm text-gray-600 font-medium h-10 line-clamp-2">{{ plan.desc }}</p>
    </div>

    <div class="p-6 flex-1 flex flex-col">
        <div class="text-4xl font-black mb-1 flex items-baseline">
           {{ isYearly ? plan.priceYearly : plan.priceMonthly }}
           <span class="text-lg text-gray-500 font-bold ml-1">/{{ isYearly ? 'năm' : 'th' }}</span>
        </div>
        <p v-if="isYearly && plan.priceMonthly !== '0đ'" class="text-xs text-green-700 font-bold mb-6">
           Tiết kiệm {{ plan.saveAmount }}
        </p>
        <div v-else class="h-4 mb-6"></div> 
        
        <ul class="space-y-3 mb-8 flex-1">
           <li v-for="(feature, i) in plan.features" :key="i" class="flex items-start gap-3 font-medium text-sm">
              <div class="w-5 h-5 rounded-full border-2 border-black flex items-center justify-center bg-white shrink-0 mt-0.5">
                <i class="fa-solid fa-check text-[10px]"></i>
              </div>
              {{ feature }}
           </li>
        </ul>

        <div class="mt-auto">
           <div class="flex items-center gap-2 mb-4 text-xs font-bold text-gray-500 justify-center">
              <i class="fa-solid fa-users"></i> {{ plan.usersCount }} subscribers
           </div>
           <button 
             @click="$emit('edit', plan)"
             class="w-full py-3 font-bold border-2 border-black rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all bg-white hover:bg-black hover:text-white"
           >
             <i class="fa-solid fa-pen mr-2"></i> Chỉnh sửa
           </button>
        </div>
    </div>
  </NeoCard>
</template>

<script setup>
import NeoCard from '../common/NeoCard.vue';

defineProps({
  plan: { type: Object, required: true },
  isYearly: { type: Boolean, default: false }
});

defineEmits(['edit']);
</script>