<template>
  <div class="max-w-4xl">
    <div class="mb-8">
      <h1 class="text-4xl font-black mb-1 flex items-center gap-2">
        <i class="fa-solid fa-gear text-3xl"></i> Cài Đặt
      </h1>
      <p class="text-gray-600">Cấu hình chung cho hệ thống.</p>
    </div>

    <NeoCard class="p-6 mb-8">
      <h3 class="font-black text-xl uppercase mb-6 border-b-2 border-black pb-2 inline-block">Thông tin chung</h3>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
        <div class="flex flex-col gap-2">
          <label class="font-bold text-sm">Tên hệ thống</label>
          <input type="text" value="NamNCN Portal" class="border-2 border-black rounded p-3 font-medium focus:outline-none focus:shadow-neo transition-shadow">
        </div>
        <div class="flex flex-col gap-2">
          <label class="font-bold text-sm">Email quản trị</label>
          <input type="email" value="admin@namncn.com" class="border-2 border-black rounded p-3 font-medium focus:outline-none focus:shadow-neo transition-shadow">
        </div>
      </div>

      <div class="flex flex-col gap-2 mb-6">
        <label class="font-bold text-sm">Mô tả hệ thống</label>
        <textarea rows="3" class="border-2 border-black rounded p-3 font-medium focus:outline-none focus:shadow-neo transition-shadow">Hệ thống quản lý khóa học và tài nguyên dành cho Admin.</textarea>
      </div>

      <div class="flex justify-end">
        <button class="bg-neo-green text-black px-6 py-2 border-2 border-black font-bold rounded shadow-neo hover:shadow-neo-hover transition-all">
          Lưu thay đổi
        </button>
      </div>
    </NeoCard>

    <NeoCard class="p-6">
      <h3 class="font-black text-xl uppercase mb-6 border-b-2 border-black pb-2 inline-block">Thông báo</h3>
      
      <div class="space-y-4">
        <label class="flex items-center gap-3 cursor-pointer group">
          <div class="relative">
            <input type="checkbox" class="peer sr-only" checked>
            <div class="w-12 h-6 bg-gray-200 border-2 border-black rounded-full peer-checked:bg-neo-green transition-colors"></div>
            <div class="absolute top-1 left-1 bg-white border-2 border-black w-4 h-4 rounded-full transition-all peer-checked:translate-x-6"></div>
          </div>
          <span class="font-bold group-hover:underline">Gửi email khi có đơn hàng mới</span>
        </label>

        <label class="flex items-center gap-3 cursor-pointer group">
          <div class="relative">
            <input type="checkbox" class="peer sr-only">
            <div class="w-12 h-6 bg-gray-200 border-2 border-black rounded-full peer-checked:bg-neo-green transition-colors"></div>
            <div class="absolute top-1 left-1 bg-white border-2 border-black w-4 h-4 rounded-full transition-all peer-checked:translate-x-6"></div>
          </div>
          <span class="font-bold group-hover:underline">Báo cáo doanh thu hàng tuần</span>
        </label>
      </div>
    </NeoCard>
  </div>
</template>

<script setup>
import NeoCard from '../components/NeoCard.vue';
</script>