<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useChatterStore } from '@/stores/store';
import { doc, getFirestore, getDoc, type DocumentData, updateDoc, onSnapshot } from 'firebase/firestore'
import { ref, onUnmounted, onMounted, nextTick } from 'vue'
import useLoadingPage from "@/composables/useLoadingPage.vue";
import axios from 'axios'
import useCalculateTime from '@/composables/useCalculateTime.vue';
import useFollow from '@/composables/useFollow.vue'
import useUnfollow from '@/composables/useUnfollow.vue'
import useCheckFollow from '@/composables/useCheckFollow.vue'
import useAuthentication from '@/composables/useAuth.vue';
import useUserDetails from '@/composables/useUserDetails.vue'
import useDetailButtons from '@/composables/useDetailButtons.vue'
import useAddComment from '@/composables/useAddComment.vue';
import useDeleteComment from '@/composables/useDeleteComment.vue';
import useEditComment from '@/composables/useEditComment.vue';
import { useSeoMeta } from '@vueuse/head';

useUserDetails()

interface posterdetail {
    blogName: string;
    profilePicture: string;
    id: string;
    username: string;
}

const props = defineProps(['postId'])

const isLoading = ref(true)

const divContent = ref('')

const { app } = useAuthentication()

const db = getFirestore(app)

const store = useChatterStore()

const router = useRouter();

const postRef = doc(db, "posts", props.postId)

const DomParse = new DOMParser()

const posterDetail = ref<posterdetail[]>([])

const isFollowing = ref(false)

let id: ReturnType<typeof setTimeout>

// const title = ref('')
// const description = ref('')
// const keywords = ref('')
// const author = ref('')
// const ogDescription = ref('')
// const ogTitle = ref('')
// const ogUrl = ref('')
// const ogImage = ref('')



async function getData() {
    try {
        const doc = await getDoc(postRef);
        // Handle the successful retrieval of the document here
        if (doc.data() !== undefined) {
            store.viwedPost = doc.data() as DocumentData;
            await getPostContent()
            await getPoster()
            await updateDoc(postRef, {
                ["postViews"]: store.viwedPost.postViews + 1
            }).then(()=>{
                useSeoMeta({
                    title: store.viwedPost.postTitle.join(" "),
                    author: posterDetail.value[0].username,
                    description: '' ,
                    ogTitle: store.viwedPost.postTitle.join(" "),
                    ogDescription: '',
                    ogImage: 'https://firebasestorage.googleapis.com/v0/b/chatter-75076.appspot.com/o/android-chrome-512x512.png?alt=media&token=04762555-2965-4bdd-b57c-d0121fcfbd89',
                    twitterTitle: store.viwedPost.postTitle.join(" "),
                    twitterDescription: '',
                    twitterImage: 'https://firebasestorage.googleapis.com/v0/b/chatter-75076.appspot.com/o/android-chrome-512x512.png?alt=media&token=04762555-2965-4bdd-b57c-d0121fcfbd89',
                })
            })

        }
    } catch (error) {
        // router.push('/error')
        console.error(error);
    }
}

onMounted(() => {
    const postRef = doc(db, "posts", (props.postId as string))
    try {
        onSnapshot(postRef, (doc) => {
            store.viwedPost.postComments = doc.data()!.postComments as DocumentData;
        })

    } catch (error) {
        //
    }
    getData()

    id = setTimeout(() => {
        if (divContent.value !== '') {
            isLoading.value = false;
        }
        else {
            nextTick(() => {
                const warningShow = document.getElementById("warningShow") as HTMLDivElement
                if (warningShow) {
                    warningShow.style.display = "flex"
                    warningShow.textContent = "Something went wrong, check your network connection and reload the page."
                }
            })
        }
    }, 3000);
})

async function getPostContent() {
    const contentUrl = store.viwedPost.postContain
    await axios.post('/.netlify/functions/postContent', { contentUrl })
        .then(response => {
            const newHTML = DomParse.parseFromString(response.data.content as string, 'text/html')

            newHTML.body.querySelector('h1')?.remove();

            divContent.value = newHTML.body.innerHTML
        })
        .catch((error) => {
            console.log(error)
        })
}

async function getPoster() {
    posterDetail.value = []
    const posterRef = doc(db, 'users', store.viwedPost.posterId)
    const posterDetails = await getDoc(posterRef)
    if (posterDetails.data() !== undefined) {
        const { blogName, profilePicture, id, username } = posterDetails.data() as DocumentData
        const data = { blogName, profilePicture, id, username }

        posterDetail.value.push(data)

        await useCheckFollow(store.viwedPost.posterId, store.signedUser.id).then((isFollow) => {
            isFollowing.value = isFollow
        })
    }
}

async function unFollow() {
    useUnfollow(store.viwedPost.posterId, posterDetail.value[0].blogName)
    if (store.signedUser.username !== undefined && store.signedUser.username !== '') {
        isFollowing.value = !isFollowing.value
    }
}

async function Follow() {
    useFollow(store.viwedPost.posterId)
    if (store.signedUser.username !== undefined && store.signedUser.username !== '') {
        isFollowing.value = !isFollowing.value
    }
}

onUnmounted(() => {
    clearTimeout(id)
    const warning = document.getElementById('warningShow') as HTMLDivElement
    if (warning) {
        warning.style.display = 'none'
    }
})

function routeToProfile(userId: string) {
    if (userId === store.signedUser.id) {
        return router.push('/userProfile')
    }
    else {
        router.push(`/chatterUser/${userId}`)
    }
}

function back() {
    router.go(-1)
}

</script>
<template>
    <useLoadingPage v-if="isLoading && divContent === ''" action-name="Loading Post..." />
    <main v-else class="postFullDetails">
        <header>
            <button @click.prevent="back">Back</button>
            <button :title="store.themeDetails.title" id="themeBtn" @click="store.changeTheme">
                <div id="themeImgContainer"><img :src="store.themeDetails.img" /></div>
            </button>
        </header>

        <div v-if="store.viwedPost.posterId !== undefined" class="postBody">
            <h1>{{ store.viwedPost.postTitle.join(' ') as string }}</h1>
            <div class="postContainer">
                <div class="section1">
                    <div class="details">
                        <div class="imgCon" v-if="posterDetail[0].profilePicture"
                            @click.prevent="routeToProfile(store.viwedPost.posterId)"
                            :style="{ backgroundImage: `url(${posterDetail[0].profilePicture})` }">
                        </div>
                        <div>
                            <h3 @click.prevent="routeToProfile(store.viwedPost.posterId)">{{ (posterDetail[0].blogName) }}
                            </h3>
                            <h5>@{{ posterDetail[0].username }}</h5>
                        </div>
                    </div>
                    <div v-if="store.signedUser.id !== store.viwedPost.posterId" class="followBtns">
                        <button v-if="isFollowing" @click.prevent="unFollow"><svg width="24px" height="24px"
                                viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M216,16A112.127,112.127,0,0,0,104,128v79.68a80.239,80.239,0,0,0,9.768,38.308l27.455,50.334L68.4,343.656A79.727,79.727,0,0,0,32,410.732V496H312V464H64V410.732a47.838,47.838,0,0,1,21.84-40.246L183.5,307.007l-41.64-76.341A48.149,48.149,0,0,1,136,207.68V128a80,80,0,0,1,160,0v79.68a48.143,48.143,0,0,1-5.861,22.985L248.5,307.007,312,348.283V310.117l-21.223-13.8,27.454-50.334A80.226,80.226,0,0,0,328,207.68V128A112.127,112.127,0,0,0,216,16Z"
                                        class="ci-primary"></path>
                                    <polygon
                                        points="483.314 355.314 460.686 332.686 412 381.372 363.314 332.686 340.686 355.314 389.372 404 340.686 452.686 363.314 475.314 412 426.628 460.686 475.314 483.314 452.686 434.628 404 483.314 355.314"
                                        class="ci-primary"></polygon>
                                </g>
                            </svg>

                            Unfollow</button>
                        <button @click.prevent="Follow" v-else><svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" height="24px"
                                viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
                                <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>
                                <g>
                                    <path
                                        d="M667.5,650c4.7,3.4,10.4,5.5,16.7,5.5c15.7,0,28.4-12.7,28.4-28.4c0-9.9-5-18.5-12.7-23.6l0,0c-33.9-23-71.2-41.3-111-54c91.6-47.6,154.3-143.3,154.3-253.7C743.2,138,615.3,10,457.4,10c-157.9,0-285.8,128-285.8,285.8c0,110.4,62.6,206.1,154.2,253.7c-174,55.5-300.2,217.9-301.3,410c0,0.2,0.1,2.5,0.1,2.5c1,14.8,13.2,26.6,28.2,26.6c15.1,0,27.5-11.8,28.5-26.6c0-207.6,168.3-376,376-376c77.8,0,150.1,23.6,210,64.1L667.5,650z M228.7,295.8c0-126.3,102.4-228.7,228.7-228.7c126.3,0,228.7,102.4,228.7,228.7c0,126.3-102.4,228.7-228.7,228.7C331.1,524.5,228.7,422.1,228.7,295.8z" />
                                    <path
                                        d="M947.9,786.1H827.4V666.6c0-15.2-12.3-27.6-27.6-27.6s-27.6,12.3-27.6,27.6v119.5H652c-15.2,0-27.6,12.3-27.6,27.6c0,15.2,12.3,27.6,27.6,27.6h120.3v121.2c0,15.2,12.3,27.6,27.6,27.6s27.6-12.3,27.6-27.6V841.2h120.5c15.2,0,27.6-12.3,27.6-27.6C975.4,798.4,963.1,786.1,947.9,786.1z" />
                                </g>
                            </svg>Follow</button>
                    </div>
                </div>
                <div class="timePosted">
                    {{ useCalculateTime(store.viwedPost.postTime.seconds) }}
                </div>
                <div v-html="divContent" class="showPost"></div>
            </div>
            <div class="btnsMore">
                <useDetailButtons :post="store.viwedPost" />
            </div>
            <div class="commentingSection">
                <h4
                    v-if="store.viwedPost.postComments.total === 0 && store.viwedPost.postSettings.disableComments === false">
                    No comments yet.
                </h4>
                <div v-if="store.viwedPost.postSettings.disableComments === false" class="commentAction">
                    <div v-for="(comment, index) in store.viwedPost.postComments.details" :key="index" class="Eachcomment">
                        <div class="commenter">
                            <div class="imgCon2" @click.prevent="routeToProfile(comment.id)"
                                :style="{ backgroundImage: `url(${comment.avatar})` }">
                            </div>
                            <div>
                                <h4 @click.prevent="routeToProfile(comment.id)">{{ comment.fullName
                                }}</h4>
                                <h5>@{{ comment.username }}</h5>
                            </div>
                            <p>{{ useCalculateTime(comment.time.seconds) }}</p>
                        </div>
                        <div :id="index.toString() + 'commentDiv'" class="commentShow">{{ comment.text }}</div>
                        <div v-if="store.signedUser.id === store.viwedPost.posterId" class="commenterBtn">
                            <useEditComment :currentUserId="store.signedUser.id" :viewPostId="props.postId"
                                :viewPostPosterId="store.viwedPost.posterId" :commentId="comment.commentId"
                                :commentText="comment.text" :divEditId="index.toString() + 'commentDiv'" />
                            <useDeleteComment :currentUserId="store.signedUser.id" :viewPostId="props.postId"
                                :viewPostPosterId="store.viwedPost.posterId" :commentId="comment.commentId"
                                :commentText="comment.text" />
                        </div>
                    </div>
                    <useAddComment :currentUserId="store.signedUser.id" :viewPostId="props.postId"
                        :viewPostPosterId="store.viwedPost.posterId" />
                </div>
                <h4 v-else>Commenting on this post is disabled.</h4>
            </div>
        </div>
        <div v-else>
            <h1>Post not found or Deleted</h1>
            <div>
                <button>Expore Chatter</button>
                <RouterLink to="/"><button>Home</button></RouterLink>
            </div>
        </div>

        <section id="navigators">
            <RouterLink to="/home"><button>Home</button></RouterLink>
            <RouterLink to="/search"><button>Search</button></RouterLink>
        </section>
    </main>
</template>
<style scoped>
.imgCon {
    width: 50px;
    height: 50px;
    background-color: #efefef;
    border-radius: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    margin-right: 0.1rem;
}

.imgCon2 {
    width: 30px;
    height: 30px;
    background-color: #efefef;
    border-radius: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    margin-right: 0.1rem;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    height: 50px;
    width: 100%;
    background-color: #333333;
    color: #efefef;
    position: fixed;
    z-index: 99;
    top: 0;
}

header button {
    cursor: pointer;
    border-radius: 10px;
    padding: 5px;
}

.followBtns {
    margin-left: 20px;
}

.followBtns button {
    border: 1px solid #ccc;
    padding: 5px 10px;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}

.postContainer {
    max-width: 650px;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
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

#navigators button:hover,
header button:hover {
    background-color: #007bff;
    color: #fff;
}

#navigators a {
    text-decoration: none;
    color: #000;
}

.postFullDetails {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    overflow-y: scroll;
    overflow-x: hidden;
    padding-top: 55px;
    padding-bottom: 30px;
}

.coverImage {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 200px;
    text-align: center;
    position: relative;
    top: -10px;
}

.coverImage #img {
    width: 100%;
    height: 200px;
    filter: brightness(40%);

}

.coverImage h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #efefef;
    font-size: 2rem;
    text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
}

.postBody {
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    margin-bottom: 25px;
}

.commentingSection {
    border-top: 2px solid #ccc;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.commentingSection h4 {
    align-self: center;
    margin-top: 10px;
}


h1,
.timePosted {
    text-align: center;
}

h1 {
    margin: 0 5px;
}

h1:not(.coverImage h1) {
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    line-height: 1.2;
    border-bottom: 2px solid #ccc;
    padding-bottom: 10px;
}

.DayApp h1:not(.coverImage h1) {
    text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.5);
}

.NightApp h1:not(.coverImage h1) {
    text-shadow: 4px 4px 8px rgba(255, 255, 255, 0.5);
}


.section1 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0.5rem 0;
}

.details {
    display: flex;
    align-items: center;
}

.timePosted {
    font-size: large;
    margin-bottom: 0.5rem;
    display: inline;
    padding: 5px;
    border-radius: 10px;
    align-self: center;
}

.btnsMore {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

}

.btnsMore div {
    justify-content: space-around;
    max-width: 320px;
    align-self: center;
    margin-top: 0;
}

.commentAction {
    display: flex;
    flex-direction: column;
}

.commenter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
}

.commenter p {
    margin-left: 10px;
}

.commenter p,
h5 {
    font-size: small;
}

h4 {
    font-size: medium;
}

.commentShow {
    width: 100%;
    border-radius: 5px;
    margin-bottom: 5px;
    margin-left: 60px;
}

.NightApp .followBtns button svg * {
    fill: #fff;
}

.Eachcomment {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
    margin-top: 10px;
    align-self: flex-start;
}

.commenterBtn {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 10px;
    width: 100%;
}

.commenterBtn button {
    padding: 5px;
}</style>