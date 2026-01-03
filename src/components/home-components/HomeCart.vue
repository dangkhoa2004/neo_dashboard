<template>
  <div v-if="isOpen" class="fixed inset-0 z-[60] flex justify-end">
    <div @click="$emit('close')" class="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"></div>
    
    <div class="relative h-full w-full max-w-md border-l-4 border-black bg-[#FDFBF7] p-6 shadow-[-8px_0px_0px_0px_#000] animate-slide-in-right flex flex-col"
         style="background-image: radial-gradient(#000 1px, transparent 1px); background-size: 20px 20px;">
      
      <div class="mb-6 flex items-center justify-between border-b-4 border-black pb-4 bg-[#FDFBF7]/90 backdrop-blur-md sticky top-0 z-10">
        <h2 class="text-3xl font-black uppercase tracking-tight">Giỏ hàng <span class="text-[#00C16A]">({{ cartItems.length }})</span></h2>
        <button @click="$emit('close')" class="group border-2 border-black p-1 bg-white hover:bg-black hover:text-white transition-colors shadow-[2px_2px_0px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none">
          <X class="h-6 w-6 group-hover:rotate-90 transition-transform duration-300" />
        </button>
      </div>
      
      <div v-if="cartItems.length" class="flex-1 overflow-y-auto space-y-5 pr-2 py-2">
        <div v-for="item in cartItems" :key="item.id" 
             class="group flex gap-4 border-2 border-black bg-white p-3 shadow-[4px_4px_0px_0px_#000] transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#000]">
          <div class="relative h-24 w-24 shrink-0 border-2 border-black overflow-hidden">
            <img :src="item.image" class="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500" />
          </div>
          <div class="flex-1 flex flex-col justify-between py-1">
            <h4 class="font-bold text-base leading-tight line-clamp-2">{{ item.title }}</h4>
            <div class="flex justify-between items-end">
              <span class="font-black text-xl text-[#00C16A]">{{ formatCurrency(item.price) }}đ</span>
              <button @click="$emit('remove', item.id)" 
                      class="border-2 border-black bg-white text-black p-2 shadow-[2px_2px_0px_0px_#000] hover:bg-[#FF4757] hover:text-white hover:border-[#FF4757] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all"
                      title="Xóa sản phẩm">
                <Trash2 class="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="flex-1 flex flex-col items-center justify-center text-center p-6 border-2 border-dashed border-black m-4 bg-white/50 rounded-lg">
        <div class="relative mb-6">
           <div class="absolute inset-0 bg-[#00C16A] rounded-full blur-xl opacity-20 animate-pulse"></div>
           <ShoppingCart class="relative h-24 w-24 text-black animate-bounce-slow" />
        </div>
        <h3 class="text-2xl font-black uppercase mb-2">Giỏ hàng trống trơn!</h3>
        <p class="font-medium text-gray-600 mb-6">Chưa có gì ở đây cả. Hãy đi lấp đầy nó ngay thôi.</p>
        <button @click="$emit('close')" class="px-6 py-3 bg-black text-white font-bold border-2 border-black shadow-[4px_4px_0px_0px_#00C16A] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
            QUAY LẠI MUA SẮM
        </button>
      </div>

      <div v-if="cartItems.length" class="border-t-4 border-black pt-6 mt-4 bg-[#FDFBF7] sticky bottom-0">
        <div class="flex justify-between text-xl font-black mb-6 px-2">
          <span class="uppercase">Tổng cộng:</span>
          <span class="text-2xl text-[#00C16A]">{{ formatCurrency(totalPrice) }}đ</span>
        </div>
        <button class="w-full group relative outline-none">
          <div class="absolute inset-0 bg-black translate-x-[6px] translate-y-[6px] transition-transform group-active:translate-x-0 group-active:translate-y-0"></div>
          <div class="relative bg-[#00C16A] border-2 border-black text-black py-4 font-black text-xl uppercase tracking-wider transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1 group-active:translate-x-[6px] group-active:translate-y-[6px] flex items-center justify-center gap-3 hover:bg-[#00E676]">
            THANH TOÁN NGAY <ArrowRight class="h-6 w-6 group-hover:translate-x-2 transition-transform" />
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ShoppingCart, X, Trash2, ArrowRight } from 'lucide-vue-next';

defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  cartItems: {
    type: Array,
    default: () => []
  },
  totalPrice: {
    type: Number,
    default: 0
  }
});

defineEmits(['close', 'remove']);

const formatCurrency = (val) => new Intl.NumberFormat('vi-VN').format(val);
</script>

<style scoped>
/* Animation trượt vào mượt mà hơn */
@keyframes slideInRight {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}
.animate-slide-in-right { 
  animation: slideInRight 0.4s cubic-bezier(0.22, 1, 0.36, 1); 
  will-change: transform;
}

/* Animation nảy chậm cho icon giỏ hàng trống */
.animate-bounce-slow {
    animation: bounce 3s infinite;
}
@keyframes bounce {
  0%, 100% { transform: translateY(-5%); }
  50% { transform: translateY(5%); }
}

/* Tùy chỉnh thanh cuộn cho phù hợp style */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #FDFBF7;
  border-left: 2px solid black;
}
::-webkit-scrollbar-thumb {
  background: black;
  border: 2px solid #FDFBF7;
}
::-webkit-scrollbar-thumb:hover {
  background: #00C16A;
}
</style>