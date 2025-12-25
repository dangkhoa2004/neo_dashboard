<template>
  <NeoCard class="p-6 md:col-span-2">
      <h3 class="font-bold text-lg uppercase mb-4">Thao Tác Nhanh</h3>
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <button v-for="action in actions" :key="action.label" 
            class="flex flex-col items-center justify-center gap-2 p-4 border-2 border-black rounded bg-white hover:bg-neo-green shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all group">
            <i :class="action.icon" class="text-2xl group-hover:scale-110 transition-transform"></i>
            <span class="text-xs font-bold uppercase text-center">{{ action.label }}</span>
        </button>
      </div>
  </NeoCard>
</template>

<script setup>
import NeoCard from '../common/NeoCard.vue';

defineProps({
  actions: Array
});
</script>