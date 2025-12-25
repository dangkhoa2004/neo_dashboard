<template>
  <NeoCard class="p-6 flex flex-col h-full bg-yellow-50">
      <h3 class="font-bold text-lg uppercase mb-6 flex items-center gap-2">
        <i class="fa-solid fa-bullseye"></i> Mục Tiêu Tháng
      </h3>

      <div class="space-y-6 flex-1">
        <div class="bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div class="flex justify-between mb-2 font-bold text-sm">
                <span>Doanh số</span>
                <span>85%</span>
            </div>
            <div class="w-full h-4 border-2 border-black rounded-full p-0.5 bg-white">
                <div class="h-full bg-neo-green rounded-full border-r-2 border-black w-[85%]"></div>
            </div>
            <p class="text-xs text-gray-500 mt-2 font-medium">Chỉ còn 150tr để đạt KPI quý.</p>
        </div>

        <div class="bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div class="flex justify-between mb-2 font-bold text-sm">
                <span>Khách hàng mới</span>
                <span>42%</span>
            </div>
            <div class="w-full h-4 border-2 border-black rounded-full p-0.5 bg-white">
                <div class="h-full bg-blue-400 rounded-full border-r-2 border-black w-[42%]"></div>
            </div>
            <p class="text-xs text-gray-500 mt-2 font-medium">Đang chậm hơn tiến độ tuần trước.</p>
        </div>

        <div class="mt-auto bg-black text-white p-4 border-2 border-black relative overflow-hidden">
            <div class="relative z-10">
                <h4 class="font-bold text-lg text-neo-green">Mẹo Admin</h4>
                <p class="text-sm mt-1">Tối ưu hình ảnh khóa học để tăng tốc độ tải trang lên 20%.</p>
            </div>
            <i class="fa-solid fa-lightbulb absolute -bottom-2 -right-2 text-6xl text-gray-800 opacity-50 rotate-12"></i>
        </div>
      </div>
  </NeoCard>
</template>

<script setup>
import NeoCard from '../common/NeoCard.vue';
</script>