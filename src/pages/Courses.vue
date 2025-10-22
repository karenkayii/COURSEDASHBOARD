<template>
  <section>
    <h2>📚 Manage Courses</h2>
    <CourseForm @add-course="addCourse" />

    <Notification :message="notification.message" :type="notification.type" />

    <div v-if="courses.length">
      <CourseItem
        v-for="(course, index) in courses"
        :key="course.id"
        :course="course"
        @delete-course="confirmDelete(index)"
        @update-course="updateCourse(index, $event)"
      />
    </div>
    <p v-else>No courses yet. Add one!</p>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import CourseForm from '../components/CourseForm.vue'
import CourseItem from '../components/CourseItem.vue'
import Notification from '../components/Notification.vue'

const courses = ref(JSON.parse(localStorage.getItem('courses')) || [])
const notification = ref({ message: '', type: 'info' })

// Fetch from API on first load
onMounted(async () => {
  if (!courses.value.length) {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
    const data = await res.json()
    courses.value = data.map(d => ({
      id: d.id,
      title: d.title,
      instructor: 'Guest Instructor',
      description: d.body
    }))
    saveToLocalStorage()
  }
})

// CRUD FUNCTIONS
function addCourse(course) {
  courses.value.push(course)
  saveToLocalStorage()
  showNotification('✅ Course added successfully!', 'success')
}

function confirmDelete(index) {
  const courseTitle = courses.value[index].title
  if (confirm(`Are you sure you want to delete "${courseTitle}"?`)) {
    deleteCourse(index)
  }
}

function deleteCourse(index) {
  courses.value.splice(index, 1)
  saveToLocalStorage()
  showNotification('🗑️ Course deleted successfully!', 'error')
}

function updateCourse(index, updatedCourse) {
  courses.value[index] = updatedCourse
  saveToLocalStorage()
  showNotification('💾 Course updated successfully!', 'success')
}

function saveToLocalStorage() {
  localStorage.setItem('courses', JSON.stringify(courses.value))
}

// NOTIFICATION HANDLER
function showNotification(message, type = 'info') {
  notification.value = { message, type }
  setTimeout(() => {
    notification.value.message = ''
  }, 2000)
}
</script>
