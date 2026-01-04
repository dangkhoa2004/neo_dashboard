<template>
  <div class="tet-wrapper">
    <div class="falling-container" aria-hidden="true">
      <div
        v-for="n in 10"
        :key="'peach-' + n"
        class="falling-item petal-pink"
        :style="getRandomStyle()"
      >
        🌸
      </div>
      <div
        v-for="n in 10"
        :key="'ochna-' + n"
        class="falling-item petal-yellow"
        :style="getRandomStyle()"
      >
        🌼
      </div>
      <div
        v-for="n in 7"
        :key="'red-env-' + n"
        class="falling-item envelope"
        :style="getRandomStyle()"
      >
        🧧
      </div>
      <div
        v-for="n in 20"
        :key="'dust-' + n"
        class="falling-item gold-dust"
        :style="getRandomStyle()"
      >
        .
      </div>
    </div>

    <div class="content-layer">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
const getRandomStyle = () => {
  const duration = Math.random() * 10 + 8;
  const delay = Math.random() * 5;
  const left = Math.random() * 100;
  const swayDuration = Math.random() * 2 + 3;

  return {
    left: `${left}%`,
    animationDuration: `${duration}s, ${swayDuration}s`,
    animationDelay: `${delay}s, 0s`,
  };
};
</script>

<style scoped>
/* --- CẤU TRÚC CHÍNH --- */
.tet-wrapper {
  position: relative;
  background-color: #fffdf0;
  background-image: linear-gradient(
      to bottom,
      rgba(255, 248, 225, 0.8) 0%,
      rgba(255, 255, 255, 1) 100%
    ),
    url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffecb3' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  overflow-x: hidden;
  font-family: "Pangolin", cursive, sans-serif;
}

.content-layer {
  position: relative;
  z-index: 20;
}

/* Tùy chỉnh Font cho các tiêu đề bên trong slot */
.content-layer :deep(h1),
.content-layer :deep(h2),
.content-layer :deep(h3) {
  font-family: "Dancing Script", cursive;
  color: #d32f2f;
  text-shadow: 1px 1px 0px #ffe082;
  font-weight: 700;
}

.pointer-events-none {
  pointer-events: none;
}

/* --- HIỆU ỨNG RƠI --- */
.falling-item {
  position: fixed;
  top: -10%;
  z-index: 999;
  user-select: none;
  /* Thêm pointer-events none để không chặn click vào nội dung bên dưới khi hoa rơi qua */
  pointer-events: none; 
  animation: tet-fall linear infinite, tet-sway ease-in-out infinite;
}

.petal-pink {
  font-size: 1.2rem;
  opacity: 0.8;
  filter: drop-shadow(0 2px 3px rgba(255, 100, 100, 0.3));
}
.petal-yellow {
  font-size: 1.4rem;
  opacity: 0.9;
  filter: drop-shadow(0 2px 3px rgba(255, 200, 0, 0.3));
}
.envelope {
  font-size: 1.8rem;
  opacity: 1;
  filter: drop-shadow(0 5px 5px rgba(0, 0, 0, 0.1));
}
.gold-dust {
  color: #ffd700;
  font-size: 2rem;
  line-height: 0;
  text-shadow: 0 0 4px #ffeb3b;
  opacity: 0.6;
}

@keyframes tet-fall {
  0% {
    top: -10%;
  }
  100% {
    top: 110%;
  }
}
@keyframes tet-sway {
  0%,
  100% {
    transform: translateX(0) rotate(0deg);
  }
  50% {
    transform: translateX(30px) rotate(45deg);
  }
}
</style>