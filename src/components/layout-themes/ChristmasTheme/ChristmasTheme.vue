<template>
  <div class="christmas-wrapper">
    <div class="snow-container" aria-hidden="true">
      <div v-for="n in 50" :key="n" class="snowflake">❅</div>
      <div v-for="n in 30" :key="'dot-' + n" class="snowflake small-snow">
        •
      </div>
    </div>

    <div class="content-layer">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.christmas-wrapper {
  position: relative;
  min-height: 100vh;
  background: linear-gradient(to bottom, #f8fbff 0%, #ffffff 100%);
  overflow-x: hidden;
}

.content-layer {
  position: relative;
  z-index: 10;
}

/* --- TUYẾT RƠI --- */
.snowflake {
  color: #b3e5fc;
  font-size: 1.5rem;
  position: fixed;
  top: -10%;
  z-index: 999;
  pointer-events: none;
  animation: fall linear infinite, shake ease-in-out infinite;
}
.small-snow {
  font-size: 0.8rem;
  color: #e1f5fe;
}

/* Tùy chỉnh vị trí tuyết rơi ngẫu nhiên */
.snowflake:nth-child(10n + 1) {
  left: 5%;
  animation-duration: 10s, 3s;
  animation-delay: 0s;
}
.snowflake:nth-child(10n + 2) {
  left: 15%;
  animation-duration: 15s, 4s;
  animation-delay: 2s;
}
.snowflake:nth-child(10n + 3) {
  left: 25%;
  animation-duration: 12s, 3s;
  animation-delay: 4s;
}
.snowflake:nth-child(10n + 4) {
  left: 35%;
  animation-duration: 18s, 5s;
  animation-delay: 1s;
}
.snowflake:nth-child(10n + 5) {
  left: 50%;
  animation-duration: 13s, 3s;
  animation-delay: 5s;
}
.snowflake:nth-child(10n + 6) {
  left: 65%;
  animation-duration: 16s, 4s;
  animation-delay: 3s;
}
.snowflake:nth-child(10n + 7) {
  left: 80%;
  animation-duration: 11s, 3s;
  animation-delay: 0s;
}
.snowflake:nth-child(10n + 8) {
  left: 90%;
  animation-duration: 14s, 5s;
  animation-delay: 2s;
}

@keyframes fall {
  0% {
    top: -10%;
  }
  100% {
    top: 110%;
  }
}
@keyframes shake {
  0%,
  100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(40px) rotate(20deg);
  }
}

/* --- TRANG TRÍ GÓC --- */
.santa-left {
  position: fixed;
  bottom: 10px;
  left: 10px;
  z-index: 1000;
  pointer-events: none;
}
.santa-img {
  width: 150px;
}

.tree-right {
  position: fixed;
  bottom: 1px;
  right: 1px;
  z-index: 999;
  pointer-events: none;
}
.tree-img {
  width: 200px;
}
</style>
