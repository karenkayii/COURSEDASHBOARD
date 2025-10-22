<template>
  <div :class="['app-container', theme]">
    <HeaderBar @toggle-theme="toggleTheme" />
    <router-view />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import HeaderBar from './components/HeaderBar.vue'

const theme = ref('light')

function toggleTheme() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}
</script>

<style scoped>
.app-container.light {
  background: #f8f9fa;
  color: #333;
}
.app-container.dark {
  background: #222;
  color: white;
}
</style>
