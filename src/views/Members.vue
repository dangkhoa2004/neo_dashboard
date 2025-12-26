<template>
  <div>
    <div v-if="membersStore.isLoading && membersStore.users.length === 0" class="flex justify-center py-10">
      
    </div>

    <div v-else>
      <MemberStats 
        :total="membersStore.users.length" 
        :vip="membersStore.vipCount" 
        :new-today="12" 
      />

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
        @delete="handleDeleteUser"
        @toggle-all="toggleAll"
        @page-change="currentPage = $event"
        @bulk-delete="handleBulkDelete"
        @clear-selection="selectedUsers = []"
      />
    </div>

    <MemberModal
      :show="showModal"
      :is-editing="isEditing"
      :form-data="form"
      @close="closeModal"
      @save="onSaveUser"
    />

    <div v-if="toast.show" class="fixed bottom-6 right-6 z-50 animate-bounce-in">
      <div class="bg-black text-white px-6 py-3 rounded border-2 border-white shadow-xl flex items-center gap-3">
        <i class="fa-solid fa-circle-check text-neo-green"></i>
        <span class="font-bold">{{ toast.message }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, reactive, onMounted } from "vue";
import { useMembersStore } from "../store/modules/members";

// Import Components
import {
  MemberStats,
  MemberHeader,
  MemberToolbar,
  MemberTable,
  MemberModal
} from "../components/admin-components/members";

// --- Store ---
const membersStore = useMembersStore();

// --- Local State (UI logic) ---
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

// --- Lifecycle ---
onMounted(() => {
  membersStore.fetchMembers();
});

// --- Computed Logic (Client-side filtering) ---
// Note: Logic lọc vẫn giữ ở Component vì đây là lọc phía client (UI filtering)
// Store chỉ giữ raw data.
const filteredUsers = computed(() => {
  return membersStore.users.filter((user) => {
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

// Gọi Action từ Store
const onSaveUser = async (formData) => {
  if (!formData.name || !formData.email) return alert("Vui lòng nhập tên và email");

  let success = false;
  if (isEditing.value) {
    success = await membersStore.updateMember(formData);
    if (success) showToast("Đã cập nhật thông tin thành viên!");
  } else {
    success = await membersStore.addMember(formData);
    if (success) showToast("Đã thêm thành viên mới!");
  }
  
  if (success) closeModal();
};

const handleDeleteUser = async (id) => {
  if (confirm("Bạn có chắc chắn muốn xóa thành viên này?")) {
    const success = await membersStore.deleteMember(id);
    if (success) {
      selectedUsers.value = selectedUsers.value.filter((uid) => uid !== id);
      showToast("Đã xóa thành viên!");
    }
  }
};

const handleBulkDelete = async () => {
  if (confirm(`Xóa ${selectedUsers.value.length} thành viên đã chọn?`)) {
    const success = await membersStore.deleteSelectedMembers([...selectedUsers.value]); // copy array
    if (success) {
      selectedUsers.value = [];
      showToast("Đã xóa các thành viên đã chọn!");
    }
  }
};

const exportCSV = () => {
  showToast("Đang xuất file CSV...");
  // Logic export có thể cài đặt sau
};

const showToast = (msg) => {
  toast.message = msg;
  toast.show = true;
  setTimeout(() => (toast.show = false), 3000);
};
</script>

<style scoped>
@keyframes bounce-in {
  0% { transform: scale(0.9); opacity: 0; }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); opacity: 1; }
}
.animate-bounce-in {
  animation: bounce-in 0.3s ease-out;
}
</style>