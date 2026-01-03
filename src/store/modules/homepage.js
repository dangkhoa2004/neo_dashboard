import { defineStore } from "pinia";
import { api } from "../../api/index"; 

export const useHomePagesStore = defineStore("homepages", {
  // 1. STATE: Dữ liệu gốc (Source of Truth)
  state: () => ({
    allCourses: [],       // QUAN TRỌNG: Đổi tên thành allCourses để không trùng với Getter
    pricingPlans: [],
    faqs: [],
    cart: [],
    
    // State cho bộ lọc (Two-way binding)
    selectedCategory: 'Tất cả', 
    searchQuery: '',      
    
    isLoading: false,
    error: null,
  }),

  // 2. GETTERS: Logic lọc tính toán tự động
  getters: {
    // Đây là biến 'courses' mà giao diện sẽ dùng
    courses: (state) => {
      let result = state.allCourses;

      // Lọc theo Category
      if (state.selectedCategory !== 'Tất cả') {
        const catKey = state.selectedCategory.toLowerCase().trim();
        result = result.filter(c => c.tag && c.tag.toLowerCase() === catKey);
      }

      // Lọc theo Search
      if (state.searchQuery) {
        const searchKey = state.searchQuery.toLowerCase().trim();
        result = result.filter(c => 
          (c.title && c.title.toLowerCase().includes(searchKey)) || 
          (c.instructor && c.instructor.toLowerCase().includes(searchKey))
        );
      }

      return result;
    },

    cartCount: (state) => state.cart.length,
    cartTotal: (state) => state.cart.reduce((total, item) => total + item.price, 0),
  },

  // 3. ACTIONS
  actions: {
    async fetchAllHomeData() {
      this.isLoading = true;
      try {
        const data = await api.homepage.getAllHomeData();
        
        // Lưu vào kho tổng allCourses
        this.allCourses = data.courses; 
        this.pricingPlans = data.pricingPlans;
        this.faqs = data.faqs;
        
        await this.fetchCart();
      } catch (err) {
        console.error("Lỗi tải dữ liệu:", err);
      } finally {
        this.isLoading = false;
      }
    },

    // Các hàm giỏ hàng giữ nguyên
    async fetchCart() {
      try {
        const data = await api.homepage.getCart();
        this.cart = data;
      } catch (err) { console.error(err); }
    },
    async addToCart(course) {
      try {
        await api.homepage.addToCart(course);
        await this.fetchCart();
      } catch (err) { console.error(err); }
    },
    async removeFromCart(id) {
      try {
        await api.homepage.removeFromCart(id);
        await this.fetchCart();
      } catch (err) { console.error(err); }
    }
  },
});