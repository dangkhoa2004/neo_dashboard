<template>
  <div>
    <MemberStats :total="users.length" :vip="vipCount" :new-today="12" />

    <MemberHeader @add="openModal()" @export="exportCSV" />

    <MemberToolbar
      v-model:status="filterStatus"
      v-model:search="searchQuery"
      v-model:role="filterRole"
    />

    <MemberTable
      :users="paginatedUsers"
      :total-pages="totalPages"
      :current-page="currentPage"
      :total-filtered="filteredUsers.length"
      v-model:selected-ids="selectedUsers"
      :is-all-selected="isAllSelected"
      @edit="openModal"
      @delete="deleteUser"
      @toggle-all="toggleAll"
      @page-change="currentPage = $event"
      @bulk-delete="deleteSelected"
      @clear-selection="selectedUsers = []"
    />

    <MemberModal
      :show="showModal"
      :is-editing="isEditing"
      :form-data="form"
      @close="closeModal"
      @save="handleSaveUser"
    />

    <div
      v-if="toast.show"
      class="fixed bottom-6 right-6 z-50 animate-bounce-in"
    >
      <div
        class="bg-black text-white px-6 py-3 rounded border-2 border-white shadow-xl flex items-center gap-3"
      >
        <i class="fa-solid fa-circle-check text-neo-green"></i>
        <span class="font-bold">{{ toast.message }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, reactive } from "vue";

// Import Components
import {
  MemberStats,
  MemberHeader,
  MemberToolbar,
  MemberTable,
  MemberModal
} from "../components/admin-components/members";

// --- Mock Data ---
const users = ref([
  {
    id: 1,
    name: "Nguyễn Văn A",
    email: "anv@example.com",
    plan: "Enterprise",
    role: "Admin",
    active: true,
    joinDate: "12/01/2024",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=A",
  },
  {
    id: 2,
    name: "Trần Thị B",
    email: "btt@example.com",
    plan: "Basic",
    role: "User",
    active: true,
    joinDate: "15/02/2024",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=B",
  },
  {
    id: 3,
    name: "Lê Văn C",
    email: "cle@example.com",
    plan: "Free",
    role: "User",
    active: false,
    joinDate: "20/02/2024",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=C",
  },
  {
    id: 4,
    name: "Phạm D",
    email: "dpham@example.com",
    plan: "Pro",
    role: "Editor",
    active: true,
    joinDate: "22/02/2024",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=D",
  },
  {
    id: 5,
    name: "Hoàng E",
    email: "ehoang@example.com",
    plan: "Pro",
    role: "User",
    active: true,
    joinDate: "25/02/2024",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=E",
  },
  {
    id: 6,
    name: "Vũ F",
    email: "fvu@example.com",
    plan: "Free",
    role: "User",
    active: true,
    joinDate: "01/03/2024",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=F",
  },
]);

// --- State ---
const searchQuery = ref("");
const filterStatus = ref("All");
const filterRole = ref("All");
const selectedUsers = ref([]);
const currentPage = ref(1);
const itemsPerPage = 5;

const showModal = ref(false);
const isEditing = ref(false);
const form = ref({
  id: null,
  name: "",
  email: "",
  role: "User",
  plan: "Free",
  active: true,
});
const toast = reactive({ show: false, message: "" });

// --- Computed ---
const vipCount = computed(
  () =>
    users.value.filter((u) => u.plan === "Pro" || u.plan === "Enterprise")
      .length
);

const filteredUsers = computed(() => {
  return users.value.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.value.toLowerCase());
    const matchesRole =
      filterRole.value === "All" || user.role === filterRole.value;

    let matchesStatus = true;
    if (filterStatus.value === "Active") matchesStatus = user.active;
    if (filterStatus.value === "Inactive") matchesStatus = !user.active;

    return matchesSearch && matchesRole && matchesStatus;
  });
});

const totalPages = computed(() =>
  Math.ceil(filteredUsers.value.length / itemsPerPage)
);

const paginatedUsers = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return filteredUsers.value.slice(start, end);
});

const isAllSelected = computed(() => {
  return (
    paginatedUsers.value.length > 0 &&
    selectedUsers.value.length === paginatedUsers.value.length
  );
});

// --- Methods ---

const toggleAll = () => {
  if (isAllSelected.value) {
    selectedUsers.value = [];
  } else {
    selectedUsers.value = paginatedUsers.value.map((u) => u.id);
  }
};

const openModal = (user = null) => {
  if (user) {
    isEditing.value = true;
    form.value = { ...user };
  } else {
    isEditing.value = false;
    form.value = {
      id: null,
      name: "",
      email: "",
      role: "User",
      plan: "Free",
      active: true,
    };
  }
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

const handleSaveUser = (formData) => {
  if (!formData.name || !formData.email)
    return alert("Vui lòng nhập tên và email");

  if (isEditing.value) {
    const index = users.value.findIndex((u) => u.id === formData.id);
    if (index !== -1) {
      users.value[index] = { ...users.value[index], ...formData };
      showToast("Đã cập nhật thông tin thành viên!");
    }
  } else {
    const newUser = {
      ...formData,
      id: Date.now(),
      joinDate: new Date().toLocaleDateString("vi-VN"),
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${formData.name}`,
    };
    users.value.unshift(newUser);
    showToast("Đã thêm thành viên mới!");
  }
  closeModal();
};

const deleteUser = (id) => {
  if (confirm("Bạn có chắc chắn muốn xóa thành viên này?")) {
    users.value = users.value.filter((u) => u.id !== id);
    selectedUsers.value = selectedUsers.value.filter((uid) => uid !== id);
    showToast("Đã xóa thành viên!");
  }
};

const deleteSelected = () => {
  if (confirm(`Xóa ${selectedUsers.value.length} thành viên đã chọn?`)) {
    users.value = users.value.filter(
      (u) => !selectedUsers.value.includes(u.id)
    );
    selectedUsers.value = [];
    showToast("Đã xóa các thành viên đã chọn!");
  }
};

const exportCSV = () => {
  showToast("Đang xuất file CSV...");
};

const showToast = (msg) => {
  toast.message = msg;
  toast.show = true;
  setTimeout(() => (toast.show = false), 3000);
};
</script>

<style scoped>
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
