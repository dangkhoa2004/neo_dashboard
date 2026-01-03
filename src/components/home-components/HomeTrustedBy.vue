<template>
  <section class="relative border-y-2 border-black bg-neo-bg py-24 overflow-hidden">
    
    <div class="absolute top-10 left-10 w-12 h-12 border-2 border-black bg-neo-green rounded-full opacity-20 animate-bounce-slow"></div>
    <div class="absolute bottom-10 right-10 w-0 h-0 border-l-[20px] border-l-transparent border-t-[30px] border-t-black border-r-[20px] border-r-transparent opacity-10 rotate-12"></div>
    <div class="absolute top-1/2 left-1/4 w-4 h-4 bg-black rounded-sm opacity-10 animate-spin-slow"></div>

    <div class="container mx-auto px-4 relative z-10">
      
      <div class="flex flex-col items-center mb-16 text-center">
        <span class="inline-block px-4 py-1.5 mb-4 border-2 border-black bg-white shadow-neo-sm text-sm font-black uppercase tracking-widest transform -rotate-2 hover:rotate-0 transition-transform cursor-default">
          Trusted Partners
        </span>
        
        <h2 class="text-3xl md:text-5xl font-black text-black uppercase leading-tight">
          Được tin dùng bởi <br/>
          <span class="relative inline-block mt-2 px-4 bg-neo-green border-2 border-black shadow-neo transform -skew-x-3">
            <span class="not-italic text-white drop-shadow-md">Top 1% Dev</span>
          </span>
        </h2>
      </div>

      <div class="relative w-full">
        <div class="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-neo-bg to-transparent z-20 pointer-events-none"></div>
        <div class="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-neo-bg to-transparent z-20 pointer-events-none"></div>

        <div class="flex overflow-hidden group py-4"> <div class="flex animate-marquee gap-6 md:gap-8 min-w-full items-center group-hover:pause">
            
            <template v-for="set in 2" :key="set">
              <div v-for="i in 8" :key="`${set}-${i}`" class="shrink-0">
                
                <div class="group/card relative flex items-center gap-4 px-8 py-5 
                            bg-white border-2 border-black 
                            shadow-neo transition-all duration-300 ease-out
                            hover:-translate-y-1 hover:-translate-x-0.5 hover:shadow-neo-hover
                            cursor-pointer rounded-lg">
                  
                  <div class="flex items-center justify-center w-10 h-10 border-2 border-black rounded bg-neo-bg group-hover/card:bg-neo-green transition-colors duration-300">
                    <Code class="w-5 h-5 text-black" />
                  </div>

                  <div class="flex flex-col">
                    <span class="text-xs font-bold text-gray-500 uppercase tracking-wider group-hover/card:text-neo-green transition-colors">Enterprise</span>
                    <span class="text-xl font-black text-black">TECH_{{i}}</span>
                  </div>

                  <div class="absolute top-1 right-1 w-1.5 h-1.5 bg-black rounded-full opacity-0 group-hover/card:opacity-100 transition-opacity"></div>
                </div>

              </div>
            </template>

          </div>
        </div>
      </div>

      <div class="text-center mt-12">
         <p class="text-sm font-bold text-gray-400">Và hơn 500+ startups khác</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Code } from 'lucide-vue-next';
</script>

<style scoped>
/* Định nghĩa animation Marquee nếu chưa có trong global CSS */
.animate-marquee {
  animation: marquee 5s linear infinite;
}
.group-hover\:pause:hover {
  animation-play-state: paused;
}
.animate-bounce-slow {
  animation: bounce 3s infinite;
}
.animate-spin-slow {
  animation: spin 8s linear infinite;
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); } /* -50% vì ta render 2 set danh sách */
}

@keyframes bounce {
  0%, 100% { transform: translateY(-10%); }
  50% { transform: translateY(10%); }
}
</style>