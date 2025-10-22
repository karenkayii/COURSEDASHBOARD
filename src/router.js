import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Courses from './pages/Courses.vue'
import About from './pages/About.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/courses', component: Courses },
    { path: '/about', component: About }
]

export default createRouter({
    history: createWebHistory(),
    routes
})