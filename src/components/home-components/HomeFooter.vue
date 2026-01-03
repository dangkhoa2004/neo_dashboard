<template>
  <footer class="bg-black text-white relative overflow-hidden border-t-2 border-black font-sans">
    
    <div class="bg-[#00C16A] py-3 overflow-hidden border-b-2 border-black text-black font-black uppercase tracking-widest text-sm relative z-20">
      <div class="animate-marquee inline-block whitespace-nowrap">
        ★ CODE YOUR FUTURE ★ BUILD YOUR DREAM ★ HỌC LẬP TRÌNH THỰC CHIẾN ★ CAM KẾT ĐẦU RA ★ SUPPORT 24/7 ★
        ★ CODE YOUR FUTURE ★ BUILD YOUR DREAM ★ HỌC LẬP TRÌNH THỰC CHIẾN ★ CAM KẾT ĐẦU RA ★ SUPPORT 24/7 ★
      </div>
    </div>

    <div class="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:py-24">
      <div class="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-8">
        
        <div class="space-y-6 lg:col-span-1">
          <div class="flex items-center gap-2 group cursor-pointer">
            <div class="flex h-10 w-10 items-center justify-center border-2 border-white bg-white text-black shadow-[4px_4px_0px_0px_#00C16A] transition-transform group-hover:rotate-12">
              <span class="text-xl font-black">D</span>
            </div>
            <span class="text-2xl font-black tracking-tighter">Dangkhoa<span class="text-[#00C16A]">2004</span></span>
          </div>
          <p class="text-gray-400 font-bold text-sm leading-relaxed">
            Nền tảng học lập trình trực tuyến hàng đầu. Chúng tôi đào tạo những kỹ sư phần mềm thực thụ, không chỉ là thợ code.
          </p>
          <div class="space-y-3 pt-4">
             <div class="flex items-center gap-3 text-sm font-bold hover:text-[#00C16A] transition-colors">
                <MapPin class="h-5 w-5 text-[#00C16A]" />
                <span>Tầng 79, Landmark 81, TP.HCM</span>
             </div>
             <div class="flex items-center gap-3 text-sm font-bold hover:text-[#00C16A] transition-colors">
                <Mail class="h-5 w-5 text-[#00C16A]" />
                <span>support@dangkhoa.dev</span>
             </div>
             <div class="flex items-center gap-3 text-sm font-bold hover:text-[#00C16A] transition-colors">
                <Phone class="h-5 w-5 text-[#00C16A]" />
                <span>0909.888.999</span>
             </div>
          </div>
        </div>

        <div>
          <h3 class="font-black text-xl uppercase text-[#00C16A] mb-6 border-b-2 border-white/20 pb-2 w-fit">Khóa học</h3>
          <ul class="space-y-4">
            <li v-for="item in ['Frontend Master', 'Backend NodeJS', 'Fullstack Pro', 'DevOps Basic', 'UI/UX Design']" :key="item">
              <a href="#" class="font-bold text-gray-400 hover:text-white hover:translate-x-2 transition-all inline-block">
                > {{ item }}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="font-black text-xl uppercase text-[#00C16A] mb-6 border-b-2 border-white/20 pb-2 w-fit">Về Chúng tôi</h3>
          <ul class="space-y-4">
            <li v-for="item in ['Câu chuyện thương hiệu', 'Đội ngũ Mentor', 'Tuyển dụng', 'Blog công nghệ', 'Điều khoản dịch vụ']" :key="item">
              <a href="#" class="font-bold text-gray-400 hover:text-white hover:translate-x-2 transition-all inline-block">
                > {{ item }}
              </a>
            </li>
          </ul>
        </div>

        <div class="lg:col-span-1">
          <h3 class="font-black text-xl uppercase text-[#00C16A] mb-6">Đăng ký nhận tin</h3>
          <p class="text-sm text-gray-400 font-bold mb-4">Nhận bài viết chuyên sâu và mã giảm giá hàng tuần.</p>
          
          <div class="flex flex-col gap-3">
             <input type="email" placeholder="Email của bạn..." class="w-full border-2 border-white bg-transparent px-4 py-3 font-bold text-white placeholder-gray-500 focus:bg-white focus:text-black focus:border-[#00C16A] focus:outline-none transition-all" />
             <button class="w-full border-2 border-[#00C16A] bg-[#00C16A] px-6 py-3 font-black text-black hover:bg-white hover:border-white hover:shadow-[4px_4px_0px_0px_#fff] transition-all uppercase">
                Đăng ký ngay
             </button>
          </div>

          <div class="mt-8">
             <h4 class="font-bold text-sm mb-4">Kết nối với chúng tôi:</h4>
             <div class="flex gap-3">
              <a 
                href="https://www.facebook.com/dangkh0a2004" 
                target="_blank" 
                rel="noopener noreferrer"
                class="h-10 w-10 flex items-center justify-center border-2 border-white hover:bg-white hover:text-black hover:-translate-y-1 transition-all"
              >
                <Facebook class="h-5 w-5" />
              </a>

              <a 
                href="https://github.com/dangkhoa2004" 
                target="_blank" 
                rel="noopener noreferrer"F
                class="h-10 w-10 flex items-center justify-center border-2 border-white hover:bg-white hover:text-black hover:-translate-y-1 transition-all"
              >
                <Github class="h-5 w-5" />
              </a>

              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                class="h-10 w-10 flex items-center justify-center border-2 border-white hover:bg-white hover:text-black hover:-translate-y-1 transition-all"
              >
                <Youtube class="h-5 w-5" />
              </a>

              <a 
                href="https://www.linkedin.com/in/%C4%91%C4%83ng-khoa-cao-94051a390/" 
                target="_blank" 
                rel="noopener noreferrer"
                class="h-10 w-10 flex items-center justify-center border-2 border-white hover:bg-white hover:text-black hover:-translate-y-1 transition-all"
              >
                <Linkedin class="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="relative z-10 border-t-2 border-white/20 bg-black py-6">
      <div class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <p class="text-sm font-bold text-gray-500">
          © 2024 Dangkhoa2004. All rights reserved.
        </p>
        <div class="flex items-center gap-6 text-sm font-bold text-gray-500">
          <a href="#" class="hover:text-[#00C16A]">Privacy Policy</a>
          <a href="#" class="hover:text-[#00C16A]">Terms of Use</a>
          <a href="#" class="hover:text-[#00C16A]">Cookie Policy</a>
        </div>
      </div>
    </div>

    <div class="absolute inset-0 z-0 opacity-20 pointer-events-none" 
         style="background-image: linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px); background-size: 40px 40px;">
    </div>
  </footer>
</template>

<script setup>
import { MapPin, Mail, Phone, Facebook, Github, Youtube, Linkedin } from 'lucide-vue-next';
</script>

<style scoped>
/* Không cần thêm CSS nhiều vì Tailwind đã lo hết, 
   chỉ cần đảm bảo animation marquee đã có ở file cha hoặc global */
</style>