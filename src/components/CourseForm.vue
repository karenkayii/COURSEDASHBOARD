<template>
  <form @submit.prevent="submitForm" class="course-form">
    <input v-model="title" placeholder="Course Title" required />
    <input v-model="instructor" placeholder="Instructor Name" required />
    <textarea v-model="description" placeholder="Description"></textarea>
    <button type="submit">Add Course</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const title = ref('')
const instructor = ref('')
const description = ref('')

const emit = defineEmits(['add-course'])

function submitForm() {
  emit('add-course', {
    id: Date.now(),
    title: title.value,
    instructor: instructor.value,
    description: description.value
  })
  title.value = ''
  instructor.value = ''
  description.value = ''
}
</script>

<style scoped>
.course-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 300px;
  margin: 20px auto;
}
input, textarea {
  padding: 10px;
  border: 2px solid #4facfe;
  border-radius: 10px;
}
button {
  background: linear-gradient(135deg, #4facfe, #00f2fe);
  color: white;
  border: none;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
}
</style>
