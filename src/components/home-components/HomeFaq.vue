<template>
  <section class="relative border-b-2 border-black bg-[#F7F5F0] py-24 overflow-hidden">
    <div class="absolute inset-0 opacity-[0.05] pointer-events-none" 
         style="background-image: linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px); background-size: 32px 32px;">
    </div>

    <div class="mx-auto max-w-4xl px-6 relative z-10">
      
      <div class="text-center mb-16">
        <h2 :ref="el => revealElements.push(el)" class="reveal-on-scroll text-4xl md:text-5xl font-black uppercase">
          Câu hỏi <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">thường gặp</span>
        </h2>
      </div>

      <div class="flex flex-col gap-6"> <div v-for="(item, index) in faqs" :key="index" 
             :ref="(el) => { itemRefs[index] = el; revealElements.push(el) }" 
             class="group reveal-on-scroll scroll-mt-32 relative transition-all duration-300" 
             :class="activeIndex === index ? 'z-20' : 'z-0'"> 
             <div class="border-2 border-black bg-white transition-all duration-300 ease-out"
               :class="activeIndex === index 
                  ? 'shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -translate-y-1' 
                  : 'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5'">
            
            <button 
              @click="handleToggle(index)"
              class="w-full flex items-center justify-between p-6 md:p-8 text-left outline-none transition-colors duration-300"
              :class="activeIndex === index ? 'bg-gray-50' : 'bg-white hover:bg-gray-50'"
            >
              <div class="flex items-center gap-6 pr-4">
                <span class="text-3xl font-black text-black select-none min-w-[3rem]">
                  {{String(index + 1).padStart(2, '0')}}
                </span>

                <span class="text-lg md:text-xl font-black uppercase leading-tight text-black">
                  {{ item.q }}
                </span>
              </div>

              <div class="shrink-0 w-10 h-10 border-2 border-black flex items-center justify-center transition-all duration-300"
                   :class="activeIndex === index ? 'bg-[#22c55e] border-black' : 'bg-white border-black'">
                
                <Plus v-if="activeIndex !== index" class="h-6 w-6 text-black transition-transform duration-300" />
                <X v-else class="h-6 w-6 text-white transition-transform duration-300 scale-110" />
              </div>
            </button>

            <div class="grid transition-[grid-template-rows] duration-300 ease-out"
                 :class="activeIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'">
              <div class="overflow-hidden">
                <div class="w-full border-t-2 border-dashed border-black mx-auto opacity-100" 
                     v-if="activeIndex === index"></div>

                <div class="p-6 md:p-8">
                  <p class="font-bold text-gray-600 leading-relaxed text-base md:text-lg">
                    {{ item.a }}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      
    </div>
  </section>
</template>

<script setup>
import { ref, nextTick, onMounted, onUnmounted } from 'vue';
import { Plus, X } from 'lucide-vue-next'; // Import thêm icon X

const props = defineProps({
  faqs: { 
    type: Array, 
    default: () => [
      { q: "Chưa biết gì về code học được không?", a: "Được! Lộ trình Zero-to-Hero thiết kế riêng cho người trái ngành. Chúng tôi bắt đầu từ những khái niệm cơ bản nhất." },
      { q: "Thời gian học như thế nào?", a: "Linh hoạt hoàn toàn. Bạn có thể học bất cứ lúc nào, truy cập trọn đời vào kho tài liệu." },
      { q: "Có được cấp chứng chỉ không?", a: "Có. Sau khi hoàn thành các bài tập cuối khóa, bạn sẽ nhận được chứng chỉ xác nhận kỹ năng." }
    ] 
  },
  activeIndex: { type: [Number, null], default: null }
});

const emit = defineEmits(['toggle']);
const itemRefs = ref([]);
const revealElements = ref([]);

// --- 1. LOGIC SCROLL REVEAL (Fix lỗi opacity) ---
let observer = null;
onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealElements.value.forEach((el) => { if (el) observer.observe(el); });
});

onUnmounted(() => { if (observer) observer.disconnect(); });

// --- 2. LOGIC TOGGLE & SCROLL FIX ---
const handleToggle = async (index) => {
  if (props.activeIndex === index) {
    emit('toggle', null);
    return;
  }
  emit('toggle', index);
  
  await nextTick();
  
  const element = itemRefs.value[index];
  if (element) {
    // Delay nhỏ để đợi animation bắt đầu chạy rồi mới cuộn
    setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
    }, 100);
  }
};
</script>

<style scoped>
/* Animation hiện dần */
.reveal-on-scroll {
  opacity: 01;
  transform: translateY(10px);
  transition: opacity 0.8s ease-out, transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  will-change: opacity, transform;
}
.reveal-on-scroll.is-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>