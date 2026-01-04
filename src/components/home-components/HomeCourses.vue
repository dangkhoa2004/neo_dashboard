<template>
  <section class="bg-white border-b-2 border-black py-20">
    <div class="mx-auto max-w-7xl px-6">
      
      <div class="mb-10 flex flex-col lg:flex-row justify-between items-end gap-6">
        <div class="flex flex-col gap-6 w-full lg:w-auto">
           <h2 class="text-5xl font-black uppercase text-stroke-white reveal-on-scroll slide-right">Khóa học Pro</h2>
           <div class="flex flex-wrap gap-2 reveal-on-scroll slide-left">
             <button 
               v-for="cat in categories" :key="cat"
               @click="$emit('update:category', cat)" 
               class="px-4 py-2 font-bold border-2 border-black transition-all hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_#000]"
               :class="category === cat ? 'bg-[#00C16A] text-white shadow-[4px_4px_0px_0px_#000]' : 'bg-white text-black shadow-[2px_2px_0px_0px_#000]'"
             >
               {{ cat }}
             </button>
           </div>
        </div>

        <div class="relative w-full lg:w-72 reveal-on-scroll fade-in">
           <input 
             :value="search"
             @input="$emit('update:search', $event.target.value)"
             type="text" 
             placeholder="Tìm khóa học..." 
             class="w-full pl-4 pr-10 py-3 border-2 border-black font-bold focus:outline-none focus:shadow-[4px_4px_0px_0px_#000] bg-gray-50 focus:bg-white transition-all"
           />
           <svg xmlns="http://www.w3.org/2000/svg" class="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </div>
      </div>

      <div v-if="isLoading" class="text-center py-20 text-2xl font-black animate-pulse">
        ĐANG TẢI DỮ LIỆU...
      </div>

      <div v-else-if="courses.length === 0" class="text-center py-20 border-2 border-dashed border-gray-300 rounded-xl">
        <p class="text-xl font-bold text-gray-500">Không tìm thấy khóa học nào.</p>
        <button @click="$emit('update:category', 'Tất cả'); $emit('update:search', '')" class="mt-4 text-[#00C16A] font-black underline">Xóa bộ lọc</button>
      </div>

      <div v-else class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="(course, index) in courses" :key="course.id" class="reveal-on-scroll slide-up" :style="{ transitionDelay: `${index * 50}ms` }">
            <div class="group flex flex-col h-full overflow-hidden rounded-xl border-2 border-black bg-white shadow-[6px_6px_0px_0px_#000] transition-all duration-300 hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_#000]">
                <div class="relative h-56 overflow-hidden border-b-2 border-black bg-gray-200">
                    <img 
                      :src="getImageUrl(course.image)" 
                      :alt="'Hình ảnh khóa học ' + course.title"
                      class="h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-110 group-hover:grayscale-0" 
                    />
                    <div :class="`absolute right-2 top-2 rounded border border-black px-2 py-1 text-xs font-bold shadow-sm ${course.color || 'bg-white'}`">{{ course.tag }}</div>
                    <div class="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button class="bg-white text-black font-bold px-6 py-2 border-2 border-black shadow-[4px_4px_0px_0px_#000] hover:scale-105 transition-transform">XEM NGAY</button>
                    </div>
                </div>
                <div class="flex flex-1 flex-col p-5">
                    <h3 class="mb-2 text-2xl font-black leading-tight group-hover:text-[#00C16A] transition-colors line-clamp-2">{{ course.title }}</h3>
                    <p class="mb-4 text-sm font-bold text-gray-500">{{ course.instructor }}</p>
                    <div class="mt-auto flex items-center justify-between border-t-2 border-dashed border-gray-300 pt-4">
                        <span class="text-xl font-black text-[#00C16A]">{{ formatCurrency(course.price) }}đ</span>
                        <button 
                          @click.stop="$emit('add-to-cart', course)" 
                          class="rounded-full border-2 border-black bg-black p-2 text-white transition-all hover:bg-[#00C16A] hover:text-black hover:rotate-90"
                          aria-label="Thêm khóa học vào giỏ hàng"
                        >
                          <Plus class="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Plus } from 'lucide-vue-next';

defineProps({
  courses: { type: Array, default: () => [] },
  categories: { type: Array, default: () => [] },
  isLoading: Boolean,
  category: String, 
  search: String    
});

defineEmits(['update:category', 'update:search', 'add-to-cart']);

const formatCurrency = (val) => new Intl.NumberFormat('vi-VN').format(val);
const getImageUrl = (url) => url || '/author.avif';
</script>