<template>
  <div class="renderPlan">
    <Rect v-for="rect in rects" :key="rect.id" :rectsSize="props.rectsSize"/>
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
  rectsSize: number
}

const props = defineProps<RenderPlanProps>();
  const emit = defineEmits<{
  (e: 'setFinishRender'): void
  }>()
onMounted(() => {
  emit('setFinishRender')
});
</script>

<style scoped>
.renderPlan {
    display: flex;
    flex-wrap: wrap;
    width: calc(100% - 20px);
    height: auto;

    max-height: 400px;
    overflow-y: auto;

    padding: 10px;
}

</style>
