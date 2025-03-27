<template>
  <div class="container">
    <Header />
    <h2 class="score">Score: {{ score }}</h2>

    <h3 class="question">{{ currentQuestion.question }}</h3>

    <div class="grid">
      <button
        class="choice"
        v-for="option in currentQuestion.choices"
        :key="option"
        @click="handleAnswer(option)"
      >
        {{ option }}
      </button>
    </div>

    <p v-if="showFeedback" class="feedback">
      {{ isCorrect ? "✅ Correct!" : "❌ Incorrect!" }}
    </p>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import Header from "../components/Header.vue";

const score = ref(0);
const currentIndex = ref(0);
const showFeedback = ref(false);
const isCorrect = ref(false);

const questions = [
  {
    question: "How many tablespoons are in a cup?",
    answer: 16,
    choices: [2, 3, 4, 7, 6, 10, 1, 22, 16],
  },
  {
    question: "How many ounces are in a pound?",
    answer: 16,
    choices: [10, 12, 16, 20, 24, 14, 18, 22, 8],
  },
  {
    question: "How many teaspoons are in a tablespoon?",
    answer: 3,
    choices: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    question: "How many grams in a kilogram?",
    answer: 1000,
    choices: [100, 500, 1000, 1500, 2000, 750, 300],
  },
];

const currentQuestion = computed(() => questions[currentIndex.value]);

function handleAnswer(option) {
  isCorrect.value = option === currentQuestion.value.answer;
  if (isCorrect.value) score.value++;

  showFeedback.value = true;

  setTimeout(() => {
    showFeedback.value = false;
    nextQuestion();
  }, 1000);
}

function nextQuestion() {
  currentIndex.value = (currentIndex.value + 1) % questions.length;
}
</script>

<style scoped>
.container {
  background: #d9f0ff;
  height: 100vh;
  padding: 20px;
  text-align: center;
}
.score {
  background: #4caf50;
  border-radius: 10px;
  display: inline-block;
  padding: 5px 15px;
}
.question {
  background: #4caf50;
  margin: 20px 0;
  padding: 10px;
  border-radius: 10px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  max-width: 300px;
  margin: auto;
}
.choice {
  padding: 10px;
  background: #4caf50;
  color: white;
  border: none;
  border-radius: 50%;
  font-size: 18px;
}
.feedback {
  margin-top: 20px;
  font-size: 20px;
}
</style>
