<template>
  <div v-if="show" class="fixed inset-0 z-50 flex items-center justify-center p-4">
    <div class="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity" @click="$emit('close')"></div>
    
    <div class="bg-white w-full max-w-lg relative z-10 border-2 border-black shadow-neo-hover rounded-xl overflow-hidden animate-slide-up">
      <div class="bg-neo-green p-4 border-b-2 border-black flex justify-between items-center">
        <h2 class="font-black text-xl uppercase">
           {{ isEditing ? 'Cập nhật thành viên' : 'Thêm thành viên mới' }}
        </h2>
        <button @click="$emit('close')" class="w-8 h-8 bg-white border-2 border-black rounded hover:bg-red-500 hover:text-white transition-colors">
          <i class="fa-solid fa-times"></i>
        </button>
      </div>

      <div class="p-6 space-y-4">
        <div class="flex flex-col gap-1">
          <label class="font-bold text-sm">Họ và tên <span class="text-red-500">*</span></label>
          <input v-model="localForm.name" type="text" class="w-full border-2 border-black rounded p-2 font-medium focus:shadow-neo transition-shadow">
        </div>
        
        <div class="flex flex-col gap-1">
          <label class="font-bold text-sm">Email <span class="text-red-500">*</span></label>
          <input v-model="localForm.email" type="email" class="w-full border-2 border-black rounded p-2 font-medium focus:shadow-neo transition-shadow">
        </div>

        <div class="grid grid-cols-2 gap-4">
           <div class="flex flex-col gap-1">
             <label class="font-bold text-sm">Vai trò</label>
             <select v-model="localForm.role" class="w-full border-2 border-black rounded p-2 font-medium bg-white">
               <option value="User">User</option>
               <option value="Editor">Editor</option>
               <option value="Admin">Admin</option>
             </select>
           </div>
           <div class="flex flex-col gap-1">
             <label class="font-bold text-sm">Gói cước</label>
             <select v-model="localForm.plan" class="w-full border-2 border-black rounded p-2 font-medium bg-white">
               <option value="Free">Free</option>
               <option value="Basic">Basic</option>
               <option value="Pro">Pro</option>
               <option value="Enterprise">Enterprise</option>
             </select>
           </div>
        </div>

        <div class="flex items-center gap-3 mt-2 p-3 border-2 border-black rounded bg-gray-50">
           <label class="relative inline-flex items-center cursor-pointer">
             <input type="checkbox" v-model="localForm.active" class="sr-only peer">
             <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-neo-green border-2 border-black"></div>
           </label>
           <span class="font-bold text-sm">Kích hoạt tài khoản ngay</span>
        </div>
      </div>

      <div class="p-4 border-t-2 border-black bg-gray-50 flex justify-end gap-3">
        <button @click="$emit('close')" class="px-4 py-2 font-bold border-2 border-transparent hover:border-black rounded text-gray-600">Hủy</button>
        <button @click="onSave" class="bg-black text-white px-6 py-2 font-bold border-2 border-black rounded shadow-neo hover:translate-y-[-2px] hover:shadow-neo-hover active:translate-y-[1px] active:shadow-none transition-all">
          {{ isEditing ? 'Lưu thay đổi' : 'Tạo mới' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, watch } from 'vue';

const props = defineProps({
  show: Boolean,
  formData: Object,
  isEditing: Boolean
});

const emit = defineEmits(['close', 'save']);

const localForm = reactive({ ...props.formData });

watch(() => props.formData, (newVal) => {
  Object.assign(localForm, newVal);
});

const onSave = () => {
    emit('save', { ...localForm });
};
</script>

<style scoped>
@keyframes slide-up {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
.animate-slide-up {
  animation: slide-up 0.3s ease-out;
}
</style>