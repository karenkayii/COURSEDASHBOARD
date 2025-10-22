<template>
  <transition name="fade">
    <div v-if="message" class="notification" :class="type">
      {{ message }}
    </div>
  </transition>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  message: String,
  type: {
    type: String,
    default: 'info' // info, success, error
  }
})
</script>

<style scoped>
.notification {
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 12px 20px;
  border-radius: 10px;
  color: white;
  font-weight: 500;
  z-index: 2000;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}
.notification.success {
  background: #4caf50;
}
.notification.info {
  background: #2196f3;
}
.notification.error {
  background: #f44336;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
