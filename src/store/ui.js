import { defineStore } from "pinia";

export const useUIStore = defineStore("ui", {
  state: () => ({
    isLoading: false,
    message: "Chờ một xíu he...",
  }),
  actions: {
    startLoading(msg = "Chờ một xíu he...") {
      this.message = msg;
      this.isLoading = true;
    },
    stopLoading() {
      this.isLoading = false;
    },
  },
});