<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useChatterStore } from '@/stores/store';
import { getStorage, ref as storageRef, getDownloadURL } from 'firebase/storage'
import { doc, getFirestore, getDoc, type DocumentData, updateDoc } from 'firebase/firestore'
import { ref, onUnmounted, onMounted } from 'vue'
import useLoadingPage from "@/composables/useLoadingPage.vue";
import axios from 'axios'
import useCalculateTime from '@/composables/useCalculateTime.vue';
import useFollow from '@/composables/useFollow.vue'
import useUnfollow from '@/composables/useUnfollow.vue'
import useCheckFollow from '@/composables/useCheckFollow.vue'
import useAuthentication from '@/composables/useAuth.vue';
import useUserDetails from '@/composables/useUserDetails.vue'
import useLikeButton from '@/composables/useLikeButton.vue';
import useAddComment from '@/composables/useAddComment.vue';
import useDeleteComment from '@/composables/useDeleteComment.vue';
import useEditComment from '@/composables/useEditComment.vue';

useUserDetails()

interface posterdetail {
    fullName: string;
    profilePicture: string;
}

const props = defineProps(['postId'])

const isLoading = ref(true)

const divContent = ref('')

const mediaUrls = ref<string[]>([])

const { app } = useAuthentication()

const db = getFirestore(app)

const store = useChatterStore()

const router = useRouter();

const storage = getStorage(app)

const postRef = doc(db, "posts", props.postId)

const DomParse = new DOMParser()

const posterDetail = ref<posterdetail[]>([])

const isFollowing = ref(false)

interface postmedia {
    id: number;
    mediaFullPath: string;
}

async function getMedias() {
    try {
        await Promise.all(store.viwedPost.postMedia.map(async (postMedia: postmedia) => {
            const postMediaRef = storageRef(storage, postMedia.mediaFullPath);
            const postMediaUrl = await getDownloadURL(postMediaRef);
            mediaUrls.value.push(postMediaUrl);
        }))
            .catch(() => {
                console.log('error')
            })

    } catch (error) {
        console.log(error)
    }
}

async function getData() {
    try {
        const doc = await getDoc(postRef);
        // Handle the successful retrieval of the document here
        if (doc.data() !== undefined) {
            store.viwedPost = doc.data() as DocumentData
            getMedias()
            getPostContent()
            getPoster()
            updateDoc(postRef, {
                ["postViews"]: store.viwedPost.postViews + 1
            })
        }
    } catch (error) {
        router.push('/error')
    }
}

onMounted(() => {
    getData().then(() => {
        isLoading.value = false
    })
})

async function getPostContent() {
    try {
        const postContentRef = storageRef(storage, store.viwedPost.postContain)
        const contentUrl = await getDownloadURL(postContentRef)
            .catch((error) => {
                console.log(error)
            })
        await axios.post('/postContent', { contentUrl })
            .then(response => {
                const newHTML = DomParse.parseFromString(response.data as string, 'text/html')
                newHTML.body.querySelectorAll('img, video').forEach((element, index) => {
                    element.setAttribute('src', `${mediaUrls.value[index]}`)
                })
                divContent.value = newHTML.body.innerHTML
            })
            .catch((error) => {
                console.log(error)
            })
    }
    catch (error) {
        console.log(error)
    }
}

async function getPoster() {
    try {
        const posterRef = doc(db, 'users', store.viwedPost.posterId)
        const posterDetails = await getDoc(posterRef)
        if (posterDetails.data() !== undefined) {
            const { fullName, profilePicture } = posterDetails.data() as DocumentData
            const data = { fullName, profilePicture, id }
            
            posterDetail.value.push(data)

            await useCheckFollow(store.viwedPost.posterId, store.signedUser.id).then((isFollow) => {
                isFollowing.value = isFollow
            })
        }
    } catch (error) {
        //
    }
}

async function unFollow() {
    useUnfollow(store.viwedPost.posterId, posterDetail.value[0].fullName)
    isFollowing.value = !isFollowing.value
}

async function Follow() {
    useFollow(store.viwedPost.posterId)
    isFollowing.value = !isFollowing.value
}

let id = setTimeout(() => {
    isLoading.value = false
}, 5000)

onUnmounted(() => {
    clearTimeout(id)
    const warning = document.getElementById('warningShow') as HTMLDivElement
    warning.style.display = 'none'
})

function routeToProfile(userId: string) {
    if (userId === store.signedUser.id) {
        return router.push('/userProfile')
    }
    else {
        router.push(`/chatterUser/${userId}`)
    }
}

</script>
<template>
    <useLoadingPage v-if="isLoading" action-name="Loading Post..." />
    <main v-else>
        <div v-if="store.viwedPost.posterId !== undefined">
            <h1>{{ store.viwedPost.postTitle.join(' ') as string }}</h1>
            <div>
                <div>
                    <div class="imgCon" @click.prevent="routeToProfile(store.viwedPost.posterId)" :style="{backgroundImage: `url(${posterDetail[0].profilePicture})`}"></div>
            
                    <h3 @click.prevent="routeToProfile(store.viwedPost.posterId)">{{ (posterDetail[0].fullName) }}</h3>
                    <div v-if="store.signedUser.id !== store.viwedPost.posterId">
                        <button v-if="isFollowing" @click.prevent="unFollow">UnFollow</button>
                        <button @click.prevent="Follow" v-else>Follow</button>
                    </div>
                </div>
            </div>
            <div>
                {{ useCalculateTime(store.viwedPost.postTime.seconds) }}
            </div>
            <div v-html="divContent"></div>
            <div>
                <useLikeButton :currentUserId="store.signedUser.id" :viewPostId="props.postId"
                    :viewPostPosterId="store.viwedPost.posterId" />
            </div>
            <div>
                <div>
                    <p v-if="store.viwedPost.postComments.total < 1">No comments yet</p>
                    <div v-else>
                        <div v-for="(comment, index) in store.viwedPost.postComments.details" :key="index">
                            <p>postId: {{ comment.id }}</p>
                            <div :id="index.toString() + 'commentDiv'">{{ comment.text }}</div>
                            <p>Time: {{ useCalculateTime(comment.time.seconds) }}</p>
                            <div>
                                <useDeleteComment :currentUserId="store.signedUser.id" :viewPostId="props.postId"
                                    :viewPostPosterId="store.viwedPost.posterId" :commentId="comment.commentId"
                                    :commentText="comment.text" />
                                <useEditComment :currentUserId="store.signedUser.id" :viewPostId="props.postId"
                                    :viewPostPosterId="store.viwedPost.posterId" :commentId="comment.commentId"
                                    :commentText="comment.text" :divEditId="index.toString() + 'commentDiv'" />
                            </div>
                        </div>
                    </div>
                </div>
                <useAddComment :currentUserId="store.signedUser.id" :viewPostId="props.postId"
                    :viewPostPosterId="store.viwedPost.posterId" />
            </div>
        </div>
        <div v-else>
            <h1>Post not found or Deleted</h1>
            <div>
                <button>Expore Chatter</button>
                <RouterLink to="/"><button>Home</button></RouterLink>
            </div>
        </div>
    </main>
</template>
<style scoped>
.imgCon{
    width: 50px;
    height: 50px;
    background-color: #efefef;
    border-radius: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}

</style>