<script setup>
import Commute from '../components/Commute.vue'
import { ref } from 'vue'
import contentful from "@/modules/contentful.js"

const commutes = ref([]);

(async () => {
  commutes.value.push(...(await contentful.getCommutes()))
}
)()
</script>

<template>
  <main>
    <li v-for="commute in commutes" :key="commute.person">
      <Commute :person="commute.fields.person" :start="commute.fields.start" :destination="commute.fields.destination" />
    </li>
  </main>
</template>
