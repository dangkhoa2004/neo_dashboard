<template>
  <div>
    <div v-if="packagesStore.isLoading && packagesStore.plans.length === 0" class="flex justify-center py-12">
       
    </div>

    <div v-else>
      <PackageStats />

      <PackageHeader v-model:isYearly="isYearly" />

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 items-start">
        <PricingCard
          v-for="plan in packagesStore.plans"
          :key="plan.id"
          :plan="plan"
          :is-yearly="isYearly"
          @edit="openEditModal"
        />
      </div>

      <ComparisonTable 
        :plans="packagesStore.plans" 
        :comparison-data="packagesStore.comparisonData" 
      />

      <PackageFAQ :faqs="packagesStore.faqs" />
    </div>

    <PlanModal
      :show="showModal"
      :plan="editingPlan"
      @close="showModal = false"
      @save="onSavePlan"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { usePackagesStore } from "@/store/modules/packages";

// Import Components
import {
  PackageStats,
  PackageHeader,
  PricingCard,
  ComparisonTable,
  PackageFAQ,
  PlanModal,
} from "../components/admin-components/packages";

// --- Store ---
const packagesStore = usePackagesStore();

// --- UI State (Local State) ---
// Những state này chỉ phục vụ hiển thị tức thời, không cần lưu vào store
const isYearly = ref(false);
const showModal = ref(false);
const editingPlan = ref({});

// --- Lifecycle ---
onMounted(() => {
  packagesStore.fetchPackagesData();
});

// --- Methods ---
const openEditModal = (plan) => {
  editingPlan.value = { ...plan }; // Clone object để tránh mutate trực tiếp state khi chưa save
  showModal.value = true;
};

const onSavePlan = async (updatedPlan) => {
  const success = await packagesStore.updatePlan(updatedPlan);
  if (success) {
    showModal.value = false;
    // Có thể thêm Toast thông báo thành công ở đây nếu muốn
  } else {
    alert("Có lỗi xảy ra khi cập nhật!");
  }
};
</script>