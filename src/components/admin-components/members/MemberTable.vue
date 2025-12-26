<template>
  <NeoCard class="overflow-hidden flex flex-col min-h-[400px]">
    <div
      v-if="selectedIds.length > 0"
      class="bg-yellow-100 border-b-2 border-black p-3 flex justify-between items-center animate-fade-in"
    >
      <span class="font-bold text-sm ml-2"
        >Đã chọn {{ selectedIds.length }} thành viên</span
      >
      <div class="flex gap-2">
        <button
          @click="$emit('bulk-delete')"
          class="text-xs font-bold border-2 border-black bg-white px-3 py-1 rounded hover:bg-red-50 text-red-600"
        >
          <i class="fa-solid fa-trash mr-1"></i> Xóa
        </button>
        <button
          @click="$emit('clear-selection')"
          class="text-xs font-bold underline px-3 py-1"
        >
          Hủy
        </button>
      </div>
    </div>

    <div class="overflow-x-auto">
      <table class="w-full text-left border-collapse">
        <thead>
          <tr class="bg-black text-white border-b-2 border-black">
            <th class="p-4 w-10">
              <input
                type="checkbox"
                :checked="isAllSelected"
                @change="$emit('toggle-all')"
                class="w-4 h-4 accent-neo-green cursor-pointer"
              />
            </th>
            <th class="p-4 font-bold uppercase text-sm">Thành viên</th>
            <th class="p-4 font-bold uppercase text-sm">Vai trò</th>
            <th class="p-4 font-bold uppercase text-sm">Gói cước</th>
            <th class="p-4 font-bold uppercase text-sm">Trạng thái</th>
            <th class="p-4 font-bold uppercase text-sm">Ngày tham gia</th>
            <th class="p-4 font-bold uppercase text-sm text-right">
              Hành động
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="user in users"
            :key="user.id"
            class="border-b-2 border-black last:border-0 hover:bg-gray-50 transition-colors group"
          >
            <td class="p-4">
              <input
                type="checkbox"
                :checked="selectedIds.includes(user.id)"
                @change="toggleSelection(user.id)"
                class="w-4 h-4 accent-black cursor-pointer"
              />
            </td>
            <td class="p-4">
              <div class="flex items-center gap-3">
                <div class="relative shrink-0">
                  <img
                    :src="user.avatar"
                    class="w-10 h-10 rounded-full border-2 border-black bg-gray-200 object-cover"
                    alt=""
                  />
                  <div
                    class="absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white"
                    :class="user.active ? 'bg-green-500' : 'bg-gray-400'"
                  ></div>
                </div>
                <div>
                  <div class="font-bold text-sm">{{ user.name }}</div>
                  <div class="text-xs text-gray-500">{{ user.email }}</div>
                </div>
              </div>
            </td>
            <td class="p-4">
              <span class="font-bold text-xs flex items-center gap-1">
                <i
                  v-if="user.role === 'Admin'"
                  class="fa-solid fa-shield-halved text-blue-600"
                ></i>
                {{ user.role }}
              </span>
            </td>
            <td class="p-4">
              <span
                class="px-2 py-0.5 border-2 border-black rounded text-[10px] font-black uppercase tracking-wide"
                :class="getPlanColor(user.plan)"
              >
                {{ user.plan }}
              </span>
            </td>
            <td class="p-4">
              <div class="flex items-center gap-2 font-bold text-sm">
                <span
                  class="w-2 h-2 rounded-full border border-black"
                  :class="user.active ? 'bg-green-500' : 'bg-red-500'"
                ></span>
                {{ user.active ? "Active" : "Inactive" }}
              </div>
            </td>
            <td class="p-4 text-sm font-medium text-gray-600">
              {{ user.joinDate }}
            </td>
            <td class="p-4 text-right">
              <div
                class="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <button
                  @click="$emit('edit', user)"
                  class="w-8 h-8 border-2 border-black rounded hover:bg-black hover:text-white transition-colors"
                  title="Sửa"
                >
                  <i class="fa-solid fa-pen text-xs"></i>
                </button>
                <button
                  @click="$emit('delete', user.id)"
                  class="w-8 h-8 border-2 border-black rounded hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors"
                  title="Xóa"
                >
                  <i class="fa-solid fa-trash text-xs"></i>
                </button>
              </div>
            </td>
          </tr>
          <tr v-if="users.length === 0">
            <td colspan="7" class="p-8 text-center text-gray-500 font-bold">
              Không tìm thấy thành viên nào phù hợp.
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div
      class="mt-auto p-4 border-t-2 border-black bg-gray-50 flex flex-col sm:flex-row justify-between items-center gap-4"
    >
      <span class="text-sm font-bold text-gray-600">
        Hiển thị {{ users.length }} / {{ totalFiltered }} kết quả
      </span>
      <div class="flex gap-2">
        <button
          @click="$emit('page-change', currentPage - 1)"
          :disabled="currentPage === 1"
          class="px-3 py-1 border-2 border-black rounded font-bold bg-white hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <i class="fa-solid fa-chevron-left"></i>
        </button>
        <button
          v-for="page in totalPages"
          :key="page"
          @click="$emit('page-change', page)"
          class="w-8 h-8 border-2 border-black rounded font-bold flex items-center justify-center transition-colors"
          :class="
            currentPage === page
              ? 'bg-black text-white'
              : 'bg-white hover:bg-gray-100'
          "
        >
          {{ page }}
        </button>
        <button
          @click="$emit('page-change', currentPage + 1)"
          :disabled="currentPage === totalPages"
          class="px-3 py-1 border-2 border-black rounded font-bold bg-white hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <i class="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  </NeoCard>
</template>

<script setup>
import NeoCard from "../common/NeoCard.vue";

const props = defineProps({
  users: { type: Array, required: true },
  selectedIds: { type: Array, default: () => [] },
  isAllSelected: Boolean,
  currentPage: Number,
  totalPages: Number,
  totalFiltered: Number,
});

const emit = defineEmits([
  "edit",
  "delete",
  "toggle-all",
  "update:selectedIds",
  "bulk-delete",
  "clear-selection",
  "page-change",
]);

const toggleSelection = (id) => {
  const newSelection = [...props.selectedIds];
  if (newSelection.includes(id)) {
    emit(
      "update:selectedIds",
      newSelection.filter((item) => item !== id)
    );
  } else {
    newSelection.push(id);
    emit("update:selectedIds", newSelection);
  }
};

const getPlanColor = (plan) => {
  if (plan === "Enterprise")
    return "bg-purple-200 text-purple-900 border-purple-900";
  if (plan === "Pro") return "bg-yellow-200 text-yellow-900 border-yellow-900";
  if (plan === "Basic") return "bg-blue-200 text-blue-900 border-blue-900";
  return "bg-gray-200 text-gray-700 border-gray-500";
};
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.animate-fade-in {
  animation: fade-in 0.2s;
}
</style>
