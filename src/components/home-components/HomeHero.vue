<template>
  <header class="relative overflow-hidden border-b-4 border-black bg-[#FDFBF7] py-24 lg:py-36" 
          style="background-image: radial-gradient(#000 1px, transparent 1px); background-size: 20px 20px;">
    
    <div class="absolute left-[5%] top-[10%] text-[#FFD700] mix-blend-multiply opacity-80 pointer-events-none">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-24 w-24 animate-spin-slow" style="animation: spin 12s linear infinite;">
        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
      </svg>
    </div>
    <div class="absolute right-[15%] top-[15%] h-12 w-12 animate-float rounded-full border-4 border-black bg-[#FF9F1C] pointer-events-none"></div>
    <div class="absolute left-[40%] bottom-[10%] h-8 w-8 animate-bounce-slow rounded-sm border-4 border-black bg-[#00C16A] rotate-12 pointer-events-none delay-700"></div>
    <svg class="absolute right-[30%] bottom-[20%] w-24 h-24 text-black animate-pulse-slow pointer-events-none" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
      <path d="M10 50 C 20 20, 40 20, 50 50 C 60 80, 80 80, 90 50 M 70 30 L 90 50 L 70 70"/>
    </svg>

    <div class="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:items-center relative z-10">
      
      <div class="space-y-10 reveal-on-scroll slide-up">
        <div class="inline-flex -rotate-3 items-center gap-2 border-4 border-black bg-[#F472B6] px-4 py-2 text-sm font-black shadow-[5px_5px_0px_0px_#000] hover:rotate-0 transition-all hover:shadow-[2px_2px_0px_0px_#000] cursor-default">
          <Gift class="h-5 w-5 animate-wiggle" /> QUÀ TẶNG EBOOK 500K
        </div>
        
        <h1 class="font-archivo text-7xl font-black leading-[0.9] md:text-9xl tracking-tighter" style="text-shadow: 4px 4px 0px #00000030;">
          LEARN <br />
          <span class="relative inline-block text-[#00C16A] px-2 hover:scale-110 transition-transform duration-300">
            CODE
            <svg class="absolute -bottom-4 left-0 w-full h-6" viewBox="0 0 300 20" fill="none"><path d="M5 15 Q 75 5, 150 15 T 295 5" stroke="black" stroke-width="6" stroke-linecap="round"/></svg>
          </span><br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-black to-black bg-[length:0%_100%] bg-no-repeat hover:bg-[length:100%_100%] transition-all duration-500 ease-out" style="-webkit-text-stroke: 3px black;">FASTER</span>
        </h1>

        <p class="max-w-xl text-2xl font-bold text-gray-800 leading-relaxed border-l-4 border-[#FF9F1C] pl-4">
          Nền tảng Admin Dashboard thực tế giúp bạn quản lý tiến độ và bứt phá kỹ năng lập trình.
        </p>

        <div class="flex flex-wrap gap-6 pt-6">
          <button class="relative group flex items-center gap-3 border-4 border-black bg-black px-10 py-5 text-xl font-bold text-white shadow-[8px_8px_0px_0px_#000] transition-all hover:-translate-y-1 hover:translate-x-1 hover:shadow-[4px_4px_0px_0px_#000] overflow-hidden rounded-lg">
            <span class="relative z-10 flex items-center gap-2 group-hover:text-black transition-colors">
              Bắt đầu ngay <ArrowRight class="group-hover:translate-x-2 transition-transform"/>
            </span>
            <div class="absolute inset-0 bg-[#FFD700] translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0"></div>
          </button>

          <button class="group flex items-center gap-3 border-4 border-black bg-white px-10 py-5 text-xl font-bold shadow-[8px_8px_0px_0px_#000] transition-all hover:bg-[#FF9F1C] hover:-translate-y-1 hover:translate-x-1 hover:shadow-[4px_4px_0px_0px_#000] rounded-lg">
            <PlayCircle class="group-hover:scale-110 transition-transform" /> Xem Demo
          </button>
        </div>
      </div>

      <div class="relative z-10 hidden lg:block reveal-on-scroll slide-left group/mockup perspective-1000">
        <div class="relative z-20 rounded-2xl border-4 border-black bg-white p-3 shadow-[20px_20px_0px_0px_#000] transition-all duration-500 group-hover/mockup:rotate-y-6 group-hover/mockup:rotate-x-3 group-hover/mockup:shadow-[10px_10px_0px_0px_#000]">
          
          <div class="flex items-center gap-3 border-b-4 border-black bg-gray-100 px-5 py-4 rounded-t-xl">
            <div class="h-5 w-5 rounded-full border-2 border-black bg-[#FF5F57] shadow-sm"></div>
            <div class="h-5 w-5 rounded-full border-2 border-black bg-[#FFBD2E] shadow-sm"></div>
            <div class="h-5 w-5 rounded-full border-2 border-black bg-[#27C93F] shadow-sm"></div>
          </div>

          <div class="h-[380px] bg-[#FDFBF7] p-5 flex gap-6 rounded-b-xl">
            <div class="w-20 border-r-4 border-dashed border-black flex flex-col items-center gap-6 pt-4">
              <div class="h-12 w-12 bg-black rounded-lg border-2 border-black hover:bg-[#00C16A] transition-colors cursor-pointer"></div>
              <div class="h-10 w-10 bg-gray-200 rounded border-2 border-black hover:rotate-12 transition-transform"></div>
              <div class="h-10 w-10 bg-gray-200 rounded border-2 border-black hover:-rotate-12 transition-transform"></div>
            </div>

            <div class="flex-1 space-y-6">
              <div class="flex justify-between items-center">
                <div class="h-14 w-56 bg-white border-4 border-black rounded-lg flex items-center px-4 font-bold text-gray-400 animate-pulse cursor-text">Tìm kiếm...</div>
                <div class="h-14 w-14 rounded-full border-4 border-black bg-[#A78BFA] hover:scale-110 transition-transform shadow-[3px_3px_0px_0px_#000] cursor-pointer overflow-hidden">
                  <img src="https://i.pravatar.cc/100?img=3" alt="Avatar" class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all">
                </div>
              </div>
              
              <div class="grid grid-cols-2 gap-6 h-full">
                <div class="relative h-48 bg-[#A7F3D0] border-4 border-black rounded-lg shadow-[6px_6px_0px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all overflow-hidden group/widget">
                  <div class="p-4 font-black text-lg">Tiến độ học tập</div>
                  <div class="absolute bottom-0 left-0 right-0 h-24 bg-[#059669] border-t-4 border-black flex items-end p-2 group-hover/widget:h-28 transition-all">
                     <div class="w-1/4 h-[60%] bg-black mx-1"></div>
                     <div class="w-1/4 h-[80%] bg-black mx-1"></div>
                     <div class="w-1/4 h-[40%] bg-black mx-1"></div>
                     <div class="w-1/4 h-[90%] bg-[#FFD700] mx-1 border-2 border-black animate-bounce-slow"></div>
                  </div>
                </div>
                <div class="h-48 bg-[#FDE68A] border-4 border-black rounded-lg shadow-[6px_6px_0px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all p-4">
                  <div class="font-black text-lg mb-4">Dự án sắp tới</div>
                  <div class="space-y-2">
                    <div class="h-8 w-3/4 bg-white border-2 border-black rounded skew-x-6"></div>
                    <div class="h-8 w-1/2 bg-white border-2 border-black rounded -skew-x-6"></div>
                    <div class="h-8 w-2/3 bg-white border-2 border-black rounded skew-x-3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="absolute -right-12 top-12 z-30 flex animate-float-slow items-center gap-3 rounded-xl border-4 border-black bg-[#FFD700] px-6 py-4 font-black text-lg shadow-[8px_8px_0px_0px_#000] rotate-6 hover:rotate-0 hover:scale-105 transition-all">
          <Trophy class="h-8 w-8 animate-wiggle" /> Top 1 Trending
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { Gift, ArrowRight, PlayCircle, Trophy } from 'lucide-vue-next';
</script>

<style scoped>
/* Một số animation CSS bổ sung nếu chưa có trong Tailwind config */
.animate-spin-slow { animation: spin 12s linear infinite; }
.animate-float { animation: float 6s ease-in-out infinite; }
.animate-float-slow { animation: float 8s ease-in-out infinite; }
.animate-bounce-slow { animation: bounce 3s infinite; }
.animate-pulse-slow { animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
.animate-wiggle { animation: wiggle 1s ease-in-out infinite; }
.perspective-1000 { perspective: 1000px; }

@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
@keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
@keyframes bounce { 0%, 100% { transform: translateY(-10%); } 50% { transform: translateY(10%); } }
@keyframes wiggle { 0%, 100% { transform: rotate(-5deg); } 50% { transform: rotate(5deg); } }
</style>