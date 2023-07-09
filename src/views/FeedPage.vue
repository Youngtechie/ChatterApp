<script setup lang="ts">
import { ref } from 'vue';
import AuthorFeedPage from './AuthorFeedPage.vue';
import ReaderFeedPage from './ReaderFeedPage.vue';
import { useChatterStore } from '@/stores/store'

const store = useChatterStore()

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
  <div class="feedDiv">
    <ReaderFeedPage v-if="store.asReader" />
    <AuthorFeedPage v-else />
    <RouterLink to="/write" draggable="true" @dragstart="startDrag" @dragend="drag">
      <div class="lineContainer">
        <div :class="{ line: true }"></div>
        <div :class="{ line: true }"></div>
      </div>
    </RouterLink>
    <div id="warningShow"></div>
  </div>
</template>
<style scoped>
.feedDiv {
  width: 100%;
  height: 100vh;
  position: relative;
  padding-top: 55px;
  position: relative;
}

.lineContainer {
  position: absolute;
  bottom: 100px;
  right: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
  background-color: blue;
  border-radius: 50%;
}

.line {
  position: absolute;
  width: 2px;
  height: 40%;
  background-color: #E5E5E5;
}

.line:nth-child(2) {
  right: 14px;
}

.line:nth-child(1) {
  transform: rotate(90deg);
  right: 14px;
}

#warningShow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  border: 1px outset #efefef;
  display: none;
  text-align: center;
  height: 200px;
  width: 200px;
  border-radius: 10px;
  font-weight: bolder;
  align-items: center;
  justify-content: center;
}

.DayApp #warningShow {
  color: #efefef;
  background-color: black;
}

.NightApp #warningShow {
  color: black;
  background-color: #efefef;
}

@media screen and (min-width: 768px) {
  .lineContainer {
    display: none;
  }
}

</style>