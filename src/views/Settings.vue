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
      <SettingsSidebar v-model="currentTab" />

      <div class="flex-1 w-full min-w-0 space-y-6">
        <div v-if="currentTab === 'profile'" class="animate-fade-in">
          <ProfileSettings
            :profile="profile"
            @save="saveSettings"
            @avatar-change="updateAvatar"
          />
        </div>

        <div v-if="currentTab === 'general'" class="animate-fade-in">
          <GeneralSettings :general="general" @save="saveSettings" />
        </div>

        <div v-if="currentTab === 'security'" class="animate-fade-in">
          <SecuritySettings />
        </div>

        <div v-if="currentTab === 'api'" class="animate-fade-in">
          <ApiSettings @copy="copyKey" />
        </div>

        <div v-if="currentTab === 'danger'" class="animate-fade-in">
          <DangerZone />
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

// Import Components
import {
  SettingsSidebar,
  ProfileSettings,
  GeneralSettings,
  SecuritySettings,
  ApiSettings,
  DangerZone,
} from "../components/admin-components/settings";

// --- State ---
const currentTab = ref("profile");
const toastMsg = ref(null);

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

const updateAvatar = (newUrl) => {
  profile.avatar = newUrl;
  showToast("Đã cập nhật ảnh đại diện!");
};

const saveSettings = () => {
  // Fake API call
  setTimeout(() => {
    showToast("Đã lưu thay đổi thành công!");
  }, 300);
};

const copyKey = (key) => {
  navigator.clipboard.writeText(key);
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
