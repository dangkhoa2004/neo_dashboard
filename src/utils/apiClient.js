// src/utils/apiClient.js
import { useUIStore } from "@/store/ui";

export const request = async (mockData, delay = 500) => {
  // Logic Loading đã được Router lo (hoặc nếu muốn chắc chắn thì bật ở đây)
  // Nhưng ở đây ta tập trung vào việc giả lập độ trễ
  
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData);
    }, delay);
  });
};