<script setup lang="ts">
import { ref, watchEffect, onUnmounted } from 'vue'
import { useChatterStore } from '@/stores/store'
import { useRouter } from 'vue-router'
import useAuthentication from './useAuth.vue';
import { getFirestore, collection, query, where, getDocs, type DocumentData, doc, getDoc } from 'firebase/firestore'
import useDetailButtons from './useDetailButtons.vue'
import axios from 'axios'
import useCalculateTime from '@/composables/useCalculateTime.vue'

interface Poster {
    img: string,
    id: string,
    fullName: string,
    username: string,
    blogname: string,
}

const { app } = useAuthentication()

const db = getFirestore(app)

const router = useRouter()

const store = useChatterStore()

const searchValue = ref('')

const type = ref('Posts');

const placeholder = ref<string>('')

let timeOut: ReturnType<typeof setTimeout>;

const divContent = ref('')

const DomParse = new DOMParser()

const poster = ref<Poster | null>()

onUnmounted(() => {
    clearTimeout(timeOut)
})

const posts = ref<DocumentData[]>([])
const users = ref<DocumentData[]>([])

watchEffect(() => {
    if (type.value === 'Posts') {
        searchValue.value = ''
        placeholder.value = 'Search for posts by post tag'
        users.value = []
        posts.value = []
    }
    else if (type.value === 'Users') {
        searchValue.value = ''
        placeholder.value = 'Search for Users by username'
        posts.value = []
        users.value = []
    }
})

async function getPostContent(post: DocumentData) {
    const contentUrl = post.postContain
    await axios.post('/.netlify/functions/postContent', { contentUrl })
        .then(response => {
            const newHTML = DomParse.parseFromString(response.data.content as string, 'text/html')
            divContent.value = newHTML.body.innerHTML
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
async function Search(type: string, value: string) {
    if (document.querySelector('#mainSearchContainer #loading')) {
        (document.querySelector('#mainSearchContainer #loading') as HTMLDivElement).remove()
    }
    const newDiv = document.createElement('div')
    newDiv.setAttribute('id', 'loading')
    newDiv.textContent = 'Loading...'
    users.value = []
    posts.value = []

    if (value === '') {
        const warningShow = document.getElementById('warningShow');
        if (warningShow) {
            warningShow.style.display = 'flex';
            warningShow.textContent = 'No Input'

            timeOut = setTimeout(() => {
                warningShow.style.display = 'none';
                document.getElementById('searchBtn')?.removeAttribute('disabled');
            }, 1000)
        }
    }
    else if (type === 'Posts') {
        document.getElementById('mainSearchContainer')?.appendChild(newDiv)
        document.getElementById('searchBtn')?.setAttribute('disabled', 'true');

        const postsQuery = query(collection(db, 'posts'), where('postTag', '==', `${value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()}`))
        try {
            await getDocs(postsQuery)
                .then((docs) => {
                    if (docs.docs.length === 0) {
                        newDiv.textContent = 'No Post found with this tag'
                    }
                    else {
                        docs.docs.forEach((doc) => {
                            const post = doc.data()
                            if (post !== undefined && post !== null && post.length !== 0) {
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

                                    getPoster(post.posterId).then(() => {
                                        post.posterDetails = poster.value
                                        newDiv.remove()
                                        posts.value?.push(post)
                                    })
                                })
                            }
                        })
                    }
                    document.getElementById('searchBtn')?.removeAttribute('disabled');
                }).catch(() => {
                    newDiv.textContent = 'Something went wrong, try again later'
                    document.getElementById('searchBtn')?.removeAttribute('disabled');
                })
        } catch (err) {
            newDiv.textContent = 'Something went wrong, try again later'
            document.getElementById('searchBtn')?.removeAttribute('disabled');
        }
    }
    else if (type === 'Users') {
        document.getElementById('mainSearchContainer')?.appendChild(newDiv)
        document.getElementById('searchBtn')?.setAttribute('disabled', 'true')

        const usersQuery = query(collection(db, 'users'), where('username', '==', `${value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()}`))
        try {
            await getDocs(usersQuery)
                .then((docs) => {
                    if (docs.docs.length === 0) {
                        newDiv.textContent = 'No user with this username found'
                    }
                    else {
                        newDiv.remove()
                        document.getElementById('searchBtn')?.removeAttribute('disabled')
                        docs.docs.forEach((doc) => {
                            users.value.push(doc.data());
                        })
                    }
                }).catch(() => {
                    newDiv.textContent = 'Something went wrong, try again later'
                    document.getElementById('searchBtn')?.removeAttribute('disabled');
                })
        } catch (err) {
            newDiv.textContent = 'Something went wrong, try again later'
            document.getElementById('searchBtn')?.removeAttribute('disabled');
        }
    }
}

function preventWhitespaceInput(event: Event) {
    const input = event.target as HTMLInputElement;
    const inputValue = input.value;

    if (inputValue.includes(' ')) {
        input.value = inputValue.replace(/\s/g, '');
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
</script>
<template>
    <div id="mainSearchContainer">
        <div class="search-container">
            <input type="text" name="searchValue" v-model="searchValue" :placeholder="placeholder"
                @input="preventWhitespaceInput" />
            <div class="firstSection">
                <select id="tags" v-model="type" required>
                    <option value="" disabled>Select category you want to search in</option>
                    <option value="Posts">Posts</option>
                    <option value="Users">Users</option>
                </select>
                <button @click.prevent="Search(type, searchValue)" id="searchBtn">Search</button>
            </div>
        </div>
        <div v-if="posts?.length as number > 0" class="results-container">
            <div v-for="(post, index) in posts" :key="index" class="result-item-post">
                <div class="imgCon" @click.prevent="routeToProfile(post.posterId)"
                    :style="{ backgroundImage: `url(${post?.posterDetails.img})` }"></div>

                <div class="result-item-other">
                    <div class="result-item-header">
                        <span @click.prevent="routeToProfile(post.posterId)">{{ post?.posterDetails.blogname }}</span>
                        <span>{{ useCalculateTime(post.postTime.seconds) }}</span>
                    </div>
                    <div v-html="post.postContain" id="divContent" @click.prevent="routeToPost(post.postId)"></div>
                    <useDetailButtons :post="post" />
                </div>
            </div>
        </div>
        <div v-if="users.length > 0" class="results-container">
            <button v-for="(user, index) in users" :key="index" class="result-item" @click="routeToProfile(user.id)">
                <h3>{{ user.fullName }}</h3>
                <p>@{{ user.username }}</p>
            </button>
        </div>
    </div>
    <div id="warningShow"></div>
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
}

#mainSearchContainer {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    width: 100%;
}

.search-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.firstSection {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    width: 320px;
}

.search-container input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 320px;
    margin-bottom: 20px;
}

.search-container select {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 25%;
}

.search-container button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.results-container {
    margin-top: 20px;
    border-top: 3px outset blue;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
    overflow-y: scroll;
    height: 70%;
    width: 100%;
}

.result-item {
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    width: 100%;
}

#loading {
    margin-top: 20px;
    font-size: 20px;
    font-weight: bold;
}

#divContent {
    width: 100%;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 10;
    -webkit-box-orient: vertical;
    border: 1px solid #ccc;
    padding: 5px 5px 0 5px;
    border-radius: 5px;
}

.result-item-post {
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

.result-item-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 5px;
}

.result-item-header span:first-of-type {
    font-weight: bolder;
    cursor: pointer;
}

.result-item-header span:last-of-type {
    font-size: medium;
}

@media screen and (min-width: 768px) and (max-width: 991px) {}

@media screen and (min-width: 992px) {
    .result-item-other {
        width: 300px;
    }

    .imgCon {
        width: 70px;
        height: 70px;
    }
}

@media screen and (min-width: 1200px) {}
</style>