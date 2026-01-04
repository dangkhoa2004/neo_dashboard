<script setup>
import { useThemeUi } from "@/composables/themeUi";
import NeoLoader from "@/components/common/NeoLoader.vue";
const { activeTheme, currentThemeName, setTheme } = useThemeUi();
</script>

<template>
  <div>
    <NeoLoader />

    <component :is="activeTheme">
      <router-view />
    </component>
    
    </div>
</template>