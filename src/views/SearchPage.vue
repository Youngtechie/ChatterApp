<script setup lang="ts">
import {onUnmounted} from 'vue'
import { useRouter } from 'vue-router';
import { useChatterStore } from '@/stores/store';
import SignOut from '@/composables/useSignOut.vue';
import useSearch from '@/composables/useSearch.vue';

const router = useRouter()

const store = useChatterStore()

store.sidebar = false

let id: ReturnType<typeof setTimeout>

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
    if(warning){
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
    margin: 10px 0;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 90vh;
    padding-top: 55px; 
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
</style>