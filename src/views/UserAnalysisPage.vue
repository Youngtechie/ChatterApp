<script setup lang="ts">
import { onUnmounted, type Ref, ref, nextTick } from 'vue';
import { useRouter } from 'vue-router';
import { useChatterStore } from '@/stores/store';
import SignOut from '@/composables/useSignOut.vue';
import useUserDetails from '@/composables/useUserDetails.vue'
import useLoadingPage from "@/composables/useLoadingPage.vue";
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables);

const router = useRouter()

const store = useChatterStore()

useUserDetails()

const isLoading: Ref<boolean> = ref(true)

let id = setTimeout(() => {
    if (store.signedUser.id === undefined && store.authenticated === false) {
        router.push('/home')
    }
    else if (store.authenticated === true) {
        if (store.signedUser.id === undefined && store.signedUser.username === undefined) {
            router.push({ name: 'NetworkError', query: { redirect: `${router.currentRoute.value.path}` } })
        }
        else if (store.signedUser.id !== undefined && store.signedUser.username === '') {
            console.log('User registration not finished... Logging out user.....')
            SignOut()
            store.authenticated = false
            router.push('/login')
        }
        else {
            isLoading.value = false
            createPie(store.signedUser.analyses.totalPosts, store.signedUser.analyses.totalComments, store.signedUser.analyses.totalLiked, store.signedUser.bookmarks.length)
        }
    }
    else {
        isLoading.value = false
        createPie(store.signedUser.analyses.totalPosts, store.signedUser.analyses.totalComments, store.signedUser.analyses.totalLiked, store.signedUser.bookmarks.length)
    }
}, 5000)

onUnmounted(() => {
    clearTimeout(id)
    const warning = document.getElementById('warningShow') as HTMLDivElement
    warning.style.display = 'none'
})

function back() {
    router.go(-1)
}

function createPie(totalPosts: any, totalComments: any, totalLiked: any, totalBookmarks: any) {

    var data = {
        labels: ['Posts', 'Total Comments', 'Posts Like', 'Bookmarks'],
        datasets: [{
            data: [totalPosts, totalComments, totalLiked, totalBookmarks],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
        }]
    }

    nextTick(() => {
        var ctx = (document.getElementById('pieChart') as HTMLCanvasElement).getContext('2d');
        new Chart(ctx as CanvasRenderingContext2D, {
            type: 'pie',
            data: data,
            options: {
                responsive: false, // Disable responsiveness
            }
        });
    })
}

</script>
<template>
    <useLoadingPage v-if="isLoading" action-name="Loading Analysis..." />
    <main v-else class="analysisPage">
        <button @click.prevent="back">Back</button>
        <h1>{{ store.signedUser.username }} Analyses</h1>
        <section>
            <p><span>Total Posts:</span> {{ store.signedUser.analyses.totalPosts }}</p>
            <p><span>Total Comments Made:</span> {{ store.signedUser.analyses.totalComments }}</p>
            <p><span>Total Posts Liked:</span> {{ store.signedUser.analyses.totalLiked }}</p>
            <p><span>Bookmarks: </span> {{ store.signedUser.bookmarks.length }} </p>
        </section>
        <canvas id="pieChart"></canvas>
    </main>
</template>
<style scoped>
button {
    position: absolute;
    top: 10px;
    left: 10px;
}

.analysisPage {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5;
    color: black;
    height: 100vh;
    position: relative;
}

.analysisPage h1 {
    font-size: 24px;
    margin-bottom: 10px;
    text-align: center;
}

.analysisPage section {
    margin-top: 20px;
}

.analysisPage h2 {
    font-size: 20px;
    margin-bottom: 10px;
}

.analysisPage p {
    margin-bottom: 5px;
}

.analysisPage p span {
    font-weight: bold;
    font-size: larger;
}
</style>