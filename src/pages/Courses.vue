<template>
  <section>
    <h2>📚 Manage Courses</h2>
    <CourseForm @add-course="addCourse" />

    <div v-if="courses.length">
      <CourseItem
        v-for="(course, index) in courses"
        :key="course.id"
        :course="course"
        @delete-course="deleteCourse(index)"
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

const courses = ref(JSON.parse(localStorage.getItem('courses')) || [])

// Fetch sample data (API)
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
    localStorage.setItem('courses', JSON.stringify(courses.value))
  }
})

// CRUD
function addCourse(course) {
  courses.value.push(course)
  saveToLocalStorage()
}
function deleteCourse(index) {
  courses.value.splice(index, 1)
  saveToLocalStorage()
}
function updateCourse(index, updatedCourse) {
  courses.value[index] = updatedCourse
  saveToLocalStorage()
}
function saveToLocalStorage() {
  localStorage.setItem('courses', JSON.stringify(courses.value))
}
</script>
