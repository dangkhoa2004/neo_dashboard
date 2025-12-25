<template>
  <NeoCard class="w-full lg:w-64 shrink-0 p-2 lg:sticky lg:top-24">
    <nav class="flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 no-scrollbar">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        @click="$emit('update:modelValue', tab.id)"
        class="flex items-center gap-3 px-4 py-3 rounded font-bold transition-all whitespace-nowrap border-2"
        :class="
          modelValue === tab.id
            ? 'bg-black text-white border-black shadow-neo-sm translate-x-[2px] translate-y-[2px] shadow-none'
            : 'bg-white text-gray-600 border-transparent hover:border-black hover:bg-gray-50'
        "
      >
        <i :class="tab.icon" class="w-5 text-center"></i>
        {{ tab.name }}
      </button>
    </nav>
  </NeoCard>
</template>

<script setup>
import NeoCard from '../common/NeoCard.vue';

defineProps({
  modelValue: String // currentTab
});

defineEmits(['update:modelValue']);

const tabs = [
  { id: "profile", name: "Hồ Sơ", icon: "fa-solid fa-user" },
  { id: "general", name: "Hệ Thống", icon: "fa-solid fa-server" },
  { id: "security", name: "Bảo Mật", icon: "fa-solid fa-lock" },
  { id: "api", name: "API & Dev", icon: "fa-solid fa-code" },
  { id: "danger", name: "Nguy Hiểm", icon: "fa-solid fa-triangle-exclamation" },
];
</script>