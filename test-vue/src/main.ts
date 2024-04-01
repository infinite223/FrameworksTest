import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import MicroComponents from './pages/MicroComponents.vue'
import SvgRender from './pages/SvgRender.vue'

const routes = [
    { path: '/', component: MicroComponents },
    { path: '/SvgRender', component: SvgRender },
  ]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

createApp(App)
.use(router)
.mount('#app')
