<template>
  <NeoCard class="p-6 border-2 border-red-600 bg-red-50">
    <h3 class="font-black text-xl uppercase mb-6 text-red-600 flex items-center gap-2">
      <i class="fa-solid fa-triangle-exclamation"></i> Khu Vực Nguy Hiểm
    </h3>

    <div class="space-y-6">
      <div class="flex flex-col md:flex-row justify-between items-center p-4 bg-white border-2 border-red-200 rounded">
        <div class="mb-4 md:mb-0">
          <h4 class="font-bold text-lg">Xóa dữ liệu tạm (Cache)</h4>
          <p class="text-sm text-gray-600">Làm mới lại toàn bộ cache hệ thống. Có thể gây chậm trong ít phút.</p>
        </div>
        <button class="whitespace-nowrap px-4 py-2 font-bold border-2 border-black rounded hover:bg-gray-100">
          Xóa Cache
        </button>
      </div>

      <div class="flex flex-col md:flex-row justify-between items-center p-4 bg-white border-2 border-red-600 rounded shadow-[4px_4px_0px_0px_#dc2626]">
        <div class="mb-4 md:mb-0">
          <h4 class="font-bold text-lg text-red-600">Xóa tài khoản vĩnh viễn</h4>
          <p class="text-sm text-gray-600">Hành động này không thể hoàn tác. Mọi dữ liệu sẽ bị mất.</p>
        </div>
        <button class="whitespace-nowrap px-4 py-2 font-bold border-2 border-red-600 bg-red-600 text-white rounded hover:bg-red-700 shadow-sm">
          Xóa Tài Khoản
        </button>
      </div>
    </div>
  </NeoCard>
</template>

<script setup>
import NeoCard from '../common/NeoCard.vue';
</script>