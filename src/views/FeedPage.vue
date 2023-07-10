<script setup lang="ts">
import { ref } from 'vue';
import AuthorFeedPage from './AuthorFeedPage.vue';
import ReaderFeedPage from './ReaderFeedPage.vue';
import { useChatterStore } from '@/stores/store'
import router from '@/router';

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
    <div class="lineContainer" draggable="true" @click.prevent="router.push('/write')" @dragstart="startDrag"
      @dragend="drag">
      <div :class="{ line: true }"></div>
      <div :class="{ line: true }"></div>
    </div>

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
  bottom: 150px;
  right: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  background-color: blue;
  border-radius: 50%;
}

.line {
  position: absolute;
  width: 2px;
  height: 100%;
  background-color: #E5E5E5;
}

.line:nth-child(2) {
  right: 19px;
}

.line:nth-child(1) {
  transform: rotate(90deg);
  right: 19px;
}

@media screen and (min-width: 768px) {
  .lineContainer {
    display: none;
  }
}
</style>