<template>
  <NeoCard class="p-4 mb-8 flex flex-col md:flex-row gap-4 items-center">
    <div class="relative flex-1 w-full">
      <i class="fa-solid fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
      <input 
        :value="search"
        @input="$emit('update:search', $event.target.value)"
        type="text" 
        placeholder="Tìm theo tên mã..." 
        class="w-full pl-10 pr-4 py-2 border-2 border-black rounded focus:outline-none focus:bg-gray-50 font-medium"
      >
    </div>
    
    <div class="flex gap-4 w-full md:w-auto">
      <select 
        :value="status"
        @change="$emit('update:status', $event.target.value)"
        class="border-2 border-black rounded px-4 py-2 font-bold focus:outline-none cursor-pointer hover:bg-gray-50 flex-1"
      >
        <option value="all">Tất cả trạng thái</option>
        <option value="active">Đang chạy</option>
        <option value="expired">Đã hết hạn</option>
        <option value="scheduled">Sắp diễn ra</option>
      </select>
    </div>
  </NeoCard>
</template>

<script setup>
import NeoCard from '../common/NeoCard.vue';

defineProps({
  search: String,
  status: String
});

defineEmits(['update:search', 'update:status']);
</script>