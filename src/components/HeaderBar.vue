<template>
  <header class="header">
    <h1>🎓 Course Dashboard</h1>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/courses">Courses</router-link>
      <router-link to="/about">About</router-link>
      <!-- Theme Toggle Button 
      <button @click="$emit('toggle-theme')">🌓 Toggle Theme</button>
      -->
    </nav>
  </header>
</template>

<style scoped>
.header {
  background: linear-gradient(135deg, #4facfe, #00f2fe);
  padding: 15px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav {
  display: flex;
  gap: 10px;
}
a {
  color: white;
  text-decoration: none;
  font-weight: 600;
}
button {
  background: white;
  color: #4facfe;
  border: none;
  border-radius: 6px;
  padding: 6px 12px;
  cursor: pointer;
}
</style>
