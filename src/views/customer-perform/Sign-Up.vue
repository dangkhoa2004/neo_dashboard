<template>
  <div class="relative h-screen w-full font-sans text-black overflow-hidden bg-[#FDFBF7] selection:bg-[#A78BFA] selection:text-black">
    
    <div class="pointer-events-none absolute inset-0 z-50 h-full w-full opacity-[0.04]" style="background-image: url('https://www.transparenttextures.com/patterns/noise-lines.png');" aria-hidden="true"></div>

    <div class="flex h-full w-full flex-wrap">
      
      <main class="relative flex h-full w-full flex-col justify-center overflow-y-auto bg-[#FDFBF7] p-6 lg:w-5/12 lg:p-10 xl:w-4/12 scrollbar-hide z-10">
        
        <div class="absolute top-4 right-4 rotate-6 border-2 border-black bg-[#00C16A] px-3 py-1 font-mono text-xs font-bold text-white shadow-[2px_2px_0px_0px_#000]" aria-hidden="true">
          JOIN_US_NOW
        </div>

        <div class="mx-auto w-full max-w-sm mt-10 lg:mt-0">
          
          <header class="mb-6">
            <div class="flex items-center gap-2 mb-2">
                <Smile class="h-8 w-8 text-black" aria-hidden="true" />
                <span class="font-archivo text-xl tracking-tighter">Dangkhoa<span class="text-[#A78BFA]">.Inc</span></span>
            </div>
            <h1 class="font-archivo text-4xl font-black uppercase leading-[0.9] md:text-5xl">
              Start <br> Journey.
            </h1>
            <p class="font-mono text-xs font-bold text-gray-600 mt-2">
              Tạo tài khoản để quản trị hệ thống của riêng bạn.
            </p>
          </header>

          <form class="space-y-4" @submit.prevent>
            
            <div class="space-y-1">
              <label for="reg-name" class="font-mono text-xs font-black uppercase flex items-center gap-1">
                <User class="h-3 w-3" aria-hidden="true" /> Họ và tên
              </label>
              <input 
                id="reg-name"
                v-model="name" type="text" placeholder="Nguyen Van A" 
                class="w-full border-2 border-black bg-white px-4 py-3 font-bold placeholder-gray-400 shadow-[4px_4px_0px_0px_#ccc] outline-none transition-all focus:bg-[#FEFCE8] focus:shadow-[4px_4px_0px_0px_#000] focus:translate-x-[-2px] focus:translate-y-[-2px]"
              />
            </div>

            <div class="space-y-1">
              <label for="reg-email" class="font-mono text-xs font-black uppercase flex items-center gap-1">
                <Mail class="h-3 w-3" aria-hidden="true" /> Email đăng ký
              </label>
              <input 
                id="reg-email"
                v-model="email" type="email" placeholder="email@domain.com" 
                class="w-full border-2 border-black bg-white px-4 py-3 font-bold placeholder-gray-400 shadow-[4px_4px_0px_0px_#ccc] outline-none transition-all focus:bg-[#FEFCE8] focus:shadow-[4px_4px_0px_0px_#000] focus:translate-x-[-2px] focus:translate-y-[-2px]"
              />
            </div>

            <div class="grid grid-cols-2 gap-4">
                <div class="space-y-1 col-span-2 md:col-span-1">
                    <label for="reg-pass" class="font-mono text-xs font-black uppercase flex items-center gap-1">
                        <Lock class="h-3 w-3" aria-hidden="true" /> Mật khẩu
                    </label>
                    <div class="relative">
                        <input 
                          id="reg-pass"
                          v-model="password" :type="showPassword ? 'text' : 'password'" placeholder="••••••" 
                          class="w-full border-2 border-black bg-white px-4 py-3 font-bold placeholder-gray-400 shadow-[4px_4px_0px_0px_#ccc] outline-none transition-all focus:bg-[#FEFCE8] focus:shadow-[4px_4px_0px_0px_#000]"
                        />
                    </div>
                </div>
                <div class="space-y-1 col-span-2 md:col-span-1">
                    <label for="reg-confirm" class="font-mono text-xs font-black uppercase flex items-center gap-1">
                        <BadgeCheck class="h-3 w-3" aria-hidden="true" /> Xác nhận
                    </label>
                    <input 
                      id="reg-confirm"
                      v-model="confirmPassword" :type="showPassword ? 'text' : 'password'" placeholder="••••••" 
                      class="w-full border-2 border-black bg-white px-4 py-3 font-bold placeholder-gray-400 shadow-[4px_4px_0px_0px_#ccc] outline-none transition-all focus:bg-[#FEFCE8] focus:shadow-[4px_4px_0px_0px_#000]"
                    />
                </div>
            </div>

            <div class="flex h-1.5 w-full gap-1" role="progressbar" :aria-valuenow="passwordStrength" aria-valuemin="0" aria-valuemax="3" aria-label="Độ mạnh mật khẩu">
                <div :class="`h-full flex-1 rounded-full transition-colors ${passwordStrength >= 1 ? 'bg-red-500' : 'bg-gray-200'}`"></div>
                <div :class="`h-full flex-1 rounded-full transition-colors ${passwordStrength >= 2 ? 'bg-yellow-500' : 'bg-gray-200'}`"></div>
                <div :class="`h-full flex-1 rounded-full transition-colors ${passwordStrength >= 3 ? 'bg-[#00C16A]' : 'bg-gray-200'}`"></div>
            </div>

            <div class="flex items-start gap-3 pt-2">
              <input type="checkbox" id="terms" v-model="agreeTerms" class="mt-1 h-5 w-5 shrink-0 border-2 border-black accent-[#A78BFA] cursor-pointer" />
              <label for="terms" class="text-xs font-bold cursor-pointer select-none font-mono text-gray-600 leading-tight">
                Tôi đồng ý với <u class="text-black">Điều khoản dịch vụ</u> & <u class="text-black">Chính sách bảo mật</u>.
              </label>
            </div>

            <button type="submit" class="group relative w-full overflow-hidden border-2 border-black bg-black py-4 text-lg font-black uppercase text-white shadow-[6px_6px_0px_0px_#888] transition-all hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_#000] active:translate-y-1 active:shadow-none">
              <span class="relative z-10 flex items-center justify-center gap-2 transition-all group-hover:gap-4">
                ĐĂNG KÝ NGAY <ArrowRight class="h-5 w-5" />
              </span>
              <div class="absolute inset-0 h-full w-full translate-y-full bg-[#A78BFA] transition-transform duration-300 group-hover:translate-y-0"></div>
            </button>
          </form>

          <p class="mt-6 text-center font-mono text-xs font-bold text-gray-600">
            Đã có tài khoản? 
            <a href="/dang-nhap" class="bg-black text-white px-2 py-1 hover:bg-[#A78BFA] hover:text-black transition-colors ml-1">Đăng nhập</a>
          </p>

        </div>
      </main>

      <section aria-hidden="true" class="relative hidden h-full flex-col justify-between border-l-[8px] border-black bg-[#A78BFA] p-8 overflow-hidden lg:flex lg:w-7/12 xl:w-8/12">
        
        <div class="pointer-events-none absolute inset-0 overflow-hidden">
             <div class="absolute top-10 right-20 h-32 w-32 animate-spin-slow rounded-full border-4 border-black border-dashed opacity-50"></div>
             <div class="absolute bottom-20 left-10 h-16 w-16 animate-float-slow bg-yellow-400 border-4 border-black rotate-45"></div>
             <div class="absolute inset-0 opacity-20" style="background-image: radial-gradient(black 2px, transparent 2px); background-size: 40px 40px;"></div>
        </div>
        
        <div class="z-10 flex justify-end">
             <div class="border-2 border-black bg-white px-3 py-1 text-xs font-mono font-black shadow-[4px_4px_0px_0px_#000]">
                MEMBERS: 8,241
            </div>
        </div>

        <div class="z-10 flex flex-col items-center justify-center">
             
             <div class="relative group cursor-pointer">
                 <div class="absolute -top-32 left-1/2 w-4 h-32 bg-black -translate-x-1/2 z-0"></div>
                 <div class="absolute -top-4 left-1/2 w-12 h-4 bg-gray-800 -translate-x-1/2 rounded z-20 border-2 border-gray-600"></div>

                 <div class="relative w-72 rounded-xl border-4 border-black bg-white p-6 shadow-[10px_10px_0px_0px_#000] transition-all duration-300 group-hover:rotate-2 group-hover:scale-105 z-10">
                    <div class="absolute -top-3 left-1/2 w-8 h-2 bg-white border-2 border-black rounded-full -translate-x-1/2"></div>
                    
                    <div class="flex flex-col items-center border-b-2 border-dashed border-black pb-4 mb-4">
                        <div class="h-24 w-24 rounded-full border-4 border-black bg-[#FDFBF7] mb-3 overflow-hidden">
                             <img :src="`https://ui-avatars.com/api/?name=${name || 'New+User'}&background=random&size=128`" alt="Avatar xem trước" />
                        </div>
                        <h3 class="font-archivo text-2xl font-black uppercase text-black">{{ name || 'YOUR NAME' }}</h3>
                        <div class="bg-[#00C16A] text-white px-2 py-0.5 text-xs font-mono font-bold border-2 border-black mt-1">NOOB DEVELOPER</div>
                    </div>

                    <div class="space-y-2">
                        <div class="flex justify-between font-mono text-xs font-bold text-black">
                            <span class="text-gray-500">ID:</span>
                            <span>#8242</span>
                        </div>
                        <div class="flex justify-between font-mono text-xs font-bold text-black">
                            <span class="text-gray-500">JOINED:</span>
                            <span>2026</span>
                        </div>
                        <div class="flex justify-between font-mono text-xs font-bold text-black">
                            <span class="text-gray-500">LEVEL:</span>
                            <div class="flex text-yellow-500">
                                <Star class="h-3 w-3 fill-current" />
                                <Star class="h-3 w-3 fill-gray-300 text-black" />
                                <Star class="h-3 w-3 fill-gray-300 text-black" />
                            </div>
                        </div>
                    </div>
                    
                    <div class="mt-4 h-8 w-full bg-black opacity-80" style="background-image: repeating-linear-gradient(90deg, transparent, transparent 2px, white 2px, white 4px);"></div>
                 </div>
             </div>
             
             <div class="mt-12 text-center">
                 <h2 class="font-archivo text-4xl font-black uppercase text-white drop-shadow-[3px_3px_0px_#000]">
                    Official <br> Access.
                 </h2>
             </div>
        </div>

        <div class="z-10 flex items-center gap-2 text-xs font-mono font-bold text-black opacity-70">
            <CheckCircle class="h-4 w-4" aria-hidden="true" />
            <span>Instant Approval</span>
        </div>
      </section>

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Eye, EyeOff, ArrowRight, CheckCircle, ShieldCheck, Lock, Mail, User, BadgeCheck, Star, Smile } from 'lucide-vue-next';

const name = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const showPassword = ref(false);
const agreeTerms = ref(false);

const toggleShowPassword = () => showPassword.value = !showPassword.value;

const passwordStrength = computed(() => {
  if (password.value.length === 0) return 0;
  if (password.value.length < 6) return 1;
  if (password.value.length < 10) return 2;
  return 3;
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=JetBrains+Mono:wght@400;700;800&family=Manrope:wght@500;700;800&display=swap');

.font-sans { font-family: 'Manrope', sans-serif; }
.font-archivo { font-family: 'Archivo Black', sans-serif; }
.font-mono { font-family: 'JetBrains Mono', monospace; }

.scrollbar-hide::-webkit-scrollbar { display: none; }
.scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }

@keyframes float-slow {
    0%, 100% { transform: translateY(0px) rotate(45deg); }
    50% { transform: translateY(-20px) rotate(50deg); }
}
.animate-float-slow { animation: float-slow 5s ease-in-out infinite; }
.animate-spin-slow { animation: spin 15s linear infinite; }
@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

.group:hover .group-hover\:gap-4 {
    gap: 1rem;
}
</style>