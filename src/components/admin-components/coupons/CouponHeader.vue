<template>
  <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
    <div>
      <h1 class="text-4xl font-black mb-1 flex items-center gap-2">
        <span class="relative">
          <i class="fa-solid fa-tags text-3xl z-10 relative"></i>
          <span class="absolute -bottom-1 -right-1 w-full h-2 z-0"></span>
        </span>
        Mã Giảm Giá
      </h1>
      <p class="text-gray-600">Quản lý các chiến dịch khuyến mãi và voucher.</p>
    </div>
    
    <button 
      @click="$emit('open-modal')"
      class="bg-black text-white px-6 py-3 font-bold rounded shadow-neo hover:translate-y-[-2px] hover:shadow-neo-hover transition-all flex items-center gap-2 active:translate-y-[2px] active:shadow-none"
    >
      <i class="fa-solid fa-plus"></i> Tạo mã mới
    </button>
  </div>
</template>

<script setup>
defineEmits(['open-modal']);
</script>