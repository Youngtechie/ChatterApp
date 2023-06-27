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
  <div id="ErrorShow"></div>
</template>
<style scoped>
#ErrorShow{
  position: fixed;
  top: 80%;
  align-self: center;
  width: 300px;
  height: 50px;
  padding: 10px;
  border: 2px outset black;
  background-color: black;
  overflow-y: scroll;
  color: azure;
  font-weight: 600;
  font-size: 12px;
  align-items: center;
  display: none;
  animation: dance 3s infinite;
}

@keyframes dance {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(5deg);
  }
  50% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>
