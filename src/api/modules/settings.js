import { request } from "@/utils/apiClient";

// Mock Data
let profile = {
  name: "Admin User",
  title: "Senior Administrator",
  avatar: "/author.avif",
  bio: "Quản trị viên hệ thống. Thích code dạo và uống cà phê.",
};

let general = {
  siteName: "DangKhoa Portal",
  email: "admin@DangKhoa.com",
  language: "vi",
  timezone: "gmt+7",
  maintenanceMode: false,
};

export default {
  getSettings() {
    return request({
      profile: { ...profile },
      general: { ...general },
    });
  },

  updateProfile(newProfileData) {
    profile = { ...profile, ...newProfileData };
    return request({ ...profile });
  },

  updateGeneral(newGeneralData) {
    general = { ...general, ...newGeneralData };
    return request({ ...general });
  },
};
