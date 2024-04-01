<script setup lang="ts">
  const props = defineProps<{rectsSize: number}>();
  console.log(props.rectsSize)
</script>

<template>
    <div class="rect" :style="{width: `${props.rectsSize}px`, height:`${props.rectsSize}px`}"></div>
  </template>
  
  <style scoped>
  /* Zaimportuj arkusz stylów CSS, jeśli jest wymagany */
  .rect {
    /* width: 5px;
    height: 5px; */

    border: 1px solid white;
    background-color: rgb(4, 138, 179);
}
  </style>
  