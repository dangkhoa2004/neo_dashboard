<template>
  <div>
    <CouponStats
      :total="coupons.length"
      :active="activeCount"
      :usage="totalUsage"
    />

    <CouponHeader @open-modal="showModal = true" />

    <CouponToolbar v-model:search="searchQuery" v-model:status="filterStatus" />

    <CouponGrid :coupons="filteredCoupons" @copy="handleCopy" />

    <CouponModal
      :is-open="showModal"
      @close="showModal = false"
      @save="handleSave"
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
import { ref, computed } from "vue";

// Imports
import {
  CouponStats,
  CouponHeader,
  CouponToolbar,
  CouponGrid,
  CouponModal,
} from "../components/admin-components/coupons";

// --- State ---
const searchQuery = ref("");
const filterStatus = ref("all");
const showModal = ref(false);
const toastMsg = ref(null);

// --- Mock Data ---
const coupons = ref([
  {
    code: "SUMMER2024",
    type: "percent",
    value: 20,
    desc: "Giảm giá chào hè cho toàn bộ khóa học.",
    expiry: "2024-08-30",
    usage: 154,
    limit: 500,
    status: "expired",
  },
  {
    code: "WELCOME10",
    type: "fixed",
    value: 50,
    desc: "Voucher 50k cho thành viên mới đăng ký lần đầu.",
    expiry: "",
    usage: 1205,
    limit: null,
    status: "active",
  },
  {
    code: "BLACKFRIDAY",
    type: "percent",
    value: 50,
    desc: "Siêu sale Black Friday lớn nhất năm.",
    expiry: "2024-11-25",
    usage: 0,
    limit: 100,
    status: "scheduled",
  },
  {
    code: "DangKhoa_VIP",
    type: "percent",
    value: 100,
    desc: "Miễn phí trọn đời cho Admin.",
    expiry: "2025-01-01",
    usage: 1,
    limit: 5,
    status: "active",
  },
  {
    code: "FLASH_SALE",
    type: "percent",
    value: 30,
    desc: "Flash sale khung giờ vàng 12h-14h.",
    expiry: "2025-12-31",
    usage: 45,
    limit: 100,
    status: "active",
  },
]);

// --- Computed ---
const activeCount = computed(
  () => coupons.value.filter((c) => c.status === "active").length
);
const totalUsage = computed(() =>
  coupons.value.reduce((sum, c) => sum + c.usage, 0)
);

const filteredCoupons = computed(() => {
  return coupons.value.filter((coupon) => {
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

const handleSave = (couponData) => {
  coupons.value.unshift({
    ...couponData,
    code: couponData.code.toUpperCase(),
    usage: 0,
    status: "active",
  });
  showModal.value = false;
  showToast("Tạo mã giảm giá thành công!");
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
    ofpacity: 0;
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
