<template>
  <NeoCard class="mb-12 overflow-hidden">
      <div class="p-6 border-b-2 border-black bg-gray-50">
          <h2 class="font-black text-2xl uppercase">So Sánh Tính Năng</h2>
      </div>
      <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse min-w-[600px]">
              <thead>
                  <tr class="bg-black text-white">
                      <th class="p-4 w-1/3">Tính năng</th>
                      <th v-for="plan in plans" :key="plan.id" class="p-4 text-center w-1/5 border-l-2 border-gray-700">
                          {{ plan.name }}
                      </th>
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="(row, idx) in comparisonData" :key="idx" class="border-b-2 border-black last:border-0 hover:bg-gray-50">
                      <td class="p-4 font-bold border-r-2 border-black">{{ row.feature }}</td>
                      <td v-for="plan in plans" :key="plan.id" class="p-4 text-center border-r-2 border-black last:border-0">
                          <i v-if="row[plan.id] === true" class="fa-solid fa-check text-neo-green text-xl drop-shadow-sm"></i>
                          <i v-else-if="row[plan.id] === false" class="fa-solid fa-minus text-gray-300"></i>
                          <span v-else class="font-bold text-sm">{{ row[plan.id] }}</span>
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
  </NeoCard>
</template>

<script setup>
import NeoCard from '../common/NeoCard.vue';

defineProps({
  plans: { type: Array, required: true },
  comparisonData: { type: Array, required: true }
});
</script>