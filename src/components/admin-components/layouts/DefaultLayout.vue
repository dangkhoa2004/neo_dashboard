<template>
  <div class="h-screen flex flex-col bg-neo-bg text-black font-sans overflow-hidden">
    
    <Header class="shrink-0" @toggle-sidebar="isSidebarOpen = true" />

    <div class="flex flex-1 overflow-hidden w-full max-w-[1600px] mx-auto relative">
      
      <Sidebar class="h-full overflow-y-auto py-6 px-6 hidden lg:block" />

      <div 
        v-if="isSidebarOpen" 
        class="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm transition-opacity"
        @click="isSidebarOpen = false"
      ></div>

      <div 
        class="fixed inset-y-0 left-0 z-50 w-72 bg-neo-bg border-r-2 border-black transform transition-transform duration-300 ease-in-out lg:hidden"
        :class="isSidebarOpen ? 'translate-x-0' : '-translate-x-full'"
      >
        <div class="h-full p-6">
           <Sidebar 
             :is-mobile="true" 
             @close-sidebar="isSidebarOpen = false" 
           />
        </div>
      </div>

      <main class="flex-1 h-full overflow-y-auto p-4 md:p-6 w-full">
        <router-view />
      </main>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import Header from './Header.vue';
import Sidebar from './Sidebar.vue';

// State quản lý đóng mở menu trên mobile
const isSidebarOpen = ref(false);
</script>