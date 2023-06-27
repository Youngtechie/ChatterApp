<script setup lang="ts">
import { onUnmounted, ref, type Ref } from 'vue';
import { useChatterStore } from '@/stores/store';
import { useRouter } from 'vue-router';
import useLoadingPage from "@/composables/useLoadingPage.vue";
import useUserDetails from '@/composables/useUserDetails.vue'
import SignOut from '@/composables/useSignOut.vue';

const router = useRouter();

const store = useChatterStore()

useUserDetails()

function back() {
    router.go(-1)
}

function changeSection(value: string) {
    store.section = value
}

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
        }
    }
    else {
        isLoading.value = false
    }
}, 5000)

onUnmounted(() => {
    clearTimeout(id)
})
</script>
<template>
    <useLoadingPage v-if="isLoading" action-name="Loading profile..." />
    <main v-else>
        <header>
            <button @click.prevent="back">Back</button>
            <button :title="store.themeDetails.title" id="themeBtn" @click="store.changeTheme">
                <div id="themeImgContainer"><img :src="store.themeDetails.img" /></div>
            </button>
        </header>

        <div class="body">
            <div class="imageCon">
                <div class="imgCon">
                    <img :src="store.signedUser.profilePicture" height="40"
                        :alt="store.signedUser.fullName + 'profile pic'" /> <!-- profilePic -->
                </div>
            </div>

            <section class="sectionFoImage">
                <h3>{{ store.signedUser.fullName }}</h3> <!--fullname--> <!-- username -->
                <p v-if="store.asReader">Reader</p> <!--Acoount mode: -->
                <p v-else>Author</p>
                <div class="follow">
                    <P>{{ store.signedUser.followers.total }} Followers</P>
                    <p>||</p>
                    <P>{{ store.signedUser.following.total }} Following</P>
                </div>
            </section>

            <div class="btns">
                <RouterLink :to="{ name: 'EditProfile' }"><button>Edit Profile</button></RouterLink>
            </div>

            <div class="readerSec">
                <!--section to show personal info and other interaction for reader mode -->
                <div class="btnSection">
                    <button @click="changeSection('personal')" :class="{active: store.section === 'personal'}">Personal</button>
                    <button @click="changeSection('interaction')" :class="{active: store.section === 'interaction'}">Interactions</button>
                </div>
                <div :class="{ show: store.section === 'personal', none: store.section !== 'personal', personal: true }">
                    <!--personal details -->
                    <p><span>Full Name:</span> {{ store.signedUser.fullName }} </p>
                    <p><span>User Name:</span> @{{ store.signedUser.username }}</p>
                    <p><span>Biography:</span> {{ store.signedUser.bio }}</p>
                    <p v-if="store.signedUser.settings.privacySettings.showEmail"><span>Email:</span> {{ store.signedUser.email }}</p>
                    <p><span>Location:</span> {{ store.signedUser.location }}</p>
                    <p><span>Birthday:</span> {{ store.signedUser.dateOfBirth }}</p>
                    <p><span>Gender:</span> {{ store.signedUser.gender }}</p>
                    <p v-if="store.signedUser.interests.length > 0"><span>Interests:</span> {{ store.signedUser.interests.join(',') }} </p>
                    <!-- <p>Last Active: {{ store.signedUser.lastActive }}</p>
                    <p>Relationship Status: {{ store.signedUser.relationshipStatus }}</p> -->
                </div>
                <div
                    :class="{ show: store.section === 'interaction', none: store.section !== 'interaction', section: true }">
                    <!--interaction details -->
                    <p v-if="store.signedUser.interactions.length === 0">No interactions yet.</p>
                    <div v-else>
                        <div v-for="(interaction, index) in store.signedUser.interactions" :key="index">
                            <p>{{ interaction.type }}</p>
                            <p>{{ interaction.details.followerId }}</p>
                            <p>{{ interaction.details.time }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section id="navigators">
            <RouterLink to="/home"><button>Home</button></RouterLink>
            <RouterLink to="/search"><button>Search</button></RouterLink>
            <RouterLink to="/notification"><button id="notification-button">Notification<span class="dot"></span></button>
            </RouterLink>
        </section>
    </main>
</template>
<style scoped>
.none {
    display: none;
}

.show {
    display: flex;
    flex-direction: column;
}

main {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
}

header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem;
    width: 100%;
    height: 10%;
}

.body {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    width: 320px;
    height: 90%;
}

.imageCon {
    margin-bottom: 0.5rem;
    border-radius: 50%;
}

.imgCon {
    width: 80px;
    height: 80px;
    overflow: hidden;
    border-radius: 50%;
}

.imgCon img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.sectionFoImage {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;
}
.sectionFoImage h3 {
    font-size: 1.5rem;
}
.sectionFoImage p {
    margin: 0.5rem 0;
    font-size: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 40%;
    padding: 0.5rem;
    align-self: center;
}
.sectionFoImage .follow{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}
.follow p{
    border: none;
    margin-top: 0;
}
.follow p:first-child{
    width: 50%;
}
.follow p:last-child{
    width: 50%;
}

.follow p:nth-child(2){
    width: 10%;
}
.btns {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 1rem;
    width: 100%;
}

.readerSec{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    overflow-y: scroll;
    padding-bottom: 1rem ;
}

.btnSection {
    display: flex;
    justify-content: space-around;
    margin-bottom: 1rem;
    width: 100%;
    border-bottom: 1px solid #ccc;
}
.btnSection button {
    border: none;
    background-color: transparent;
    font-size: 1rem;
    cursor: pointer;
    font-weight: bold;
}
.btnSection .active{
    border-bottom: 3px solid blue;
}
.personal{
    overflow-y: scroll;
}
.personal p {
    margin-bottom: 0.5rem;
}
.personal p span{
    font-weight: bold;
}
.personal p,
.interaction div {
    margin-bottom: 0.5rem;
}

#navigators {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 2rem;
    width: 100%;
    position: fixed;
    bottom: 0;
    background-color: #333333;
    border-top: 1px solid white;
}

#navigators button {
    border: none;
    padding: 4px 8px;
    cursor: pointer;
    font-size: 10px;
    display: inline;
    margin-right: 0px;
}

#navigators button:hover {
    background-color: #007bff;
    color: #fff;
}

#navigators a {
    text-decoration: none;
    color: #000;
}

#notification-button {
    position: relative;
    display: inline-block;
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
}

::-webkit-scrollbar {
    width: 2px;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: blue;
  }
</style>