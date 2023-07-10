<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useChatterStore } from '@/stores/store';
import { doc, getFirestore, getDoc, type DocumentData, updateDoc, onSnapshot } from 'firebase/firestore'
import { ref, onUnmounted, onMounted } from 'vue'
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
// import { useSeoMeta } from '@vueuse/head';

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

// const title = ref('')
// const description = ref('')
// const keywords = ref('')
// const author = ref('')
// const ogDescription = ref('')
// const ogTitle = ref('')
// const ogUrl = ref('')
// const ogImage = ref('')


async function getCommenterdetails() {
    try {
        await Promise.all(store.viwedPost.postComments.details.map(async (comment: any, index: number) => {
            const commentRef = doc(db, 'users', comment.id)
            const commentDetails = await getDoc(commentRef)
            if (commentDetails.data() !== undefined) {
                const { fullName, id, username } = commentDetails.data() as DocumentData
                const data = { fullName, id, username }
                store.viwedPost.postComments.details[index].posterDetails = data
            }
        }))
    } catch (error) {
        console.log(error)
    }
}

async function getData() {
    try {
        const doc = await getDoc(postRef);
        // Handle the successful retrieval of the document here
        if (doc.data() !== undefined) {
            store.viwedPost = doc.data() as DocumentData;
            getPostContent()
            getPoster()
            getCommenterdetails()
            updateDoc(postRef, {
                ["postViews"]: store.viwedPost.postViews + 1
            }).finally(() => {
                isLoading.value = false
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
            store.viwedPost = doc.data() as DocumentData
            getCommenterdetails()
        })

    } catch (error) {
        //
    }
    getData()
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
    <useLoadingPage v-if="isLoading" action-name="Loading Post..." />
    <main v-else class="postFullDetails">
        <header>
            <button @click.prevent="back">Back</button>
            <button :title="store.themeDetails.title" id="themeBtn" @click="store.changeTheme">
                <div id="themeImgContainer"><img :src="store.themeDetails.img" /></div>
            </button>
        </header>

        <div v-if="store.viwedPost.posterId !== undefined" class="postBody">
            <h1 v-if="store.viwedPost.postCoverImage === ''">{{ store.viwedPost.postTitle.join(' ') as string }}</h1>
            <section class="coverImage" v-else>
                <img id="img" :src="store.viwedPost.postCoverImage" />
                <h1>{{ store.viwedPost.postTitle.join(' ') as string }}</h1>
            </section>
            <div class="section1">
                <div class="details">
                    <div class="imgCon" @click.prevent="routeToProfile(store.viwedPost.posterId)"
                        :style="{ backgroundImage: `url(${posterDetail[0].profilePicture})` }">
                    </div>
                    <div>
                        <h3 @click.prevent="routeToProfile(store.viwedPost.posterId)">{{ (posterDetail[0].blogName) }}</h3>
                        <h5>@{{ posterDetail[0].username }}</h5>
                    </div>
                </div>
                <div v-if="store.signedUser.id !== store.viwedPost.posterId">
                    <button v-if="isFollowing" @click.prevent="unFollow">UnFollow</button>
                    <button @click.prevent="Follow" v-else>Follow</button>
                </div>
            </div>
            <div class="timePosted">
                {{ useCalculateTime(store.viwedPost.postTime.seconds) }}
            </div>
            <div v-html="divContent" class="showPost"></div>
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
                            <div>
                                <h4 @click.prevent="routeToProfile(comment.commenterId)">{{ comment.posterDetails.fullName
                                }}</h4>
                                <h5>@{{ comment.posterDetails.username }}</h5>
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

.postFullDetails {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    overflow-y: scroll;
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
    padding-top: 60px;
    width: 100%;
    padding-bottom: 10px;
}

.commentingSection {
    border-top: 2px solid #ccc;
    width: 100%;
    display: flex;
    flex-direction: column;
}

h1,
.timePosted {
    text-align: center;
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
    margin: 0.5rem;
    padding: 0 0.5rem;
}

.details {
    display: flex;
    align-items: center;
}

.timePosted {
    font-size: 15px;
    margin: 0.5rem;
}

.btnsMore div {
    border-top: 2px solid #ccc;
    justify-content: space-around;
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

.commenter p,
h5 {
    font-size: small;
}

.commentShow {
    width: 100%;
    border-radius: 5px;
    margin-bottom: 5px;
}

.Eachcomment {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-bottom: 2px solid #ccc;
    padding: 0 1rem;
    margin-top: 10px;
}

.commenterBtn {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 10px;
}

.showPost {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    padding: 0 0.5rem;
}

.showPost img,
.showPost video {
    width: 100%;
    text-align: center;
    align-self: center;
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