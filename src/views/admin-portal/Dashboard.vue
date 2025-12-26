<template>
  <div class="space-y-8">
    <DashboardHeader
      :selectedPeriod="selectedPeriod"
      @update:period="selectedPeriod = $event"
    />

    <StatsOverview :stats="dashboardStore.stats" />

    <div class="grid grid-cols-1 xl:grid-cols-3 gap-6">
      <RevenueChart :data="dashboardStore.chartData" />
      <MonthlyTargets />
    </div>

    <div class="grid grid-cols-1 xl:grid-cols-3 gap-6">
      <RecentOrders :orders="dashboardStore.recentOrders" />
      <ActivityFeed :activities="dashboardStore.activities" />
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      <QuickActions :actions="quickActions" />
      <AdminNotes :todos="dashboardStore.todos" />
      <SystemStatus />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useDashboardStore } from "@/store/modules/dashboard";

import {
  DashboardHeader,
  StatsOverview,
  RevenueChart,
  MonthlyTargets,
  RecentOrders,
  ActivityFeed,
  QuickActions,
  AdminNotes,
  SystemStatus,
} from "@/components/admin-components/dashboard";

const selectedPeriod = ref("Tháng này");
const dashboardStore = useDashboardStore();

const quickActions = [
  { label: "Thêm User", icon: "fa-solid fa-user-plus" },
  { label: "Tạo Mã", icon: "fa-solid fa-ticket" },
  { label: "Gửi Email", icon: "fa-solid fa-envelope" },
  { label: "Xuất PDF", icon: "fa-solid fa-file-pdf" },
  { label: "Backup DB", icon: "fa-solid fa-database" },
  { label: "Logs", icon: "fa-solid fa-terminal" },
  { label: "Phân Quyền", icon: "fa-solid fa-shield-halved" },
  { label: "Cài Đặt", icon: "fa-solid fa-gear" },
];

onMounted(() => {
  dashboardStore.fetchDashboardData();
});
</script>