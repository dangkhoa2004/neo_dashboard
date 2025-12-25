<template>
  <NeoCard class="p-6">
    <div class="flex justify-between items-start mb-6">
      <div>
        <h3 class="font-black text-xl uppercase border-b-2 border-black pb-2 inline-block">
          API Keys
        </h3>
        <p class="text-sm text-gray-600 mt-2">Dùng key này để tích hợp với các ứng dụng bên thứ 3.</p>
      </div>
      <button class="bg-black text-white text-sm px-4 py-2 border-2 border-black font-bold rounded hover:bg-gray-800">
        <i class="fa-solid fa-plus mr-1"></i> Tạo Key Mới
      </button>
    </div>

    <div class="space-y-4">
      <div class="border-2 border-black rounded p-4 bg-gray-50 relative group">
        <div class="flex justify-between items-center mb-2">
          <span class="font-bold">Production Key</span>
          <span class="text-xs font-bold bg-green-200 border-2 border-black px-2 rounded">Active</span>
        </div>
        <div class="flex gap-2">
          <input
            type="text"
            value="sk_live_51Mz..."
            readonly
            class="w-full bg-white border-2 border-gray-300 rounded p-2 font-mono text-sm text-gray-500 focus:outline-none"
          />
          <button
            @click="$emit('copy', 'sk_live_51Mz...')"
            class="px-3 border-2 border-black rounded bg-white hover:bg-neo-green font-bold transition-colors"
          >
            <i class="fa-regular fa-copy"></i>
          </button>
        </div>
        <p class="text-xs text-gray-500 mt-2">Được tạo vào: 20/01/2024 - Lần cuối dùng: 5 phút trước</p>
      </div>
    </div>
  </NeoCard>
</template>

<script setup>
import NeoCard from '../common/NeoCard.vue';

defineEmits(['copy']);
</script>