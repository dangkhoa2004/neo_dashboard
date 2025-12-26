import { useUIStore } from "@/store/ui";

export function useLoader() {
  const uiStore = useUIStore();

  const showLoader = (message) => {
    uiStore.startLoading(message);
  };

  const hideLoader = () => {
    // Thêm một chút delay nhỏ để animation biến mất mượt mà hơn (tùy chọn)
    setTimeout(() => {
      uiStore.stopLoading();
    }, 500);
  };

  return {
    showLoader,
    hideLoader,
  };
}