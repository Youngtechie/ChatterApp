<script setup lang="ts">
import { onUnmounted, ref, onMounted, nextTick } from 'vue';
import { useChatterStore } from '@/stores/store';
import { useRouter } from 'vue-router';
import useLoadingPage from "@/composables/useLoadingPage.vue";
import { getStorage, ref as storageRef, deleteObject, listAll } from 'firebase/storage'
import { getFirestore, collection, query, where, getDocs, type DocumentData, doc, getDoc, limit, deleteDoc, onSnapshot } from 'firebase/firestore'
import useUserDetails from '@/composables/useUserDetails.vue'
import SignOut from '@/composables/useSignOut.vue';
import useAuthentication from '@/composables/useAuth.vue'
import useCalculateTime from '@/composables/useCalculateTime.vue';
import useDetailButtons from '@/composables/useDetailButtons.vue'
import axios from 'axios'
import { useSeoMeta } from '@unhead/vue'

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
    useSeoMeta({
        title: 'My Profile',
        author: 'Olaegbe Abdul-Rahmon',
        description: 'Personal profile',
    })

    useUserDetails()

    nextTick(() => {
        const warning = document.getElementById('warningShow') as HTMLDivElement
        if (warning) {
            warning.style.display = 'none'
        }
    })

    store.section = 'personal'
})

const poster = ref<Poster | null>()

const { app, auth } = useAuthentication()

const db = getFirestore(app)

const storage = getStorage(app)

const DomParse = new DOMParser()

const divContent = ref('')

const interactionsArr = ref<EachInteraction[]>([])

let id: ReturnType<typeof setTimeout>;

const deleted = ref("false")


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

async function deleteUserDetails(userId: string) {
    const warningShow = document.getElementById('warningShow') as HTMLDivElement
    warningShow.style.display = 'flex'
    warningShow.textContent = 'Deleting account ...'
    const user = auth.currentUser
    const userRef = doc(db, 'users', userId)
    user?.delete().then(() => {
        deleteDoc(userRef)
        const q = query(collection(db, 'posts'), where('posterId', '==', userId))
        getDocs(q).then((d) => {
            d.docs.forEach((document) => {
                const post = document.data()
                const postRef = doc(db, 'posts', post.postId)
                const folderPath = `ChatterAppFiles/posts/${post.postId}`;
                deleteFolder(folderPath);
                deleteDoc(postRef)
            })
            const avatarRef = `ChatterAppFiles/avatar/${userId}`
            deleteFolder(avatarRef)
            SignOut()
            warningShow.style.display = 'Account deleted successfully'
            store.authenticated = false
            deleted.value = "true"
            id = setTimeout(() => {
                warningShow.style.display = 'none'
                store.signedUser = {}
                router.push('/home')
            }, 2000)
        })
    }).catch(() => {
        warningShow.textContent = 'An error occured, Check your network connection and try again'
        id = setTimeout(() => {
            warningShow.style.display = 'none'
        }, 2000)
    })
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
        await deleteUserDetails(store.signedUser.id).catch(() => {
            const warningShow = document.getElementById('warningShow') as HTMLDivElement
            warningShow.style.display = 'flex'
            warningShow.textContent = 'An error occured, Check your network connection and try again'
            id = setTimeout(() => {
                warningShow.style.display = 'none'
            }, 2000)
        })

    }
    catch (error) {
        const warningShow = document.getElementById('warningShow') as HTMLDivElement
        warningShow.style.display = 'flex'
        warningShow.textContent = 'An error occurred, Check your network connection and try again'
        id = setTimeout(() => {
            warningShow.style.display = 'none'
        }, 2000)
    }
}

id = setTimeout(() => {
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
            onSnapshot(doc(db, 'users', store.signedUser.id), (doc) => {
                const data = doc.data()
                if (data !== undefined) {
                    const { followers, following } = data
                    store.signedUser.followers.total = followers.total
                    store.signedUser.following.total = following.total
                }
            })
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

function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text)
    .then(() => {
      alert('Profile link copied to clipboard!');
    })
    .catch((error) => {
      console.error('Unable to copy text to clipboard:', error);
    });
}


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

        <div class="body" v-if="deleted === 'false'">
            <div class="copySection">
                <button title="Copy profile link" @click="copyToClipboard(`https://chatterapp-by-olaegbe.netlify.app/chatterUser/${store.signedUser.id}`)">
                    <svg height="25px" width="25px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" enable-background="new 0 0 64 64"
                        xml:space="preserve">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <g id="Text-files">
                                <path
                                    d="M53.9791489,9.1429005H50.010849c-0.0826988,0-0.1562004,0.0283995-0.2331009,0.0469999V5.0228 C49.7777481,2.253,47.4731483,0,44.6398468,0h-34.422596C7.3839517,0,5.0793519,2.253,5.0793519,5.0228v46.8432999 c0,2.7697983,2.3045998,5.0228004,5.1378999,5.0228004h6.0367002v2.2678986C16.253952,61.8274002,18.4702511,64,21.1954517,64 h32.783699c2.7252007,0,4.9414978-2.1725998,4.9414978-4.8432007V13.9861002 C58.9206467,11.3155003,56.7043495,9.1429005,53.9791489,9.1429005z M7.1110516,51.8661003V5.0228 c0-1.6487999,1.3938999-2.9909999,3.1062002-2.9909999h34.422596c1.7123032,0,3.1062012,1.3422,3.1062012,2.9909999v46.8432999 c0,1.6487999-1.393898,2.9911003-3.1062012,2.9911003h-34.422596C8.5049515,54.8572006,7.1110516,53.5149002,7.1110516,51.8661003z M56.8888474,59.1567993c0,1.550602-1.3055,2.8115005-2.9096985,2.8115005h-32.783699 c-1.6042004,0-2.9097996-1.2608986-2.9097996-2.8115005v-2.2678986h26.3541946 c2.8333015,0,5.1379013-2.2530022,5.1379013-5.0228004V11.1275997c0.0769005,0.0186005,0.1504021,0.0469999,0.2331009,0.0469999 h3.9682999c1.6041985,0,2.9096985,1.2609005,2.9096985,2.8115005V59.1567993z">
                                </path>
                                <path
                                    d="M38.6031494,13.2063999H16.253952c-0.5615005,0-1.0159006,0.4542999-1.0159006,1.0158005 c0,0.5615997,0.4544001,1.0158997,1.0159006,1.0158997h22.3491974c0.5615005,0,1.0158997-0.4542999,1.0158997-1.0158997 C39.6190491,13.6606998,39.16465,13.2063999,38.6031494,13.2063999z">
                                </path>
                                <path
                                    d="M38.6031494,21.3334007H16.253952c-0.5615005,0-1.0159006,0.4542999-1.0159006,1.0157986 c0,0.5615005,0.4544001,1.0159016,1.0159006,1.0159016h22.3491974c0.5615005,0,1.0158997-0.454401,1.0158997-1.0159016 C39.6190491,21.7877007,39.16465,21.3334007,38.6031494,21.3334007z">
                                </path>
                                <path
                                    d="M38.6031494,29.4603004H16.253952c-0.5615005,0-1.0159006,0.4543991-1.0159006,1.0158997 s0.4544001,1.0158997,1.0159006,1.0158997h22.3491974c0.5615005,0,1.0158997-0.4543991,1.0158997-1.0158997 S39.16465,29.4603004,38.6031494,29.4603004z">
                                </path>
                                <path
                                    d="M28.4444485,37.5872993H16.253952c-0.5615005,0-1.0159006,0.4543991-1.0159006,1.0158997 s0.4544001,1.0158997,1.0159006,1.0158997h12.1904964c0.5615025,0,1.0158005-0.4543991,1.0158005-1.0158997 S29.0059509,37.5872993,28.4444485,37.5872993z">
                                </path>
                            </g>
                        </g>
                    </svg>
                </button>
            </div>
            <div class="imageCon">
                <div class="imgCon" :style="{ backgroundImage: `url(${store.signedUser.profilePicture})` }"></div>
            </div>

            <section class="sectionFoImage">
                <h3>{{ store.signedUser.fullName }}</h3>
                <p v-if="store.signedUser.bio">{{ store.signedUser.bio }}</p>
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

.copySection {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: absolute;
}

.copySection button{
    outline: none;
    border: none;
    cursor: pointer;
}

.NightApp .copySection button svg *{
    fill: #fff;
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
    height: 100%;
}

header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem;
    width: 100%;
    height: 55px;
    z-index: 909090;
    position: fixed;
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
    height: 100vh;
    padding-top: 65px;
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
    #warningShowint {
        height: 150px;
        width: 150px;
    }
}

@media screen and (min-width: 768px) {
    #warningShowint {
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
