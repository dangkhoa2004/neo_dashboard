import { defineStore } from "pinia";
import { api } from "@/api";

export const usePackagesStore = defineStore("packages", {
  state: () => ({
    plans: [],
    comparisonData: [],
    faqs: [],
    isLoading: false,
    error: null,
  }),

  actions: {
    async fetchPackagesData() {
      this.isLoading = true;
      try {
        const data = await api.packages.getPackagesData();
        this.plans = data.plans;
        this.comparisonData = data.comparisonData;
        this.faqs = data.faqs;
      } catch (err) {
        console.error("Error fetching packages:", err);
        this.error = err;
      } finally {
        this.isLoading = false;
      }
    },

    async updatePlan(updatedPlan) {
      this.isLoading = true;
      try {
        // Gọi API update
        const result = await api.packages.updatePlan(updatedPlan);
        
        // Cập nhật State sau khi API thành công
        const index = this.plans.findIndex((p) => p.id === result.id);
        if (index !== -1) {
          this.plans[index] = result;
        }
        return true;
      } catch (err) {
        console.error("Update failed:", err);
        this.error = err;
        return false;
      } finally {
        this.isLoading = false;
      }
    },
  },
});