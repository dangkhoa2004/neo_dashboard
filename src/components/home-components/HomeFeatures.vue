<template>
  <section class="border-b-2 border-black bg-[#FDFBF7] py-20 relative overflow-hidden">
    <div class="absolute top-10 left-[-50px] w-40 h-40 bg-yellow-300 rounded-full border-2 border-black opacity-50 blur-xl"></div>
    <div class="absolute bottom-10 right-[-50px] w-60 h-60 bg-purple-300 rounded-full border-2 border-black opacity-50 blur-2xl"></div>

    <div class="mx-auto max-w-7xl px-6 relative z-10">
      <div class="text-center mb-20 relative z-10">
         <div class="inline-flex items-center gap-2 border-2 border-black bg-white px-4 py-1.5 font-black text-sm uppercase tracking-widest mb-6 -rotate-2 shadow-[4px_4px_0px_0px_#000] hover:rotate-0 transition-transform cursor-default">
            <span class="text-[#00C16A]">★</span> TÍNH NĂNG VƯỢT TRỘI
         </div>

         <h2 class="text-5xl md:text-7xl font-black text-black uppercase leading-[0.9] reveal-on-scroll scale-up">
            Tại sao chọn <br class="md:hidden" />
            <span class="relative inline-block px-2 ml-2">
               <span class="relative z-10">CHÚNG TÔI?</span>
               <span class="absolute inset-0 bg-[#00C16A] -rotate-1 skew-x-3 h-full w-full z-0 border-2 border-black"></span>
            </span>
         </h2>

         <p class="mt-6 text-xl font-medium text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Không chỉ là khóa học, đây là <span class="font-black text-black bg-gray-100 px-1">hệ sinh thái</span> giúp bạn tăng tốc sự nghiệp lập trình từ Zero đến Hero.
         </p>
         </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
        
        <div class="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-xl border-2 border-black bg-[#E0E7FF] p-8 shadow-[8px_8px_0px_0px_#000] group transition-all duration-300 hover:-translate-y-2 hover:shadow-[14px_14px_0px_0px_#000] reveal-on-scroll slide-up">
          <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(#000 1px, transparent 1px); background-size: 20px 20px;"></div>
          
          <div class="relative z-10 flex justify-between items-start">
            <div>
              <div class="inline-flex items-center gap-2 border-2 border-black bg-white px-3 py-1 rounded-full text-xs font-black mb-4 shadow-sm">
                <Monitor class="h-4 w-4 text-blue-600" /> PRO DASHBOARD
              </div>
              <h3 class="text-3xl font-black mb-2">Quản lý Tiến độ</h3>
              <p class="font-bold text-gray-600 max-w-sm">Theo dõi lộ trình học tập, thống kê code, và bảng xếp hạng realtime.</p>
            </div>
          </div>
          
          <div class="absolute bottom-0 right-0 w-[90%] md:w-[70%] h-[60%] bg-white border-t-2 border-l-2 border-black rounded-tl-xl p-4 transition-transform duration-500 group-hover:scale-105 group-hover:translate-x-2 group-hover:translate-y-2 shadow-xl">
            <div class="flex gap-2 mb-4 border-b-2 border-dashed border-gray-200 pb-2">
               <div class="w-3 h-3 rounded-full bg-red-400 border border-black"></div>
               <div class="w-3 h-3 rounded-full bg-yellow-400 border border-black"></div>
               <div class="w-3 h-3 rounded-full bg-green-400 border border-black"></div>
            </div>
            <div class="space-y-3">
               <div class="flex gap-2 items-center">
                  <div class="w-8 h-8 rounded bg-blue-100 border border-black"></div>
                  <div class="h-4 w-2/3 bg-gray-100 rounded"></div>
               </div>
               <div class="w-full h-24 bg-gray-50 border-2 border-dashed border-gray-300 rounded flex items-center justify-center text-xs font-bold text-gray-400">
                  CHART AREA
               </div>
               <div class="grid grid-cols-3 gap-2">
                 <div class="h-10 bg-green-100 border border-black rounded group-hover:bg-[#00C16A] transition-colors"></div>
                 <div class="h-10 bg-yellow-100 border border-black rounded group-hover:bg-[#FFD700] transition-colors delay-75"></div>
                 <div class="h-10 bg-purple-100 border border-black rounded group-hover:bg-[#A78BFA] transition-colors delay-100"></div>
               </div>
            </div>
          </div>
        </div>

        <div class="bg-[#A7F3D0] rounded-xl border-2 border-black p-6 shadow-[6px_6px_0px_0px_#000] hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_#000] transition-all reveal-on-scroll slide-up delay-100 group relative overflow-hidden">
           <Code class="h-10 w-10 mb-4 text-green-800 transition-transform group-hover:rotate-12" />
           <h4 class="text-xl font-black">Code Chuẩn Mực</h4>
           <p class="text-sm font-bold opacity-70 mt-2">Cập nhật công nghệ mới nhất 2026. Clean Code & Best Practices.</p>
           <div class="absolute -right-4 -bottom-4 text-green-300 opacity-40">
              <Code class="h-32 w-32" />
           </div>
        </div>

        <div class="md:row-span-2 bg-[#F472B6] rounded-xl border-2 border-black p-6 shadow-[8px_8px_0px_0px_#000] hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_#000] transition-all reveal-on-scroll slide-up delay-150 relative overflow-hidden group">
           <div class="relative z-10">
              <div class="w-12 h-12 bg-white border-2 border-black rounded-full flex items-center justify-center mb-4 shadow-sm group-hover:animate-bounce-slow">
                 <Smartphone class="h-6 w-6" />
              </div>
              <h4 class="text-2xl font-black text-white text-stroke-black">Học Mọi Nơi</h4>
              <p class="font-bold mt-2">App Mobile xịn xò. Học trên xe bus, quán cafe hay trên giường ngủ.</p>
           </div>
           
           <div class="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-40 h-64 bg-black rounded-t-3xl border-x-4 border-t-4 border-gray-800 p-2 transition-transform duration-300 group-hover:translate-y-[-10px]">
              <div class="w-full h-full bg-white rounded-t-xl overflow-hidden relative">
                 <div class="bg-gray-100 w-full h-8 flex items-center justify-center border-b border-gray-200">
                    <div class="w-10 h-1 bg-black rounded-full"></div>
                 </div>
                 <div class="p-2 space-y-2">
                    <div class="w-full h-20 bg-blue-100 rounded border border-blue-200"></div>
                    <div class="w-full h-10 bg-gray-100 rounded"></div>
                    <div class="w-full h-10 bg-gray-100 rounded"></div>
                 </div>
              </div>
           </div>
        </div>

        <div class="bg-[#FDE68A] rounded-xl border-2 border-black p-6 shadow-[6px_6px_0px_0px_#000] hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_#000] transition-all reveal-on-scroll slide-up delay-200 group">
           <Users class="h-10 w-10 mb-4 text-yellow-800 transition-transform group-hover:scale-110" />
           <h4 class="text-xl font-black">Cộng đồng VIP</h4>
           <p class="text-sm font-bold opacity-70 mt-2">Support 1-1, Mentoring hàng tuần cùng chuyên gia.</p>
        </div>

        <div class="md:col-span-2 bg-[#A78BFA] rounded-xl border-2 border-black p-6 shadow-[6px_6px_0px_0px_#000] hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_#000] transition-all reveal-on-scroll slide-up delay-250 flex flex-col md:flex-row items-center gap-6 group overflow-hidden">
           <div class="flex-1 relative z-10">
              <div class="flex items-center gap-2 mb-2">
                 <Award class="h-6 w-6 text-white" />
                 <span class="font-black text-white text-lg uppercase">Chứng nhận xịn</span>
              </div>
              <h4 class="text-2xl font-black mb-2">Chứng chỉ hoàn thành</h4>
              <p class="font-bold text-sm">Được công nhận bởi các công ty công nghệ hàng đầu. Đính kèm vào CV xin việc ngay.</p>
           </div>
           
           <div class="relative w-full md:w-64 h-32 bg-[#FDFBF7] border-4 border-black p-4 rotate-2 transition-transform duration-300 group-hover:rotate-0 group-hover:scale-105">
              <div class="absolute top-0 left-0 w-4 h-4 border-b-2 border-r-2 border-black bg-red-500"></div>
              <div class="absolute top-0 right-0 w-4 h-4 border-b-2 border-l-2 border-black bg-red-500"></div>
              <div class="text-center border-2 border-dashed border-gray-300 h-full flex flex-col items-center justify-center">
                 <span class="font-serif text-xl font-bold text-gray-800">CERTIFICATE</span>
                 <div class="w-10 h-10 bg-yellow-400 rounded-full mt-2 flex items-center justify-center border border-black">
                    <span class="text-xs font-black">★</span>
                 </div>
              </div>
           </div>
        </div>

        <div class="bg-[#FF9F1C] rounded-xl border-2 border-black p-6 shadow-[6px_6px_0px_0px_#000] hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_#000] transition-all reveal-on-scroll slide-up delay-300 group">
           <ShieldCheck class="h-10 w-10 mb-4 text-white" />
           <h4 class="text-xl font-black text-white">Thanh toán An toàn</h4>
           <p class="text-sm font-bold text-white/90 mt-2">Bảo mật thông tin tuyệt đối. Hoàn tiền trong 7 ngày.</p>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { Monitor, Code, Users, Smartphone, Award, ShieldCheck } from 'lucide-vue-next';
</script>

<style scoped>
/* Có thể custom thêm ở đây nếu cần, nhưng Tailwind đã lo gần hết */
.text-stroke-black {
  -webkit-text-stroke: 1px black;
}
.text-stroke-white {
  -webkit-text-stroke: 1px white; /* Tạo viền trắng cho text nếu nằm trên nền tối */
}
</style>