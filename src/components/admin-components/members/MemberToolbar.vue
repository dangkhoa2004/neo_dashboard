<template>
  <NeoCard class="p-4 mb-6 flex flex-col xl:flex-row gap-4 justify-between items-center">
    <div class="flex gap-2 w-full xl:w-auto overflow-x-auto pb-2 xl:pb-0">
       <button 
         v-for="tab in ['All', 'Active', 'Inactive']" 
         :key="tab"
         @click="$emit('update:status', tab)"
         class="px-4 py-1.5 border-2 border-black rounded-full font-bold text-sm transition-colors whitespace-nowrap"
         :class="status === tab ? 'bg-black text-white' : 'bg-white hover:bg-gray-100'"
       >
         {{ tab }}
       </button>
    </div>

    <div class="flex flex-col md:flex-row gap-3 w-full xl:w-auto">
      <div class="relative flex-1 md:w-64">
        <i class="fa-solid fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
        <input 
          :value="search"
          @input="$emit('update:search', $event.target.value)"
          type="text" 
          placeholder="Tìm tên hoặc email..." 
          class="w-full pl-10 pr-4 py-2 border-2 border-black rounded focus:outline-none focus:shadow-neo-sm transition-shadow"
        >
      </div>
      <select 
        :value="role"
        @change="$emit('update:role', $event.target.value)"
        class="border-2 border-black rounded px-4 py-2 font-bold focus:shadow-neo-sm bg-white cursor-pointer"
      >
        <option value="All">Tất cả Quyền</option>
        <option value="Admin">Admin</option>
        <option value="Editor">Editor</option>
        <option value="User">User</option>
      </select>
    </div>
  </NeoCard>
</template>

<script setup>
import NeoCard from '../common/NeoCard.vue';

defineProps({
  status: String,
  search: String,
  role: String
});

defineEmits(['update:status', 'update:search', 'update:role']);
</script>