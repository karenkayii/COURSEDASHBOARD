<template>
  <div class="course-card">
    <div v-if="!isEditing">
      <h3>{{ course.title }}</h3>
      <p><strong>Instructor:</strong> {{ course.instructor }}</p>
      <p>{{ course.description }}</p>
      <button @click="isEditing = true">Edit</button>
      <button @click="$emit('delete-course')">Delete</button>
    </div>

    <div v-else>
      <input v-model="editable.title" />
      <input v-model="editable.instructor" />
      <textarea v-model="editable.description"></textarea>
      <button @click="saveChanges">Save</button>
      <button @click="isEditing = false">Cancel</button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, watch } from 'vue'

const props = defineProps({ course: Object })
const emit = defineEmits(['update-course'])

const isEditing = ref(false)
const editable = reactive({ ...props.course })

watch(() => props.course, (newVal) => {
  Object.assign(editable, newVal)
})

function saveChanges() {
  emit('update-course', { ...editable })
  isEditing.value = false
}
</script>

<style scoped>
.course-card {
  border: 2px solid #4facfe;
  border-radius: 10px;
  padding: 15px;
  margin: 15px auto;
  width: 320px;
  background: #fff;
}
button {
  margin: 5px;
  padding: 6px 10px;
  border: none;
  background: #4facfe;
  color: white;
  border-radius: 8px;
  cursor: pointer;
}
</style>
