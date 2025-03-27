<template>
  <div class="container">
    <Header />
    <h1 class="title">Measurements</h1>

    <div class="menu">
      <router-link to="/volume" class="button">Volume</router-link>
      <router-link to="/weight" class="button">Weight</router-link>
    </div>

    <div class="menu">
      <router-link to="/volume-ref" class="button small"
        >Volume Ref</router-link
      >
      <router-link to="/weight-ref" class="button small"
        >Weight Ref</router-link
      >
    </div>

    <router-link to="/game" class="start-button">▶</router-link>
  </div>
</template>

<script setup>
import Header from "../components/Header.vue";
</script>

<style scoped>
.container {
  background-color: #d9f0ff;
  height: 100vh;
  padding: 20px;
  text-align: center;
}
.title {
  background: #4caf50;
  border-radius: 20px;
  display: inline-block;
  padding: 10px 20px;
  font-weight: bold;
}
.menu {
  margin: 20px 0;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}
.button {
  background: #4caf50;
  padding: 10px 20px;
  border-radius: 10px;
  color: white;
  text-decoration: none;
  font-weight: bold;
}
.small {
  font-size: 14px;
  padding: 8px 16px;
}
.start-button {
  font-size: 2rem;
  display: inline-block;
  background: #4caf50;
  color: white;
  border-radius: 50%;
  padding: 10px 15px;
  text-decoration: none;
}
</style>
