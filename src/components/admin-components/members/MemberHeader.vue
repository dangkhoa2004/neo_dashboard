<template>
  <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
    <div>
      <h1 class="text-4xl font-black mb-1 flex items-center gap-2">
        <i class="fa-solid fa-address-card text-3xl"></i> Quản Lý Thành Viên
      </h1>
      <p class="text-gray-600">Kiểm soát truy cập và thông tin người dùng.</p>
    </div>
    <div class="flex gap-3">
      <button @click="$emit('export')" class="bg-white text-black border-2 border-black px-4 py-2 font-bold rounded shadow-neo hover:translate-y-[-2px] transition-all flex items-center gap-2">
        <i class="fa-solid fa-file-export"></i> Xuất CSV
      </button>
      <button @click="$emit('add')" class="bg-neo-green text-black border-2 border-black px-6 py-2 font-bold rounded shadow-neo hover:shadow-neo-hover hover:-translate-y-1 transition-all flex items-center gap-2">
        <i class="fa-solid fa-plus"></i> Thêm User
      </button>
    </div>
  </div>
</template>

<script setup>
defineEmits(['add', 'export']);
</script>