import { defineStore } from "pinia";
import { api } from "@/api";

export const useSettingsStore = defineStore("settings", {
  state: () => ({
    profile: null, // Khởi tạo null để biết chưa load
    general: null,
    isLoading: false,
    error: null,
  }),

  actions: {
    async fetchSettings() {
      this.isLoading = true;
      try {
        const data = await api.settings.getSettings();
        this.profile = data.profile;
        this.general = data.general;
      } catch (err) {
        console.error("Error fetching settings:", err);
        this.error = err;
      } finally {
        this.isLoading = false;
      }
    },

    async saveProfile(profileData) {
      this.isLoading = true;
      try {
        const updatedProfile = await api.settings.updateProfile(profileData);
        this.profile = updatedProfile; // Cập nhật state
        return true;
      } catch (err) {
        this.error = err;
        return false;
      } finally {
        this.isLoading = false;
      }
    },

    async saveGeneral(generalData) {
      this.isLoading = true;
      try {
        const updatedGeneral = await api.settings.updateGeneral(generalData);
        this.general = updatedGeneral; // Cập nhật state
        return true;
      } catch (err) {
        this.error = err;
        return false;
      } finally {
        this.isLoading = false;
      }
    },
  },
});