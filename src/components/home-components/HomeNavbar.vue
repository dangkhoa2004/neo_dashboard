<template>
  <nav
    class="w-full border-b-2 border-black bg-[#FDFBF7]/90 px-6 py-4 backdrop-blur-md transition-all duration-300"
  >
    <div class="mx-auto flex max-w-7xl items-center justify-between">
      <div class="flex items-center gap-3 cursor-pointer group">
        <div
          class="flex h-10 w-10 items-center justify-center border-2 border-black bg-black text-white shadow-[4px_4px_0px_0px_#888] transition-all duration-300 group-hover:rotate-180 group-hover:bg-[#00C16A] group-hover:text-black group-hover:shadow-[2px_2px_0px_0px_#000]"
        >
          <span class="text-xl font-bold">D</span>
        </div>
        <span class="text-2xl font-black tracking-tighter"
          >Dangkhoa<span class="text-[#00C16A]">2004</span></span
        >
      </div>

      <div class="hidden gap-8 md:flex">
        <router-link
          v-for="item in menuItems"
          :key="item.path"
          :to="item.path"
          class="relative font-bold uppercase overflow-hidden group"
          active-class="text-[#00C16A]"
        >
          <span
            class="inline-block transition-transform duration-300 group-hover:-translate-y-full"
          >
            {{ item.name }}
          </span>

          <span
            class="absolute top-0 left-0 inline-block translate-y-full text-[#00C16A] transition-transform duration-300 group-hover:translate-y-0"
          >
            {{ item.name }}
          </span>
        </router-link>
      </div>

      <div class="flex items-center gap-4">
        <button
          @click="$emit('toggle-cart')"
          class="relative rounded-full border-2 border-black bg-white p-2 hover:bg-black hover:text-white transition-colors"
        >
          <ShoppingCart class="h-6 w-6" />
          <span
            v-if="cartCount > 0"
            class="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full border border-black bg-red-500 text-xs font-bold text-white"
            >{{ cartCount }}</span
          >
        </button>

        <a
          href="/dang-nhap"
          class="hidden md:block relative overflow-hidden border-2 border-black bg-[#A78BFA] px-6 py-2 font-bold shadow-[4px_4px_0px_0px_#000] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none group text-black no-underline"
        >
          <span class="relative z-10">Đăng nhập</span>
          <div
            class="absolute inset-0 bg-white transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0"
          ></div>
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ShoppingCart } from "lucide-vue-next";
const menuItems = [
  { name: "Trang chủ", path: "/" },
  { name: "Khóa học", path: "/khoa-hoc" },
  { name: "Mentor", path: "/mentor" },
  { name: "Blog", path: "/blog" },
];
defineProps({
  cartCount: {
    type: Number,
    default: 0,
  },
});

defineEmits(["toggle-cart"]);
</script>
