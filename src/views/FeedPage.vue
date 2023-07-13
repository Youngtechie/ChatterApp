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
</style>