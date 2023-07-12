<script setup lang="ts">
import { RouterView } from 'vue-router'
import { onMounted } from 'vue'
import './assets/main.css'

onMounted(() => {
  const chatterApp = document.querySelector('#app')
  chatterApp?.setAttribute('class', 'DayApp')
})

</script>

<template>
  <RouterView />
</template>