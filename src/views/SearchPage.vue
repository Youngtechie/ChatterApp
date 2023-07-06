<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useChatterStore } from '@/stores/store';
import SignOut from '@/composables/useSignOut.vue';
import useSearch from '@/composables/useSearch.vue';

const router = useRouter()
 
const store = useChatterStore()

store.sidebar = false 

if (store.authenticated === true) {
    if (store.signedUser.id === undefined && store.signedUser.username === undefined) {
        router.push({ name: 'NetworkError', query: { redirect: `${router.currentRoute.value.path}` } })
    }
    else if (store.signedUser.id !== undefined && store.signedUser.username === '') {
        console.log('User registration not finished... Logging out user.....')
        SignOut()
        store.authenticated = false
        router.push('/login')
    }
}
</script>
<template>
    <div id="searchContainer">
        <useSearch/>
    </div>
</template>
<style scoped>
#searchContainer{
    margin: 10px 0;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 90vh;
    padding-top: 55px;
}
</style>