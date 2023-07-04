<script setup lang="ts">
import { onUnmounted, ref, type Ref } from 'vue';
import { useChatterStore } from '@/stores/store';
import { useRouter } from 'vue-router';
import useLoadingPage from "@/composables/useLoadingPage.vue";
import { getFirestore, collection, query, where, getDocs, type DocumentData } from 'firebase/firestore'
import getUser from '@/composables/useUserViewProfile.vue';
import useUserDetails from '@/composables/useUserDetails.vue'
import useCalculateTime from '@/composables/useCalculateTime.vue';
import useAuthentication from '@/composables/useAuth.vue'
import useDetailButtons from '@/composables/useDetailButtons.vue'
import axios from 'axios'

useUserDetails()

const router = useRouter();

const { app } = useAuthentication()

const db = getFirestore(app)

const DomParse = new DOMParser()

const store = useChatterStore()

const props = defineProps(['userId'])

const divContent = ref('')

async function getPostContent(post: DocumentData) {
    divContent.value = ''
    const contentUrl = post.postContain
    await axios.post('/postContent', { contentUrl })
        .then(response => {
            const newHTML = DomParse.parseFromString(response.data as string, 'text/html')
            divContent.value = newHTML.body.innerHTML
        })
        .catch((error) => {
            console.log(error)
        })
}
async function getPosts(index: number, typ: string, postId: string) {
    const q = query(collection(db, 'posts'), where('postId', '==', postId))
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
        const post = doc.data()
        getPostContent(post).then(() => {
            document.getElementById('searchBtn')?.removeAttribute('disabled')

            const bodyImgRemove = DomParse.parseFromString(divContent.value, 'text/html')

            bodyImgRemove.body.querySelectorAll('img').forEach((tag) => {
                tag.remove()
            })

            bodyImgRemove.body.querySelectorAll('video').forEach((tag) => {
                tag.remove()
            })

            bodyImgRemove.body.querySelector('h1')?.remove()

            divContent.value = bodyImgRemove.body.innerHTML

            post.postContain = divContent.value

            store.viwedProfile.interactions.splice(index, 1, {
                postDetails: post,
                type: typ
            })

        })
    })
}

getUser(props.userId).then(() => {
    if (store.viwedProfile.interactions.length as number > 0) {
        store.viwedProfile.interactions.forEach((interaction: Record<string, any>, index: number) => {
            getPosts(index, interaction.type, interaction.details.postid)
        })
    }
}).finally(() => {
    isLoading.value = false
})

function back() {
    router.go(-1)
}

function routeToPost(postId: string) {
    router.push(`/post/${postId}`)
}

function routeToProfile(userId: string) {
    if (userId === store.signedUser.id) {
        return router.push('/userProfile')
    }
    else {
        router.push(`/chatterUser/${userId}`)
    }
}

function changeSection(value: string) {
    store.section = value
}

const isLoading: Ref<boolean> = ref(true)

let id = setTimeout(() => {
    if (props.userId === store.signedUser.id) {
        router.push('/userProfile')
        console.log(store.viwedProfile)
    }
}, 5000)

onUnmounted(() => {
    clearTimeout(id)
    const warning = document.getElementById('warningShow') as HTMLDivElement
    warning.style.display = 'none'
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
                <div class="imgCon" :style="{ backgroundImage: `url(${store.viwedProfile.profilePicture})` }"></div>
            </div>

            <section class="sectionFoImage">
                <h3>{{ store.viwedProfile.fullName }}</h3> <!--fullname--> <!-- username -->
                <div class="follow">
                    <P>{{ store.viwedProfile.followers.total }} Followers</P>
                    <p>||</p>
                    <P>{{ store.viwedProfile.following.total }} Following</P>
                </div>
            </section>

            <div class="readerSec">
                <!--section to show personal info and other interaction for reader mode -->
                <div class="btnSection">
                    <button @click="changeSection('personal')"
                        :class="{ active: store.section === 'personal' }">Personal</button>
                    <button @click="changeSection('interaction')"
                        :class="{ active: store.section === 'interaction' }">Interactions</button>
                </div>
                <div :class="{ show: store.section === 'personal', none: store.section !== 'personal', personal: true }">
                    <!--personal details -->
                    <p><span>Full Name:</span> {{ store.viwedProfile.fullName }} </p>
                    <p><span>User Name:</span> {{ store.viwedProfile.username }}</p>
                    <p><span>Blog Name:</span> {{ store.viwedProfile.blogName }}</p>
                    <p v-if="store.viwedProfile.bio.length > 0"><span>Biography:</span> {{ store.viwedProfile.bio }}</p>
                    <p v-if="store.viwedProfile.settings.privacySettings.showEmail"><span>Email:</span> {{
                        store.viwedProfile.email }}</p>
                    <p><span>Location:</span> {{ store.viwedProfile.location }}</p>
                    <p><span>Birthday:</span> {{ store.viwedProfile.dateOfBirth }}</p>
                    <p><span>Gender:</span> {{ store.viwedProfile.gender }}</p>
                    <p v-if="store.viwedProfile.interests.length > 0"><span>Interests:</span> {{
                        store.viwedProfile.interests.join(',') }} </p>
                    <!-- <p>Last Active: {{ store.signedUser.lastActive }}</p>
                    <p>Relationship Status: {{ store.signedUser.relationshipStatus }}</p> -->
                </div>
                <div
                    :class="{ show: store.section === 'interaction', none: store.section !== 'interaction', interaction: true }">
                    <!--interaction details -->
                    <p v-if="store.viwedProfile.interactions.length === 0">No interactions yet.</p>
                    <div v-else>
                        <div v-for="(interaction, index) in store.viwedProfile.interactions" :key="index">
                            <div class="type">
                                {{ interaction.type }}
                            </div>
                            <div class="result-item">
                                <img :src="store.viwedProfile.profilePicture"
                                    :alt="store.viwedProfile.username + 'profile picture'" class="result-item-image"
                                    @click.prevent="routeToProfile(interaction.postDetails.posterId)" />
                                <div class="result-item-other">
                                    <div class="result-item-header">
                                        <span @click.prevent="routeToProfile(interaction.postDetails.posterId)">{{
                                            store.viwedProfile.blogName
                                        }}</span>
                                        <span>{{ useCalculateTime(interaction.postDetails.postTime.seconds) }}</span>
                                    </div>
                                    <div v-html="interaction.postDetails.postContain" id="divContent"
                                        @click.prevent="routeToPost(interaction.postDetails.postId)"></div>
                                    <useDetailButtons :post="interaction.postDetails" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section id="navigators">
            <RouterLink to="/home"><button>Home</button></RouterLink>
            <RouterLink to="/search"><button>Search</button></RouterLink>
            <RouterLink to="/notification">
                <button id="notification-button">Notifications</button>
            </RouterLink>
        </section>
    </main>
</template>
<style>
.none {
    display: none;
}

.show {
    display: flex;
    flex-direction: column;
}

.imgCon{
    width: 80px;
    height: 80px;
    background-color: #efefef;
    border-radius: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
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
    padding: 1rem 0;
    width: 320px;
    height: 90%;
}

.imageCon {
    margin-bottom: 0.5rem;
    border-radius: 50%;
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

.sectionFoImage .follow {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}

.follow p {
    border: none;
    margin-top: 0;
}

.follow p:first-child {
    width: 50%;
}

.follow p:last-child {
    width: 50%;
}

.follow p:nth-child(2) {
    width: 10%;
}

.btns {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 1rem;
    width: 100%;
}

.readerSec {
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow-y: scroll;
    padding-bottom: 1rem;
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

.btnSection .active {
    border-bottom: 3px solid blue;
}

.personal {
    overflow-y: scroll;
}

.personal p {
    margin-bottom: 0.5rem;
}

.personal p span {
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

.result-item-image {
    width: 50px;
    height: 50px;
    margin-left: 5px;
    border-radius: 50%;
    background-color: #efefef;
}

.result-item {
    margin-bottom: 10px;
    border-bottom: 1px solid #ccc;
    display: flex;
    flex-direction: row;
}

.result-item-other {
    width: 260px;
    margin-left: 5px;
    padding-right: 5px;
}

#divContent {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 10;
    -webkit-box-orient: vertical;
    border: 1px solid #ccc;
    padding: 5px 5px 0 5px;
    border-radius: 5px;
}

.result-item-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: smaller;
    margin-bottom: 5px;
}

.result-item-header span:first-of-type {
    font-weight: bolder;
    font-size: medium;
    cursor: pointer;
}

.personal {
    padding: 0 0.5rem;
}

.type {
    margin: 0 10px;
    font-weight: bolder;
    border: 1px solid #ccc;
    padding: 5px;
    border-radius: 10px;
}
</style>