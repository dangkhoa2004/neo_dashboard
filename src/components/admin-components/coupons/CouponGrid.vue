<template>
  <div v-if="coupons.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <CouponCard 
      v-for="coupon in coupons" 
      :key="coupon.code" 
      :coupon="coupon" 
      @copy="$emit('copy', $event)"
    />
  </div>

  <div v-else class="flex flex-col items-center justify-center py-20 border-2 border-black border-dashed rounded-xl bg-gray-50">
     <i class="fa-solid fa-ticket text-6xl text-gray-300 mb-4"></i>
     <h3 class="font-bold text-xl text-gray-500">Không tìm thấy mã giảm giá nào.</h3>
  </div>
</template>

<script setup>
import CouponCard from './CouponCard.vue';

defineProps({
  coupons: { type: Array, required: true }
});

defineEmits(['copy']);
</script>