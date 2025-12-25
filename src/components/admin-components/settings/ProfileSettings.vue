<template>
  <NeoCard class="p-6">
    <h3 class="font-black text-xl uppercase mb-6 border-b-2 border-black pb-2">
      Hồ sơ cá nhân
    </h3>

    <div class="flex items-center gap-6 mb-8">
      <div class="relative group">
        <div class="w-24 h-24 rounded-full border-2 border-black overflow-hidden bg-gray-200">
          <img :src="profile.avatar" alt="Avatar" class="w-full h-full object-cover" />
        </div>
        <button
          @click="triggerFileInput"
          class="absolute bottom-0 right-0 bg-neo-green border-2 border-black px-1.5 rounded-md shadow-sm hover:scale-110 transition-transform"
        >
          <i class="fa-solid fa-camera text-xs"></i>
        </button>
        <input type="file" ref="fileInput" class="hidden" @change="handleAvatarChange" />
      </div>
      <div>
        <h4 class="font-bold text-lg">Ảnh đại diện</h4>
        <p class="text-sm text-gray-500 mb-2">Hỗ trợ định dạng PNG, JPG. Tối đa 2MB.</p>
        <div class="flex gap-2">
          <button @click="triggerFileInput" class="text-xs font-bold border-2 border-black px-3 py-1 rounded hover:bg-gray-100">
            Tải ảnh lên
          </button>
          <button class="text-xs font-bold text-red-600 border-2 border-transparent px-3 py-1 rounded hover:bg-red-50">
            Xóa
          </button>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
      <div class="group">
        <label class="font-bold text-sm mb-1 block">Họ và tên</label>
        <div class="relative">
          <i class="fa-solid fa-user absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
          <input v-model="profile.name" type="text" class="w-full border-2 border-black rounded p-2 pl-9 font-medium focus:outline-none focus:shadow-neo transition-shadow" />
        </div>
      </div>
      <div class="group">
        <label class="font-bold text-sm mb-1 block">Chức danh</label>
        <div class="relative">
          <i class="fa-solid fa-briefcase absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
          <input v-model="profile.title" type="text" class="w-full border-2 border-black rounded p-2 pl-9 font-medium focus:outline-none focus:shadow-neo transition-shadow" />
        </div>
      </div>
    </div>

    <div class="mb-6">
      <label class="font-bold text-sm mb-1 block">Giới thiệu ngắn (Bio)</label>
      <textarea v-model="profile.bio" rows="3" class="w-full border-2 border-black rounded p-2 font-medium focus:outline-none focus:shadow-neo transition-shadow"></textarea>
      <p class="text-xs text-right text-gray-400 mt-1">{{ profile.bio.length }}/200 ký tự</p>
    </div>

    <div class="flex justify-end">
      <button @click="$emit('save')" class="bg-black text-white px-6 py-2 border-2 border-black font-bold rounded shadow-neo hover:translate-y-[-2px] hover:shadow-neo-hover active:translate-y-[1px] active:shadow-none transition-all">
        Lưu Hồ Sơ
      </button>
    </div>
  </NeoCard>
</template>

<script setup>
import { ref } from 'vue';
import NeoCard from '../common/NeoCard.vue';

const props = defineProps({
  profile: Object
});

const emit = defineEmits(['save', 'avatar-change']);

const fileInput = ref(null);

const triggerFileInput = () => {
  fileInput.value.click();
};

const handleAvatarChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    const newAvatarUrl = URL.createObjectURL(file);
    emit('avatar-change', newAvatarUrl);
  }
};
</script>