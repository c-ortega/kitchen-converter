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
          <option>Pounds</option>
          <option>Kilograms</option>
          <option>Grams</option>
          <option>Ounces</option>
        </select>
      </div>

      <div class="results" v-if="inputUnit && inputValue !== null">
        <p v-for="(val, unit) in conversions" :key="unit">
          {{ val }} {{ unit }}
        </p>
      </div>
    </div>

    <router-link to="/weight-ref" class="ref-button"
      >See Weight Reference</router-link
    >
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import Header from "../components/Header.vue";

const inputValue = ref(null);
const inputUnit = ref("");

// Conversion rates from 1 unit to the others
const weightTable = {
  Pounds: {
    Kilograms: 0.4536,
    Grams: 453.6,
    Ounces: 16,
  },
  Kilograms: {
    Pounds: 2.2046,
    Grams: 1000,
    Ounces: 35.274,
  },
  Grams: {
    Pounds: 1 / 453.6,
    Kilograms: 1 / 1000,
    Ounces: 1 / 28.35,
  },
  Ounces: {
    Pounds: 1 / 16,
    Kilograms: 1 / 35.274,
    Grams: 28.35,
  },
};

const conversions = computed(() => {
  const result = {};
  if (!inputUnit.value || !inputValue.value) return result;

  const rates = weightTable[inputUnit.value];
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
