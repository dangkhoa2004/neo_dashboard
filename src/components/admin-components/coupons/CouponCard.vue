<template>
  <div class="relative group h-full">
    <div class="h-full flex flex-col relative transition-transform hover:-translate-y-1 duration-200">
      
      <div class="relative bg-neo-green border-2 border-black border-b-0 rounded-t-xl p-4 overflow-hidden">
         <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(black 1px, transparent 1px); background-size: 8px 8px;"></div>
         
         <div class="relative z-10 flex justify-between items-start">
           <div>
              <div class="bg-black text-white text-[10px] font-bold px-2 py-0.5 rounded inline-block mb-1 uppercase tracking-wider">
                {{ coupon.type === 'percent' ? 'Voucher %' : 'Voucher Tiền' }}
              </div>
              <h3 class="font-black text-2xl tracking-wider text-black break-all">{{ coupon.code }}</h3>
           </div>
           <button 
             @click="$emit('copy', coupon.code)" 
             class="w-8 h-8 bg-white border-2 border-black rounded flex items-center justify-center hover:bg-black hover:text-white transition-colors shadow-sm active:scale-95 group/btn"
             title="Sao chép mã"
           >
             <i class="fa-regular fa-copy group-active/btn:hidden"></i>
             <i class="fa-solid fa-check hidden group-active/btn:block"></i>
           </button>
         </div>
      </div>

      <div class="relative h-4 bg-white border-l-2 border-r-2 border-black flex items-center">
         <div class="absolute -left-[2px] top-1/2 -translate-y-1/2 w-4 h-4 bg-neo-bg border-r-2 border-black rounded-full"></div>
         <div class="w-full border-t-2 border-black border-dashed mx-4"></div>
         <div class="absolute -right-[2px] top-1/2 -translate-y-1/2 w-4 h-4 bg-neo-bg border-l-2 border-black rounded-full"></div>
      </div>

      <div class="bg-white border-2 border-black border-t-0 rounded-b-xl p-5 flex-1 flex flex-col shadow-neo group-hover:shadow-neo-hover transition-all">
         <div class="flex items-baseline gap-1 mb-2">
           <span class="text-4xl font-black">
             {{ coupon.type === 'percent' ? `-${coupon.value}%` : `-${coupon.value}k` }}
           </span>
           <span class="text-sm text-gray-500 font-bold uppercase">Off</span>
         </div>
         
         <p class="text-gray-600 text-sm font-medium mb-4 line-clamp-2">{{ coupon.desc }}</p>

         <div class="mb-4">
           <span class="text-xs font-bold border-2 border-black px-2 py-1 rounded-md inline-flex items-center gap-1"
             :class="statusClass">
             <i :class="statusIcon"></i>
             {{ statusLabel }}
           </span>
         </div>
         
         <div class="mt-auto pt-4 border-t-2 border-gray-100 flex justify-between items-end">
           <div>
             <div class="text-[10px] uppercase font-bold text-gray-400">Hết hạn</div>
             <div class="font-bold text-sm">{{ coupon.expiry || 'Vô thời hạn' }}</div>
           </div>
           <div class="text-right">
              <div class="text-[10px] uppercase font-bold text-gray-400">Đã dùng</div>
              <div class="font-bold text-sm">{{ coupon.usage }} <span class="text-gray-400">/ {{ coupon.limit || '∞' }}</span></div>
           </div>
         </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  coupon: { type: Object, required: true }
});

defineEmits(['copy']);

const statusLabel = computed(() => {
  if (props.coupon.status === 'active') return 'Đang chạy';
  if (props.coupon.status === 'expired') return 'Hết hạn';
  if (props.coupon.status === 'scheduled') return 'Sắp tới';
  return 'Nháp';
});

const statusClass = computed(() => {
  if (props.coupon.status === 'active') return 'bg-green-100 text-green-800 border-green-800';
  if (props.coupon.status === 'expired') return 'bg-gray-100 text-gray-500 border-gray-400 dashed';
  if (props.coupon.status === 'scheduled') return 'bg-yellow-100 text-yellow-800 border-yellow-800';
  return 'bg-white';
});

const statusIcon = computed(() => {
  if (props.coupon.status === 'active') return 'fa-solid fa-bolt';
  if (props.coupon.status === 'expired') return 'fa-solid fa-hourglass-end';
  if (props.coupon.status === 'scheduled') return 'fa-regular fa-clock';
  return 'fa-solid fa-circle';
});
</script>