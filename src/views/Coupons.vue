<template>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <NeoCard class="p-5 flex items-center justify-between bg-blue-50">
        <div>
          <p class="text-xs font-bold uppercase text-gray-500 mb-1">Tổng mã giảm giá</p>
          <p class="text-3xl font-black text-black">{{ coupons.length }}</p>
        </div>
        <div class="w-10 h-10 border-2 border-black rounded-full bg-white flex items-center justify-center shadow-neo-sm">
          <i class="fa-solid fa-ticket text-lg"></i>
        </div>
      </NeoCard>
      
      <NeoCard class="p-5 flex items-center justify-between bg-green-50">
        <div>
          <p class="text-xs font-bold uppercase text-gray-500 mb-1">Đang hoạt động</p>
          <p class="text-3xl font-black text-neo-green drop-shadow-sm">{{ activeCount }}</p>
        </div>
        <div class="w-10 h-10 border-2 border-black rounded-full bg-white flex items-center justify-center shadow-neo-sm">
          <i class="fa-regular fa-circle-check text-lg"></i>
        </div>
      </NeoCard>

      <NeoCard class="p-5 flex items-center justify-between bg-yellow-50">
        <div>
          <p class="text-xs font-bold uppercase text-gray-500 mb-1">Tổng lượt dùng</p>
          <p class="text-3xl font-black text-black">{{ totalUsage }}</p>
        </div>
        <div class="w-10 h-10 border-2 border-black rounded-full bg-white flex items-center justify-center shadow-neo-sm">
          <i class="fa-solid fa-users text-lg"></i>
        </div>
      </NeoCard>
    </div>

    <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
      <div>
        <h1 class="text-4xl font-black mb-1 flex items-center gap-2">
          <span class="relative">
            <i class="fa-solid fa-tags text-3xl z-10 relative"></i>
            <span class="absolute -bottom-1 -right-1 w-full h-2 bg-neo-green z-0"></span>
          </span>
          Mã Giảm Giá
        </h1>
        <p class="text-gray-600">Quản lý các chiến dịch khuyến mãi và voucher.</p>
      </div>
      
      <button 
        @click="openModal"
        class="bg-black text-white px-6 py-3 font-bold rounded shadow-neo hover:translate-y-[-2px] hover:shadow-neo-hover transition-all flex items-center gap-2 active:translate-y-[2px] active:shadow-none"
      >
        <i class="fa-solid fa-plus"></i> Tạo mã mới
      </button>
    </div>

    <NeoCard class="p-4 mb-8 flex flex-col md:flex-row gap-4 items-center">
      <div class="relative flex-1 w-full">
        <i class="fa-solid fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
        <input 
          v-model="searchQuery" 
          type="text" 
          placeholder="Tìm theo tên mã..." 
          class="w-full pl-10 pr-4 py-2 border-2 border-black rounded focus:outline-none focus:bg-gray-50 font-medium"
        >
      </div>
      
      <div class="flex gap-4 w-full md:w-auto">
        <select v-model="filterStatus" class="border-2 border-black rounded px-4 py-2 font-bold focus:outline-none cursor-pointer hover:bg-gray-50 flex-1">
          <option value="all">Tất cả trạng thái</option>
          <option value="active">Đang chạy</option>
          <option value="expired">Đã hết hạn</option>
          <option value="scheduled">Sắp diễn ra</option>
        </select>
      </div>
    </NeoCard>

    <div v-if="filteredCoupons.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="coupon in filteredCoupons" :key="coupon.code" class="relative group">
        
        <div class="h-full flex flex-col relative transition-transform hover:-translate-y-1 duration-200">
          
          <div class="relative bg-neo-green border-2 border-black border-b-0 rounded-t-xl p-4 overflow-hidden">
             <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(black 1px, transparent 1px); background-size: 8px 8px;"></div>
             
             <div class="relative z-10 flex justify-between items-start">
               <div>
                  <div class="bg-black text-white text-[10px] font-bold px-2 py-0.5 rounded inline-block mb-1 uppercase tracking-wider">
                    {{ coupon.type === 'percent' ? 'Voucher %' : 'Voucher Tiền' }}
                  </div>
                  <h3 class="font-black text-2xl tracking-wider text-black break-all">{{ coupon.code }}</h3>
               </div>
               <button 
                 @click="copyToClipboard(coupon.code)" 
                 class="w-8 h-8 bg-white border-2 border-black rounded flex items-center justify-center hover:bg-black hover:text-white transition-colors shadow-sm active:scale-95 group/btn"
                 title="Sao chép mã"
               >
                 <i class="fa-regular fa-copy group-active/btn:hidden"></i>
                 <i class="fa-solid fa-check hidden group-active/btn:block"></i>
               </button>
             </div>
          </div>

          <div class="relative h-4 bg-white border-l-2 border-r-2 border-black flex items-center">
             <div class="absolute -left-[2px] top-1/2 -translate-y-1/2 w-4 h-4 bg-neo-bg border-r-2 border-black rounded-full"></div>
             <div class="w-full border-t-2 border-black border-dashed mx-4"></div>
             <div class="absolute -right-[2px] top-1/2 -translate-y-1/2 w-4 h-4 bg-neo-bg border-l-2 border-black rounded-full"></div>
          </div>

          <div class="bg-white border-2 border-black border-t-0 rounded-b-xl p-5 flex-1 flex flex-col shadow-neo group-hover:shadow-neo-hover transition-all">
             <div class="flex items-baseline gap-1 mb-2">
               <span class="text-4xl font-black">
                 {{ coupon.type === 'percent' ? `-${coupon.value}%` : `-${coupon.value}k` }}
               </span>
               <span class="text-sm text-gray-500 font-bold uppercase">Off</span>
             </div>
             
             <p class="text-gray-600 text-sm font-medium mb-4 line-clamp-2">{{ coupon.desc }}</p>

             <div class="mb-4">
               <span class="text-xs font-bold border-2 border-black px-2 py-1 rounded-md inline-flex items-center gap-1"
                 :class="getStatusClass(coupon)">
                 <i :class="getStatusIcon(coupon)"></i>
                 {{ getStatusLabel(coupon) }}
               </span>
             </div>
             
             <div class="mt-auto pt-4 border-t-2 border-gray-100 flex justify-between items-end">
               <div>
                 <div class="text-[10px] uppercase font-bold text-gray-400">Hết hạn</div>
                 <div class="font-bold text-sm">{{ coupon.expiry || 'Vô thời hạn' }}</div>
               </div>
               <div class="text-right">
                  <div class="text-[10px] uppercase font-bold text-gray-400">Đã dùng</div>
                  <div class="font-bold text-sm">{{ coupon.usage }} <span class="text-gray-400">/ {{ coupon.limit || '∞' }}</span></div>
               </div>
             </div>
          </div>

        </div>
      </div>
    </div>

    <div v-else class="flex flex-col items-center justify-center py-20 border-2 border-black border-dashed rounded-xl bg-gray-50">
       <i class="fa-solid fa-ticket text-6xl text-gray-300 mb-4"></i>
       <h3 class="font-bold text-xl text-gray-500">Không tìm thấy mã giảm giá nào.</h3>
    </div>

    <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" @click="closeModal"></div>
      
      <div class="bg-white w-full max-w-lg relative z-10 border-2 border-black shadow-neo-hover rounded-xl overflow-hidden animate-slide-up">
        <div class="bg-neo-green p-4 border-b-2 border-black flex justify-between items-center">
          <h2 class="font-black text-xl uppercase"><i class="fa-solid fa-wand-magic-sparkles mr-2"></i> Tạo Mã Mới</h2>
          <button @click="closeModal" class="w-8 h-8 bg-white border-2 border-black rounded hover:bg-red-500 hover:text-white transition-colors">
            <i class="fa-solid fa-times"></i>
          </button>
        </div>

        <div class="p-6 space-y-4">
          <div>
            <label class="block font-bold text-sm mb-1">Mã Code (Tự động viết hoa)</label>
            <input v-model="newCoupon.code" type="text" class="w-full border-2 border-black rounded p-2 uppercase font-mono font-bold focus:outline-none focus:shadow-neo-sm" placeholder="VD: SALE2025">
          </div>
          
          <div class="grid grid-cols-2 gap-4">
             <div>
                <label class="block font-bold text-sm mb-1">Loại giảm giá</label>
                <select v-model="newCoupon.type" class="w-full border-2 border-black rounded p-2 font-medium">
                  <option value="percent">Phần trăm (%)</option>
                  <option value="fixed">Số tiền (VNĐ)</option>
                </select>
             </div>
             <div>
                <label class="block font-bold text-sm mb-1">Giá trị</label>
                <input v-model="newCoupon.value" type="number" class="w-full border-2 border-black rounded p-2 font-bold" placeholder="20">
             </div>
          </div>

          <div>
             <label class="block font-bold text-sm mb-1">Mô tả ngắn</label>
             <textarea v-model="newCoupon.desc" rows="2" class="w-full border-2 border-black rounded p-2 font-medium" placeholder="Áp dụng cho khách hàng mới..."></textarea>
          </div>

          <div class="grid grid-cols-2 gap-4">
             <div>
                <label class="block font-bold text-sm mb-1">Ngày hết hạn</label>
                <input v-model="newCoupon.expiry" type="date" class="w-full border-2 border-black rounded p-2 font-medium">
             </div>
             <div>
                <label class="block font-bold text-sm mb-1">Giới hạn lượt dùng</label>
                <input v-model="newCoupon.limit" type="number" class="w-full border-2 border-black rounded p-2 font-medium" placeholder="Để trống nếu KGH">
             </div>
          </div>
        </div>

        <div class="p-4 border-t-2 border-black bg-gray-50 flex justify-end gap-3">
          <button @click="closeModal" class="px-4 py-2 font-bold border-2 border-transparent hover:border-black rounded text-gray-600">Hủy bỏ</button>
          <button @click="saveCoupon" class="bg-black text-white px-6 py-2 font-bold border-2 border-black rounded shadow-neo hover:translate-y-[-2px] hover:shadow-neo-hover active:translate-y-[1px] active:shadow-none transition-all">
            Lưu Mã
          </button>
        </div>
      </div>
    </div>

    <div v-if="toastMsg" class="fixed bottom-6 right-6 bg-black text-white px-6 py-3 rounded border-2 border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] flex items-center gap-3 animate-bounce-in z-50">
       <i class="fa-solid fa-circle-check text-neo-green"></i>
       <span class="font-bold">{{ toastMsg }}</span>
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import NeoCard from '../components/NeoCard.vue';

// --- State ---
const searchQuery = ref('');
const filterStatus = ref('all');
const showModal = ref(false);
const toastMsg = ref(null);

// Form data mới
const newCoupon = ref({
  code: '',
  type: 'percent',
  value: '',
  desc: '',
  expiry: '',
  limit: ''
});

// Mock Data
const coupons = ref([
  { code: 'SUMMER2024', type: 'percent', value: 20, desc: 'Giảm giá chào hè cho toàn bộ khóa học.', expiry: '2024-08-30', usage: 154, limit: 500, status: 'expired' },
  { code: 'WELCOME10', type: 'fixed', value: 50, desc: 'Voucher 50k cho thành viên mới đăng ký lần đầu.', expiry: '', usage: 1205, limit: null, status: 'active' },
  { code: 'BLACKFRIDAY', type: 'percent', value: 50, desc: 'Siêu sale Black Friday lớn nhất năm.', expiry: '2024-11-25', usage: 0, limit: 100, status: 'scheduled' },
  { code: 'DangKhoa_VIP', type: 'percent', value: 100, desc: 'Miễn phí trọn đời cho Admin.', expiry: '2025-01-01', usage: 1, limit: 5, status: 'active' },
  { code: 'FLASH_SALE', type: 'percent', value: 30, desc: 'Flash sale khung giờ vàng 12h-14h.', expiry: '2025-12-31', usage: 45, limit: 100, status: 'active' },
]);

// --- Computed ---
const activeCount = computed(() => coupons.value.filter(c => c.status === 'active').length);
const totalUsage = computed(() => coupons.value.reduce((sum, c) => sum + c.usage, 0));

const filteredCoupons = computed(() => {
  return coupons.value.filter(coupon => {
    const matchesSearch = coupon.code.toLowerCase().includes(searchQuery.value.toLowerCase());
    const matchesStatus = filterStatus.value === 'all' || coupon.status === filterStatus.value;
    return matchesSearch && matchesStatus;
  });
});

// --- Methods ---

// Helper tính toán status (để hiển thị màu sắc)
const getStatusLabel = (coupon) => {
  if (coupon.status === 'active') return 'Đang chạy';
  if (coupon.status === 'expired') return 'Hết hạn';
  if (coupon.status === 'scheduled') return 'Sắp tới';
  return 'Nháp';
};

const getStatusClass = (coupon) => {
  if (coupon.status === 'active') return 'bg-green-100 text-green-800 border-green-800';
  if (coupon.status === 'expired') return 'bg-gray-100 text-gray-500 border-gray-400 dashed';
  if (coupon.status === 'scheduled') return 'bg-yellow-100 text-yellow-800 border-yellow-800';
  return 'bg-white';
};

const getStatusIcon = (coupon) => {
  if (coupon.status === 'active') return 'fa-solid fa-bolt';
  if (coupon.status === 'expired') return 'fa-solid fa-hourglass-end';
  if (coupon.status === 'scheduled') return 'fa-regular fa-clock';
  return 'fa-solid fa-circle';
};

// Clipboard Action
const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text);
  showToast(`Đã sao chép mã: ${text}`);
};

// Toast Notification
const showToast = (msg) => {
  toastMsg.value = msg;
  setTimeout(() => toastMsg.value = null, 3000);
};

// Modal Actions
const openModal = () => {
  newCoupon.value = { code: '', type: 'percent', value: '', desc: '', expiry: '', limit: '' };
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

const saveCoupon = () => {
  if (!newCoupon.value.code || !newCoupon.value.value) {
    alert("Vui lòng nhập Mã và Giá trị!");
    return;
  }
  
  // Fake API add
  coupons.value.unshift({
    ...newCoupon.value,
    code: newCoupon.value.code.toUpperCase(),
    usage: 0,
    status: 'active' // Mặc định active
  });
  
  closeModal();
  showToast('Tạo mã giảm giá thành công!');
};

</script>

<style scoped>
/* Animation cho Modal */
@keyframes slide-up {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
.animate-slide-up {
  animation: slide-up 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes bounce-in {
  0% { transform: scale(0.9); opacity: 0; }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); opacity: 1; }
}
.animate-bounce-in {
  animation: bounce-in 0.3s ease-out;
}
</style>