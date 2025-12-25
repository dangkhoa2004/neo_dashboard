<template>
  <div class="space-y-6">
    <NeoCard class="p-6">
      <h3 class="font-black text-xl uppercase mb-6 border-b-2 border-black pb-2">
        Đổi mật khẩu
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
        <div class="md:col-span-1">
          <label class="font-bold text-sm mb-1 block">Mật khẩu hiện tại</label>
          <input type="password" class="w-full border-2 border-black rounded p-2 font-medium" />
        </div>
        <div class="md:col-span-1">
          <label class="font-bold text-sm mb-1 block">Mật khẩu mới</label>
          <input type="password" class="w-full border-2 border-black rounded p-2 font-medium" />
        </div>
        <div class="md:col-span-1">
          <button class="w-full bg-white border-2 border-black py-2 font-bold rounded hover:bg-black hover:text-white transition-colors">
            Đổi Mật Khẩu
          </button>
        </div>
      </div>
    </NeoCard>

    <NeoCard class="p-6 flex items-center justify-between bg-blue-50">
      <div>
        <div class="flex items-center gap-2 mb-1">
          <i class="fa-solid fa-shield-halved text-xl"></i>
          <h4 class="font-bold text-lg">Xác thực 2 bước (2FA)</h4>
        </div>
        <p class="text-sm text-gray-600">Tăng cường bảo mật bằng cách yêu cầu mã từ điện thoại.</p>
      </div>
      <button class="bg-white border-2 border-black px-4 py-2 font-bold rounded shadow-sm hover:bg-black hover:text-white transition-colors">
        Thiết lập
      </button>
    </NeoCard>

    <NeoCard class="overflow-hidden">
      <div class="p-4 border-b-2 border-black bg-gray-50 flex justify-between items-center">
        <h4 class="font-bold uppercase">Lịch sử đăng nhập</h4>
        <button class="text-xs font-bold underline">Đăng xuất tất cả thiết bị</button>
      </div>
      <table class="w-full text-left">
        <thead class="bg-black text-white text-sm">
          <tr>
            <th class="p-3">Thiết bị</th>
            <th class="p-3">Địa điểm</th>
            <th class="p-3">Thời gian</th>
            <th class="p-3 text-right">IP</th>
          </tr>
        </thead>
        <tbody class="text-sm font-medium">
          <tr class="border-b border-gray-200">
            <td class="p-3 flex items-center gap-2">
              <i class="fa-solid fa-desktop"></i> Chrome on Windows
            </td>
            <td class="p-3 text-green-600">Hanoi, VN (Current)</td>
            <td class="p-3">Bây giờ</td>
            <td class="p-3 text-right">192.168.1.1</td>
          </tr>
          <tr class="border-b border-gray-200">
            <td class="p-3 flex items-center gap-2">
              <i class="fa-solid fa-mobile-screen"></i> Safari on iPhone
            </td>
            <td class="p-3">Ho Chi Minh, VN</td>
            <td class="p-3">2 giờ trước</td>
            <td class="p-3 text-right">14.162.xxx.xxx</td>
          </tr>
        </tbody>
      </table>
    </NeoCard>
  </div>
</template>

<script setup>
import NeoCard from '../common/NeoCard.vue';
</script>