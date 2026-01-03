<script setup>
import { ref } from 'vue';
import { Mail, ArrowRight, ArrowLeft, Key, LifeBuoy, CheckCircle, AlertTriangle } from 'lucide-vue-next';

// --- STATE ---
const email = ref('');
const isLoading = ref(false);
const step = ref(1); // 1: Form, 2: Success

// --- METHODS ---
const handleReset = () => {
  if (!email.value) return;
  
  isLoading.value = true;
  
  // Giả lập gửi email (Delay 1.5s)
  setTimeout(() => {
    isLoading.value = false;
    step.value = 2; // Chuyển sang màn hình thành công
  }, 1500);
};

const resetFlow = () => {
    step.value = 1;
    email.value = '';
}
</script>

<template>
  <div class="relative h-screen w-full font-sans text-black overflow-hidden bg-[#FDFBF7] selection:bg-[#FF9F1C] selection:text-black">
    
    <div class="pointer-events-none absolute inset-0 z-50 h-full w-full opacity-[0.04]" style="background-image: url('https://www.transparenttextures.com/patterns/noise-lines.png');"></div>

    <div class="flex h-full w-full flex-wrap">
      
      <div class="relative flex h-full w-full flex-col justify-center overflow-y-auto bg-[#FDFBF7] p-6 lg:w-5/12 lg:p-12 xl:w-4/12 scrollbar-hide z-10">
        
        <a href="/dang-nhap" class="absolute top-6 left-6 flex items-center gap-2 font-mono text-xs font-bold uppercase hover:underline decoration-2 hover:text-[#FF9F1C]">
            <ArrowLeft class="h-4 w-4" /> Quay lại đăng nhập
        </a>

        <div class="mx-auto w-full max-w-sm">
          
          <div v-if="step === 1" class="transition-all duration-500 animate-fade-in-up">
              <div class="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full border-4 border-black bg-[#FF9F1C] shadow-[4px_4px_0px_0px_#000]">
                  <Key class="h-8 w-8 text-white" />
              </div>

              <div class="mb-8">
                <h1 class="font-archivo text-4xl font-black uppercase leading-[0.9] md:text-5xl">
                  Lost <br> Your Key?
                </h1>
                <p class="font-mono text-sm font-bold text-gray-500 mt-4 border-l-4 border-black pl-3 py-1 bg-gray-100">
                  Đừng lo. Nhập email để nhận liên kết khôi phục.
                </p>
              </div>

              <form @submit.prevent="handleReset" class="space-y-6">
                <div class="space-y-2">
                  <label class="font-mono text-xs font-black uppercase flex items-center gap-1">
                    <Mail class="h-3 w-3" /> Email đã đăng ký
                  </label>
                  <input 
                    v-model="email" type="email" placeholder="help@dangkhoa.com" required
                    class="w-full border-2 border-black bg-white px-4 py-4 font-bold placeholder-gray-400 shadow-[4px_4px_0px_0px_#ccc] outline-none transition-all focus:bg-[#FFF4E6] focus:shadow-[4px_4px_0px_0px_#000] focus:translate-x-[-2px] focus:translate-y-[-2px]"
                  />
                </div>

                <button 
                    type="submit"
                    :disabled="isLoading"
                    class="group relative w-full overflow-hidden border-2 border-black bg-black py-4 text-lg font-black uppercase text-white shadow-[6px_6px_0px_0px_#888] transition-all hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_#000] active:translate-y-1 active:shadow-none disabled:opacity-70"
                >
                  <span v-if="!isLoading" class="relative z-10 flex items-center justify-center gap-2">
                    GỬI LINK CỨU HỘ <LifeBuoy class="h-5 w-5" />
                  </span>
                  <span v-else class="relative z-10 flex items-center justify-center gap-2">
                    ĐANG KẾT NỐI...
                  </span>
                  <div class="absolute inset-0 h-full w-full translate-y-full bg-[#FF9F1C] transition-transform duration-300 group-hover:translate-y-0"></div>
                </button>
              </form>
          </div>

          <div v-else class="text-center animate-fade-in-up">
              <div class="mb-6 mx-auto inline-flex h-20 w-20 items-center justify-center rounded-full border-4 border-black bg-[#00C16A] shadow-[4px_4px_0px_0px_#000]">
                  <CheckCircle class="h-10 w-10 text-white" />
              </div>
              
              <h2 class="font-archivo text-3xl font-black uppercase mb-4">Đã gửi tín hiệu!</h2>
              
              <div class="bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_#ccc] mb-6 text-left">
                  <p class="font-mono text-sm font-bold text-gray-600 mb-2">
                      Chúng tôi đã gửi hướng dẫn đến:
                  </p>
                  <p class="font-bold text-lg text-black break-all">{{ email }}</p>
              </div>

              <p class="text-sm font-bold text-gray-500 mb-8">
                  Vui lòng kiểm tra hộp thư (cả mục Spam) và làm theo hướng dẫn để lấy lại quyền truy cập.
              </p>

              <div class="space-y-3">
                  <button class="w-full border-2 border-black bg-black text-white py-3 font-black uppercase hover:bg-[#FF9F1C] hover:text-black transition-colors shadow-[4px_4px_0px_0px_#000]">
                      Mở Gmail ngay
                  </button>
                  <button @click="resetFlow" class="w-full py-3 font-bold text-gray-500 hover:text-black underline decoration-2">
                      Gửi lại bằng email khác
                  </button>
              </div>
          </div>

        </div>
      </div>

      <div class="relative hidden h-full flex-col justify-between border-l-[8px] border-black bg-[#FF9F1C] p-0 overflow-hidden lg:flex lg:w-7/12 xl:w-8/12">
        
        <div class="absolute top-0 left-0 w-full h-12 bg-yellow-300 border-b-4 border-black flex items-center overflow-hidden z-20">
             <div class="flex animate-marquee whitespace-nowrap">
                 <span v-for="i in 10" :key="i" class="mx-4 font-mono font-black text-xl flex items-center gap-2">
                     <AlertTriangle class="h-5 w-5 fill-black text-yellow-300" /> RESET_ZONE
                 </span>
             </div>
        </div>

        <div class="absolute inset-0 opacity-10" style="background-image: repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%); background-size: 20px 20px;"></div>
        
        <div class="relative h-full w-full flex items-center justify-center">
             
             <div class="relative h-80 w-80 bg-white border-4 border-black rounded-3xl shadow-[16px_16px_0px_0px_#000] flex items-center justify-center z-10">
                 <div class="h-40 w-40 rounded-full border-4 border-black bg-gray-200 flex items-center justify-center relative shadow-[inset_4px_4px_0px_0px_rgba(0,0,0,0.2)]">
                     <div class="h-4 w-4 bg-black rounded-full"></div>
                     <div class="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-6 bg-black"></div>
                     <div class="absolute inset-0 rounded-full border-4 border-dashed border-gray-400 opacity-50"></div>
                 </div>
                 
                 <div class="absolute -top-6 -right-6 rotate-12 border-4 border-black bg-red-500 px-4 py-2 font-archivo text-xl font-black text-white shadow-[4px_4px_0px_0px_#000]">
                     LOCKED
                 </div>
             </div>

             <Key class="absolute top-1/4 left-1/4 h-16 w-16 text-black animate-float-slow opacity-80 rotate-45" />
             <Key class="absolute bottom-1/3 right-1/4 h-12 w-12 text-black animate-float-reverse opacity-60 -rotate-12" />

        </div>

        <div class="absolute bottom-0 w-full border-t-4 border-black bg-black p-4 text-white flex justify-between font-mono text-sm font-bold">
            <span>SYS_STATUS: RECOVERY_MODE</span>
            <span>SECURE_ID: #99281</span>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=JetBrains+Mono:wght@400;700;800&family=Manrope:wght@500;700;800&display=swap');

.font-sans { font-family: 'Manrope', sans-serif; }
.font-archivo { font-family: 'Archivo Black', sans-serif; }
.font-mono { font-family: 'JetBrains Mono', monospace; }

.scrollbar-hide::-webkit-scrollbar { display: none; }
.scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }

/* Animations */
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.animate-marquee { animation: marquee 10s linear infinite; }

@keyframes float-slow {
    0%, 100% { transform: translateY(0px) rotate(45deg); }
    50% { transform: translateY(-20px) rotate(60deg); }
}
.animate-float-slow { animation: float-slow 6s ease-in-out infinite; }

@keyframes float-reverse {
    0%, 100% { transform: translateY(0px) rotate(-12deg); }
    50% { transform: translateY(15px) rotate(0deg); }
}
.animate-float-reverse { animation: float-reverse 7s ease-in-out infinite; }

.animate-fade-in-up {
    animation: fadeInUp 0.5s ease-out;
}
@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}
</style>