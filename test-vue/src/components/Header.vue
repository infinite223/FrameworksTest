<script lang="ts" setup>
  interface HeaderProps {
  title: string,
  message: string
}

const props = defineProps<HeaderProps>();

</script>
<template>
    <header>
    <h2>
      {{props.title}}
    </h2>
    <p>
        {{props.message}}
    </p>
    <div class="border"> </div>
</header>
</template>

<style scoped>
h2 {
    margin-bottom: 0px;
}

p {
    margin: 7px 0px;
}

.border {
    border: 1px solid rgba(163, 163, 163, .3);
    width: 100%;
    margin-bottom: 10px;
    margin-top: 10px;
}

header {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>