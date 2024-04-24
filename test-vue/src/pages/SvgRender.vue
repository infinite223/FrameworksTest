
<script setup lang="ts">
import Header from "../components/Header.vue";
import { ref, Ref, onMounted, computed } from 'vue';

interface LoadingTime {
  loadingTime: Ref<number | null>;
  startTime: Ref<number>;
  isRender: Ref<boolean>;
}

const loadingTime: Ref<number | null> = ref(null);
const startTime: Ref<number> = ref(0);
const isRender: Ref<boolean> = ref(false);

const handleLoad = () => {
  console.log("end");
  const endTime = performance.now();
  const loadTime = endTime - startTime.value;
  loadingTime.value = loadTime;
};

const startLoadingTimer = () => {
  startTime.value = performance.now();
  isRender.value = true;
};

const handleReset = () => {
  startTime.value = 0;
  isRender.value = false;
  loadingTime.value = null;

  setTimeout(() => {
    startLoadingTimer();
  }, 0);
};

// Loading time formatted to two decimal places
const formattedLoadingTime = computed(() => loadingTime.value?.toFixed(2) ?? null);

</script>

<template>
  <div class="svgRender">
    <Header :title="'Svg render big map'" :message="'Test polega na wyrenderowaniu całej mapy w formacie SVG'" />
    <div class="render-options">
      <button class="render-button" @click="startLoadingTimer">Start render</button>
      <button class="reset-button" @click="handleReset">Reset</button>
    </div>
    <div class="render-time">
      <p v-if="loadingTime">Czas ładowania: {{ loadingTime.toFixed(2) }} ms</p>
    </div>

    <div class="mapContainer">
      <img v-if="isRender" src="../assets/map.svg" alt="map" class="map" @load="handleLoad" @loadstart="startLoadingTimer" />
    </div>
  </div>
</template>
  
  <style scoped>
.svgRender {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    height: 100vh;
}

.mapContainer {
    height: max-content;
    overflow-y: auto;
    padding: 0px 30px;
}
.map {
    height: 100%;
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

  </style>
  