
<script setup lang="ts">
import Header from "../components/Header.vue";
import { ref } from 'vue';

  const fibonacciSequence = ref<any>([]);
  const loadingTime = ref<any>(null);
  const isCalculating = ref<any>(false);
  const count = ref<any>(10);

  const generateFibonacciSequence = () => {
    const startTime = performance.now();
    isCalculating.value = true

    let fib1 = 0,
      fib2 = 1;
    const sequence = [fib1.toString(), fib2.toString()];

    for (let i = 2; i < count.value; i++) {
      const nextFib = fib1 + fib2;
      sequence.push(nextFib.toString());
      fib1 = fib2;
      fib2 = nextFib;
    }

    const endTime = performance.now();
    const loadTime = endTime - startTime;
    fibonacciSequence.value = sequence
    loadingTime.value = loadTime
    isCalculating.value = false
  };

  const handleReset = () => {
    fibonacciSequence.value = []
    loadingTime.value = null
  };
</script>

<template>
  <div class="fib-generator">
    <Header :title="'Generation of a fiboonati sequence'" :message="'Test polega na wyliczaniu kolejnych wyrazów ciągu fibonacciego i mierzeniu czasu.'" />
      <div className="render-options">
        <label htmlFor="countInput">Ilość liczb:</label>
        <input
          type="number"
          id="countInput"
          v-model="count"
        />
        <button
        className="render-button"
        @click="generateFibonacciSequence"
        >
          Start
        </button>
        <button
          className="reset-button"
          @click="handleReset"
        >
          Reset
        </button>
      </div>
      <div className="render-time">
        <p v-if="loadingTime">
            `Czas generowania: ${{loadingTime.toFixed(2)}} 
        </p>
      </div>
      <div className="fib-numbers-container">
        <div v-if="fibonacciSequence.length > 0" v-for="(number, index) in fibonacciSequence" :key="index">
          <p className="fib-number" :key="index">
            {{number}}
          </p>
        </div>
        </div>
  </div>
</template>
  
  <style scoped>
.fib-generator {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    height: 100vh;
}

.render-options {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

.render-time {
    display: flex;
    gap: 5px;
    padding: 10px;

    color: gray;
    font-size: 13px;
}

.render-button {
    background-color: blueviolet;
    color: white;
}

.reset-button {
    background-color: var(--baseColor);
    color: white;
}

.options-container {
    display: flex;
    align-items: center;
    gap: 10px;
}

.fib-numbers-container {
    display: flex;
    flex-wrap: wrap;
    width: calc(100% - 20px);
    height: 100%;

    overflow-y: auto;
    padding: 10px;
    height: fit-content;
}

.fib-number {
    padding: 5px 10px;
    background-color: var(--baseColorContent);
    margin: 1px;
    border-radius: 5px;
    height: min-content;
}

  </style>
  