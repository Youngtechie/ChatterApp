<script setup lang="ts">

import { RouterView } from 'vue-router'
import { onMounted, ref } from 'vue'
import './assets/main.css'

onMounted(() => {
  const chatterApp = document.querySelector('#app')
  chatterApp?.setAttribute('class', 'DayApp')
  
})

function closeError() {
  const error = document.getElementById('ErrorShow') as HTMLDivElement
  error.style.display = 'none'
}
const isDragging = ref(false)
let dragOffsetX = ref(0);
let dragOffsetY = ref(0)

function startDrag(event: MouseEvent) {
  isDragging.value = true;
  dragOffsetX.value = event.offsetX;
  dragOffsetY.value = event.offsetY;
}

function drag(event: MouseEvent) {
  if (isDragging.value) {
    const x = event.clientX - dragOffsetX.value;
    const y = event.clientY - dragOffsetY.value;
    (event.target as HTMLDivElement).style.left = `${x}px`;
    (event.target as HTMLDivElement).style.top = `${y}px`;
    isDragging.value = false;
  }
}

</script>

<template>
  <RouterView />
  <div id="ErrorShow" :class="{dragging: isDragging}" draggable="true" @dragstart="startDrag" @dragend="drag"><button @click="closeError">X</button><span></span></div>
  <div id="warningShow"></div>
</template>
<style scoped>
#ErrorShow {
  position: absolute;
  top: 80%;
  align-self: center;
  padding: 10px;
  padding-right: 25px;
  border: 2px outset black;
  background-color: black;
  overflow-y: scroll;
  color: azure;
  font-weight: 600;
  display: none;
  align-items: center;
  left: 10px;
  z-index: 200000;
}

#ErrorShow button{
  position: absolute;
  top: 0;
  right: 5px;
  background-color: transparent;
  border: none;
  color: white;
  font-weight: bolder;
}
#ErrorShow span{
  width: 100%;
  height: 100%;
  margin-top: 10px;
}

.dragging{
    position: absolute;
    cursor: move;
}
</style>
