// src/store/modules/dashboard.js
import { defineStore } from "pinia";
import { api } from "../../api/index";

export const useDashboardStore = defineStore("dashboard", {
  state: () => ({
    stats: [],
    chartData: [],
    recentOrders: [],
    activities: [],
    todos: [],
    isLoading: false,
    error: null,
  }),

  actions: {
    async fetchDashboardData() {
      this.isLoading = true;
      this.error = null;
      try {
        // Gọi API thông qua api index
        const response = await api.dashboard.getDashboardData();
        
        // Cập nhật State
        this.stats = response.stats;
        this.chartData = response.chartData;
        this.recentOrders = response.recentOrders;
        this.activities = response.activities;
        this.todos = response.todos;
      } catch (err) {
        console.error("Failed to load dashboard data:", err);
        this.error = err;
      } finally {
        this.isLoading = false;
      }
    },

    // Ví dụ action update todo (Client side logic trước khi có API thật)
    toggleTodo(id) {
      const todo = this.todos.find((t) => t.id === id);
      if (todo) {
        todo.done = !todo.done;
      }
    },
  },
});