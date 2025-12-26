import { defineStore } from "pinia";
import { api } from "@/api";

export const useCouponsStore = defineStore("coupons", {
  state: () => ({
    coupons: [],
    isLoading: false,
    error: null,
  }),

  getters: {
    // Đếm số lượng đang hoạt động
    activeCount: (state) =>
      state.coupons.filter((c) => c.status === "active").length,
    
    // Tính tổng lượt sử dụng
    totalUsage: (state) =>
      state.coupons.reduce((sum, c) => sum + c.usage, 0),
  },

  actions: {
    async fetchCoupons() {
      this.isLoading = true;
      try {
        const data = await api.coupons.getCoupons();
        this.coupons = data;
      } catch (err) {
        console.error("Error fetching coupons:", err);
        this.error = err;
      } finally {
        this.isLoading = false;
      }
    },

    async addCoupon(couponData) {
      this.isLoading = true;
      try {
        const newCoupon = await api.coupons.createCoupon(couponData);
        this.coupons.unshift(newCoupon);
        return true;
      } catch (err) {
        console.error("Error adding coupon:", err);
        this.error = err;
        return false;
      } finally {
        this.isLoading = false;
      }
    },
  },
});