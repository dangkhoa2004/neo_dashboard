<template>
  <div v-if="show" class="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" @click="$emit('close')"></div>
      
      <div class="bg-white w-full max-w-lg relative z-10 border-2 border-black shadow-neo-hover rounded-xl overflow-hidden animate-bounce-in">
          <div class="bg-neo-green p-4 border-b-2 border-black flex justify-between items-center">
              <h3 class="font-black text-xl uppercase">Sửa Gói: {{ localPlan.name }}</h3>
              <button @click="$emit('close')"><i class="fa-solid fa-times text-xl"></i></button>
          </div>
          
          <div class="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
              <div>
                  <label class="block font-bold text-sm mb-1">Tên gói</label>
                  <input v-model="localPlan.name" class="w-full border-2 border-black rounded p-2 font-bold">
              </div>
              <div class="grid grid-cols-2 gap-4">
                  <div>
                      <label class="block font-bold text-sm mb-1">Giá tháng</label>
                      <input v-model="localPlan.priceMonthly" class="w-full border-2 border-black rounded p-2">
                  </div>
                  <div>
                      <label class="block font-bold text-sm mb-1">Giá năm</label>
                      <input v-model="localPlan.priceYearly" class="w-full border-2 border-black rounded p-2">
                  </div>
              </div>
              <div>
                  <label class="block font-bold text-sm mb-1">Mô tả ngắn</label>
                  <textarea v-model="localPlan.desc" rows="2" class="w-full border-2 border-black rounded p-2"></textarea>
              </div>
              <div>
                  <label class="block font-bold text-sm mb-1">Tính năng (Mỗi dòng 1 cái)</label>
                  <textarea v-model="featuresText" rows="5" class="w-full border-2 border-black rounded p-2 font-mono text-sm"></textarea>
              </div>
          </div>

          <div class="p-4 border-t-2 border-black bg-gray-50 flex justify-end gap-3">
              <button @click="$emit('close')" class="px-4 py-2 font-bold border-2 border-transparent hover:border-black rounded">Hủy</button>
              <button @click="onSave" class="bg-black text-white px-6 py-2 font-bold border-2 border-black rounded shadow-neo hover:translate-y-[-2px] hover:shadow-neo-hover transition-all">Lưu Thay Đổi</button>
          </div>
      </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  show: Boolean,
  plan: Object
});

const emit = defineEmits(['close', 'save']);

const localPlan = ref({});
const featuresText = ref('');

// Theo dõi sự thay đổi của props để cập nhật data local
watch(() => props.plan, (newPlan) => {
    if (newPlan) {
        localPlan.value = JSON.parse(JSON.stringify(newPlan));
        featuresText.value = newPlan.features ? newPlan.features.join('\n') : '';
    }
}, { immediate: true });

const onSave = () => {
    // Chuyển text area về array
    localPlan.value.features = featuresText.value.split('\n').filter(line => line.trim() !== '');
    emit('save', localPlan.value);
};
</script>

<style scoped>
@keyframes bounce-in {
  0% { transform: scale(0.9); opacity: 0; }
  50% { transform: scale(1.02); }
  100% { transform: scale(1); opacity: 1; }
}
.animate-bounce-in {
  animation: bounce-in 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
</style>