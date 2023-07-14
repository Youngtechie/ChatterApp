<script setup lang="ts">
import { ref, watchEffect, onMounted, nextTick, onUnmounted, watch } from 'vue'
import { useChatterStore } from '@/stores/store';
import { getFirestore, collection, query, getDocs, type DocumentData, limit, orderBy, startAfter, doc, getDoc, where } from 'firebase/firestore'
import { useRouter } from 'vue-router';
import useUserDetails from '@/composables/useUserDetails.vue'
import useAuthentication from '@/composables/useAuth.vue'
import axios from 'axios'
import useCalculateTime from '@/composables/useCalculateTime.vue'
import useDetailButtons from '@/composables/useDetailButtons.vue'
import { useSeoMeta } from '@unhead/vue'

interface Poster {
    img: string,
    id: string,
    fullName: string,
    username: string,
    blogname: string,
}

const posts = ref<DocumentData[] | null>([])

const divContent = ref('')

const DomParse = new DOMParser()

const router = useRouter()

const { app } = useAuthentication()

const db = getFirestore(app)

const store = useChatterStore()

store.sidebar = false

const currentQ = ref<any>(null)

const poster = ref<Poster | null>()

const trendings = ref<string[]>([])

const currentTrend = ref('')

const isloading = ref(true)

onMounted(() => {
    useUserDetails()
    
    useSeoMeta({
        title: 'Trendings',
        author: 'Olaegbe Abdul-Rahmon',
        description: 'Discover trending articles, stories, and discussions from talented authors and passionate readers on ChatterApp',
        ogTitle: 'Trendings',
        ogDescription: 'Discover trending articles, stories, and discussions from talented authors and passionate readers on ChatterApp',
        ogImage: 'https://firebasestorage.googleapis.com/v0/b/chatter-75076.appspot.com/o/android-chrome-512x512.png?alt=media&token=04762555-2965-4bdd-b57c-d0121fcfbd89',
        twitterTitle: 'Trendings',
        twitterDescription: 'Discover trending articles, stories, and discussions from talented authors and passionate readers on ChatterApp',
        twitterImage: 'https://firebasestorage.googleapis.com/v0/b/chatter-75076.appspot.com/o/android-chrome-512x512.png?alt=media&token=04762555-2965-4bdd-b57c-d0121fcfbd89',
    })


    nextTick(() => {
        const warningShow = document.getElementById('warningShow');
        if (warningShow) {
            warningShow.style.display = 'flex';
            warningShow.textContent = 'Loading ...'
        }
    })

    getTrendingTags().then(() => {
        if (trendings.value.length > 0) {
            currentTrend.value = trendings.value[0]
            currentQ.value = query(collection(db, 'posts'), orderBy('postTime', 'desc'), limit(10), where('postTag', '==', currentTrend.value))
            getPosts(currentQ.value)
        }
    })

})

watch(currentTrend, (newValue, oldValue) => {
    if (newValue !== oldValue) {
        posts.value = []
        nextTick(() => {
            const warningShow = document.getElementById('warningShow');
            if (warningShow) {
                warningShow.style.display = 'flex';
                warningShow.textContent = 'Loading ...'
            }
        })
        currentQ.value = query(collection(db, 'posts'), orderBy('postTime', 'desc'), limit(10), where('postTag', '==', currentTrend.value))
        getPosts(currentQ.value)
    }
});

async function getPostContent(post: DocumentData) {
    divContent.value = ''
    try {
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
    catch (err) {
        const error = document.querySelector('#ErrorShow span') as HTMLSpanElement
        (document.querySelector('#ErrorShow') as HTMLDivElement).style.display = 'flex'
        error.textContent = 'Something went wrong, check your internet connection and reload page'
    }
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

async function getPosts(query: any) {
    const querySnapshot = await getDocs(query);
    const promises = querySnapshot.docs.map(async (doc) => {
        const post = doc.data() as DocumentData;
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

        (post as DocumentData).postContain = divContent.value;

        await getPoster((post as DocumentData).posterId as string);
        (post as DocumentData).posterDetails = poster.value;

        return post;
    });

    const resolvedPosts = await Promise.all(promises);
    posts.value = resolvedPosts as DocumentData[];
    poster.value = null;
    isloading.value = false;
}

async function getTrendingTags() {
    const trendingQuery = query(collection(db, 'tags'), limit(5), where('counts', '>', 0), orderBy('counts', 'desc'));
    (await getDocs(trendingQuery)).docs.forEach((doc) => {
        trendings.value.push(doc.id)
    })
}

function next() {
    const nextQ = currentQ.value.docs[currentQ.value.docs.length - 1];
    const next = query(collection(db, "cities"),
        orderBy('postTime', 'desc'),
        startAfter(nextQ),
        limit(15));

    getPosts(next).then(() => {
        currentQ.value = next
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

function changetrend(value: string) {
    currentTrend.value = value
}
watchEffect(() => {
    if (posts.value?.length as number > 0) {
        nextTick(() => {
            const warningShow = document.getElementById('warningShow');
            if (warningShow) {
                warningShow.style.display = 'none';
            }
        })
    }
})

onUnmounted(() => {
    const warning = document.getElementById('warningShow') as HTMLDivElement
    if (warning) {
        warning.style.display = 'none'
    }
})
</script>
<template>
    <main class="trendingsSection">
        <div class="trendingsBtn">
            <button v-for="(trend, index) in trendings" :key="index" @click="changetrend(trend)"
                :class="{ activeTrend: currentTrend === trend }">
                {{ trend }}
            </button>
        </div>
        <div v-if="posts?.length as number > 0 && isloading === false" :class="{ resultsContainer: true }">
            <div v-for="(post, index) in posts" :key="index" class="result-item">
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
        <button @click.prevent="next" v-if="posts?.length === 10">See More ....</button>
        <div id="warningShow"></div>
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
}

.trendingsSection {
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    padding-top: 55px;
    position: relative;
}

.trendingsSection .trendingsBtn {
    width: 100%;
    max-width: 100%;
    overflow-x: scroll;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    align-self: center;
    height: 100px;
}

.trendingsBtn button {
    padding: 5px;
    border-radius: 10px;
    font-weight: 700;
    cursor: pointer;
    margin-left: 20px;
}

.activeTrend {
    background-color: blue;
    color: #fff;
    cursor: not-allowed;
}

.resultsContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
    overflow-y: scroll;
    max-width: 100%;
    border-top: 2px solid blue;
    margin-top: 10px;
    padding-bottom: 50px;
}

.result-item {
    margin-bottom: 10px;
    border-bottom: 1px solid #ccc;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
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
    margin-bottom: 5px;
}

.result-item-header span:first-of-type {
    font-weight: bolder;
    cursor: pointer;
}

.result-item-header span:last-of-type {
    font-size: medium;
}

@media screen and (max-width: 767px) {
    .trendingsSection .trendingsBtn {
        padding-left: 100px;
    }
}
</style>
