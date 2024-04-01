<script setup lang="ts">
// import MicroComponents from "./pages/MicroComponents.vue"
</script>

<template>
<main class="main">
  <!-- <app-micro-components/> -->
  <nav>
    <img src="../src//assets//vue.svg" class="angular-icon"/>
    <h1>
      Vue Test App
    </h1>
    <div class="options">
      <div class="option">
        <RouterLink to="/">Micro components</RouterLink>
      </div>
      <div class="option">
        <RouterLink to="/SvgRender">SVG render</RouterLink>
      </div>
    </div>
  </nav>
  <div class="content">
    <RouterView />
  </div>
</main> 
  <!-- <MicroComponents /> -->
</template>

<style scoped>
nav {
    display: flex;
    flex-direction: column;

    height: calc(100vh - 20px);
    background-color: var(--baseColorContent);

    width: 300px;

    align-items: center;
    justify-content: center;

    padding: 10px;
}

h1 {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 25px;
    font-weight: 900;
    color: var(--baseColor);
}

main {
    display: flex;
    
}

.content {
    display: flex;
    width: 100%;
    flex-direction: column;
}

a {
    text-decoration: none;
    color: black;
}

.option {
    padding: 7px 10px;
    border-radius: 10px;

    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    font-size: 14px;
}

.option:hover {
    background-color: rgba(237, 237, 237, 0.3);
    transition: .5s all ease-in-out;
}

.options {
    display: flex;
    flex-direction: column;

    width: 100%;
    gap: 3px;
}


</style>
