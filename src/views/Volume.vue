<template>
  <div class="container">
    <Header />
    <div class="content">
      <div class="form">
        <input
          v-model.number="inputValue"
          type="number"
          placeholder="Enter value"
        />
        <select v-model="inputUnit">
          <option disabled value="">Select Unit</option>
          <option>Cups</option>
          <option>Tablespoons</option>
          <option>Teaspoons</option>
          <option>Milliliters</option>
        </select>
      </div>

      <div class="results" v-if="inputUnit && inputValue !== null">
        <p v-for="(val, unit) in conversions" :key="unit">
          {{ val }} {{ unit }}
        </p>
      </div>
    </div>

    <router-link to="/volume-ref" class="ref-button"
      >See Volume Reference</router-link
    >
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import Header from "../components/Header.vue";

const inputValue = ref(null);
const inputUnit = ref("");

// Conversion rates from 1 unit to the others
const volumeTable = {
  Cups: {
    Tablespoons: 16,
    Teaspoons: 48,
    Milliliters: 240,
  },
  Tablespoons: {
    Cups: 1 / 16,
    Teaspoons: 3,
    Milliliters: 15,
  },
  Teaspoons: {
    Cups: 1 / 48,
    Tablespoons: 1 / 3,
    Milliliters: 5,
  },
  Milliliters: {
    Cups: 1 / 240,
    Tablespoons: 1 / 15,
    Teaspoons: 1 / 5,
  },
};

const conversions = computed(() => {
  const result = {};
  if (!inputUnit.value || !inputValue.value) return result;

  const rates = volumeTable[inputUnit.value];
  for (const unit in rates) {
    result[unit] = +(inputValue.value * rates[unit]).toFixed(2);
  }
  return result;
});
</script>

<style scoped>
.container {
  background-color: #d9f0ff;
  height: 100vh;
  padding: 20px;
}
.content {
  text-align: center;
}
.form {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 20px;
}
input,
select {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}
.results {
  background: #4caf50;
  padding: 20px;
  border-radius: 15px;
  width: fit-content;
  margin: auto;
  color: navy;
  font-weight: bold;
}
.ref-button {
  display: inline-block;
  margin-top: 20px;
  background: #4caf50;
  padding: 10px 20px;
  border-radius: 10px;
  color: white;
  text-decoration: none;
  font-weight: bold;
}
</style>
