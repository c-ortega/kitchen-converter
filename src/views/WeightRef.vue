<template>
  <div class="container">
    <Header />
    <div class="box">
      <h2 class="label">Weight</h2>
      <div class="card">
        <p>1 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Pound</p>
        <p>16 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Ounces</p>
        <p>454 &nbsp;&nbsp; Grams</p>
        <p>.45 &nbsp;&nbsp;&nbsp; Kilograms</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from "../components/Header.vue";
</script>

<style scoped>
.container {
  background: #d9f0ff;
  height: 100vh;
  padding: 20px;
}
.label {
  background: #4caf50;
  border-radius: 10px;
  padding: 5px 15px;
  display: inline-block;
}
.card {
  background: #4caf50;
  color: navy;
  font-weight: bold;
  padding: 20px;
  border-radius: 15px;
  margin-top: 15px;
}
</style>
