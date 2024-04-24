<script lang="ts" setup>
    import { ref, onMounted } from 'vue'
    import RenderPlan from '../components/RenderPlan.vue'
    import Header from '../components/Header.vue'

    const rectsCount = ref(100)
    const rectsSize = ref(5)
    const isRendering = ref(false)
    const timeRender = ref(0)
    const finishRender = ref(false)
    const rects = ref<any>([])

    const startTime = ref(0)
    const endTime = ref(0)
    const reset = ref(false)


    const startRenderRects = () => {
      isRendering.value = false
      rects.value = []
      endTime.value = 0
      startTime.value = 0

      setTimeout(() => {
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
        startTime.value = performance.now()

      }, 0)

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

const setFinishRender = () => {
  endTime.value =  performance.now()
}

</script>

<template>
    <div class="micro-components">
    <Header title="Micro components render test" message="Test polega na mierzeniu czasu renderowania się mikro komponentów w dowolnej ilości.">
     </Header> 
     <div class="options-container">
       <input type="number" v-model="rectsCount" placeholder="Podaj ilość komponentów" />
       <input type="number" v-model="rectsSize" placeholder="Podaj wielkość komponentów" />
       <button class="render-button" @click="startRenderRects">Render</button>
        <button class="reset-button" @click="resetTest">Reset</button>
      </div>  
      <div class="render-time">
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
        :rectsSize="rectsSize"
        :countRenderRects="rectsCount"
        :rects="rects"
        @setFinishRender="setFinishRender"
      />
    </div>
  </template>
  
  
  <style scoped>
.micro-components {
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
  </style>
  