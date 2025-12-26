import { request } from "@/utils/apiClient";

// Mock Data
let plans = [
  {
    id: "basic",
    name: "Cơ bản",
    priceMonthly: "0đ",
    priceYearly: "0đ",
    saveAmount: "0đ",
    desc: "Dành cho cá nhân trải nghiệm hệ thống.",
    features: ["10 người dùng", "2GB lưu trữ", "Hỗ trợ Email", "Quảng cáo"],
    usersCount: 840,
    recommend: false,
    bgClass: "bg-white",
  },
  {
    id: "pro",
    name: "Chuyên nghiệp",
    priceMonthly: "199k",
    priceYearly: "1.9tr",
    saveAmount: "400k",
    desc: "Giải pháp hoàn hảo cho các đội nhóm nhỏ và startup.",
    features: ["Không giới hạn user", "100GB lưu trữ", "Hỗ trợ 24/7", "API Access", "Không quảng cáo"],
    usersCount: 320,
    recommend: true,
    bgClass: "bg-green-50",
  },
  {
    id: "enterprise",
    name: "Doanh nghiệp",
    priceMonthly: "999k",
    priceYearly: "9.9tr",
    saveAmount: "2tr",
    desc: "Dành cho tập đoàn lớn cần hiệu suất cao và bảo mật.",
    features: ["Mọi tính năng Pro", "Server riêng", "Hợp đồng SLA", "Đào tạo 1-1", "Backup từng giờ"],
    usersCount: 80,
    recommend: false,
    bgClass: "bg-blue-50",
  },
];

const comparisonData = [
  { feature: "Số lượng User", basic: "10", pro: "Không giới hạn", enterprise: "Không giới hạn" },
  { feature: "Dung lượng lưu trữ", basic: "2GB", pro: "100GB", enterprise: "1TB" },
  { feature: "Hỗ trợ kỹ thuật", basic: "Email", pro: "24/7 Chat", enterprise: "1-1 Manager" },
  { feature: "API Access", basic: false, pro: true, enterprise: true },
  { feature: "Tên miền riêng", basic: false, pro: true, enterprise: true },
  { feature: "SLA Uptime", basic: false, pro: "99.9%", enterprise: "99.99%" },
  { feature: "Server riêng", basic: false, pro: false, enterprise: true },
];

const faqs = [
  { question: "Tôi có thể nâng cấp gói sau này không?", answer: "Có, bạn có thể nâng cấp hoặc hạ cấp gói bất cứ lúc nào." },
  { question: "Có hỗ trợ hoàn tiền không?", answer: "Chúng tôi hỗ trợ hoàn tiền trong vòng 7 ngày đầu tiên." },
  { question: "Gói Doanh nghiệp có gì đặc biệt?", answer: "Server vật lý riêng biệt và cam kết bảo mật tuyệt đối." },
];

export default {
  getPackagesData() {
    return request({
      plans: [...plans],
      comparisonData,
      faqs,
    });
  },

  updatePlan(updatedPlan) {
    const index = plans.findIndex((p) => p.id === updatedPlan.id);
    if (index !== -1) {
      plans[index] = updatedPlan;
      return request(plans[index]);
    }
    return Promise.reject("Plan not found");
  },
};