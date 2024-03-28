<script lang="ts" setup>
    import { ref, watch, watchEffect, onMounted } from 'vue'
    import RenderPlan from '../components/RenderPlan.vue'
    const rectsCount = ref(100)
    const isRendering = ref(false)
    const timeRender = ref(0)
    const finishRender = ref(false)
    const rects = ref<any>([])

    const startTime = ref(0)
    const endTime = ref(0)
    const reset = ref(false)


    const startRenderRects = () => {
      let _rects = []
    for (let i = 0; i < rectsCount.value; i++) {
      const generateRandomColor = () => {
        const randomColor =
          "#" + Math.floor(Math.random() * 16777215).toString(16);
        return randomColor;
      };
      const backgroundColor = generateRandomColor();
      _rects.push({id: i, backgroundColor});
      // setCountRenderRects(countRenderRects + 1);
    }

    rects.value = _rects;
      isRendering.value = true
      // console.log("start" + performance.now())
      startTime.value = performance.now()
    }

    const resetTest = () => {
      isRendering.value = false
      finishRender.value = false
      endTime.value = 0
      startTime.value = 0
      reset.value = !reset.value
    }

    onMounted(() => {
      let _rects = []
    for (let i = 0; i < rectsCount.value; i++) {
      const generateRandomColor = () => {
        const randomColor =
          "#" + Math.floor(Math.random() * 16777215).toString(16);
        return randomColor;
      };
      const backgroundColor = generateRandomColor();
      _rects.push({id: i, backgroundColor});
      // setCountRenderRects(countRenderRects + 1);
    }

    rects.value = _rects;
  });

//   watch(rectsCount, (newX) => {
//         let _rects = []
//     for (let i = 0; i < newX; i++) {
//       const generateRandomColor = () => {
//         const randomColor =
//           "#" + Math.floor(Math.random() * 16777215).toString(16);
//         return randomColor;
//       };
//       const backgroundColor = generateRandomColor();
//       _rects.push({id: i, backgroundColor});
//       // setCountRenderRects(countRenderRects + 1);
//     }

//     rects.value = _rects;
// })


const setFinishRender = () => {
  endTime.value =  performance.now()
  // isRendering.value = false
}

</script>

<template>
    <div class="app">
      <h2>Test Vue App</h2>
      <p>Render components</p>
      <input type="number" v-model="rectsCount" placeholder="Podaj ilość komponentów" />
      <div class="render-options">
        <button class="render-button" @click="startRenderRects">{{ isRendering ? 'Stop' : 'Start' }} render</button>
        <button class="render-button" @click="resetTest">Reset</button>
        <div v-if="endTime">
          Czas renderowania: {{ ((endTime - startTime) / 1000).toFixed(4) }} s
        </div>
        | {{ rectsCount }} small rects
        <div v-if="rectsCount && endTime">
          one rect render time {{ ((endTime - startTime) / rectsCount / 1000).toFixed(5) }} s
        </div>
      </div>
      <RenderPlan
        v-if="isRendering"
        :isRendering="isRendering"
        :timeRender="timeRender"
        :countRenderRects="rectsCount"
        :rects="rects"
        @setFinishRender="setFinishRender"
      />
    </div>
  </template>
  
  
  <style scoped>
  .app {
    font-family: Arial, sans-serif;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  .render-options {
    margin-top: 10px;
  }
  .render-button {
    margin-right: 10px;
  }
  </style>
  