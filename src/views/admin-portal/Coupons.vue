<template>
  <div>
    <div v-if="couponsStore.isLoading && couponsStore.coupons.length === 0" class="flex justify-center py-12">
      
    </div>

    <div v-else>
      <CouponStats
        :total="couponsStore.coupons.length"
        :active="couponsStore.activeCount"
        :usage="couponsStore.totalUsage"
      />

      <CouponHeader @open-modal="showModal = true" />

      <CouponToolbar v-model:search="searchQuery" v-model:status="filterStatus" />

      <CouponGrid :coupons="filteredCoupons" @copy="handleCopy" />
    </div>

    <CouponModal
      :is-open="showModal"
      @close="showModal = false"
      @save="onSaveCoupon"
    />

    <div
      v-if="toastMsg"
      class="fixed bottom-6 right-6 bg-black text-white px-6 py-3 rounded border-2 border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] flex items-center gap-3 animate-bounce-in z-50"
    >
      <i class="fa-solid fa-circle-check text-neo-green"></i>
      <span class="font-bold">{{ toastMsg }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useCouponsStore } from "@/store/modules/coupons";

// Imports Components
import {
  CouponStats,
  CouponHeader,
  CouponToolbar,
  CouponGrid,
  CouponModal,
} from "../../components/admin-components/coupons";

// --- Store ---
const couponsStore = useCouponsStore();

// --- UI State ---
const searchQuery = ref("");
const filterStatus = ref("all");
const showModal = ref(false);
const toastMsg = ref(null);

// --- Lifecycle ---
onMounted(() => {
  couponsStore.fetchCoupons();
});

// --- Computed ---
// Filter logic vẫn giữ ở UI vì nó phụ thuộc vào input search của người dùng
const filteredCoupons = computed(() => {
  return couponsStore.coupons.filter((coupon) => {
    const matchesSearch = coupon.code
      .toLowerCase()
      .includes(searchQuery.value.toLowerCase());
    const matchesStatus =
      filterStatus.value === "all" || coupon.status === filterStatus.value;
    return matchesSearch && matchesStatus;
  });
});

// --- Methods ---

const handleCopy = (code) => {
  navigator.clipboard.writeText(code);
  showToast(`Đã sao chép mã: ${code}`);
};

const onSaveCoupon = async (couponData) => {
  const success = await couponsStore.addCoupon(couponData);
  if (success) {
    showModal.value = false;
    showToast("Tạo mã giảm giá thành công!");
  } else {
    showToast("Có lỗi xảy ra, vui lòng thử lại!");
  }
};

const showToast = (msg) => {
  toastMsg.value = msg;
  setTimeout(() => (toastMsg.value = null), 3000);
};
</script>

<style scoped>
@keyframes bounce-in {
  0% {
    transform: scale(0.9);
    opacity: 0; /* Đã sửa lỗi chính tả ofpacity */
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
.animate-bounce-in {
  animation: bounce-in 0.3s ease-out;
}
</style>