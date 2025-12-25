<template>
  <div>
    <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
      <div>
        <h1 class="text-4xl font-black mb-1 flex items-center gap-2">
          <i class="fa-solid fa-users text-3xl"></i> Thành Viên
        </h1>
        <p class="text-gray-600">Quản lý danh sách người dùng.</p>
      </div>
      <button class="bg-neo-green text-black border-2 border-black px-6 py-2 font-bold rounded shadow-neo hover:shadow-neo-hover hover:-translate-y-1 transition-all flex items-center gap-2">
        <i class="fa-solid fa-plus"></i> Thêm mới
      </button>
    </div>

    <NeoCard class="p-4 mb-6 flex flex-col md:flex-row gap-4">
      <div class="relative flex-1">
        <i class="fa-solid fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
        <input type="text" placeholder="Tìm kiếm thành viên..." class="w-full pl-10 pr-4 py-2 border-2 border-black rounded focus:outline-none focus:shadow-neo-sm transition-shadow">
      </div>
      <select class="border-2 border-black rounded px-4 py-2 font-bold focus:shadow-neo-sm bg-white">
        <option>Tất cả trạng thái</option>
        <option>Hoạt động</option>
        <option>Bị khóa</option>
      </select>
    </NeoCard>

    <NeoCard class="overflow-hidden">
      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="bg-black text-white border-b-2 border-black">
              <th class="p-4 font-bold uppercase text-sm">User</th>
              <th class="p-4 font-bold uppercase text-sm">Email</th>
              <th class="p-4 font-bold uppercase text-sm">Gói</th>
              <th class="p-4 font-bold uppercase text-sm">Trạng thái</th>
              <th class="p-4 font-bold uppercase text-sm text-right">Hành động</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.id" class="border-b-2 border-black last:border-0 hover:bg-gray-50 transition-colors">
              <td class="p-4">
                <div class="flex items-center gap-3">
                  <img :src="user.avatar" class="w-10 h-10 rounded-full border-2 border-black bg-gray-200" alt="">
                  <span class="font-bold">{{ user.name }}</span>
                </div>
              </td>
              <td class="p-4 font-medium text-gray-600">{{ user.email }}</td>
              <td class="p-4">
                <span class="px-3 py-1 border-2 border-black rounded-full text-xs font-bold bg-yellow-200 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  {{ user.plan }}
                </span>
              </td>
              <td class="p-4">
                <div class="flex items-center gap-2 font-bold text-sm" :class="user.active ? 'text-green-600' : 'text-red-600'">
                  <i class="fa-solid fa-circle text-[8px]"></i>
                  {{ user.active ? 'Hoạt động' : 'Bị khóa' }}
                </div>
              </td>
              <td class="p-4 text-right">
                <button class="w-8 h-8 border-2 border-black rounded hover:bg-gray-100 mr-2"><i class="fa-solid fa-pen"></i></button>
                <button class="w-8 h-8 border-2 border-black rounded hover:bg-red-100 text-red-600"><i class="fa-solid fa-trash"></i></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </NeoCard>
  </div>
</template>

<script setup>
import NeoCard from '../components/NeoCard.vue';

const users = [
  { id: 1, name: 'Nguyễn Văn A', email: 'anv@example.com', plan: 'Pro', active: true, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=A' },
  { id: 2, name: 'Trần Thị B', email: 'btt@example.com', plan: 'Basic', active: true, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=B' },
  { id: 3, name: 'Lê Văn C', email: 'cle@example.com', plan: 'Free', active: false, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=C' },
  { id: 4, name: 'Phạm D', email: 'dpham@example.com', plan: 'Pro', active: true, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=D' },
];
</script>