<script setup>
import { ref } from 'vue'

const ready = ref(0);
function getReady() {
  for (let index = 0; index < 10000000; index++) {
    ready.value++;
  }
}

setTimeout(getReady, 2000);

</script>

<template>
  <div class="about">
    <h1 v-if="ready > 9000000">This is an about page with a very non-descriptive text</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
