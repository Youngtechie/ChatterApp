<script setup lang="ts">
import { onUnmounted, ref, type Ref, onMounted, nextTick } from 'vue';
import { useChatterStore } from '@/stores/store';
import { useRouter } from 'vue-router';
import useLoadingPage from "@/composables/useLoadingPage.vue";
import { getStorage, ref as storageRef, getDownloadURL } from 'firebase/storage'
import { getFirestore, collection, query, where, getDocs, type DocumentData, doc, getDoc } from 'firebase/firestore'
import useUserDetails from '@/composables/useUserDetails.vue'
import SignOut from '@/composables/useSignOut.vue';
import useAuthentication from '@/composables/useAuth.vue'
import useCalculateTime from '@/composables/useCalculateTime.vue';
import useDetailButtons from '@/composables/useDetailButtons.vue'
import axios from 'axios'
import getUser from '@/composables/useUserViewProfile.vue';

const router = useRouter();

const isLoading: Ref<boolean> = ref(true)

const store = useChatterStore()

useUserDetails()

interface Poster {
    img: string,
    id: string,
    fullName: string,
    username: string,
    blogname: string,
}

onMounted(() => {
    nextTick(() => {
        const warning = document.getElementById('warningShow') as HTMLDivElement
        warning.style.display = 'none'
    })
    getUser(store.userId).then(() => {
        isLoading.value = false
    })
})

const poster = ref<Poster | null>()

const { app } = useAuthentication()

const storage = getStorage(app)

const db = getFirestore(app)

const DomParse = new DOMParser()

const divContent = ref('')

const isinteractionsLoading = ref(true)


async function getPostContent(post: DocumentData) {
    divContent.value = ''
    const postContentRef = storageRef(storage, post.postContain)
    const contentUrl = await getDownloadURL(postContentRef)
        .catch((error) => {
            console.log(error)
        })
    await axios.post('/postContent', { contentUrl })
        .then(response => {
            const newHTML = DomParse.parseFromString(response.data as string, 'text/html')
            divContent.value = newHTML.body.innerHTML
        })
        .catch((error) => {
            console.log(error)
        })
}

async function getPoster(posterID: string) {
    poster.value = null
    try {
        const posterRef = doc(db, 'users', posterID)
        const posterDetails = await getDoc(posterRef)
        if (posterDetails.data() !== undefined) {
            const { fullName, profilePicture, username, blogName } = posterDetails.data() as DocumentData
            const data = { profilePicture, posterID, fullName, username, blogName }

            poster.value = {
                id: posterID as string,
                img: data.profilePicture as string,
                fullName: data.fullName as string,
                username: data.username as string,
                blogname: data.blogName as string
            }

        }
    } catch (error) {
        //
    }
}

async function getPosts(interactions: Record<string, any>) {
    if (interactions.length > 0) {
        try {
            const promises = interactions.map(async (interaction: any) => {
                const postsQuery = query(
                    collection(db, 'posts'),
                    where('postId', '==', interaction.details.postid)
                );

                const querySnapshot = await getDocs(postsQuery);

                return Promise.all(
                    querySnapshot.docs.map(async (doc) => {
                        const post = doc.data();

                        await getPostContent(post);

                        const bodyImgRemove = DomParse.parseFromString(divContent.value, 'text/html');
                        bodyImgRemove.body.querySelectorAll('img').forEach((tag) => {
                            tag.remove();
                        });
                        bodyImgRemove.body.querySelectorAll('video').forEach((tag) => {
                            tag.remove();
                        });
                        bodyImgRemove.body.querySelector('h1')?.remove();

                        divContent.value = bodyImgRemove.body.innerHTML;
                        post.postContain = divContent.value;

                        await getPoster(post.posterId);

                        post.posterDetails = poster.value;
                        poster.value = null;

                        const EachInteraction = {
                            'type': interaction.type,
                            'postDetails': post
                        }

                        return EachInteraction;
                    })
                );
            })
            const resolvedPosts = await Promise.all(promises);
            store.viwedProfile.interactions = resolvedPosts.flat()
            isinteractionsLoading.value = false
        } catch (error) {
            //
        }
    }
    else {
        return;
    }
}

function back() {
    router.go(-1)
}

function changeSection(value: string) {
    store.section = value
    if (value === 'interaction' && store.userId !== '' && store.userId !== undefined) {
        getPosts(store.viwedProfile.interactions)
    }
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
                <h3>{{ store.signedUser.fullName }}</h3> <!--fullname--> <!-- username -->
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
                    <button @click="changeSection('personal')"
                        :class="{ active: store.section === 'personal' }">Personal</button>
                    <button @click="changeSection('interaction')"
                        :class="{ active: store.section === 'interaction' }">Interactions</button>
                </div>
                <div :class="{ show: store.section === 'personal', none: store.section !== 'personal', personal: true }">
                    <!--personal details -->
                    <p><span>Full Name:</span> {{ store.signedUser.fullName }} </p>
                    <p><span>User Name:</span> {{ store.signedUser.username }}</p>
                    <p><span>Blog Name:</span> {{ store.signedUser.blogName }}</p>
                    <p v-if="store.signedUser.bio.length > 0"><span>Biography:</span> {{ store.signedUser.bio }}</p>
                    <p v-if="store.signedUser.settings.privacySettings.showEmail"><span>Email:</span> {{
                        store.signedUser.email }}</p>
                    <p><span>Location:</span> {{ store.signedUser.location }}</p>
                    <p><span>Birthday:</span> {{ store.signedUser.dateOfBirth }}</p>
                    <p><span>Gender:</span> {{ store.signedUser.gender }}</p>
                    <p v-if="store.signedUser.interests.length > 0"><span>Interests:</span> {{
                        store.signedUser.interests.join(',') }} </p>
                    <!-- <p>Last Active: {{ store.signedUser.lastActive }}</p>
                    <p>Relationship Status: {{ store.signedUser.relationshipStatus }}</p> -->
                </div>
                <div v-if="store.section === 'interaction'"
                    :class="{ show: store.section === 'interaction', none: store.section !== 'interaction', interaction: true }">
                    <!--interaction details -->
                    <p v-if="isinteractionsLoading" class="loading">Loading...</p>
                    <div v-else>
                        <div v-for="(interaction, index) in store.viwedProfile.interactions" :key="index">
                            <div class="type">
                                {{ interaction.type }}
                            </div>
                            <div class="result-item">
                                <img :src="interaction.postDetails.posterDetails.img"
                                    :alt="interaction.postDetails.posterDetails.username + 'profile picture'"
                                    class="result-item-image"
                                    @click.prevent="routeToProfile(interaction.postDetails.posterId)" />
                                <div class="result-item-other">
                                    <div class="result-item-header">
                                        <span @click.prevent="routeToProfile(interaction.postDetails.posterId)">{{
                                            store.signedUser.blogName
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

            <section id="navigators">
                <RouterLink to="/home"><button>Home</button></RouterLink>
                <RouterLink to="/search"><button>Search</button></RouterLink>
                <RouterLink to="/notification"><button id="notification-button">Notification<span
                            class="dot"></span></button>
                </RouterLink>
            </section>
        </div>
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

.imgCon {
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

.personal,
.interaction {
    overflow-y: scroll;
    position: relative;
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

.loading {
    height: 100%;
    align-items: center;
    justify-content: center;
}
</style>