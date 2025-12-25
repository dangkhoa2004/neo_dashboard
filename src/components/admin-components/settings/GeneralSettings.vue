<template>
  <NeoCard class="p-6">
    <h3 class="font-black text-xl uppercase mb-6 border-b-2 border-black pb-2">
      Thông tin hệ thống
    </h3>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <div>
        <label class="font-bold text-sm mb-1 block">Tên hiển thị (Site Name)</label>
        <input v-model="general.siteName" type="text" class="w-full border-2 border-black rounded p-2 font-medium focus:outline-none focus:shadow-neo transition-shadow" />
      </div>
      <div>
        <label class="font-bold text-sm mb-1 block">Email liên hệ</label>
        <input v-model="general.email" type="email" class="w-full border-2 border-black rounded p-2 font-medium focus:outline-none focus:shadow-neo transition-shadow" />
      </div>
      <div>
        <label class="font-bold text-sm mb-1 block">Ngôn ngữ mặc định</label>
        <select v-model="general.language" class="w-full border-2 border-black rounded p-2 font-medium bg-white">
          <option value="vi">Tiếng Việt (Vietnamese)</option>
          <option value="en">Tiếng Anh (English)</option>
        </select>
      </div>
      <div>
        <label class="font-bold text-sm mb-1 block">Múi giờ</label>
        <select v-model="general.timezone" class="w-full border-2 border-black rounded p-2 font-medium bg-white">
          <option value="gmt+7">(GMT+07:00) Bangkok, Hanoi, Jakarta</option>
          <option value="gmt+8">(GMT+08:00) Singapore</option>
        </select>
      </div>
    </div>

    <div class="border-t-2 border-dashed border-gray-300 pt-6">
      <div class="flex items-center justify-between">
        <div>
          <h4 class="font-bold text-lg">Chế độ bảo trì</h4>
          <p class="text-sm text-gray-500">Chỉ có Admin mới có thể truy cập trang web khi bật.</p>
        </div>
        <label class="relative cursor-pointer">
          <input type="checkbox" v-model="general.maintenanceMode" class="peer sr-only" />
          <div class="w-14 h-7 bg-gray-200 border-2 border-black rounded-full peer-checked:bg-neo-green transition-colors"></div>
          <div class="absolute top-1 left-1 bg-white border-2 border-black w-5 h-5 rounded-full transition-all peer-checked:translate-x-7"></div>
        </label>
      </div>
    </div>

    <div class="flex justify-end mt-6">
      <button @click="$emit('save')" class="bg-neo-green text-black px-6 py-2 border-2 border-black font-bold rounded shadow-neo hover:translate-y-[-2px] hover:shadow-neo-hover transition-all">
        Cập Nhật
      </button>
    </div>
  </NeoCard>
</template>

<script setup>
import NeoCard from '../common/NeoCard.vue';

defineProps({
  general: Object
});

defineEmits(['save']);
</script>