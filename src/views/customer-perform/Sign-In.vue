<script setup>
import { ref } from 'vue';
import { Eye, EyeOff, ArrowRight, CheckCircle, ShieldCheck, Lock, Mail, Zap, TrendingUp } from 'lucide-vue-next';

const email = ref('');
const password = ref('');
const showPassword = ref(false);
const rememberMe = ref(false);

const toggleShowPassword = () => showPassword.value = !showPassword.value;
</script>

<template>
  <div class="relative h-screen w-full font-sans text-black overflow-hidden bg-[#FDFBF7] selection:bg-[#00C16A] selection:text-white">
    <div class="pointer-events-none absolute inset-0 z-50 h-full w-full opacity-[0.04]" style="background-image: url('https://www.transparenttextures.com/patterns/noise-lines.png');"></div>

    <div class="flex h-full w-full flex-wrap">
      
      <div class="relative flex h-full w-full flex-col justify-center overflow-y-auto bg-[#FDFBF7] p-6 lg:w-5/12 lg:p-12 xl:w-4/12 scrollbar-hide z-10">

        <div class="mx-auto w-full max-w-sm relative">
          
          <div class="mb-8">
            <div class="flex items-center gap-2 mb-4">
                <Zap class="h-8 w-8 fill-black" />
                <span class="font-archivo text-2xl tracking-tighter">Dangkhoa<span class="text-[#00C16A]">.Admin</span></span>
            </div>
            <h1 class="font-archivo text-4xl font-black uppercase leading-[0.9] md:text-5xl">
              Enter <br> The System.
            </h1>
          </div>

          <form class="space-y-5">
            
            <div class="space-y-1">
              <label class="font-mono text-xs font-black uppercase flex items-center gap-1">
                <Mail class="h-3 w-3" /> Email truy cập
              </label>
              <div class="group relative">
                  <input 
                    v-model="email" type="email" placeholder="admin@dangkhoa.com" 
                    class="peer w-full border-2 border-black bg-white px-4 py-3 font-bold placeholder-gray-400 shadow-[4px_4px_0px_0px_#ccc] outline-none transition-all focus:bg-[#FEFCE8] focus:shadow-[4px_4px_0px_0px_#000] focus:translate-x-[-2px] focus:translate-y-[-2px]"
                  />
                  <div class="absolute bottom-0 right-0 h-0 w-0 border-b-[10px] border-r-[10px] border-transparent border-r-gray-300 peer-focus:border-r-[#00C16A] transition-all"></div>
              </div>
            </div>

            <div class="space-y-1">
              <div class="flex justify-between font-mono text-xs font-black uppercase">
                <label class="flex items-center gap-1"><Lock class="h-3 w-3" /> Mật khẩu</label>
                <a href="/quen-mat-khau" class="text-gray-500 hover:text-[#00C16A] hover:underline decoration-2">Quên password?</a>
              </div>
              <div class="relative group">
                <input 
                  v-model="password" :type="showPassword ? 'text' : 'password'" placeholder="••••••••" 
                  class="peer w-full border-2 border-black bg-white px-4 py-3 font-bold placeholder-gray-400 shadow-[4px_4px_0px_0px_#ccc] outline-none transition-all focus:bg-[#FEFCE8] focus:shadow-[4px_4px_0px_0px_#000] focus:translate-x-[-2px] focus:translate-y-[-2px]"
                />
                 <button type="button" @click="toggleShowPassword" class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black">
                  <component :is="showPassword ? EyeOff : Eye" class="h-5 w-5" />
                </button>
                <div class="absolute bottom-0 right-0 h-0 w-0 border-b-[10px] border-r-[10px] border-transparent border-r-gray-300 peer-focus:border-r-[#00C16A] transition-all"></div>
              </div>
            </div>

            <div class="flex items-center gap-3 pt-2 bg-white border-2 border-black p-2 shadow-sm">
              <input type="checkbox" id="remember" v-model="rememberMe" class="h-5 w-5 border-2 border-black accent-[#00C16A] cursor-pointer" />
              <label for="remember" class="text-sm font-bold cursor-pointer select-none font-mono">Giữ đăng nhập trong 30 ngày</label>
            </div>

            <button class="group relative w-full overflow-hidden border-2 border-black bg-black py-4 text-lg font-black uppercase text-white shadow-[6px_6px_0px_0px_#888] transition-all hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_#000] active:translate-y-1 active:shadow-none">
              <span class="relative z-10 flex items-center justify-center gap-2 transition-all group-hover:gap-4">
                KÍCH HOẠT PHIÊN <ArrowRight class="h-5 w-5" />
              </span>
              <div class="absolute inset-0 h-full w-full translate-y-full bg-[#00C16A] transition-transform duration-300 group-hover:translate-y-0"></div>
            </button>
          </form>

           <div class="my-4 flex items-center gap-3 text-xs font-mono font-bold text-black uppercase">
            <div class="h-0.5 flex-1 bg-black"></div> HOẶC TIẾP TỤC VỚI <div class="h-0.5 flex-1 bg-black"></div>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <button class="flex justify-center border-2 border-black bg-white py-3 shadow-[4px_4px_0px_0px_#ccc] hover:bg-gray-50 hover:shadow-[4px_4px_0px_0px_#000] hover:-translate-y-1 transition-all active:translate-y-0 active:shadow-none">
               <img src="https://www.svgrepo.com/show/475656/google-color.svg" class="h-6 w-6 grayscale hover:grayscale-0 transition-all" />
            </button>
            <button class="flex justify-center border-2 border-black bg-white py-3 shadow-[4px_4px_0px_0px_#ccc] hover:bg-gray-50 hover:shadow-[4px_4px_0px_0px_#000] hover:-translate-y-1 transition-all active:translate-y-0 active:shadow-none">
               <img src="https://www.svgrepo.com/show/512317/github-142.svg" class="h-6 w-6" />
            </button>
          </div>
          <p class="mt-6 text-center font-mono text-xs font-bold text-gray-500">
            Chưa có tài khoản?
            <a href="/dang-ky" class="bg-black text-white px-1 py-0.5 hover:bg-[#A78BFA] hover:text-black transition-colors">Đăng ký</a>
          </p>
        </div>
      </div>

      <div class="relative hidden h-full flex-col justify-between border-l-[8px] border-black bg-[#00C16A] p-8 overflow-hidden lg:flex lg:w-7/12 xl:w-8/12">
        
        <div class="pointer-events-none absolute inset-0 overflow-hidden">
            <div class="absolute top-20 left-20 h-20 w-20 animate-float-slow rounded-full border-4 border-black bg-[#FFD700] opacity-80"></div>
             <div class="absolute bottom-40 right-20 h-16 w-16 animate-float-reverse animate-spin-slow border-4 border-black bg-[#F472B6]"></div>
             <div class="absolute inset-0 opacity-20" style="background-image: linear-gradient(rgba(0,0,0,0.5) 2px, transparent 2px), linear-gradient(90deg, rgba(0,0,0,0.5) 2px, transparent 2px); background-size: 50px 50px;"></div>
        </div>
        
        <div class="z-10 flex justify-between items-center">
             <div class="flex gap-1">
                 <div class="h-3 w-3 rounded-full border-2 border-black bg-red-500"></div>
                 <div class="h-3 w-3 rounded-full border-2 border-black bg-yellow-500"></div>
                 <div class="h-3 w-3 rounded-full border-2 border-black bg-green-500"></div>
             </div>
            <div class="rotate-3 border-2 border-black bg-black px-4 py-2 text-sm font-mono font-black text-white shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)]">
                STATUS: ONLINE_
            </div>
        </div>

        <div class="z-10 flex flex-col items-center justify-center text-center">
             
             <div class="relative mb-10 hover:scale-105 transition-transform duration-300 cursor-pointer">
                 <div class="absolute top-4 left-4 h-full w-full rotate-6 rounded-xl border-4 border-black bg-[#A78BFA] shadow-[4px_4px_0px_0px_#000]"></div>
                 <div class="absolute top-2 left-2 h-full w-full -rotate-3 rounded-xl border-4 border-black bg-[#FFD700] shadow-[4px_4px_0px_0px_#000]"></div>
                 <div class="relative w-72 -rotate-6 rounded-xl border-4 border-black bg-white p-5 shadow-[8px_8px_0px_0px_#000] transition-transform hover:rotate-0">
                    <div class="flex items-center justify-between border-b-2 border-black pb-3 mb-3">
                        <span class="font-mono text-sm font-bold flex items-center gap-2"><TrendingUp class="h-5 w-5"/> Doanh thu</span>
                        <div class="badge bg-green-100 text-green-800 border-2 border-green-800 text-xs font-black px-2 py-0.5 rounded-full">LIVE</div>
                    </div>
                    <div class="text-4xl font-archivo font-black text-black">12.5M <span class="text-lg">₫</span></div>
                    <div class="mt-3 h-3 w-full rounded-full border-2 border-black bg-gray-100 overflow-hidden">
                        <div class="h-full w-[85%] bg-[#00C16A] animate-pulse"></div>
                    </div>
                 </div>
             </div>

             <h2 class="font-archivo text-5xl font-black uppercase text-white lg:text-6xl leading-none" style="-webkit-text-stroke: 2px black;">
                Control <br>
                <span class="text-black bg-white px-2">Everything.</span>
             </h2>
        </div>

        <div class="z-10 flex items-center justify-between text-sm font-mono font-bold text-black border-t-2 border-black pt-4 bg-[#00C16A]">
            <div class="flex items-center gap-2">
                 <ShieldCheck class="h-5 w-5" /> Secure Encrypted V2
            </div>
            <div>© 2026 Dangkhoa Inc.</div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
/* Import font: Manrope (cho text thường), Archivo Black (cho tiêu đề), JetBrains Mono (cho nhãn kỹ thuật) */
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=JetBrains+Mono:wght@400;700;800&family=Manrope:wght@500;700;800&display=swap');

.font-sans { font-family: 'Manrope', sans-serif; }
.font-archivo { font-family: 'Archivo Black', sans-serif; }
.font-mono { font-family: 'JetBrains Mono', monospace; }

.scrollbar-hide::-webkit-scrollbar { display: none; }
.scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }

/* Animations cho hình nền */
@keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(5deg); }
}
@keyframes float-reverse {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(20px) rotate(-5deg); }
}
.animate-float-slow { animation: float 6s ease-in-out infinite; }
.animate-float-reverse { animation: float-reverse 7s ease-in-out infinite; }
.animate-spin-slow { animation: spin 12s linear infinite; }

/* Hiệu ứng cho nút chính khi hover */
.group:hover .group-hover\:gap-4 {
    gap: 1rem; /* Tăng khoảng cách giữa chữ và mũi tên */
}
</style>