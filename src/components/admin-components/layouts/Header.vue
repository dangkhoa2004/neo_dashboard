<template>
  <nav class="border-b-2 border-black bg-white px-6 py-4 flex items-center justify-between sticky top-0 z-50">
    <div class="flex items-center gap-2">
      <div class="bg-neo-green border-2 border-black w-8 h-8 flex items-center justify-center text-white font-bold rounded">N</div>
      <span class="font-bold text-xl tracking-tight">Đăng Khoa</span>
    </div>

    <div class="hidden md:flex gap-8 font-semibold text-sm">
      <a href="#" v-for="link in ['Trang Chủ', 'Giới Thiệu', 'Khóa Học', 'Tài Nguyên', 'Sản Phẩm']" :key="link" class="hover:underline">
        {{ link }}
      </a>
    </div>

    <div class="flex items-center gap-4">
      <button class="border-2 border-black p-2 rounded shadow-neo-sm active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all">
        <i class="fa-regular fa-bell"></i>
      </button>
      <div class="w-10 h-10 rounded-full border-2 border-black overflow-hidden bg-gray-200">
        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User">
      </div>
    </div>
  </nav>
</template>