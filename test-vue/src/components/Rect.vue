<script setup lang="ts">
  const props = defineProps<{rectsSize: number}>();
</script>

<template>
    <div class="rect" :style="{width: `${props.rectsSize}px`, height:`${props.rectsSize}px`}"></div>
  </template>
  
  <style scoped>
  .rect {
    border: 1px solid white;
    background-color: var(--baseColor);
}
  </style>
  