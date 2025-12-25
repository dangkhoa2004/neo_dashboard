<template>
  <div class="max-w-6xl mx-auto">
    <div class="mb-8">
      <h1 class="text-4xl font-black mb-1 flex items-center gap-2">
        <i class="fa-solid fa-gear text-3xl"></i> Cài Đặt Hệ Thống
      </h1>
      <p class="text-gray-600 font-medium">
        Quản lý cấu hình, bảo mật và thông tin cá nhân.
      </p>
    </div>

    <div class="flex flex-col lg:flex-row gap-8 items-start">
      <NeoCard class="w-full lg:w-64 shrink-0 p-2 lg:sticky lg:top-24">
        <nav
          class="flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 no-scrollbar"
        >
          <button
            v-for="tab in tabs"
            :key="tab.id"
            @click="currentTab = tab.id"
            class="flex items-center gap-3 px-4 py-3 rounded font-bold transition-all whitespace-nowrap border-2"
            :class="
              currentTab === tab.id
                ? 'bg-black text-white border-black shadow-neo-sm translate-x-[2px] translate-y-[2px] shadow-none'
                : 'bg-white text-gray-600 border-transparent hover:border-black hover:bg-gray-50'
            "
          >
            <i :class="tab.icon" class="w-5 text-center"></i>
            {{ tab.name }}
          </button>
        </nav>
      </NeoCard>

      <div class="flex-1 w-full min-w-0 space-y-6">
        <div v-if="currentTab === 'profile'" class="animate-fade-in space-y-6">
          <NeoCard class="p-6">
            <h3
              class="font-black text-xl uppercase mb-6 border-b-2 border-black pb-2"
            >
              Hồ sơ cá nhân
            </h3>

            <div class="flex items-center gap-6 mb-8">
              <div class="relative group">
                <div
                  class="w-24 h-24 rounded-full border-2 border-black overflow-hidden bg-gray-200"
                >
                  <img
                    :src="profile.avatar"
                    alt="Avatar"
                    class="w-full h-full object-cover"
                  />
                </div>
                <button
                  @click="triggerFileInput"
                  class="absolute bottom-0 right-0 bg-neo-green border-2 border-black px-1.5 rounded-md shadow-sm hover:scale-110 transition-transform"
                >
                  <i class="fa-solid fa-camera text-xs"></i>
                </button>
                <input
                  type="file"
                  ref="fileInput"
                  class="hidden"
                  @change="handleAvatarChange"
                />
              </div>
              <div>
                <h4 class="font-bold text-lg">Ảnh đại diện</h4>
                <p class="text-sm text-gray-500 mb-2">
                  Hỗ trợ định dạng PNG, JPG. Tối đa 2MB.
                </p>
                <div class="flex gap-2">
                  <button
                    @click="triggerFileInput"
                    class="text-xs font-bold border-2 border-black px-3 py-1 rounded hover:bg-gray-100"
                  >
                    Tải ảnh lên
                  </button>
                  <button
                    class="text-xs font-bold text-red-600 border-2 border-transparent px-3 py-1 rounded hover:bg-red-50"
                  >
                    Xóa
                  </button>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div class="group">
                <label class="font-bold text-sm mb-1 block">Họ và tên</label>
                <div class="relative">
                  <i
                    class="fa-solid fa-user absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  ></i>
                  <input
                    v-model="profile.name"
                    type="text"
                    class="w-full border-2 border-black rounded p-2 pl-9 font-medium focus:outline-none focus:shadow-neo transition-shadow"
                  />
                </div>
              </div>
              <div class="group">
                <label class="font-bold text-sm mb-1 block">Chức danh</label>
                <div class="relative">
                  <i
                    class="fa-solid fa-briefcase absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  ></i>
                  <input
                    v-model="profile.title"
                    type="text"
                    class="w-full border-2 border-black rounded p-2 pl-9 font-medium focus:outline-none focus:shadow-neo transition-shadow"
                  />
                </div>
              </div>
            </div>

            <div class="mb-6">
              <label class="font-bold text-sm mb-1 block"
                >Giới thiệu ngắn (Bio)</label
              >
              <textarea
                v-model="profile.bio"
                rows="3"
                class="w-full border-2 border-black rounded p-2 font-medium focus:outline-none focus:shadow-neo transition-shadow"
              ></textarea>
              <p class="text-xs text-right text-gray-400 mt-1">
                {{ profile.bio.length }}/200 ký tự
              </p>
            </div>

            <div class="flex justify-end">
              <button
                @click="saveSettings"
                class="bg-black text-white px-6 py-2 border-2 border-black font-bold rounded shadow-neo hover:translate-y-[-2px] hover:shadow-neo-hover active:translate-y-[1px] active:shadow-none transition-all"
              >
                Lưu Hồ Sơ
              </button>
            </div>
          </NeoCard>
        </div>

        <div v-if="currentTab === 'general'" class="animate-fade-in space-y-6">
          <NeoCard class="p-6">
            <h3
              class="font-black text-xl uppercase mb-6 border-b-2 border-black pb-2"
            >
              Thông tin hệ thống
            </h3>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label class="font-bold text-sm mb-1 block"
                  >Tên hiển thị (Site Name)</label
                >
                <input
                  v-model="general.siteName"
                  type="text"
                  class="w-full border-2 border-black rounded p-2 font-medium focus:outline-none focus:shadow-neo transition-shadow"
                />
              </div>
              <div>
                <label class="font-bold text-sm mb-1 block"
                  >Email liên hệ</label
                >
                <input
                  v-model="general.email"
                  type="email"
                  class="w-full border-2 border-black rounded p-2 font-medium focus:outline-none focus:shadow-neo transition-shadow"
                />
              </div>
              <div>
                <label class="font-bold text-sm mb-1 block"
                  >Ngôn ngữ mặc định</label
                >
                <select
                  v-model="general.language"
                  class="w-full border-2 border-black rounded p-2 font-medium bg-white"
                >
                  <option value="vi">Tiếng Việt (Vietnamese)</option>
                  <option value="en">Tiếng Anh (English)</option>
                </select>
              </div>
              <div>
                <label class="font-bold text-sm mb-1 block">Múi giờ</label>
                <select
                  v-model="general.timezone"
                  class="w-full border-2 border-black rounded p-2 font-medium bg-white"
                >
                  <option value="gmt+7">
                    (GMT+07:00) Bangkok, Hanoi, Jakarta
                  </option>
                  <option value="gmt+8">(GMT+08:00) Singapore</option>
                </select>
              </div>
            </div>

            <div class="border-t-2 border-dashed border-gray-300 pt-6">
              <div class="flex items-center justify-between">
                <div>
                  <h4 class="font-bold text-lg">Chế độ bảo trì</h4>
                  <p class="text-sm text-gray-500">
                    Chỉ có Admin mới có thể truy cập trang web khi bật.
                  </p>
                </div>
                <label class="relative cursor-pointer">
                  <input
                    type="checkbox"
                    v-model="general.maintenanceMode"
                    class="peer sr-only"
                  />
                  <div
                    class="w-14 h-7 bg-gray-200 border-2 border-black rounded-full peer-checked:bg-neo-green transition-colors"
                  ></div>
                  <div
                    class="absolute top-1 left-1 bg-white border-2 border-black w-5 h-5 rounded-full transition-all peer-checked:translate-x-7"
                  ></div>
                </label>
              </div>
            </div>

            <div class="flex justify-end mt-6">
              <button
                @click="saveSettings"
                class="bg-neo-green text-black px-6 py-2 border-2 border-black font-bold rounded shadow-neo hover:translate-y-[-2px] hover:shadow-neo-hover transition-all"
              >
                Cập Nhật
              </button>
            </div>
          </NeoCard>
        </div>

        <div v-if="currentTab === 'security'" class="animate-fade-in space-y-6">
          <NeoCard class="p-6">
            <h3
              class="font-black text-xl uppercase mb-6 border-b-2 border-black pb-2"
            >
              Đổi mật khẩu
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
              <div class="md:col-span-1">
                <label class="font-bold text-sm mb-1 block"
                  >Mật khẩu hiện tại</label
                >
                <input
                  type="password"
                  class="w-full border-2 border-black rounded p-2 font-medium"
                />
              </div>
              <div class="md:col-span-1">
                <label class="font-bold text-sm mb-1 block">Mật khẩu mới</label>
                <input
                  type="password"
                  class="w-full border-2 border-black rounded p-2 font-medium"
                />
              </div>
              <div class="md:col-span-1">
                <button
                  class="w-full bg-white border-2 border-black py-2 font-bold rounded hover:bg-black hover:text-white transition-colors"
                >
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
              <p class="text-sm text-gray-600">
                Tăng cường bảo mật bằng cách yêu cầu mã từ điện thoại.
              </p>
            </div>
            <button
              class="bg-white border-2 border-black px-4 py-2 font-bold rounded shadow-sm hover:bg-black hover:text-white transition-colors"
            >
              Thiết lập
            </button>
          </NeoCard>

          <NeoCard class="overflow-hidden">
            <div
              class="p-4 border-b-2 border-black bg-gray-50 flex justify-between items-center"
            >
              <h4 class="font-bold uppercase">Lịch sử đăng nhập</h4>
              <button class="text-xs font-bold underline">
                Đăng xuất tất cả thiết bị
              </button>
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

        <div v-if="currentTab === 'api'" class="animate-fade-in space-y-6">
          <NeoCard class="p-6">
            <div class="flex justify-between items-start mb-6">
              <div>
                <h3
                  class="font-black text-xl uppercase border-b-2 border-black pb-2 inline-block"
                >
                  API Keys
                </h3>
                <p class="text-sm text-gray-600 mt-2">
                  Dùng key này để tích hợp với các ứng dụng bên thứ 3.
                </p>
              </div>
              <button
                class="bg-black text-white text-sm px-4 py-2 border-2 border-black font-bold rounded hover:bg-gray-800"
              >
                <i class="fa-solid fa-plus mr-1"></i> Tạo Key Mới
              </button>
            </div>

            <div class="space-y-4">
              <div
                class="border-2 border-black rounded p-4 bg-gray-50 relative group"
              >
                <div class="flex justify-between items-center mb-2">
                  <span class="font-bold">Production Key</span>
                  <span
                    class="text-xs font-bold bg-green-200 border-2 border-black px-2 rounded"
                    >Active</span
                  >
                </div>
                <div class="flex gap-2">
                  <input
                    type="text"
                    value="sk_live_51Mz..."
                    readonly
                    class="w-full bg-white border-2 border-gray-300 rounded p-2 font-mono text-sm text-gray-500 focus:outline-none"
                  />
                  <button
                    @click="copyKey"
                    class="px-3 border-2 border-black rounded bg-white hover:bg-neo-green font-bold transition-colors"
                  >
                    <i class="fa-regular fa-copy"></i>
                  </button>
                </div>
                <p class="text-xs text-gray-500 mt-2">
                  Được tạo vào: 20/01/2024 - Lần cuối dùng: 5 phút trước
                </p>
              </div>
            </div>
          </NeoCard>
        </div>

        <div v-if="currentTab === 'danger'" class="animate-fade-in space-y-6">
          <NeoCard class="p-6 border-2 border-red-600 bg-red-50">
            <h3
              class="font-black text-xl uppercase mb-6 text-red-600 flex items-center gap-2"
            >
              <i class="fa-solid fa-triangle-exclamation"></i> Khu Vực Nguy Hiểm
            </h3>

            <div class="space-y-6">
              <div
                class="flex flex-col md:flex-row justify-between items-center p-4 bg-white border-2 border-red-200 rounded"
              >
                <div class="mb-4 md:mb-0">
                  <h4 class="font-bold text-lg">Xóa dữ liệu tạm (Cache)</h4>
                  <p class="text-sm text-gray-600">
                    Làm mới lại toàn bộ cache hệ thống. Có thể gây chậm trong ít
                    phút.
                  </p>
                </div>
                <button
                  class="whitespace-nowrap px-4 py-2 font-bold border-2 border-black rounded hover:bg-gray-100"
                >
                  Xóa Cache
                </button>
              </div>

              <div
                class="flex flex-col md:flex-row justify-between items-center p-4 bg-white border-2 border-red-600 rounded shadow-[4px_4px_0px_0px_#dc2626]"
              >
                <div class="mb-4 md:mb-0">
                  <h4 class="font-bold text-lg text-red-600">
                    Xóa tài khoản vĩnh viễn
                  </h4>
                  <p class="text-sm text-gray-600">
                    Hành động này không thể hoàn tác. Mọi dữ liệu sẽ bị mất.
                  </p>
                </div>
                <button
                  class="whitespace-nowrap px-4 py-2 font-bold border-2 border-red-600 bg-red-600 text-white rounded hover:bg-red-700 shadow-sm"
                >
                  Xóa Tài Khoản
                </button>
              </div>
            </div>
          </NeoCard>
        </div>
      </div>
    </div>

    <div v-if="toastMsg" class="fixed bottom-6 right-6 z-50 animate-bounce-in">
      <div
        class="bg-black text-white px-6 py-3 rounded border-2 border-white shadow-xl flex items-center gap-3"
      >
        <i class="fa-solid fa-check-circle text-neo-green"></i>
        <span class="font-bold">{{ toastMsg }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import NeoCard from "../components/NeoCard.vue";

// --- State ---
const currentTab = ref("profile");
const fileInput = ref(null);
const toastMsg = ref(null);

const tabs = [
  { id: "profile", name: "Hồ Sơ", icon: "fa-solid fa-user" },
  { id: "general", name: "Hệ Thống", icon: "fa-solid fa-server" },
  { id: "security", name: "Bảo Mật", icon: "fa-solid fa-lock" },
  { id: "api", name: "API & Dev", icon: "fa-solid fa-code" },
  { id: "danger", name: "Nguy Hiểm", icon: "fa-solid fa-triangle-exclamation" },
];

// Mock Data Models
const profile = reactive({
  name: "Admin User",
  title: "Senior Administrator",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",
  bio: "Quản trị viên hệ thống. Thích code dạo và uống cà phê.",
});

const general = reactive({
  siteName: "DangKhoa Portal",
  email: "admin@DangKhoa.com",
  language: "vi",
  timezone: "gmt+7",
  maintenanceMode: false,
});

// --- Methods ---

const triggerFileInput = () => {
  fileInput.value.click();
};

const handleAvatarChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    // Fake upload: Create object URL
    profile.avatar = URL.createObjectURL(file);
    showToast("Đã cập nhật ảnh đại diện!");
  }
};

const saveSettings = () => {
  // Fake API call
  setTimeout(() => {
    showToast("Đã lưu thay đổi thành công!");
  }, 300);
};

const copyKey = () => {
  navigator.clipboard.writeText("sk_live_51MzFakeKey123");
  showToast("Đã sao chép API Key!");
};

const showToast = (msg) => {
  toastMsg.value = msg;
  setTimeout(() => {
    toastMsg.value = null;
  }, 3000);
};
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in {
  animation: fade-in 0.3s ease-out;
}

@keyframes bounce-in {
  0% {
    transform: scale(0.9);
    opacity: 0;
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
.animate-bounce-in {
  animation: bounce-in 0.3s ease-out;
}
</style>
