<template>
  <Transition name="fade">
    <div 
      v-if="uiStore.isLoading"
      class="fixed inset-0 z-[9999] flex items-center justify-center bg-white/60 backdrop-blur-sm"
    >
      <div class="bg-white border-2 border-black rounded-xl p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center gap-4 animate-pop-in">
        
        <div class="flex gap-3">
          <div class="w-5 h-5 rounded-full border-2 border-black bg-[#A3E635] animate-bounce-neo delay-0"></div>
          <div class="w-5 h-5 rounded-full border-2 border-black bg-[#FDE047] animate-bounce-neo delay-100"></div>
          <div class="w-5 h-5 rounded-full border-2 border-black bg-[#C084FC] animate-bounce-neo delay-200"></div>
        </div>

        <p class="font-bold text-lg text-black font-mono tracking-tight">
          {{ uiStore.message }}
        </p>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { useUIStore } from "@/store/ui";

const uiStore = useUIStore();
</script>

<style scoped>
/* Animation nảy */
@keyframes bounce-neo {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}
.animate-bounce-neo {
  animation: bounce-neo 0.8s infinite ease-in-out;
}
.delay-0 { animation-delay: 0ms; }
.delay-100 { animation-delay: 150ms; }
.delay-200 { animation-delay: 300ms; }

/* Animation Pop-in của hộp thoại */
@keyframes pop-in {
  0% { transform: scale(0.9); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}
.animate-pop-in {
  animation: pop-in 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

/* Transition Fade cho toàn màn hình (Vue Transition) */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>