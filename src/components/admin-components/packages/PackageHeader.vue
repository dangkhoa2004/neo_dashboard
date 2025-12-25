<template>
  <div class="text-center max-w-2xl mx-auto mb-10">
    <h1 class="text-4xl font-black mb-2 flex items-center justify-center gap-2">
      <i class="fa-solid fa-cube text-3xl"></i> Quản Lý Gói Cước
    </h1>
    <p class="text-gray-600 font-medium mb-6">Cấu hình giá bán và tính năng cho khách hàng.</p>

    <div class="inline-flex items-center bg-white border-2 border-black rounded-full p-1 shadow-neo relative">
       <div 
         class="absolute top-1 bottom-1 w-[50%] bg-black rounded-full transition-all duration-300"
         :class="isYearly ? 'left-[48%]' : 'left-1'"
       ></div>
       
       <button 
         @click="$emit('update:isYearly', false)"
         class="relative z-10 px-6 py-2 font-bold text-sm transition-colors rounded-full w-32"
         :class="!isYearly ? 'text-white' : 'text-gray-500 hover:text-black'"
       >
         Tháng
       </button>
       <button 
         @click="$emit('update:isYearly', true)"
         class="relative z-10 px-6 py-2 font-bold text-sm transition-colors rounded-full w-32 flex items-center justify-center gap-1"
         :class="isYearly ? 'text-white' : 'text-gray-500 hover:text-black'"
       >
         Năm <span class="text-[10px] bg-neo-green text-black px-1 rounded ml-1">-20%</span>
       </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  isYearly: Boolean
});

defineEmits(['update:isYearly']);
</script>