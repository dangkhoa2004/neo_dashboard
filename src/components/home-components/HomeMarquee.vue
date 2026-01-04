<template>
  <div class="relative w-full border-y-2 border-black bg-[#ff4757] py-2 overflow-hidden group select-none shadow-[inset_0_-3px_0_rgba(0,0,0,0.1)]">
    
    <div class="flex whitespace-nowrap overflow-hidden items-center">
      <div v-for="i in 2" :key="i" class="animate-marquee flex items-center shrink-0 group-hover:[animation-play-state:paused]">
        
        <span class="tet-font ml-16 mr-4 text-[#fffdf0] drop-shadow-[1.5px_1.5px_0_rgba(0,0,0,1)]">
          Lì Xì Sập Sàn 50%
        </span>
        <span class="text-xl filter drop-shadow-[1.5px_1.5px_0_rgba(0,0,0,1)] -translate-y-0.5">🧧</span>

        <span class="tet-font ml-16 mr-4 text-[#ffeaa7] drop-shadow-[1.5px_1.5px_0_rgba(0,0,0,1)]">
          Học Là Có Việc Làm
        </span>
        <span class="text-xl filter drop-shadow-[1.5px_1.5px_0_rgba(0,0,0,1)] -translate-y-0.5">🌸</span>

        <span class="tet-font ml-16 mr-4 text-[#fffdf0] drop-shadow-[1.5px_1.5px_0_rgba(0,0,0,1)]">
          Khai Xuân Như Ý
        </span>
        <span class="text-xl filter drop-shadow-[1.5px_1.5px_0_rgba(0,0,0,1)] -translate-y-0.5">🏮</span>

        <span class="tet-font ml-16 mr-4 text-[#ffeaa7] drop-shadow-[1.5px_1.5px_0_rgba(0,0,0,1)]">
          Hoàn Tiền 7 Ngày
        </span>
        <span class="text-xl filter drop-shadow-[1.5px_1.5px_0_rgba(0,0,0,1)] -translate-y-0.5 pr-16">🌼</span> 
        </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');

.tet-font {
  font-family: 'Dancing Script', cursive;
  font-weight: 700;
  font-size: 1.4rem; /* Đã giảm kích thước chữ */
  line-height: 1;
}

.animate-marquee {
  /* Tốc độ 35s để chạy chậm rãi, dễ đọc khi khoảng cách xa */
  animation: marquee 35s linear infinite;
}

@keyframes marquee {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-100%); }
}

.border-y-2 {
  border-top-width: 2px;
  border-bottom-width: 2px;
}
</style>