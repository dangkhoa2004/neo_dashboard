<template>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <NeoCard class="p-5 flex items-center justify-between bg-purple-50">
        <div>
          <p class="text-xs font-bold uppercase text-gray-500 mb-1">Tổng gói đăng ký</p>
          <p class="text-3xl font-black text-black">1,240</p>
        </div>
        <div class="w-10 h-10 border-2 border-black rounded-full bg-white flex items-center justify-center shadow-neo-sm">
          <i class="fa-solid fa-file-invoice-dollar text-lg"></i>
        </div>
      </NeoCard>
      
      <NeoCard class="p-5 flex items-center justify-between bg-blue-50">
        <div>
          <p class="text-xs font-bold uppercase text-gray-500 mb-1">MRR (Doanh thu tháng)</p>
          <p class="text-3xl font-black text-black">185Tr</p>
        </div>
        <div class="w-10 h-10 border-2 border-black rounded-full bg-white flex items-center justify-center shadow-neo-sm">
          <i class="fa-solid fa-chart-line text-lg"></i>
        </div>
      </NeoCard>

      <NeoCard class="p-5 flex items-center justify-between bg-pink-50">
        <div>
          <p class="text-xs font-bold uppercase text-gray-500 mb-1">Tỷ lệ chuyển đổi</p>
          <p class="text-3xl font-black text-black">2.4%</p>
        </div>
        <div class="w-10 h-10 border-2 border-black rounded-full bg-white flex items-center justify-center shadow-neo-sm">
          <i class="fa-solid fa-arrow-right-arrow-left text-lg"></i>
        </div>
      </NeoCard>
    </div>

    <div class="text-center max-w-2xl mx-auto mb-10">
      <h1 class="text-4xl font-black mb-2 flex items-center justify-center gap-2">
        <i class="fa-solid fa-cube text-3xl"></i> Quản Lý Gói Cước
      </h1>
      <p class="text-gray-600 font-medium mb-6">Cấu hình giá bán và tính năng cho khách hàng.</p>

      <div class="inline-flex items-center bg-white border-2 border-black rounded-full p-1 shadow-neo relative">
         <div 
           class="absolute top-1 bottom-1 w-[50%] bg-black rounded-full transition-all duration-300"
           :class="isYearly ? 'left-[48%]' : 'left-1'"
         ></div>
         
         <button 
           @click="isYearly = false"
           class="relative z-10 px-6 py-2 font-bold text-sm transition-colors rounded-full w-32"
           :class="!isYearly ? 'text-white' : 'text-gray-500 hover:text-black'"
         >
           Tháng
         </button>
         <button 
           @click="isYearly = true"
           class="relative z-10 px-6 py-2 font-bold text-sm transition-colors rounded-full w-32 flex items-center justify-center gap-1"
           :class="isYearly ? 'text-white' : 'text-gray-500 hover:text-black'"
         >
           Năm <span class="text-[10px] bg-neo-green text-black px-1 rounded ml-1">-20%</span>
         </button>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 items-start">
      <NeoCard 
        v-for="plan in plans" 
        :key="plan.id" 
        class="flex flex-col relative overflow-hidden transition-transform hover:-translate-y-2"
        :class="[
            plan.recommend ? 'border-2 md:scale-105 z-10 shadow-neo-hover' : 'shadow-neo',
            plan.bgClass
        ]"
      >
        <div v-if="plan.recommend" class="absolute top-0 right-0 bg-neo-green border-l-2 border-b-2 border-black px-3 py-1 font-bold text-xs uppercase z-10">
          Phổ biến nhất
        </div>

        <div class="p-6 border-b-2 border-black border-dashed">
            <h3 class="text-xl font-black uppercase mb-1">{{ plan.name }}</h3>
            <p class="text-sm text-gray-600 font-medium h-10 line-clamp-2">{{ plan.desc }}</p>
        </div>

        <div class="p-6 flex-1 flex flex-col">
            <div class="text-4xl font-black mb-1 flex items-baseline">
               {{ isYearly ? plan.priceYearly : plan.priceMonthly }}
               <span class="text-lg text-gray-500 font-bold ml-1">/{{ isYearly ? 'năm' : 'th' }}</span>
            </div>
            <p v-if="isYearly && plan.priceMonthly !== '0đ'" class="text-xs text-green-700 font-bold mb-6">
               Tiết kiệm {{ plan.saveAmount }}
            </p>
            <div v-else class="h-4 mb-6"></div> <ul class="space-y-3 mb-8 flex-1">
               <li v-for="(feature, i) in plan.features" :key="i" class="flex items-start gap-3 font-medium text-sm">
                  <div class="w-5 h-5 rounded-full border-2 border-black flex items-center justify-center bg-white shrink-0 mt-0.5">
                    <i class="fa-solid fa-check text-[10px]"></i>
                  </div>
                  {{ feature }}
               </li>
            </ul>

            <div class="mt-auto">
               <div class="flex items-center gap-2 mb-4 text-xs font-bold text-gray-500 justify-center">
                  <i class="fa-solid fa-users"></i> {{ plan.usersCount }} subscribers
               </div>
               <button 
                 @click="editPlan(plan)"
                 class="w-full py-3 font-bold border-2 border-black rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all bg-white hover:bg-black hover:text-white"
               >
                 <i class="fa-solid fa-pen mr-2"></i> Chỉnh sửa
               </button>
            </div>
        </div>
      </NeoCard>
    </div>

    <NeoCard class="mb-12 overflow-hidden">
        <div class="p-6 border-b-2 border-black bg-gray-50">
            <h2 class="font-black text-2xl uppercase">So Sánh Tính Năng</h2>
        </div>
        <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse min-w-[600px]">
                <thead>
                    <tr class="bg-black text-white">
                        <th class="p-4 w-1/3">Tính năng</th>
                        <th v-for="plan in plans" :key="plan.id" class="p-4 text-center w-1/5 border-l-2 border-gray-700">
                            {{ plan.name }}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(row, idx) in comparisonData" :key="idx" class="border-b-2 border-black last:border-0 hover:bg-gray-50">
                        <td class="p-4 font-bold border-r-2 border-black">{{ row.feature }}</td>
                        <td v-for="plan in plans" :key="plan.id" class="p-4 text-center border-r-2 border-black last:border-0">
                            <i v-if="row[plan.id] === true" class="fa-solid fa-check text-neo-green text-xl drop-shadow-sm"></i>
                            <i v-else-if="row[plan.id] === false" class="fa-solid fa-minus text-gray-300"></i>
                            <span v-else class="font-bold text-sm">{{ row[plan.id] }}</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </NeoCard>

    <div class="max-w-3xl mx-auto">
        <h2 class="font-black text-2xl uppercase text-center mb-6">Câu hỏi thường gặp</h2>
        <div class="space-y-4">
            <div v-for="(faq, idx) in faqs" :key="idx" class="group">
                <button 
                  @click="faq.open = !faq.open"
                  class="w-full bg-white border-2 border-black p-4 flex justify-between items-center text-left shadow-neo group-hover:-translate-y-1 transition-transform"
                  :class="{'bg-black text-white': faq.open}"
                >
                    <span class="font-bold text-lg">{{ faq.question }}</span>
                    <i class="fa-solid transition-transform duration-300" :class="faq.open ? 'fa-minus rotate-180' : 'fa-plus'"></i>
                </button>
                <div 
                   class="border-2 border-black border-t-0 bg-white p-4 transition-all duration-300 origin-top"
                   v-show="faq.open"
                >
                    <p class="text-gray-700 font-medium">{{ faq.answer }}</p>
                </div>
            </div>
        </div>
    </div>

    <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" @click="showModal = false"></div>
        <div class="bg-white w-full max-w-lg relative z-10 border-2 border-black shadow-neo-hover rounded-xl overflow-hidden animate-bounce-in">
            <div class="bg-neo-green p-4 border-b-2 border-black flex justify-between items-center">
                <h3 class="font-black text-xl uppercase">Sửa Gói: {{ editingPlan.name }}</h3>
                <button @click="showModal = false"><i class="fa-solid fa-times text-xl"></i></button>
            </div>
            
            <div class="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
                <div>
                    <label class="block font-bold text-sm mb-1">Tên gói</label>
                    <input v-model="editingPlan.name" class="w-full border-2 border-black rounded p-2 font-bold">
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block font-bold text-sm mb-1">Giá tháng</label>
                        <input v-model="editingPlan.priceMonthly" class="w-full border-2 border-black rounded p-2">
                    </div>
                    <div>
                        <label class="block font-bold text-sm mb-1">Giá năm</label>
                        <input v-model="editingPlan.priceYearly" class="w-full border-2 border-black rounded p-2">
                    </div>
                </div>
                <div>
                    <label class="block font-bold text-sm mb-1">Mô tả ngắn</label>
                    <textarea v-model="editingPlan.desc" rows="2" class="w-full border-2 border-black rounded p-2"></textarea>
                </div>
                <div>
                    <label class="block font-bold text-sm mb-1">Tính năng (Mỗi dòng 1 cái)</label>
                    <textarea v-model="featuresText" rows="5" class="w-full border-2 border-black rounded p-2 font-mono text-sm"></textarea>
                </div>
            </div>

            <div class="p-4 border-t-2 border-black bg-gray-50 flex justify-end gap-3">
                <button @click="showModal = false" class="px-4 py-2 font-bold border-2 border-transparent hover:border-black rounded">Hủy</button>
                <button @click="savePlan" class="bg-black text-white px-6 py-2 font-bold border-2 border-black rounded shadow-neo hover:translate-y-[-2px] hover:shadow-neo-hover transition-all">Lưu Thay Đổi</button>
            </div>
        </div>
    </div>

  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import NeoCard from '../components/NeoCard.vue';

// --- State ---
const isYearly = ref(false);
const showModal = ref(false);
const editingPlan = ref({});
const featuresText = ref('');

// --- Data ---
const plans = ref([
  { 
    id: 'basic',
    name: 'Cơ bản', 
    priceMonthly: '0đ', 
    priceYearly: '0đ',
    saveAmount: '0đ',
    desc: 'Dành cho cá nhân trải nghiệm hệ thống.',
    features: ['10 người dùng', '2GB lưu trữ', 'Hỗ trợ Email', 'Quảng cáo'], 
    usersCount: 840,
    recommend: false,
    bgClass: 'bg-white'
  },
  { 
    id: 'pro',
    name: 'Chuyên nghiệp', 
    priceMonthly: '199k', 
    priceYearly: '1.9tr',
    saveAmount: '400k',
    desc: 'Giải pháp hoàn hảo cho các đội nhóm nhỏ và startup.',
    features: ['Không giới hạn user', '100GB lưu trữ', 'Hỗ trợ 24/7', 'API Access', 'Không quảng cáo'], 
    usersCount: 320,
    recommend: true,
    bgClass: 'bg-green-50'
  },
  { 
    id: 'enterprise',
    name: 'Doanh nghiệp', 
    priceMonthly: '999k', 
    priceYearly: '9.9tr',
    saveAmount: '2tr',
    desc: 'Dành cho tập đoàn lớn cần hiệu suất cao và bảo mật.',
    features: ['Mọi tính năng Pro', 'Server riêng', 'Hợp đồng SLA', 'Đào tạo 1-1', 'Backup từng giờ'], 
    usersCount: 80,
    recommend: false,
    bgClass: 'bg-blue-50'
  },
]);

// Comparison Matrix Data
const comparisonData = [
    { feature: 'Số lượng User', basic: '10', pro: 'Không giới hạn', enterprise: 'Không giới hạn' },
    { feature: 'Dung lượng lưu trữ', basic: '2GB', pro: '100GB', enterprise: '1TB' },
    { feature: 'Hỗ trợ kỹ thuật', basic: 'Email', pro: '24/7 Chat', enterprise: '1-1 Manager' },
    { feature: 'API Access', basic: false, pro: true, enterprise: true },
    { feature: 'Tên miền riêng', basic: false, pro: true, enterprise: true },
    { feature: 'SLA Uptime', basic: false, pro: '99.9%', enterprise: '99.99%' },
    { feature: 'Server riêng', basic: false, pro: false, enterprise: true },
];

const faqs = reactive([
    { question: 'Tôi có thể nâng cấp gói sau này không?', answer: 'Có, bạn có thể nâng cấp hoặc hạ cấp gói bất cứ lúc nào. Chi phí sẽ được tính toán lại theo thời gian thực.', open: false },
    { question: 'Có hỗ trợ hoàn tiền không?', answer: 'Chúng tôi hỗ trợ hoàn tiền trong vòng 7 ngày đầu tiên nếu bạn không hài lòng với dịch vụ gói Pro hoặc Enterprise.', open: false },
    { question: 'Gói Doanh nghiệp có gì đặc biệt?', answer: 'Gói doanh nghiệp cung cấp Server vật lý riêng biệt, đảm bảo tốc độ cao nhất và cam kết bảo mật dữ liệu tuyệt đối.', open: false },
]);

// --- Methods ---

const editPlan = (plan) => {
    // Clone object để tránh sửa trực tiếp vào data gốc khi chưa lưu
    editingPlan.value = JSON.parse(JSON.stringify(plan));
    // Chuyển mảng features thành text để edit trong textarea
    featuresText.value = plan.features.join('\n');
    showModal.value = true;
};

const savePlan = () => {
    // Cập nhật lại mảng features từ textarea
    editingPlan.value.features = featuresText.value.split('\n').filter(line => line.trim() !== '');
    
    // Tìm và update trong mảng gốc
    const index = plans.value.findIndex(p => p.id === editingPlan.value.id);
    if (index !== -1) {
        plans.value[index] = editingPlan.value;
    }
    
    showModal.value = false;
};

</script>

<style scoped>
/* Animation */
@keyframes bounce-in {
  0% { transform: scale(0.9); opacity: 0; }
  50% { transform: scale(1.02); }
  100% { transform: scale(1); opacity: 1; }
}
.animate-bounce-in {
  animation: bounce-in 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
</style>