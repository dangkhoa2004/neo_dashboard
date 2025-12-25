<template>
  <div>
    <div class="flex justify-between items-center mb-8">
      <div>
        <h1 class="text-4xl font-black mb-1 flex items-center gap-2">
          <i class="fa-solid fa-ticket text-3xl"></i> Mã Giảm Giá
        </h1>
        <p class="text-gray-600">Quản lý các chương trình khuyến mãi.</p>
      </div>
      <button class="bg-black text-white px-6 py-2 font-bold rounded shadow-neo hover:translate-y-[-2px] transition-transform">
        <i class="fa-solid fa-plus mr-2"></i> Tạo mã
      </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="coupon in coupons" :key="coupon.code" class="relative group">
        <NeoCard class="p-0 flex flex-col h-full border-2 border-black">
          <div class="bg-neo-green p-4 border-b-2 border-black border-dashed flex justify-between items-center">
            <span class="font-black text-xl tracking-wider">{{ coupon.code }}</span>
            <button class="w-8 h-8 bg-white border-2 border-black rounded flex items-center justify-center hover:scale-110 transition-transform">
              <i class="fa-regular fa-copy"></i>
            </button>
          </div>
          <div class="p-5 bg-white rounded-b-xl flex-1">
            <div class="text-3xl font-black mb-2">-{{ coupon.discount }}%</div>
            <p class="text-gray-600 text-sm font-medium mb-4">Áp dụng cho toàn bộ gói Pro và Enterprise.</p>
            
            <div class="flex justify-between items-end mt-auto">
              <div>
                <div class="text-[10px] uppercase font-bold text-gray-500">Hết hạn</div>
                <div class="font-bold">{{ coupon.expiry }}</div>
              </div>
              <div class="px-2 py-1 border-2 border-black text-xs font-bold rounded bg-gray-100">
                {{ coupon.usage }} lượt dùng
              </div>
            </div>
          </div>
        </NeoCard>
      </div>
    </div>
  </div>
</template>

<script setup>
import NeoCard from '../components/NeoCard.vue';

const coupons = [
  { code: 'SUMMER2024', discount: 20, expiry: '30/08/2024', usage: 154 },
  { code: 'WELCOME10', discount: 10, expiry: 'Vô thời hạn', usage: 1205 },
  { code: 'BLACKFRIDAY', discount: 50, expiry: '25/11/2024', usage: 0 },
  { code: 'NAMNCN_VIP', discount: 100, expiry: '01/01/2025', usage: 1 },
];
</script>