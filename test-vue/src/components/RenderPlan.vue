<template>
  <div class="renderPlan">
    <Rect v-for="rect in rects" :key="rect.id"/>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import Rect from "./Rect.vue"

interface RenderPlanProps {
  isRendering: boolean;
  timeRender: number;
  rects: {id: number; bg: string}[];
  countRenderRects: number;
}

const props = defineProps<RenderPlanProps>();
  const emit = defineEmits<{
  (e: 'setFinishRender'): void
  }>()
onMounted(() => {
  emit('setFinishRender')
  // if (isRendering) {
  //   const startTime = performance.now(); // Pobierz czas rozpoczęcia renderowania

  //   const endTime = performance.now(); // Pobierz czas zakończenia renderowania
  //   const timeDiff: number = endTime - startTime; // Oblicz różnicę czasu

  //   setTimeRender(timeRender + timeDiff); // Zapisz różnicę czasu w stanie komponentu
  // }
});
</script>

<style scoped>
.renderPlan {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: auto;

    max-height: 600px;
    overflow-y: auto;
}

</style>
