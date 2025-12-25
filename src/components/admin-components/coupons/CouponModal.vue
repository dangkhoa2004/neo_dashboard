<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4">
    <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" @click="close"></div>
    
    <div class="bg-white w-full max-w-lg relative z-10 border-2 border-black shadow-neo-hover rounded-xl overflow-hidden animate-slide-up">
      <div class="bg-neo-green p-4 border-b-2 border-black flex justify-between items-center">
        <h2 class="font-black text-xl uppercase"><i class="fa-solid fa-wand-magic-sparkles mr-2"></i> Tạo Mã Mới</h2>
        <button @click="close" class="w-8 h-8 bg-white border-2 border-black rounded hover:bg-red-500 hover:text-white transition-colors">
          <i class="fa-solid fa-times"></i>
        </button>
      </div>

      <div class="p-6 space-y-4">
        <div>
          <label class="block font-bold text-sm mb-1">Mã Code (Tự động viết hoa)</label>
          <input v-model="form.code" type="text" class="w-full border-2 border-black rounded p-2 uppercase font-mono font-bold focus:outline-none focus:shadow-neo-sm" placeholder="VD: SALE2025">
        </div>
        
        <div class="grid grid-cols-2 gap-4">
           <div>
              <label class="block font-bold text-sm mb-1">Loại giảm giá</label>
              <select v-model="form.type" class="w-full border-2 border-black rounded p-2 font-medium">
                <option value="percent">Phần trăm (%)</option>
                <option value="fixed">Số tiền (VNĐ)</option>
              </select>
           </div>
           <div>
              <label class="block font-bold text-sm mb-1">Giá trị</label>
              <input v-model="form.value" type="number" class="w-full border-2 border-black rounded p-2 font-bold" placeholder="20">
           </div>
        </div>

        <div>
           <label class="block font-bold text-sm mb-1">Mô tả ngắn</label>
           <textarea v-model="form.desc" rows="2" class="w-full border-2 border-black rounded p-2 font-medium" placeholder="Áp dụng cho khách hàng mới..."></textarea>
        </div>

        <div class="grid grid-cols-2 gap-4">
           <div>
              <label class="block font-bold text-sm mb-1">Ngày hết hạn</label>
              <input v-model="form.expiry" type="date" class="w-full border-2 border-black rounded p-2 font-medium">
           </div>
           <div>
              <label class="block font-bold text-sm mb-1">Giới hạn lượt dùng</label>
              <input v-model="form.limit" type="number" class="w-full border-2 border-black rounded p-2 font-medium" placeholder="Để trống nếu KGH">
           </div>
        </div>
      </div>

      <div class="p-4 border-t-2 border-black bg-gray-50 flex justify-end gap-3">
        <button @click="close" class="px-4 py-2 font-bold border-2 border-transparent hover:border-black rounded text-gray-600">Hủy bỏ</button>
        <button @click="save" class="bg-black text-white px-6 py-2 font-bold border-2 border-black rounded shadow-neo hover:translate-y-[-2px] hover:shadow-neo-hover active:translate-y-[1px] active:shadow-none transition-all">
          Lưu Mã
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
  isOpen: Boolean
});

const emit = defineEmits(['close', 'save']);

const form = ref({
  code: '',
  type: 'percent',
  value: '',
  desc: '',
  expiry: '',
  limit: ''
});

const close = () => {
  emit('close');
  // Reset form nếu cần thiết
};

const save = () => {
    if (!form.value.code || !form.value.value) {
        alert("Vui lòng nhập Mã và Giá trị!");
        return;
    }
    emit('save', { ...form.value });
    // Reset form
    form.value = { code: '', type: 'percent', value: '', desc: '', expiry: '', limit: '' };
};
</script>

<style scoped>
@keyframes slide-up {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
.animate-slide-up {
  animation: slide-up 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
</style>