<script setup lang="ts">
import { ref, onUnmounted, watchEffect, onMounted, nextTick } from 'vue'
import { useChatterStore } from '@/stores/store';
import { getStorage, ref as storageRef, getDownloadURL, deleteObject, listAll } from 'firebase/storage'
import { getFirestore, collection, query, where, getDocs, type DocumentData, doc, deleteDoc } from 'firebase/firestore'
import { useRouter } from 'vue-router';
import useUserDetails from '@/composables/useUserDetails.vue'
import useAuthentication from '@/composables/useAuth.vue'
import axios from 'axios'
import useCalculateTime from '@/composables/useCalculateTime.vue'

useUserDetails()

let timeOut: ReturnType<typeof setTimeout>;

onUnmounted(() => {
    clearTimeout(timeOut)
})

const posts = ref<DocumentData[] | null>([])

const divContent = ref('')

const DomParse = new DOMParser()

const router = useRouter()

const { app } = useAuthentication()

const storage = getStorage(app)

const db = getFirestore(app)

const store = useChatterStore()


watchEffect(() => {
    if (posts.value?.length as number > 0) {
        posts.value?.sort((a: Record<string, any>, b: Record<string, any>) => b.postTime.seconds - a.postTime.seconds)
        nextTick(() => {
            const warningShow = document.getElementById('warningShow');
            if (warningShow) {
                warningShow.style.display = 'none';
            }
        })
    }
})

onMounted(() => {
    clearTimeout(timeOut)
    nextTick(() => {
        const warningShow = document.getElementById('warningShow');
        if (warningShow) {
            warningShow.style.display = 'flex';
            warningShow.textContent = 'Loading ...'
        }
    })
})

getPosts()

async function getPostContent(post: DocumentData) {
    divContent.value = ''
    try {
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
    catch (err) {
        const error = document.getElementById('ErrorShow') as HTMLDivElement
        error.style.display = 'flex'
        error.textContent = 'Something went wrong, check your internet connection'
        timeOut = setTimeout(() => {
            error.style.display = 'none'
        }, 3000)
    }
}

async function getPosts() {
    const q = query(collection(db, 'posts'), where('posterId', '==', store.signedUser.id))
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
            posts.value?.push(post)
        })
    })
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

function editPost(postId: string) {
    router.push(`/write/${postId}`)
}

async function deletePost(postId: string) {
    try {
        const q = query(collection(db, 'posts'), where('postId', '==', postId))
        const querySnapshot = await getDocs(q)
        querySnapshot.forEach((d) => {
            const post = d.data()
            const postRef = doc(db, 'posts', post.postId)
            deleteDoc(postRef)
        })
        const folderPath = `ChatterAppFiles/posts/${postId}`;
        deleteFolder(folderPath);
    }
    catch (err) {
        console.log(err)
    }
}

async function deleteFolder(folderPath: string) {
    const folderRef = storageRef(storage, folderPath);

    // List all files in the folder
    const fileList = await listAll(folderRef);

    // Delete each file within the folder
    const deleteFilePromises = fileList.items.map((file) => deleteObject(file));

    // Wait for all file deletions to complete
    await Promise.all(deleteFilePromises);
}


</script>
<template>
    <div v-if="posts?.length as number > 0" :class="{ resultsContainer: true }">
        <div v-for="(post, index) in posts" :key="index" class="result-item">
            <img :src="store.signedUser.profilePicture" :alt="store.signedUser.username + 'profile picture'"
                class="result-item-image" @click.prevent="routeToProfile(post.posterId)" />
            <div class="result-item-other">
                <div class="result-item-header">
                    <span @click.prevent="routeToProfile(post.posterId)">{{ store.signedUser.blogName }}</span>
                    <span>{{ useCalculateTime(post.postTime.seconds) }}</span>
                </div>
                <div v-html="post.postContain" id="divContent" @click.prevent="routeToPost(post.postId)"></div>
                <div class="editSectionbtn">
                    <button @click.prevent="editPost(post.postId)">Edit</button>
                    <button @click.prevent="deletePost(post.postId)">Delete</button>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.resultsContainer {
    border-top: 1px solid #ccc;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
    overflow-y: scroll;
    height: 85%;
    max-width: 320px;
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
    width: 320px;
}

.result-item-other {
    display: flex;
    flex-direction: column;
    width: 260px;
    margin-left: 5px;
    padding-right: 5px;
}

.result-item-other button {
    align-self: center;
    padding: 5px;
    border-radius: 5px;
    margin: 5px 0;
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

.editSectionbtn {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 10px;
}

.editSectionbtn button:last-of-type {
    color: red;
}

.editSectionbtn button:last-of-type:hover {
    background-color: red;
    color: white;
}</style>