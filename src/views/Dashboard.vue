<template>
  <div class="space-y-8">
    
    <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
      <div>
        <h1 class="text-4xl font-black mb-2 flex items-center gap-2">
          <span class="bg-neo-green border-2 border-black w-10 h-10 flex items-center justify-center text-white rounded text-2xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">$</span> 
          Dashboard
        </h1>
        <p class="text-gray-600 font-medium">
          Tổng quan hoạt động hệ thống. 
          <span class="font-bold text-black">Cập nhật lần cuối: {{ currentTime }}</span>
        </p>
      </div>

      <div class="flex bg-white border-2 border-black rounded-lg p-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <button 
          v-for="period in ['Hôm nay', 'Tuần này', 'Tháng này', 'Năm nay']" 
          :key="period"
          @click="selectedPeriod = period"
          :class="[
            'px-4 py-2 font-bold text-sm rounded transition-all',
            selectedPeriod === period ? 'bg-black text-white' : 'hover:bg-gray-100 text-gray-600'
          ]"
        >
          {{ period }}
        </button>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      <NeoCard v-for="(stat, index) in stats" :key="index" class="p-5 flex flex-col justify-between min-h-[160px] group hover:bg-neo-bg transition-colors">
        <div class="flex justify-between items-start">
          <div class="flex flex-col">
            <span class="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">{{ stat.title }}</span>
            <span class="text-3xl font-black" :class="stat.isGreen ? 'text-neo-green drop-shadow-sm' : 'text-black'">
              {{ stat.value }}
            </span>
          </div>
          <div class="w-10 h-10 border-2 border-black rounded-full flex items-center justify-center bg-white group-hover:scale-110 transition-transform shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <i :class="stat.icon"></i>
          </div>
        </div>
        
        <div class="mt-4 pt-4 border-t-2 border-black border-dashed flex items-center gap-2">
          <span class="px-2 py-0.5 text-xs font-bold border-2 border-black rounded bg-white" 
            :class="stat.trend > 0 ? 'text-green-600' : 'text-red-600'">
            <i :class="stat.trend > 0 ? 'fa-solid fa-arrow-trend-up' : 'fa-solid fa-arrow-trend-down'"></i>
            {{ Math.abs(stat.trend) }}%
          </span>
          <span class="text-xs font-bold text-gray-500">{{ stat.desc }}</span>
        </div>
      </NeoCard>
    </div>

    <div class="grid grid-cols-1 xl:grid-cols-3 gap-6">
      
      <NeoCard class="p-6 xl:col-span-2 min-h-[450px] flex flex-col">
        <div class="flex justify-between items-center mb-8">
          <h3 class="font-bold text-xl uppercase border-l-4 border-neo-green pl-3">Phân Tích Doanh Thu</h3>
          <button class="text-xs font-bold underline hover:text-neo-green">Tải báo cáo CSV</button>
        </div>
        
        <div class="flex-1 flex items-end justify-between gap-2 sm:gap-4 px-2 pb-4 border-b-2 border-black">
           <div v-for="(item, i) in chartData" :key="i" class="w-full flex flex-col items-center gap-2 group relative">
             <div class="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-xs font-bold px-2 py-1 rounded whitespace-nowrap z-10 pointer-events-none">
               {{ item.amount }} tr
             </div>
             
             <div 
               :style="{ height: item.height + '%' }" 
               class="w-full bg-neo-green border-2 border-black border-b-0 hover:bg-black hover:text-white transition-all relative cursor-pointer flex items-end justify-center"
             >
                <div class="w-full h-2 bg-white/20 absolute top-0"></div>
             </div>
             <span class="text-xs font-bold text-gray-600 group-hover:text-black">{{ item.month }}</span>
           </div>
        </div>
        
        <div class="mt-4 flex gap-6 justify-center">
            <div class="flex items-center gap-2">
                <div class="w-3 h-3 bg-neo-green border-2 border-black"></div>
                <span class="text-xs font-bold">Thực đạt</span>
            </div>
            <div class="flex items-center gap-2">
                <div class="w-3 h-3 bg-gray-300 border-2 border-black"></div>
                <span class="text-xs font-bold">Dự kiến</span>
            </div>
        </div>
      </NeoCard>

      <NeoCard class="p-6 flex flex-col h-full bg-yellow-50">
         <h3 class="font-bold text-lg uppercase mb-6 flex items-center gap-2">
            <i class="fa-solid fa-bullseye"></i> Mục Tiêu Tháng
         </h3>

         <div class="space-y-6 flex-1">
            <div class="bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div class="flex justify-between mb-2 font-bold text-sm">
                    <span>Doanh số</span>
                    <span>85%</span>
                </div>
                <div class="w-full h-4 border-2 border-black rounded-full p-0.5 bg-white">
                    <div class="h-full bg-neo-green rounded-full border-r-2 border-black w-[85%]"></div>
                </div>
                <p class="text-xs text-gray-500 mt-2 font-medium">Chỉ còn 150tr để đạt KPI quý.</p>
            </div>

            <div class="bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div class="flex justify-between mb-2 font-bold text-sm">
                    <span>Khách hàng mới</span>
                    <span>42%</span>
                </div>
                <div class="w-full h-4 border-2 border-black rounded-full p-0.5 bg-white">
                    <div class="h-full bg-blue-400 rounded-full border-r-2 border-black w-[42%]"></div>
                </div>
                <p class="text-xs text-gray-500 mt-2 font-medium">Đang chậm hơn tiến độ tuần trước.</p>
            </div>

            <div class="mt-auto bg-black text-white p-4 border-2 border-black relative overflow-hidden">
                <div class="relative z-10">
                    <h4 class="font-bold text-lg text-neo-green">Mẹo Admin</h4>
                    <p class="text-sm mt-1">Tối ưu hình ảnh khóa học để tăng tốc độ tải trang lên 20%.</p>
                </div>
                <i class="fa-solid fa-lightbulb absolute -bottom-2 -right-2 text-6xl text-gray-800 opacity-50 rotate-12"></i>
            </div>
         </div>
      </NeoCard>
    </div>

    <div class="grid grid-cols-1 xl:grid-cols-3 gap-6">
        
        <NeoCard class="xl:col-span-2 overflow-hidden flex flex-col">
            <div class="p-5 border-b-2 border-black bg-gray-50 flex justify-between items-center">
                <h3 class="font-bold text-lg uppercase">Đơn Hàng Gần Đây</h3>
                <button class="text-xs font-bold border-2 border-black bg-white px-3 py-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">Xem tất cả</button>
            </div>
            
            <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-black text-white">
                        <tr>
                            <th class="p-4 text-sm font-bold uppercase whitespace-nowrap">ID</th>
                            <th class="p-4 text-sm font-bold uppercase whitespace-nowrap">Khách hàng</th>
                            <th class="p-4 text-sm font-bold uppercase whitespace-nowrap">Sản phẩm</th>
                            <th class="p-4 text-sm font-bold uppercase whitespace-nowrap">Ngày</th>
                            <th class="p-4 text-sm font-bold uppercase whitespace-nowrap">Trạng thái</th>
                            <th class="p-4 text-sm font-bold uppercase whitespace-nowrap text-right">Giá trị</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y-2 divide-black">
                        <tr v-for="order in recentOrders" :key="order.id" class="hover:bg-neo-green/10 transition-colors font-medium">
                            <td class="p-4 font-bold">#{{ order.id }}</td>
                            <td class="p-4">
                                <div class="flex items-center gap-2">
                                    <div class="w-8 h-8 rounded-full border-2 border-black bg-gray-200 overflow-hidden">
                                        <img :src="`https://api.dicebear.com/7.x/avataaars/svg?seed=${order.customer}`" alt="avatar">
                                    </div>
                                    {{ order.customer }}
                                </div>
                            </td>
                            <td class="p-4">{{ order.product }}</td>
                            <td class="p-4 text-sm text-gray-600">{{ order.date }}</td>
                            <td class="p-4">
                                <span class="px-2 py-1 border-2 border-black text-xs font-bold rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] whitespace-nowrap"
                                    :class="{
                                        'bg-green-200': order.status === 'Completed',
                                        'bg-yellow-200': order.status === 'Pending',
                                        'bg-red-200 text-white': order.status === 'Cancelled'
                                    }">
                                    {{ order.status }}
                                </span>
                            </td>
                            <td class="p-4 text-right font-bold">{{ order.amount }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </NeoCard>

        <NeoCard class="p-6 h-[500px] overflow-hidden flex flex-col">
            <h3 class="font-bold text-lg uppercase mb-6">Hoạt Động Hệ Thống</h3>
            
            <div class="overflow-y-auto pr-2 custom-scrollbar flex-1">
                <div class="relative pl-6 border-l-2 border-black ml-2 space-y-8 py-2">
                    <div v-for="(act, idx) in activities" :key="idx" class="relative group">
                        <div class="absolute -left-[31px] w-4 h-4 rounded-full border-2 border-black bg-white group-hover:bg-neo-green transition-colors z-10"></div>
                        
                        <div class="bg-white border-2 border-black p-3 rounded shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform">
                            <div class="flex justify-between items-start mb-1">
                                <span class="text-xs font-bold text-gray-500">{{ act.time }}</span>
                                <i :class="act.icon" class="text-sm"></i>
                            </div>
                            <p class="font-bold text-sm leading-tight mb-1">{{ act.title }}</p>
                            <p class="text-xs text-gray-600">{{ act.desc }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </NeoCard>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        
        <NeoCard class="p-6 md:col-span-2">
             <h3 class="font-bold text-lg uppercase mb-4">Thao Tác Nhanh</h3>
             <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <button v-for="action in quickActions" :key="action.label" 
                    class="flex flex-col items-center justify-center gap-2 p-4 border-2 border-black rounded bg-white hover:bg-neo-green shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all group">
                    <i :class="action.icon" class="text-2xl group-hover:scale-110 transition-transform"></i>
                    <span class="text-xs font-bold uppercase text-center">{{ action.label }}</span>
                </button>
             </div>
        </NeoCard>

        <NeoCard class="p-6 flex flex-col">
             <h3 class="font-bold text-lg uppercase mb-4">Ghi Chú Admin</h3>
             <ul class="space-y-3 flex-1">
                <li v-for="todo in todos" :key="todo.id" class="flex items-center gap-3">
                    <div class="relative">
                        <input type="checkbox" v-model="todo.done" class="peer sr-only">
                        <div class="w-6 h-6 border-2 border-black bg-white peer-checked:bg-neo-green flex items-center justify-center cursor-pointer transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                            <i class="fa-solid fa-check text-xs opacity-0 peer-checked:opacity-100"></i>
                        </div>
                    </div>
                    <span class="font-bold text-sm cursor-pointer select-none" 
                        :class="{'line-through text-gray-400': todo.done}" 
                        @click="todo.done = !todo.done">
                        {{ todo.text }}
                    </span>
                </li>
             </ul>
             <div class="mt-4 flex gap-2">
                <input type="text" placeholder="Thêm việc mới..." class="w-full border-2 border-black px-2 py-1 text-sm outline-none focus:bg-gray-50">
                <button class="w-8 h-8 bg-black text-white flex items-center justify-center border-2 border-black hover:bg-gray-800"><i class="fa-solid fa-plus"></i></button>
             </div>
        </NeoCard>

        <NeoCard class="p-6 bg-blue-50">
            <h3 class="font-bold text-lg uppercase mb-6">Hệ Thống</h3>
            <div class="space-y-6">
                <div>
                    <div class="flex justify-between mb-1">
                        <span class="text-xs font-bold uppercase"><i class="fa-solid fa-server mr-1"></i> CPU Load</span>
                        <span class="text-xs font-bold">24%</span>
                    </div>
                    <div class="w-full bg-white border-2 border-black h-3">
                        <div class="h-full bg-green-500 w-[24%] border-r-2 border-black"></div>
                    </div>
                </div>
                <div>
                    <div class="flex justify-between mb-1">
                        <span class="text-xs font-bold uppercase"><i class="fa-solid fa-memory mr-1"></i> RAM Usage</span>
                        <span class="text-xs font-bold text-red-600">88%</span>
                    </div>
                    <div class="w-full bg-white border-2 border-black h-3">
                        <div class="h-full bg-red-500 w-[88%] border-r-2 border-black"></div>
                    </div>
                </div>
                <div>
                    <div class="flex justify-between mb-1">
                        <span class="text-xs font-bold uppercase"><i class="fa-solid fa-hard-drive mr-1"></i> Disk (SSD)</span>
                        <span class="text-xs font-bold">45%</span>
                    </div>
                    <div class="w-full bg-white border-2 border-black h-3">
                        <div class="h-full bg-yellow-400 w-[45%] border-r-2 border-black"></div>
                    </div>
                </div>
            </div>
            <div class="mt-6 pt-4 border-t-2 border-black border-dashed text-center">
                 <span class="inline-block px-3 py-1 bg-green-100 border-2 border-black text-xs font-bold rounded-full text-green-800">
                    <i class="fa-solid fa-circle text-[6px] mr-1 align-middle"></i> All Systems Operational
                 </span>
            </div>
        </NeoCard>

    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import NeoCard from '../components/NeoCard.vue';

// --- State & Logic ---

const selectedPeriod = ref('Tháng này');
const currentTime = ref('');

onMounted(() => {
    const now = new Date();
    currentTime.value = now.toLocaleString('vi-VN', { hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit' });
});

// --- Mock Data ---

const stats = [
  { title: 'Tổng doanh thu', value: '1.2 Tỷ', desc: 'so với tháng trước', trend: 20.1, icon: 'fa-solid fa-dollar-sign', isGreen: true },
  { title: 'Đăng ký mới', value: '450', desc: 'so với tháng trước', trend: 180.1, icon: 'fa-solid fa-user-plus' },
  { title: 'Thành viên', value: '8.2k', desc: 'so với tháng trước', trend: 19.0, icon: 'fa-solid fa-hard-drive' },
  { title: 'Tỷ lệ thoát', value: '12%', desc: 'Cần tối ưu thêm', trend: -2.4, icon: 'fa-solid fa-arrow-right-from-bracket' },
];

const chartData = [
    { month: 'T1', amount: 40, height: 40 },
    { month: 'T2', amount: 55, height: 55 },
    { month: 'T3', amount: 30, height: 30 },
    { month: 'T4', amount: 35, height: 35 },
    { month: 'T5', amount: 85, height: 85 },
    { month: 'T6', amount: 80, height: 80 },
    { month: 'T7', amount: 60, height: 60 },
    { month: 'T8', amount: 35, height: 35 },
    { month: 'T9', amount: 30, height: 30 },
    { month: 'T10', amount: 50, height: 50 },
    { month: 'T11', amount: 40, height: 40 },
    { month: 'T12', amount: 75, height: 75 },
];

const recentOrders = [
    { id: '9001', customer: 'Hoàng Long', product: 'Khóa học VueJS Master', date: '26/12/2025', status: 'Completed', amount: '1.200k' },
    { id: '9002', customer: 'Mai Anh', product: 'Gói Pro 1 Năm', date: '25/12/2025', status: 'Pending', amount: '2.500k' },
    { id: '9003', customer: 'Tuấn Vũ', product: 'Ebook UI/UX', date: '25/12/2025', status: 'Cancelled', amount: '150k' },
    { id: '9004', customer: 'Linh Chi', product: 'Khóa học React', date: '24/12/2025', status: 'Completed', amount: '1.200k' },
    { id: '9005', customer: 'Đức Minh', product: 'Mentoring 1-1', date: '24/12/2025', status: 'Completed', amount: '5.000k' },
];

const activities = [
    { time: '10:30 AM', title: 'Người dùng mới', desc: 'Nguyễn Văn A vừa đăng ký tài khoản.', icon: 'fa-solid fa-user' },
    { time: '09:15 AM', title: 'Thanh toán thành công', desc: 'Đơn hàng #9001 đã được xác nhận.', icon: 'fa-solid fa-cart-shopping' },
    { time: 'Yesterday', title: 'Cập nhật hệ thống', desc: 'Server bảo trì định kỳ hoàn tất.', icon: 'fa-solid fa-server' },
    { time: 'Yesterday', title: 'Báo cáo lỗi', desc: '3 người dùng báo lỗi tải trang.', icon: 'fa-solid fa-triangle-exclamation' },
    { time: '23 Dec', title: 'Khuyến mãi kết thúc', desc: 'Chiến dịch Black Friday đã đóng.', icon: 'fa-solid fa-tag' },
    { time: '22 Dec', title: 'Mã giảm giá mới', desc: 'Admin tạo mã XMAS2025.', icon: 'fa-solid fa-ticket' },
];

const quickActions = [
    { label: 'Thêm User', icon: 'fa-solid fa-user-plus' },
    { label: 'Tạo Mã', icon: 'fa-solid fa-ticket' },
    { label: 'Gửi Email', icon: 'fa-solid fa-envelope' },
    { label: 'Xuất PDF', icon: 'fa-solid fa-file-pdf' },
    { label: 'Backup DB', icon: 'fa-solid fa-database' },
    { label: 'Logs', icon: 'fa-solid fa-terminal' },
    { label: 'Phân Quyền', icon: 'fa-solid fa-shield-halved' },
    { label: 'Cài Đặt', icon: 'fa-solid fa-gear' },
];

const todos = ref([
    { id: 1, text: 'Kiểm tra báo cáo tài chính T12', done: false },
    { id: 2, text: 'Phê duyệt nội dung khóa học mới', done: false },
    { id: 3, text: 'Gọi điện CSKH VIP', done: true },
    { id: 4, text: 'Backup dữ liệu tuần', done: true },
]);

</script>
