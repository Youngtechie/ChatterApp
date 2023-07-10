<script setup lang="ts">
import { onUnmounted, ref, onMounted, nextTick } from 'vue';
import { useChatterStore } from '@/stores/store';
import { useRouter } from 'vue-router';
import useLoadingPage from "@/composables/useLoadingPage.vue";
import { getStorage, ref as storageRef, deleteObject, listAll } from 'firebase/storage'
import { getFirestore, collection, query, where, getDocs, type DocumentData, doc, getDoc, limit, deleteDoc } from 'firebase/firestore'
import useUserDetails from '@/composables/useUserDetails.vue'
import SignOut from '@/composables/useSignOut.vue';
import useAuthentication from '@/composables/useAuth.vue'
import useCalculateTime from '@/composables/useCalculateTime.vue';
import useDetailButtons from '@/composables/useDetailButtons.vue'
import axios from 'axios'

const router = useRouter();

const isLoading = ref(true)

const store = useChatterStore()

interface Poster {
    img: string,
    id: string,
    fullName: string,
    username: string,
    blogname: string,
}

interface EachInteraction {
    'type': string,
    'postDetails': DocumentData
}

onMounted(() => {
    useUserDetails()

    nextTick(() => {
        const warning = document.getElementById('warningShow') as HTMLDivElement
        if(warning){
            warning.style.display = 'none'
        }
    })

    store.section = 'personal'
})

const poster = ref<Poster | null>()

const { app } = useAuthentication()

const db = getFirestore(app)

const storage = getStorage(app)

const DomParse = new DOMParser()

const divContent = ref('')

const interactionsArr = ref<EachInteraction[]>([])


async function getPostContent(post: DocumentData) {
    divContent.value = ''
    const contentUrl = post.postContain
    await axios.post('/.netlify/functions/postContent', { contentUrl })
        .then(response => {
            const newHTML = DomParse.parseFromString(response.data.content as string, 'text/html')
            divContent.value = newHTML.body.innerHTML
        })
        .catch((error) => {
            console.log(error)
        })
}

async function getPoster(posterID: string) {
    poster.value = null
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
}

async function getPosts(interactions: Record<string, any>) {
    if (interactions.length > 0) {
        try {
            const promises = interactions.map(async (interaction: any) => {
                const postsQuery = query(
                    collection(db, 'posts'),
                    where('postId', '==', interaction.details.postid),
                    limit(10)
                );

                const querySnapshot = await getDocs(postsQuery);

                return Promise.all(
                    querySnapshot.docs.map(async (doc) => {
                        const post = doc.data();

                        if (post !== undefined && post !== null && post.length !== 0) {

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

                            await getPoster(post.posterId).then(() => {
                                post.posterDetails = poster.value
                            })

                            const EachInteraction = {
                                'type': interaction.type,
                                'postDetails': post
                            }

                            return EachInteraction;
                        }

                    })
                );
            })
            const resolvedPosts = await Promise.all(promises);
            interactionsArr.value = resolvedPosts.flat()

            if (interactionsArr.value.length === 0) {
                const warningShowInt = document.getElementById('warningShowint') as HTMLDivElement
                warningShowInt.style.display = 'flex';
                warningShowInt.textContent = 'No interactions yet'
            }
            else if (interactionsArr.value.length > 0) {
                const warningShowInt = document.getElementById('warningShowint') as HTMLDivElement
                warningShowInt.style.display = 'none';
            }
        } catch (error) {
            console.log(error)
            const warningShowInt = document.getElementById('warningShowint') as HTMLDivElement
            warningShowInt.style.display = 'flex';
            warningShowInt.textContent = "An error occured, Check your network connection and try again"
        }
    }
    else {
        const warningShowInt = document.getElementById('warningShowint') as HTMLDivElement
        warningShowInt.style.display = 'flex';
        warningShowInt.textContent = 'No interactions yet'
    }
}

function back() {
    router.go(-1)
}

function changeSection(value: string) {
    store.section = value
    interactionsArr.value = []
    if (value === 'interaction') {
        nextTick(() => {
            const warningShowInt = document.getElementById('warningShowint') as HTMLDivElement
            warningShowInt.style.display = 'flex';
            warningShowInt.textContent = 'Loading ...'
            getPosts(store.signedUser.interactions)
        })
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

async function deleteUser(userId: string) {
    const userRef = doc(db, 'users', userId)
    await deleteDoc(userRef)
    const q = query(collection(db, 'posts'), where('posterId', '==', userId))
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((d) => {
        const post = d.data()
        const postRef = doc(db, 'posts', post.postId)
        const folderPath = `ChatterAppFiles/posts/${post.postId}`;
        deleteFolder(folderPath);
        deleteDoc(postRef)
    })
    const avatarRef = `ChatterAppFiles/avatar/${userId}`
    deleteFolder(avatarRef)
}

async function deleteFolder(folderPath: string) {
    const folderRef = storageRef(storage, folderPath);

    // List all files in the folder
    const fileList = await listAll(folderRef);

    if (fileList.items.length === 0) {
        return
    }
    // Delete each file within the folder
    const deleteFilePromises = fileList.items.map((file) => deleteObject(file));
    // Wait for all file deletions to complete
    await Promise.all(deleteFilePromises);
}

async function deleteAccount() {
    const ans = confirm('Are you sure you want to delete your account?')
    if (ans === false) {
        return
    }
    try {
        const warningShow = document.getElementById('warningShow') as HTMLDivElement
        warningShow.style.display = 'flex'
        warningShow.textContent = 'Deleting account ...'
        await deleteUser(store.signedUser.id).then(() => {
            warningShow.textContent = 'Account deleted successfully'
            SignOut()
            setTimeout(() => {
                store.authenticated = false
                store.signedUser = {}
                warningShow.style.display = 'none'
                router.push('/home')
            }, 2000)
        }).catch(() => {
            const warningShow = document.getElementById('warningShow') as HTMLDivElement
            warningShow.style.display = 'flex'
            warningShow.textContent = 'An error occured, Check your network connection and try again'
            setTimeout(() => {
                warningShow.style.display = 'none'
            }, 2000)
        })
    }
    catch (error) {
        const warningShow = document.getElementById('warningShow') as HTMLDivElement
        warningShow.style.display = 'flex'
        warningShow.textContent = 'An error occurred, Check your network connection and try again'
        setTimeout(() => {
            warningShow.style.display = 'none'
        }, 2000)
    }
}

let id = setTimeout(() => {
    if (store.signedUser.id === undefined && store.authenticated === false) {
        router.push('/home')
    }
    else if (store.authenticated === true) {
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
        else if (store.signedUser.username === undefined && store.signedUser.id === undefined) {
            nextTick(() => {
                const warning = document.getElementById('warningShow') as HTMLDivElement
                if (warning) {
                    warning.style.display = 'flex'
                    warning.textContent = 'Check your network connection and try again'
                }
            })
        }
        else {
            isLoading.value = false
        }
    }
}, 5000)

onUnmounted(() => {
    clearTimeout(id)
    const warning = document.getElementById('warningShow') as HTMLDivElement
    if (warning) {
        warning.style.display = 'none'
    }
    const warningShowInt = document.getElementById('warningShowint') as HTMLDivElement
    if (warningShowInt) {
        warningShowInt.style.display = 'none'
    }
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
                <div class="imgCon" :style="{ backgroundImage: `url(${store.signedUser.profilePicture})` }"></div>
            </div>

            <section class="sectionFoImage">
                <h3>{{ store.signedUser.fullName }}</h3>
                <p v-if="store.signedUser.bio.length > 0">{{ store.signedUser.bio }}</p>
                <div class="follow">
                    <p>{{ store.signedUser.followers.total }} Followers</p>
                    <p>||</p>
                    <p>{{ store.signedUser.following.total }} Following</p>
                </div>
            </section>

            <div class="btns">
                <RouterLink :to="{ name: 'EditProfile' }"><button>Edit Profile</button></RouterLink>
                <button @click.prevent="deleteAccount">Delete Account</button>
            </div>

            <div class="readerSec">
                <div class="btnSection">
                    <button @click="changeSection('personal')"
                        :class="{ active: store.section === 'personal' }">Personal</button>
                    <button @click="changeSection('interaction')"
                        :class="{ active: store.section === 'interaction' }">Interactions</button>
                </div>
                <div :class="{ show: store.section === 'personal', none: store.section !== 'personal', personal: true }">
                    <div class="personalDetails">
                        <p><span>Full Name:</span> {{ store.signedUser.fullName }} </p>
                        <p><span>User Name:</span> {{ store.signedUser.username }}</p>
                        <p><span>Blog Name:</span> {{ store.signedUser.blogName }}</p>
                        <p v-if="store.signedUser.settings.privacySettings.showEmail"><span>Email:</span> {{
                            store.signedUser.email }}</p>
                        <p><span>Location:</span> {{ store.signedUser.location }}</p>
                        <p><span>Birthday:</span> {{ store.signedUser.dateOfBirth }}</p>
                        <p><span>Gender:</span> {{ store.signedUser.gender }}</p>
                        <p v-if="store.signedUser.interests.length > 0"><span>Interests:</span> {{
                            store.signedUser.interests.join(',') }} </p>
                    </div>
                </div>
                <div v-if="store.section === 'interaction'"
                    :class="{ show: store.section === 'interaction', none: store.section !== 'interaction', interaction: true }">
                    <div id="warningShowint"></div>
                    <div v-if="interactionsArr.length > 0">
                        <div v-for="(interaction, index) in interactionsArr" :key="index" class="resultContainer">
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
            </section>
        </div>

        <div id="warningShow"></div>
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
    background-color: #333333;
}

header button:first-of-type {
    border-radius: 10px;
    padding: 0 10px;
}

.body {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 0;
    width: 100%;
    height: 90%;
}

.imageCon {
    margin-bottom: 0.5rem;
    border-radius: 50%;
}

.sectionFoImage {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
}

.sectionFoImage p {
    margin: 0.5rem 0;
    border-radius: 5px;
    width: 100%;
    align-self: center;
}

.sectionFoImage .follow {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 320px;
    margin-top: 0.5rem;
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
    margin: 0.5rem 0;
    width: 300px;
}

.btns button {
    padding: 5px;
    border-radius: 10px;
    cursor: pointer;
}

.btns button:hover {
    background: #888;
}

.btns button:last-of-type:not(a button) {
    color: red;
}

.btns button:last-of-type:hover:not(a button) {
    background-color: red;
    color: white;
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
    align-items: center;
    justify-content: space-around;
    width: 320px;
    align-self: center;
}

.btnSection button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-weight: bold;
    padding: 5px;
}

.btnSection .active {
    border-bottom: 3px solid blue;
}

.personal,
.interaction {
    overflow-y: scroll;
    position: relative;
    border-top: 1px solid #ccc;
}

.interaction {
    padding: 15px 0;
    display: grid;
}

.personal p {
    margin-bottom: 0.5rem;
    align-items: center;
    justify-content: center;
}

.personalDetails {
    width: 300px;
    overflow-y: scroll;
    padding: 15px;
    overflow-x: hidden;
}

.resultContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
    width: 100%;
    position: fixed;
    bottom: 0;
    background-color: #333333;
    border-top: 1px solid #ccc;
    z-index: 9999;
    padding: 10px 0;
}

#navigators button {
    border: none;
    padding: 4px 8px;
    cursor: pointer;
    display: inline;
    margin-right: 0px;
    display: inline-block;
    border: none;
    border-radius: 5px;
}

#navigators button:hover {
    background-color: #007bff;
    color: #fff;
}

#navigators a {
    text-decoration: none;
    color: #000;
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
    width: 100%;
    justify-content: center;
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
    align-items: center;
    justify-content: center;
}

.type {
    margin: 0 10px;
    font-weight: bolder;
    border: 1px solid #ccc;
    padding: 5px;
    border-radius: 10px;
    width: 300px;
}

#warningShowint {
    padding: 10px;
    border: 1px outset #efefef;
    text-align: center;
    border-radius: 10px;
    font-weight: bolder;
    align-items: center;
    display: flex;
    justify-content: center;
    align-self: center;
    justify-self: center;
}

.DayApp #warningShowint {
    color: #efefef;
    background-color: black;
}

.NightApp #warningShowint {
    color: black;
    background-color: #efefef;
}
@media screen and (max-width: 767px) {
    #warningShowint{
        height: 150px;
        width: 150px;
    }
}
@media screen and (min-width: 768px) {
    #warningShowint{
        height: 200px;
        width: 200px;
    }
}

@media screen and (min-width: 1200px) {
    .personalDetails {
        width: 350px;
    }
}
</style>