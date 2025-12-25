<template>
  <NeoCard class="p-6 flex flex-col">
      <h3 class="font-bold text-lg uppercase mb-4">Ghi Chú Admin</h3>
      <ul class="space-y-3 flex-1">
        <li v-for="todo in localTodos" :key="todo.id" class="flex items-center gap-3">
            <div class="relative">
                <input type="checkbox" v-model="todo.done" class="peer sr-only">
                <div class="w-6 h-6 border-2 border-black bg-white peer-checked:bg-neo-green flex items-center justify-center cursor-pointer transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <i class="fa-solid fa-check text-xs opacity-0 peer-checked:opacity-100"></i>
                </div>
            </div>
            <span class="font-bold text-sm cursor-pointer select-none" 
                :class="{'line-through text-gray-400': todo.done}" 
                @click="todo.done = !todo.done">
                {{ todo.text }}
            </span>
        </li>
      </ul>
      <div class="mt-4 flex gap-2">
        <input 
          v-model="newTodoText"
          @keyup.enter="addTodo"
          type="text" 
          placeholder="Thêm việc mới..." 
          class="w-full border-2 border-black px-2 py-1 text-sm outline-none focus:bg-gray-50"
        >
        <button 
          @click="addTodo"
          class="w-8 h-8 bg-black text-white flex items-center justify-center border-2 border-black hover:bg-gray-800"
        >
          <i class="fa-solid fa-plus"></i>
        </button>
      </div>
  </NeoCard>
</template>

<script setup>
import { ref, watch } from 'vue';
import NeoCard from '../common/NeoCard.vue';

const props = defineProps({
  todos: Array
});

// Tạo bản sao local để mutate
const localTodos = ref(props.todos);
const newTodoText = ref('');

// Đồng bộ khi props thay đổi
watch(() => props.todos, (newVal) => {
  localTodos.value = newVal;
});

const addTodo = () => {
  if (!newTodoText.value.trim()) return;
  localTodos.value.push({
    id: Date.now(),
    text: newTodoText.value,
    done: false
  });
  newTodoText.value = '';
};
</script>