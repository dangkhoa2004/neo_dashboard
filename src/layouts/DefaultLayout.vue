<template>
  <div class="h-screen flex flex-col bg-neo-bg text-black font-sans overflow-hidden">
    
    <Header class="shrink-0" />

    <div class="flex flex-1 overflow-hidden w-full max-w-[1600px] mx-auto">
      
      <Sidebar class="h-full overflow-y-auto py-6 px-6 hidden lg:block" />

      <main class="flex-1 h-full overflow-y-auto p-6">
        <router-view />
      </main>
    </div>

  </div>
</template>

<script setup>
import Header from '../components/Header.vue';
import Sidebar from '../components/Sidebar.vue';
</script>