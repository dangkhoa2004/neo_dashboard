import { request } from "@/utils/apiClient";

// Mock Data
let coupons = [
  { code: "SUMMER2024", type: "percent", value: 20, desc: "Giảm giá chào hè.", expiry: "2024-08-30", usage: 154, limit: 500, status: "expired" },
  { code: "WELCOME10", type: "fixed", value: 50, desc: "Voucher cho thành viên mới.", expiry: "", usage: 1205, limit: null, status: "active" },
  { code: "BLACKFRIDAY", type: "percent", value: 50, desc: "Siêu sale Black Friday.", expiry: "2024-11-25", usage: 0, limit: 100, status: "scheduled" },
  { code: "DangKhoa_VIP", type: "percent", value: 100, desc: "Miễn phí trọn đời cho Admin.", expiry: "2025-01-01", usage: 1, limit: 5, status: "active" },
  { code: "FLASH_SALE", type: "percent", value: 30, desc: "Flash sale khung giờ vàng.", expiry: "2025-12-31", usage: 45, limit: 100, status: "active" },
];

export default {
  getCoupons() {
    return request([...coupons]);
  },

  createCoupon(data) {
    const newCoupon = {
      ...data,
      code: data.code.toUpperCase(),
      usage: 0,
      status: "active",
    };
    coupons.unshift(newCoupon);
    return request(newCoupon);
  },
};