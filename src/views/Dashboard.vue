<template>
  <div class="space-y-8">
    <DashboardHeader
      :selectedPeriod="selectedPeriod"
      @update:period="selectedPeriod = $event"
    />

    <StatsOverview :stats="stats" />

    <div class="grid grid-cols-1 xl:grid-cols-3 gap-6">
      <RevenueChart :data="chartData" />
      <MonthlyTargets />
    </div>

    <div class="grid grid-cols-1 xl:grid-cols-3 gap-6">
      <RecentOrders :orders="recentOrders" />
      <ActivityFeed :activities="activities" />
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      <QuickActions :actions="quickActions" />
      <AdminNotes :todos="todos" />
      <SystemStatus />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Import Components
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
} from "../components/admin-components/dashboard";

// --- State ---
const selectedPeriod = ref("Tháng này");

// --- Mock Data ---
const stats = [
  {
    title: "Tổng doanh thu",
    value: "1.2 Tỷ",
    desc: "so với tháng trước",
    trend: 20.1,
    icon: "fa-solid fa-dollar-sign",
    isGreen: true,
  },
  {
    title: "Đăng ký mới",
    value: "450",
    desc: "so với tháng trước",
    trend: 180.1,
    icon: "fa-solid fa-user-plus",
  },
  {
    title: "Thành viên",
    value: "8.2k",
    desc: "so với tháng trước",
    trend: 19.0,
    icon: "fa-solid fa-hard-drive",
  },
  {
    title: "Tỷ lệ thoát",
    value: "12%",
    desc: "Cần tối ưu thêm",
    trend: -2.4,
    icon: "fa-solid fa-arrow-right-from-bracket",
  },
];

const chartData = [
  { month: "T1", amount: 40, height: 40 },
  { month: "T2", amount: 55, height: 55 },
  { month: "T3", amount: 30, height: 30 },
  { month: "T4", amount: 35, height: 35 },
  { month: "T5", amount: 85, height: 85 },
  { month: "T6", amount: 80, height: 80 },
  { month: "T7", amount: 60, height: 60 },
  { month: "T8", amount: 35, height: 35 },
  { month: "T9", amount: 30, height: 30 },
  { month: "T10", amount: 50, height: 50 },
  { month: "T11", amount: 40, height: 40 },
  { month: "T12", amount: 75, height: 75 },
];

const recentOrders = [
  {
    id: "9001",
    customer: "Hoàng Long",
    product: "Khóa học VueJS Master",
    date: "26/12/2025",
    status: "Completed",
    amount: "1.200k",
  },
  {
    id: "9002",
    customer: "Mai Anh",
    product: "Gói Pro 1 Năm",
    date: "25/12/2025",
    status: "Pending",
    amount: "2.500k",
  },
  {
    id: "9003",
    customer: "Tuấn Vũ",
    product: "Ebook UI/UX",
    date: "25/12/2025",
    status: "Cancelled",
    amount: "150k",
  },
  {
    id: "9004",
    customer: "Linh Chi",
    product: "Khóa học React",
    date: "24/12/2025",
    status: "Completed",
    amount: "1.200k",
  },
  {
    id: "9005",
    customer: "Đức Minh",
    product: "Mentoring 1-1",
    date: "24/12/2025",
    status: "Completed",
    amount: "5.000k",
  },
];

const activities = [
  {
    time: "10:30 AM",
    title: "Người dùng mới",
    desc: "Nguyễn Văn A vừa đăng ký tài khoản.",
    icon: "fa-solid fa-user",
  },
  {
    time: "09:15 AM",
    title: "Thanh toán thành công",
    desc: "Đơn hàng #9001 đã được xác nhận.",
    icon: "fa-solid fa-cart-shopping",
  },
  {
    time: "Yesterday",
    title: "Cập nhật hệ thống",
    desc: "Server bảo trì định kỳ hoàn tất.",
    icon: "fa-solid fa-server",
  },
  {
    time: "Yesterday",
    title: "Báo cáo lỗi",
    desc: "3 người dùng báo lỗi tải trang.",
    icon: "fa-solid fa-triangle-exclamation",
  },
  {
    time: "23 Dec",
    title: "Khuyến mãi kết thúc",
    desc: "Chiến dịch Black Friday đã đóng.",
    icon: "fa-solid fa-tag",
  },
  {
    time: "22 Dec",
    title: "Mã giảm giá mới",
    desc: "Admin tạo mã XMAS2025.",
    icon: "fa-solid fa-ticket",
  },
];

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

const todos = ref([
  { id: 1, text: "Kiểm tra báo cáo tài chính T12", done: false },
  { id: 2, text: "Phê duyệt nội dung khóa học mới", done: false },
  { id: 3, text: "Gọi điện CSKH VIP", done: true },
  { id: 4, text: "Backup dữ liệu tuần", done: true },
]);
</script>
