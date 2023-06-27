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
        <RouterLink to="/write" draggable>
            <div class="lineContainer">
                <div :class="{ line: true }"></div>
                <div :class="{ line: true }"></div>
            </div>
        </RouterLink>
    </div>
</template>
<style scoped>
.feedDiv {
    width: 320px;
    height: 90vh;
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
}</style>