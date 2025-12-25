<template>
  <NeoCard class="p-6 bg-blue-50">
    <h3 class="font-bold text-lg uppercase mb-6">Hệ Thống</h3>
    <div class="space-y-6">
      <div>
        <div class="flex justify-between mb-1">
          <span class="text-xs font-bold uppercase"
            ><i class="fa-solid fa-server mr-1"></i> CPU Load</span
          >
          <span class="text-xs font-bold">24%</span>
        </div>
        <div class="w-full bg-white border-2 border-black h-3">
          <div
            class="h-full bg-green-500 w-[24%] border-r-2 border-black"
          ></div>
        </div>
      </div>
      <div>
        <div class="flex justify-between mb-1">
          <span class="text-xs font-bold uppercase"
            ><i class="fa-solid fa-memory mr-1"></i> RAM Usage</span
          >
          <span class="text-xs font-bold text-red-600">88%</span>
        </div>
        <div class="w-full bg-white border-2 border-black h-3">
          <div class="h-full bg-red-500 w-[88%] border-r-2 border-black"></div>
        </div>
      </div>
      <div>
        <div class="flex justify-between mb-1">
          <span class="text-xs font-bold uppercase"
            ><i class="fa-solid fa-hard-drive mr-1"></i> Disk (SSD)</span
          >
          <span class="text-xs font-bold">45%</span>
        </div>
        <div class="w-full bg-white border-2 border-black h-3">
          <div
            class="h-full bg-yellow-400 w-[45%] border-r-2 border-black"
          ></div>
        </div>
      </div>
    </div>
    <div class="mt-6 pt-4 border-t-2 border-black border-dashed text-center">
      <span
        class="inline-block px-3 py-1 bg-green-100 border-2 border-black text-xs font-bold rounded-full text-green-800"
      >
        <i class="fa-solid fa-circle text-[6px] mr-1 align-middle"></i> All
        Systems Operational
      </span>
    </div>
  </NeoCard>
</template>

<script setup>
import NeoCard from "../common/NeoCard.vue";
</script>
