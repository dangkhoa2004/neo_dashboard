// composables/themeUi.js
import { shallowRef, computed } from 'vue';

// Import các Theme Components
import ChristmasTheme from "@/components/layout-themes/ChristmasTheme/ChristmasTheme.vue";
import TetTheme from "@/components/layout-themes/TetTheme/TetTheme.vue";
import DefaultTheme from "@/components/layout-themes/DefaultTheme.vue";

// 1. Định nghĩa Map để dễ quản lý và mở rộng sau này
const THEME_MAP = {
  christmas: ChristmasTheme,
  tet: TetTheme,
  default: DefaultTheme,
};

// 2. Khởi tạo Global State (Singleton)
// Dùng shallowRef vì ta chỉ quan tâm giá trị chuỗi thay đổi, 
// hoặc nếu lưu component thì shallowRef tối ưu hiệu năng hơn ref thường.
const currentThemeName = shallowRef('tet'); // Mặc định là 'tet'

export function useThemeUi() {
  
  // 3. Computed để trả về Component tương ứng
  const activeTheme = computed(() => {
    // Lấy component từ Map, nếu không có thì trả về Default
    return THEME_MAP[currentThemeName.value] || DefaultTheme;
  });

  // 4. Hàm để thay đổi theme (Action)
  const setTheme = (themeName) => {
    if (THEME_MAP[themeName]) {
      currentThemeName.value = themeName;
    } else {
      console.warn(`Theme "${themeName}" không tồn tại, chuyển về mặc định.`);
      currentThemeName.value = 'default';
    }
  };

  return {
    currentThemeName,
    activeTheme,
    setTheme
  };
}