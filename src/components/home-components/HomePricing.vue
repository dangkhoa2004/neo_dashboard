<template>
  <section class="border-b-2 border-black bg-neo-bg py-20 relative overflow-hidden">
    <div class="absolute inset-0 opacity-10 pointer-events-none" 
         style="background-image: radial-gradient(#000 1.5px, transparent 1.5px); background-size: 24px 24px;">
    </div>

    <div class="mx-auto max-w-7xl px-6 relative z-10">
      <div class="text-center mb-16">
        <h2 class="text-5xl md:text-7xl font-black text-black uppercase leading-[0.9] reveal-on-scroll scale-up">
            Bảng <br class="md:hidden" />
            <span class="relative inline-block px-2 ml-2">
               <span class="relative z-10">giá</span>
               <span class="absolute inset-0 bg-[#00C16A] -rotate-1 skew-x-3 h-full w-full z-0 border-2 border-black"></span>
            </span>
      </h2>
      </div>
      
      <div class="grid gap-8 md:grid-cols-3 items-stretch mt-12">
        
        <div v-for="(plan, idx) in plans" :key="idx" class="h-full">
          
          <div 
            class="flex flex-col relative h-full border-2 border-black rounded-xl bg-white transition-all duration-200 group/card"
            :class="[
              // Logic hiển thị: Nếu là gói recommend (hoặc popular) thì nổi bật hẳn
              (plan.recommend || plan.isPopular) 
                ? 'shadow-neo-hover md:-translate-y-4 z-10' 
                : 'shadow-neo hover:shadow-neo-hover hover:-translate-x-[2px] hover:-translate-y-[2px]'
            ]"
          >
            <div v-if="plan.recommend || plan.isPopular" 
                class="absolute -top-4 left-1/2 -translate-x-1/2 bg-neo-green text-white border-2 border-black px-4 py-1.5 
                        font-black text-xs uppercase tracking-widest shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] 
                        rotate-2 z-20 whitespace-nowrap flex items-center gap-2">
              <i class="fa-solid fa-star text-black animate-spin-slow"></i> 
              <span class="text-black drop-shadow-none">Phổ biến nhất</span>
            </div>

            <div class="p-6 relative">
              <div class="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] rounded-t-xl"></div>
              <div class="relative z-10">
                <h3 class="text-2xl font-black uppercase mb-2 flex items-center justify-between">
                  {{ plan.name }}
                  <i v-if="plan.recommend || plan.isPopular" class="fa-solid fa-crown text-neo-green text-xl"></i>
                </h3>
                <p class="text-sm text-gray-600 font-bold min-h-[40px] line-clamp-2 leading-relaxed">
                  {{ plan.desc || plan.description || 'Giải pháp tuyệt vời cho nhu cầu của bạn.' }}
                </p>
              </div>
            </div>

            <div class="w-full h-0 border-t-2 border-dashed border-black mx-auto"></div>

            <div class="p-6 flex-1 flex flex-col rounded-b-xl" :class="plan.bg">
                
                <div class="mb-4">
                  <div class="flex items-baseline gap-1">
                    <span class="text-5xl font-black tracking-tight text-black">
                      {{ plan.price }}
                    </span>
                    <span class="text-lg text-gray-600 font-bold uppercase">
                      {{ plan.period || '/ tháng' }}
                    </span>
                  </div>
                </div>
                
                <ul class="space-y-4 mb-8 flex-1">
                  <li v-for="(feature, fIdx) in plan.features" :key="fIdx" class="flex items-start gap-3 group/item">
                      <div class="shrink-0 w-6 h-6 rounded-md border-2 border-black flex items-center justify-center transition-colors
                                  bg-white group-hover/item:bg-neo-green">
                        <Check class="w-3 h-3 stroke-[4] text-black transition-transform group-hover/item:scale-125" />
                      </div>
                      <span class="font-bold text-sm text-gray-700 mt-0.5 group-hover/item:text-black transition-colors">
                        {{ feature }}
                      </span>
                  </li>
                </ul>

                <div class="mt-auto">
                  <button 
                    class="relative w-full group/btn outline-none"
                  >
                    <div class="absolute inset-0 bg-black rounded translate-x-[3px] translate-y-[3px] transition-transform group-active/btn:translate-x-0 group-active/btn:translate-y-0"></div>
                    
                    <div class="relative flex items-center justify-center gap-2 py-3 px-4 rounded border-2 border-black font-black uppercase tracking-wider bg-white text-black transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:-translate-x-0.5 group-active/btn:translate-x-[3px] group-active/btn:translate-y-[3px]"
                        :class="[(plan.recommend || plan.isPopular) ? 'bg-neo-green text-white hover:bg-[#1eb053]' : 'bg-white hover:bg-gray-50']">
                      <span>Chọn gói này</span>
                    </div>
                  </button>
                </div>
            </div>
          </div>
          </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Check } from 'lucide-vue-next'; // Hoặc import icon từ thư viện bạn dùng

defineProps({
  plans: {
    type: Array,
    default: () => []
  }
});
</script>

<style scoped>
.animate-spin-slow {
  animation: spin 8s linear infinite;
}
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>