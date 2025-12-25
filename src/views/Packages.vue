<template>
  <div>
    <div class="mb-8">
      <h1 class="text-4xl font-black mb-1 flex items-center gap-2">
        <i class="fa-solid fa-cube text-3xl"></i> Gói Cước
      </h1>
      <p class="text-gray-600">Cấu hình các gói dịch vụ.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <NeoCard v-for="plan in plans" :key="plan.name" class="p-6 flex flex-col relative overflow-hidden">
        <div v-if="plan.recommend" class="absolute top-0 right-0 bg-neo-green border-l-2 border-b-2 border-black px-3 py-1 font-bold text-xs uppercase z-10">
          Phổ biến
        </div>

        <h3 class="text-2xl font-black uppercase mb-2">{{ plan.name }}</h3>
        <div class="text-4xl font-black mb-6">
          {{ plan.price }}<span class="text-lg text-gray-500 font-bold">/th</span>
        </div>

        <ul class="space-y-3 mb-8 flex-1">
          <li v-for="(feature, i) in plan.features" :key="i" class="flex items-center gap-3 font-medium">
             <div class="w-6 h-6 rounded-full border-2 border-black flex items-center justify-center bg-gray-100 shrink-0">
               <i class="fa-solid fa-check text-xs"></i>
             </div>
             {{ feature }}
          </li>
        </ul>

        <button class="w-full py-3 font-bold border-2 border-black rounded shadow-neo active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all"
          :class="plan.recommend ? 'bg-neo-green text-black' : 'bg-white hover:bg-gray-50'">
          Chỉnh sửa
        </button>
      </NeoCard>
    </div>
  </div>
</template>

<script setup>
import NeoCard from '../components/NeoCard.vue';

const plans = [
  { 
    name: 'Cơ bản', 
    price: '0đ', 
    features: ['10 người dùng', '2GB lưu trữ', 'Hỗ trợ Email'], 
    recommend: false 
  },
  { 
    name: 'Chuyên nghiệp', 
    price: '199k', 
    features: ['Không giới hạn người dùng', '100GB lưu trữ', 'Hỗ trợ 24/7', 'API Access'], 
    recommend: true 
  },
  { 
    name: 'Doanh nghiệp', 
    price: '999k', 
    features: ['Mọi tính năng Pro', 'Server riêng', 'Hợp đồng SLA', 'Đào tạo 1-1'], 
    recommend: false 
  },
];
</script>