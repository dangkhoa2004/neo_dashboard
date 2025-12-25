<template>
  <div class="max-w-3xl mx-auto">
      <h2 class="font-black text-2xl uppercase text-center mb-6">Câu hỏi thường gặp</h2>
      <div class="space-y-4">
          <div v-for="(faq, idx) in localFaqs" :key="idx" class="group">
              <button 
                @click="toggle(idx)"
                class="w-full bg-white border-2 border-black p-4 flex justify-between items-center text-left shadow-neo group-hover:-translate-y-1 transition-transform"
                :class="{'bg-black text-black': faq.open}"
              >
                  <span class="font-bold text-lg">{{ faq.question }}</span>
                  <i class="fa-solid transition-transform duration-300" :class="faq.open ? 'fa-minus rotate-180' : 'fa-plus'"></i>
              </button>
              <div 
                 class="border-2 border-black border-t-0 bg-white p-4 transition-all duration-300 origin-top"
                 v-show="faq.open"
              >
                  <p class="text-gray-700 font-medium">{{ faq.answer }}</p>
              </div>
          </div>
      </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  faqs: { type: Array, default: () => [] }
});

// Tạo bản sao local để điều khiển trạng thái mở/đóng
const localFaqs = ref(props.faqs.map(f => ({ ...f, open: false })));

const toggle = (index) => {
    localFaqs.value[index].open = !localFaqs.value[index].open;
};
</script>