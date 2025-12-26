<template>
  <nav
    v-bind="$attrs"
    class="border-b-2 border-black bg-white px-4 md:px-6 py-4 flex items-center justify-between sticky top-0 z-40"
  >
    <div class="flex items-center gap-3">
      <button
        @click="$emit('toggle-sidebar')"
        class="lg:hidden border-2 border-black p-2 rounded shadow-neo-sm active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all"
      >
        <i class="fa-solid fa-bars"></i>
      </button>

      <div class="flex items-center gap-2">
        <div
          class="bg-neo-green border-2 border-black p-2 h-8 flex items-center justify-center text-white font-bold rounded select-none"
        >
          dangkhoa2004
        </div>
      </div>
    </div>

    <div class="hidden md:flex gap-8 font-semibold text-sm">
      <a
        v-for="item in menuLinks"
        :key="item.name"
        :href="item.link"
        :target="item.external ? '_blank' : '_self'"
        class="hover:underline"
      >
        {{ item.name }}
      </a>
    </div>

    <div class="flex items-center gap-4">
      <button
        class="border-2 border-black p-2 rounded shadow-neo-sm active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all hidden sm:block"
      >
        <i class="fa-regular fa-bell"></i>
      </button>

      <button
        @click="isUserMenuOpen = true"
        class="w-10 h-10 rounded-full border-2 border-black overflow-hidden bg-gray-200 cursor-pointer hover:opacity-80 transition-opacity"
      >
        <img src="/author.avif" alt="User" class="w-full h-full object-cover" />
      </button>
    </div>
  </nav>

  <Transition name="fade">
    <div
      v-if="isUserMenuOpen"
      @click="isUserMenuOpen = false"
      class="fixed inset-0 z-50 backdrop-blur-sm"
    ></div>
  </Transition>

  <Transition name="slide-right">
    <div
      v-if="isUserMenuOpen"
      class="fixed top-0 right-0 h-full w-[280px] bg-white border-l border-black z-50 p-6 flex flex-col gap-6"
    >
      <div
        class="flex items-center justify-between border-b-2 border-black pb-4"
      >
        <span class="font-bold text-lg">Menu Cá Nhân</span>
        <button
          @click="isUserMenuOpen = false"
          class="w-8 h-8 flex items-center justify-center border-2 border-black rounded hover:bg-red-500 hover:text-white transition-colors"
        >
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="flex items-center gap-3">
        <div
          class="w-12 h-12 rounded-full border-2 border-black overflow-hidden"
        >
          <img
            src="/author.avif"
            alt="User"
            class="w-full h-full object-cover"
          />
        </div>
        <div>
          <p class="font-bold">Đăng Khoa</p>
          <p class="text-xs text-gray-500">Học viên</p>
        </div>
      </div>

      <div class="flex flex-col gap-3 md:hidden">
        <p class="text-xs font-bold text-gray-400 uppercase tracking-wider">
          Điều hướng
        </p>
        <a
          v-for="item in menuLinks"
          :key="item.name"
          :href="item.link"
          :target="item.external ? '_blank' : '_self'"
          class="border-2 border-black p-3 rounded font-semibold hover:bg-neo-green hover:text-white transition-colors shadow-neo-sm active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
        >
          {{ item.name }}
        </a>
      </div>

      <div class="flex flex-col gap-3 mt-auto">
        <a
          href="/ho-so"
          class="flex items-center gap-3 font-semibold p-2 hover:bg-gray-100 rounded cursor-pointer"
        >
          <i class="fa-solid fa-user"></i> Hồ sơ
        </a>
        <a
          href="/cai-dat"
          class="flex items-center gap-3 font-semibold p-2 hover:bg-gray-100 rounded cursor-pointer"
        >
          <i class="fa-solid fa-gear"></i> Cài đặt
        </a>
        <div class="border-t-2 border-black my-1"></div>
        <button
          @click="handleLogout"
          class="flex items-center gap-3 font-semibold p-2 text-red-600 hover:bg-red-50 rounded w-full text-left"
        >
          <i class="fa-solid fa-right-from-bracket"></i> Đăng xuất
        </button>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref } from "vue";

defineEmits(["toggle-sidebar"]);

const isUserMenuOpen = ref(false);

const menuLinks = [
  { 
    name: "Trang Chủ", 
    link: "/", 
    external: false 
  },
  { 
    name: "Giới Thiệu", 
    link: "/gioi-thieu", 
    external: false 
  },
  { 
    name: "Khóa Học", 
    link: "/khoa-hoc", 
    external: false 
  },
  { 
    name: "Sản Phẩm", 
    link: "/san-pham", 
    external: false 
  },
  { 
    name: "Tài Nguyên", 
    link: "https://github.com/dangkhoa2004/neo_dashboard", 
    external: true 
  },
];

const handleLogout = () => {
  console.log("Đã đăng xuất");
  isUserMenuOpen.value = false;
  window.location.href = "/login";
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(100%);
}
</style>