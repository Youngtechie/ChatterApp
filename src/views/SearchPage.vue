<script setup lang="ts">
import { onUnmounted } from 'vue'
import { useRouter } from 'vue-router';
import { useChatterStore } from '@/stores/store';
import SignOut from '@/composables/useSignOut.vue';
import useSearch from '@/composables/useSearch.vue';
import { useSeoMeta } from '@unhead/vue'

const router = useRouter()

const store = useChatterStore()

store.sidebar = false

let id: ReturnType<typeof setTimeout>

useSeoMeta({
    title: 'Search',
    author: 'Olaegbe Abdul-Rahmon',
    description: 'Discover a world of information with our powerful search page. Explore a vast array of posts and users on chatterApp'
})

if (store.authenticated === true) {
    if (store.signedUser.id !== undefined && store.signedUser.username === '') {
        const warningShow = document.getElementById('warningShow') as HTMLDivElement
        warningShow.style.display = 'flex'
        warningShow.textContent = 'Registration not complete... Logging you out'
        SignOut()
        id = setTimeout(() => {
            warningShow.style.display = 'none'
            store.authenticated = false
            router.push('/login')
        }, 2000)
    }
}

onUnmounted(() => {
    clearTimeout(id)
    const warning = document.getElementById('warningShow') as HTMLDivElement
    if (warning) {
        warning.style.display = 'none'
    }
})
</script>
<template>
    <div id="searchContainer">
        <useSearch />
        <div id="warningShow"></div>
    </div>
</template>
<style scoped>
#searchContainer {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100vh;
    padding-top: 55px;
}
</style>