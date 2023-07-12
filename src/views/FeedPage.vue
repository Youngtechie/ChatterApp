<script setup lang="ts">
import AuthorFeedPage from './AuthorFeedPage.vue';
import ReaderFeedPage from './ReaderFeedPage.vue';
import { useChatterStore } from '@/stores/store'

const store = useChatterStore()

</script>
<template>
  <div class="feedDiv">
    <ReaderFeedPage v-if="store.asReader" />
    <AuthorFeedPage v-else />
    <RouterLink to="/write" draggable="true">
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
  z-index: 80000;
}

.line {
  position: absolute;
  width: 2px;
  height: 70%;
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