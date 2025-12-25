<template>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <NeoCard class="p-5 flex items-center justify-between bg-white">
        <div>
          <p class="text-xs font-bold uppercase text-gray-500 mb-1">Tổng thành viên</p>
          <p class="text-3xl font-black text-black">{{ users.length }}</p>
        </div>
        <div class="w-10 h-10 border-2 border-black rounded-full bg-gray-100 flex items-center justify-center shadow-neo-sm">
          <i class="fa-solid fa-users text-lg"></i>
        </div>
      </NeoCard>
      
      <NeoCard class="p-5 flex items-center justify-between bg-yellow-50">
        <div>
          <p class="text-xs font-bold uppercase text-gray-500 mb-1">Thành viên VIP</p>
          <p class="text-3xl font-black text-black">{{ vipCount }}</p>
        </div>
        <div class="w-10 h-10 border-2 border-black rounded-full bg-white flex items-center justify-center shadow-neo-sm">
          <i class="fa-solid fa-crown text-lg text-yellow-600"></i>
        </div>
      </NeoCard>

      <NeoCard class="p-5 flex items-center justify-between bg-green-50">
        <div>
          <p class="text-xs font-bold uppercase text-gray-500 mb-1">Mới hôm nay</p>
          <p class="text-3xl font-black text-neo-green">+12</p>
        </div>
        <div class="w-10 h-10 border-2 border-black rounded-full bg-white flex items-center justify-center shadow-neo-sm">
          <i class="fa-solid fa-user-plus text-lg"></i>
        </div>
      </NeoCard>
    </div>

    <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
      <div>
        <h1 class="text-4xl font-black mb-1 flex items-center gap-2">
          <i class="fa-solid fa-address-card text-3xl"></i> Quản Lý Thành Viên
        </h1>
        <p class="text-gray-600">Kiểm soát truy cập và thông tin người dùng.</p>
      </div>
      <div class="flex gap-3">
        <button class="bg-white text-black border-2 border-black px-4 py-2 font-bold rounded shadow-neo hover:translate-y-[-2px] transition-all flex items-center gap-2">
          <i class="fa-solid fa-file-export"></i> Xuất CSV
        </button>
        <button @click="openModal()" class="bg-neo-green text-black border-2 border-black px-6 py-2 font-bold rounded shadow-neo hover:shadow-neo-hover hover:-translate-y-1 transition-all flex items-center gap-2">
          <i class="fa-solid fa-plus"></i> Thêm User
        </button>
      </div>
    </div>

    <NeoCard class="p-4 mb-6 flex flex-col xl:flex-row gap-4 justify-between items-center">
      <div class="flex gap-2 w-full xl:w-auto overflow-x-auto pb-2 xl:pb-0">
         <button 
           v-for="tab in ['All', 'Active', 'Inactive']" 
           :key="tab"
           @click="filterStatus = tab"
           class="px-4 py-1.5 border-2 border-black rounded-full font-bold text-sm transition-colors whitespace-nowrap"
           :class="filterStatus === tab ? 'bg-black text-white' : 'bg-white hover:bg-gray-100'"
         >
           {{ tab }}
         </button>
      </div>

      <div class="flex flex-col md:flex-row gap-3 w-full xl:w-auto">
        <div class="relative flex-1 md:w-64">
          <i class="fa-solid fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
          <input v-model="searchQuery" type="text" placeholder="Tìm tên hoặc email..." class="w-full pl-10 pr-4 py-2 border-2 border-black rounded focus:outline-none focus:shadow-neo-sm transition-shadow">
        </div>
        <select v-model="filterRole" class="border-2 border-black rounded px-4 py-2 font-bold focus:shadow-neo-sm bg-white cursor-pointer">
          <option value="All">Tất cả Quyền</option>
          <option value="Admin">Admin</option>
          <option value="Editor">Editor</option>
          <option value="User">User</option>
        </select>
      </div>
    </NeoCard>

    <NeoCard class="overflow-hidden flex flex-col min-h-[400px]">
      
      <div v-if="selectedUsers.length > 0" class="bg-yellow-100 border-b-2 border-black p-3 flex justify-between items-center animate-fade-in">
         <span class="font-bold text-sm ml-2">Đã chọn {{ selectedUsers.length }} thành viên</span>
         <div class="flex gap-2">
            <button class="text-xs font-bold border-2 border-black bg-white px-3 py-1 rounded hover:bg-red-50 text-red-600">
               <i class="fa-solid fa-trash mr-1"></i> Xóa
            </button>
            <button @click="selectedUsers = []" class="text-xs font-bold underline px-3 py-1">Hủy</button>
         </div>
      </div>

      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="bg-black text-white border-b-2 border-black">
              <th class="p-4 w-10">
                <input type="checkbox" @change="toggleAll" :checked="isAllSelected" class="w-4 h-4 accent-neo-green cursor-pointer">
              </th>
              <th class="p-4 font-bold uppercase text-sm">Thành viên</th>
              <th class="p-4 font-bold uppercase text-sm">Vai trò</th>
              <th class="p-4 font-bold uppercase text-sm">Gói cước</th>
              <th class="p-4 font-bold uppercase text-sm">Trạng thái</th>
              <th class="p-4 font-bold uppercase text-sm">Ngày tham gia</th>
              <th class="p-4 font-bold uppercase text-sm text-right">Hành động</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in paginatedUsers" :key="user.id" class="border-b-2 border-black last:border-0 hover:bg-gray-50 transition-colors group">
              <td class="p-4">
                <input type="checkbox" v-model="selectedUsers" :value="user.id" class="w-4 h-4 accent-black cursor-pointer">
              </td>
              <td class="p-4">
                <div class="flex items-center gap-3">
                  <div class="relative">
                    <img :src="user.avatar" class="w-10 h-10 rounded-full border-2 border-black bg-gray-200 object-cover" alt="">
                    <div class="absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white" :class="user.active ? 'bg-green-500' : 'bg-gray-400'"></div>
                  </div>
                  <div>
                    <div class="font-bold text-sm">{{ user.name }}</div>
                    <div class="text-xs text-gray-500">{{ user.email }}</div>
                  </div>
                </div>
              </td>
              <td class="p-4">
                <span class="font-bold text-xs flex items-center gap-1">
                   <i v-if="user.role === 'Admin'" class="fa-solid fa-shield-halved text-blue-600"></i>
                   {{ user.role }}
                </span>
              </td>
              <td class="p-4">
                <span class="px-2 py-0.5 border-2 border-black rounded text-[10px] font-black uppercase tracking-wide"
                  :class="getPlanColor(user.plan)">
                  {{ user.plan }}
                </span>
              </td>
              <td class="p-4">
                <div class="flex items-center gap-2 font-bold text-sm">
                  <span class="w-2 h-2 rounded-full border border-black" :class="user.active ? 'bg-green-500' : 'bg-red-500'"></span>
                  {{ user.active ? 'Active' : 'Inactive' }}
                </div>
              </td>
              <td class="p-4 text-sm font-medium text-gray-600">
                {{ user.joinDate }}
              </td>
              <td class="p-4 text-right">
                <div class="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button @click="openModal(user)" class="w-8 h-8 border-2 border-black rounded hover:bg-black hover:text-white transition-colors" title="Sửa">
                        <i class="fa-solid fa-pen text-xs"></i>
                    </button>
                    <button @click="deleteUser(user.id)" class="w-8 h-8 border-2 border-black rounded hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors" title="Xóa">
                        <i class="fa-solid fa-trash text-xs"></i>
                    </button>
                </div>
              </td>
            </tr>
            <tr v-if="paginatedUsers.length === 0">
               <td colspan="7" class="p-8 text-center text-gray-500 font-bold">
                  Không tìm thấy thành viên nào phù hợp.
               </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="mt-auto p-4 border-t-2 border-black bg-gray-50 flex flex-col sm:flex-row justify-between items-center gap-4">
         <span class="text-sm font-bold text-gray-600">
            Hiển thị {{ paginatedUsers.length }} / {{ filteredUsers.length }} kết quả
         </span>
         <div class="flex gap-2">
            <button 
              @click="currentPage--" 
              :disabled="currentPage === 1"
              class="px-3 py-1 border-2 border-black rounded font-bold bg-white hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <i class="fa-solid fa-chevron-left"></i>
            </button>
            <button 
               v-for="page in totalPages" 
               :key="page"
               @click="currentPage = page"
               class="w-8 h-8 border-2 border-black rounded font-bold flex items-center justify-center transition-colors"
               :class="currentPage === page ? 'bg-black text-white' : 'bg-white hover:bg-gray-100'"
            >
               {{ page }}
            </button>
            <button 
              @click="currentPage++" 
              :disabled="currentPage === totalPages"
              class="px-3 py-1 border-2 border-black rounded font-bold bg-white hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <i class="fa-solid fa-chevron-right"></i>
            </button>
         </div>
      </div>
    </NeoCard>

    <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div class="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity" @click="closeModal"></div>
      
      <div class="bg-white w-full max-w-lg relative z-10 border-2 border-black shadow-neo-hover rounded-xl overflow-hidden animate-slide-up">
        <div class="bg-neo-green p-4 border-b-2 border-black flex justify-between items-center">
          <h2 class="font-black text-xl uppercase">
             {{ isEditing ? 'Cập nhật thành viên' : 'Thêm thành viên mới' }}
          </h2>
          <button @click="closeModal" class="w-8 h-8 bg-white border-2 border-black rounded hover:bg-red-500 hover:text-white transition-colors">
            <i class="fa-solid fa-times"></i>
          </button>
        </div>

        <div class="p-6 space-y-4">
          <div class="flex flex-col gap-1">
            <label class="font-bold text-sm">Họ và tên <span class="text-red-500">*</span></label>
            <input v-model="form.name" type="text" class="w-full border-2 border-black rounded p-2 font-medium focus:shadow-neo transition-shadow">
          </div>
          
          <div class="flex flex-col gap-1">
            <label class="font-bold text-sm">Email <span class="text-red-500">*</span></label>
            <input v-model="form.email" type="email" class="w-full border-2 border-black rounded p-2 font-medium focus:shadow-neo transition-shadow">
          </div>

          <div class="grid grid-cols-2 gap-4">
             <div class="flex flex-col gap-1">
               <label class="font-bold text-sm">Vai trò</label>
               <select v-model="form.role" class="w-full border-2 border-black rounded p-2 font-medium bg-white">
                 <option value="User">User</option>
                 <option value="Editor">Editor</option>
                 <option value="Admin">Admin</option>
               </select>
             </div>
             <div class="flex flex-col gap-1">
               <label class="font-bold text-sm">Gói cước</label>
               <select v-model="form.plan" class="w-full border-2 border-black rounded p-2 font-medium bg-white">
                 <option value="Free">Free</option>
                 <option value="Basic">Basic</option>
                 <option value="Pro">Pro</option>
                 <option value="Enterprise">Enterprise</option>
               </select>
             </div>
          </div>

          <div class="flex items-center gap-3 mt-2 p-3 border-2 border-black rounded bg-gray-50">
             <label class="relative inline-flex items-center cursor-pointer">
               <input type="checkbox" v-model="form.active" class="sr-only peer">
               <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-neo-green border-2 border-black"></div>
             </label>
             <span class="font-bold text-sm">Kích hoạt tài khoản ngay</span>
          </div>
        </div>

        <div class="p-4 border-t-2 border-black bg-gray-50 flex justify-end gap-3">
          <button @click="closeModal" class="px-4 py-2 font-bold border-2 border-transparent hover:border-black rounded text-gray-600">Hủy</button>
          <button @click="saveUser" class="bg-black text-white px-6 py-2 font-bold border-2 border-black rounded shadow-neo hover:translate-y-[-2px] hover:shadow-neo-hover active:translate-y-[1px] active:shadow-none transition-all">
            {{ isEditing ? 'Lưu thay đổi' : 'Tạo mới' }}
          </button>
        </div>
      </div>
    </div>

    <div v-if="toast.show" class="fixed bottom-6 right-6 z-50 animate-bounce-in">
       <div class="bg-black text-white px-6 py-3 rounded border-2 border-white shadow-xl flex items-center gap-3">
          <i class="fa-solid fa-circle-check text-neo-green"></i>
          <span class="font-bold">{{ toast.message }}</span>
       </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed, reactive } from 'vue';
import NeoCard from '../components/NeoCard.vue';

// --- Mock Data ---
const users = ref([
  { id: 1, name: 'Nguyễn Văn A', email: 'anv@example.com', plan: 'Enterprise', role: 'Admin', active: true, joinDate: '12/01/2024', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=A' },
  { id: 2, name: 'Trần Thị B', email: 'btt@example.com', plan: 'Basic', role: 'User', active: true, joinDate: '15/02/2024', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=B' },
  { id: 3, name: 'Lê Văn C', email: 'cle@example.com', plan: 'Free', role: 'User', active: false, joinDate: '20/02/2024', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=C' },
  { id: 4, name: 'Phạm D', email: 'dpham@example.com', plan: 'Pro', role: 'Editor', active: true, joinDate: '22/02/2024', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=D' },
  { id: 5, name: 'Hoàng E', email: 'ehoang@example.com', plan: 'Pro', role: 'User', active: true, joinDate: '25/02/2024', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=E' },
  { id: 6, name: 'Vũ F', email: 'fvu@example.com', plan: 'Free', role: 'User', active: true, joinDate: '01/03/2024', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=F' },
]);

// --- State ---
const searchQuery = ref('');
const filterStatus = ref('All'); // All, Active, Inactive
const filterRole = ref('All');
const selectedUsers = ref([]);
const currentPage = ref(1);
const itemsPerPage = 5;

const showModal = ref(false);
const isEditing = ref(false);
const form = reactive({ id: null, name: '', email: '', role: 'User', plan: 'Free', active: true });
const toast = reactive({ show: false, message: '' });

// --- Computed ---
const vipCount = computed(() => users.value.filter(u => u.plan === 'Pro' || u.plan === 'Enterprise').length);

const filteredUsers = computed(() => {
  return users.value.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.value.toLowerCase()) || 
                          user.email.toLowerCase().includes(searchQuery.value.toLowerCase());
    const matchesRole = filterRole.value === 'All' || user.role === filterRole.value;
    
    let matchesStatus = true;
    if (filterStatus.value === 'Active') matchesStatus = user.active;
    if (filterStatus.value === 'Inactive') matchesStatus = !user.active;

    return matchesSearch && matchesRole && matchesStatus;
  });
});

const totalPages = computed(() => Math.ceil(filteredUsers.value.length / itemsPerPage));

const paginatedUsers = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return filteredUsers.value.slice(start, end);
});

const isAllSelected = computed(() => {
    return paginatedUsers.value.length > 0 && selectedUsers.value.length === paginatedUsers.value.length;
});

// --- Methods ---

const getPlanColor = (plan) => {
    if (plan === 'Enterprise') return 'bg-purple-200 text-purple-900 border-purple-900';
    if (plan === 'Pro') return 'bg-yellow-200 text-yellow-900 border-yellow-900';
    if (plan === 'Basic') return 'bg-blue-200 text-blue-900 border-blue-900';
    return 'bg-gray-200 text-gray-700 border-gray-500';
};

const toggleAll = () => {
    if (isAllSelected.value) {
        selectedUsers.value = [];
    } else {
        selectedUsers.value = paginatedUsers.value.map(u => u.id);
    }
};

const openModal = (user = null) => {
    if (user) {
        isEditing.value = true;
        Object.assign(form, user);
    } else {
        isEditing.value = false;
        Object.assign(form, { id: null, name: '', email: '', role: 'User', plan: 'Free', active: true });
    }
    showModal.value = true;
};

const closeModal = () => {
    showModal.value = false;
};

const saveUser = () => {
    if (!form.name || !form.email) return alert('Vui lòng nhập tên và email');

    if (isEditing.value) {
        const index = users.value.findIndex(u => u.id === form.id);
        if (index !== -1) {
            users.value[index] = { ...users.value[index], ...form };
            showToast('Đã cập nhật thông tin thành viên!');
        }
    } else {
        const newUser = {
            ...form,
            id: Date.now(),
            joinDate: new Date().toLocaleDateString('vi-VN'),
            avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${form.name}`
        };
        users.value.unshift(newUser);
        showToast('Đã thêm thành viên mới!');
    }
    closeModal();
};

const deleteUser = (id) => {
    if (confirm('Bạn có chắc chắn muốn xóa thành viên này?')) {
        users.value = users.value.filter(u => u.id !== id);
        showToast('Đã xóa thành viên!');
    }
};

const showToast = (msg) => {
    toast.message = msg;
    toast.show = true;
    setTimeout(() => toast.show = false, 3000);
};

</script>

<style scoped>
@keyframes slide-up {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
.animate-slide-up {
  animation: slide-up 0.3s ease-out;
}
@keyframes bounce-in {
  0% { transform: scale(0.9); opacity: 0; }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); opacity: 1; }
}
.animate-bounce-in {
  animation: bounce-in 0.3s ease-out;
}
@keyframes fade-in {
    from { opacity: 0; } to { opacity: 1; }
}
.animate-fade-in { animation: fade-in 0.2s; }
</style>