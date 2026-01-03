<template>
  <div class="relative min-h-screen w-full overflow-hidden bg-[#FDFBF7] font-sans flex items-center justify-center p-6"
       style="background-image: radial-gradient(#000 1.5px, transparent 1.5px); background-size: 24px 24px;">
    
    <div class="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-20 bg-black -rotate-12 flex items-center justify-center"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-16 bg-[#FFD700] border-y-4 border-black -rotate-12 flex items-center overflow-hidden">
        <div class="animate-marquee whitespace-nowrap font-black text-2xl uppercase tracking-widest px-4">
          Error 404 // Page Not Found // System Failure // Nothing Here // Error 404 // Page Not Found // System Failure // Nothing Here //
        </div>
      </div>
    </div>

    <div class="absolute top-20 left-20 w-16 h-16 border-4 border-black bg-[#FF5F57] shadow-[4px_4px_0px_0px_#000] animate-float"></div>
    <div class="absolute bottom-20 right-20 w-12 h-12 rounded-full border-4 border-black bg-[#00C16A] shadow-[4px_4px_0px_0px_#000] animate-bounce-slow delay-700"></div>

    <div class="relative z-10 max-w-2xl w-full">
      
      <div class="relative bg-white border-4 border-black p-8 md:p-12 shadow-[16px_16px_0px_0px_#000] transition-transform hover:-translate-y-1">
        
        <div class="absolute top-0 left-0 right-0 h-10 border-b-4 border-black bg-gray-100 flex items-center px-4 gap-2">
          <div class="w-4 h-4 rounded-full border-2 border-black bg-[#FF5F57]"></div>
          <div class="w-4 h-4 rounded-full border-2 border-black bg-[#FFBD2E]"></div>
          <div class="w-4 h-4 rounded-full border-2 border-black bg-[#27C93F]"></div>
          <div class="ml-auto font-mono text-xs font-bold text-gray-500">system_error.exe</div>
        </div>

        <div class="mt-8 text-center">
          <div class="relative inline-block">
             <h1 class="text-9xl font-black text-black tracking-tighter relative z-10">404</h1>
             <h1 class="text-9xl font-black text-[#FF5F57] tracking-tighter absolute top-0 left-0 -translate-x-1 -translate-y-1 -z-10 select-none opacity-80">404</h1>
             <h1 class="text-9xl font-black text-[#00C16A] tracking-tighter absolute top-0 left-0 translate-x-1 translate-y-1 -z-10 select-none opacity-80">404</h1>
          </div>

          <h2 class="text-3xl md:text-4xl font-black uppercase mt-4 mb-2">Oops! Lạc đường rồi?</h2>
          <p class="text-lg font-bold text-gray-600 mb-8 max-w-md mx-auto">
            Trang bạn đang tìm kiếm đã bị xóa, đổi tên hoặc tạm thời không có mặt ở vũ trụ này.
          </p>

          <div class="bg-black border-4 border-black p-4 mb-8 text-left font-mono text-sm md:text-base rounded shadow-[4px_4px_0px_0px_#888] overflow-hidden">
             <div class="flex gap-2 text-[#00C16A] mb-1">
               <span>></span> <span class="typing-effect">Initiating search sequence...</span>
             </div>
             <div class="flex gap-2 text-[#FF5F57] mb-1 delay-1">
               <span>></span> <span>Error: Destination unreachable.</span>
             </div>
             <div class="flex gap-2 text-white">
               <span class="animate-pulse">_</span>
             </div>
          </div>

          <div class="flex flex-col md:flex-row gap-4 justify-center items-center">
             <router-link to="/" class="w-full md:w-auto group relative outline-none">
                <div class="absolute inset-0 bg-black translate-x-[4px] translate-y-[4px] transition-transform group-active:translate-x-0 group-active:translate-y-0"></div>
                <button class="relative w-full bg-[#FFD700] border-2 border-black px-8 py-3 font-black text-lg uppercase tracking-wider flex items-center justify-center gap-2 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1 group-active:translate-x-[4px] group-active:translate-y-[4px]">
                   <Home class="w-5 h-5" /> Về Trang Chủ
                </button>
             </router-link>

             <button @click="$router.go(-1)" class="w-full md:w-auto flex items-center justify-center gap-2 px-8 py-3 bg-white border-2 border-black font-bold text-lg uppercase shadow-[4px_4px_0px_0px_#000] hover:bg-gray-50 hover:shadow-[2px_2px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
                <ArrowLeft class="w-5 h-5" /> Quay Lại
             </button>
          </div>

        </div>
      </div>
      
    </div>
  </div>
</template>

<script setup>
import { Home, ArrowLeft } from 'lucide-vue-next';
</script>

<style scoped>
/* Animation Marquee cho dải băng */
.animate-marquee {
  animation: marquee 15s linear infinite;
}
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

/* Animation trôi nổi */
.animate-float {
  animation: float 6s ease-in-out infinite;
}
@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(10deg); }
}

/* Hiệu ứng gõ chữ đơn giản (giả lập) */
.delay-1 {
  animation: fadeIn 0.5s ease-in-out 0.8s forwards;
  opacity: 0;
}
@keyframes fadeIn {
  to { opacity: 1; }
}
</style>