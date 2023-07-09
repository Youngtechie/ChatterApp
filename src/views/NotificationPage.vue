<script setup lang="ts">
import {onUnmounted} from 'vue'
import { useChatterStore } from '@/stores/store';
import { useRouter } from 'vue-router';
import SignOut from '@/composables/useSignOut.vue';
import useCalculateTime from '@/composables/useCalculateTime.vue';

const store = useChatterStore()
const router = useRouter()

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
    <div id="notificationPage">
        <div v-if="store.signedUser.isLogined" id="secondNotification">
            <div v-if="store.signedUser.notifications.length === 0" id="noNotification"> No notification yet.</div>
            <div v-for="(notification, index) in store.signedUser.notifications" :key="index" class="eachNotification">
                <div v-if="notification.type.includes('following')" class="clickNotify">
                    <p v-html="notification.type"></p>
                    <p>{{ useCalculateTime(notification.details.time.seconds) }}</p>
                </div>
                <div v-else-if="notification.type.includes('like')" class="clickNotify">
                    <p v-html="notification.type"></p>
                    <p>{{ useCalculateTime(notification.details.time.seconds) }}</p>
                </div>
            </div>
        </div>
        <section v-else id="firstNotification">
            <h1>Write, read and connect with great minds on chatter</h1>
            <p>Share people your great ideas, and also write-ups based on your interests. Connect with people of same
                interests and goals.</p>
                <RouterLink to="/login">
                    <button>Get started</button>
                </RouterLink>
                <RouterLink to="/login">
                    <button>Get started</button>
                </RouterLink>
        </section>
        <div id="warningShow"></div>
    </div>
</template>
<style scoped>
#notificationPage {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    padding-top: 50px;
    padding: 50px 10px 0px 10px;
}

#notificationPage section,
#notificationPage #secondNotification {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}

#notificationPage #firstNotification {
    align-items: center;
    justify-content: center;
    text-align: center;
}

#notificationPage #firstNotification h1 {
    margin-bottom: 1rem;
}

#notificationPage #firstNotification button {
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    border: none;
    background-color: #1DA1F2;
    color: white;
    font-weight: bold;
    cursor: pointer;
    margin-top: 20px;
}

#notificationPage #firstNotification button:hover {
    background-color: #1A91DA;
}

.clickNotify {
    width: 100%;
    height: 85px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
    padding: 1rem;
}
#noNotification{
    width: 100%;
    text-align: center;
    margin-top: 20px;
    font-size: xx-large;
}

.clickNotify p:last-of-type {
    font-size: 0.8rem;
    margin-top: 0.5rem;
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