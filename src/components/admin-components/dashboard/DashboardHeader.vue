<template>
  <div
    class="flex flex-col md:flex-row justify-between items-start md:items-end gap-4"
  >
    <div>
      <h1 class="text-4xl font-black mb-2 flex items-center gap-2">
        <span class="relative">
          <i class="fa-solid fa-table-columns text-3xl z-10 relative"></i>
          <span class="absolute -bottom-1 -right-1 w-full h-2 z-0"></span>
        </span>
        Dashboard
      </h1>
      <p class="text-gray-600 font-medium">
        Tổng quan hoạt động hệ thống.
        <span class="font-bold text-black"
          >Cập nhật lần cuối: {{ currentTime }}</span
        >
      </p>
    </div>

    <div
      class="flex bg-white border-2 border-black rounded-lg p-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
    >
      <button
        v-for="period in ['Hôm nay', 'Tuần này', 'Tháng này', 'Năm nay']"
        :key="period"
        @click="$emit('update:period', period)"
        :class="[
          'px-4 py-2 font-bold text-sm rounded transition-all',
          selectedPeriod === period
            ? 'bg-black text-white'
            : 'hover:bg-gray-100 text-gray-600',
        ]"
      >
        {{ period }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

defineProps({
  selectedPeriod: String,
});

defineEmits(["update:period"]);

const currentTime = ref("");

onMounted(() => {
  const now = new Date();
  currentTime.value = now.toLocaleString("vi-VN", {
    hour: "2-digit",
    minute: "2-digit",
    day: "2-digit",
    month: "2-digit",
  });
});
</script>
