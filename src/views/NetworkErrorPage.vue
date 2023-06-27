<script setup lang="ts">
import { useRoute } from 'vue-router';
import useUserDetails from '@/composables/useUserDetails.vue'

useUserDetails()

const route = useRoute()
function reload() {
    window.location.assign(`${route.query.redirect}`)
}

function loadPage(){
    window.location.assign('/home')
}

</script>
<template>
    <main>
        <h1>Network Error !!!!</h1>
        <p>
            <button @click="reload()">Reload</button>
            <button @click="loadPage()">Home</button>'
        </p>
    </main>
</template>
<style scoped></style>