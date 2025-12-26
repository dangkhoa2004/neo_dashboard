import { defineStore } from "pinia";
import { api } from "../../api/index";

export const useMembersStore = defineStore("members", {
  state: () => ({
    users: [],
    isLoading: false,
    error: null,
  }),

  getters: {
    // Getter tính toán số lượng VIP
    vipCount: (state) =>
      state.users.filter((u) => u.plan === "Pro" || u.plan === "Enterprise")
        .length,
  },

  actions: {
    async fetchMembers() {
      this.isLoading = true;
      try {
        const data = await api.members.getMembers();
        this.users = data;
      } catch (err) {
        this.error = err;
        console.error("Error fetching members:", err);
      } finally {
        this.isLoading = false;
      }
    },

    async addMember(formData) {
      this.isLoading = true;
      try {
        const newUser = await api.members.createMember(formData);
        this.users.unshift(newUser); // Cập nhật state UI ngay lập tức
        return true; // Trả về true nếu thành công
      } catch (err) {
        this.error = err;
        return false;
      } finally {
        this.isLoading = false;
      }
    },

    async updateMember(formData) {
      this.isLoading = true;
      try {
        const updatedUser = await api.members.updateMember(formData);
        const index = this.users.findIndex((u) => u.id === updatedUser.id);
        if (index !== -1) {
          this.users[index] = updatedUser;
        }
        return true;
      } catch (err) {
        this.error = err;
        return false;
      } finally {
        this.isLoading = false;
      }
    },

    async deleteMember(id) {
      // Optimistic update: Xóa trên UI trước cho mượt (hoặc đợi API tùy bạn)
      // Ở đây mình đợi API trả về ok mới xóa
      try {
        await api.members.deleteMember(id);
        this.users = this.users.filter((u) => u.id !== id);
        return true;
      } catch (err) {
        console.error(err);
        return false;
      }
    },

    async deleteSelectedMembers(ids) {
      try {
        await api.members.bulkDeleteMembers(ids);
        this.users = this.users.filter((u) => !ids.includes(u.id));
        return true;
      } catch (err) {
        console.error(err);
        return false;
      }
    },
  },
});