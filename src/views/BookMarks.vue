<script setup lang="ts">
import { ref, onUnmounted, onMounted, nextTick, watchEffect } from 'vue'
import { useChatterStore } from '@/stores/store';
import { getFirestore, collection, query, where, getDocs, type DocumentData, doc, getDoc } from 'firebase/firestore'
import { useRouter } from 'vue-router';
import useUserDetails from '@/composables/useUserDetails.vue'
import useAuthentication from '@/composables/useAuth.vue'
import axios from 'axios'
import useDetailButtons from '@/composables/useDetailButtons.vue'
import useCalculateTime from '@/composables/useCalculateTime.vue'

useUserDetails()

onUnmounted(() => {
    const warning = document.getElementById('warningShow') as HTMLDivElement
    if (warning) {
        warning.style.display = 'none'
    }
})
const divContent = ref('')

const DomParse = new DOMParser()

const { app } = useAuthentication()

const store = useChatterStore()

store.sidebar = false

const db = getFirestore(app)

const router = useRouter()


interface Poster {
    img: string,
    id: string,
    fullName: string,
    username: string,
    blogname: string,
}

const posts = ref<DocumentData[] | null>([])
const poster = ref<Poster | null>()
let bigSizeScreen = ref(false)

onMounted(() => {
    window.addEventListener('resize', handleResize);
    nextTick(() => {
        const warningShow = document.getElementById('warningShow');
        if (warningShow) {
            warningShow.style.display = 'flex';
            warningShow.textContent = 'Loading ...'
        }
    })
    getPosts(store.signedUser.bookmarks)
    const browserWidth = window.innerWidth;
    if (browserWidth as number >= 768) {
        bigSizeScreen.value = true
    }
    else {
        bigSizeScreen.value = false
    }
})

function handleResize() {
    const browserWidth = window.innerWidth;
    if (browserWidth as number >= 768) {
        bigSizeScreen.value = true
    }
    else {
        bigSizeScreen.value = false
    }
}

watchEffect(() => {
    if (store.signedUser.bookmarks.length === 0) {
        posts.value = []
        nextTick(() => {
            const warningShow = document.getElementById('warningShow');
            if (warningShow) {
                warningShow.style.display = 'flex';
                warningShow.textContent = 'No bookmarks yet'
            }
        })
    }
})

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

async function getPostContent(post: DocumentData) {
    divContent.value = ''
    const contentUrl = post.postContain
    await axios.post('api/postContent', { contentUrl })
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

async function getPosts(bookmarks: string[]) {
    try {
        const promises = bookmarks.map(async (bookmark) => {
            const postsQuery = query(
                collection(db, 'posts'),
                where('postId', '==', bookmark),
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

                        await getPoster(post.posterId);

                        post.posterDetails = poster.value;
                        poster.value = null;

                        return post;
                    }
                })
            );
        });

        const resolvedPosts = await Promise.all(promises);
        const flattenedPosts = resolvedPosts.flat();
        posts.value = flattenedPosts as DocumentData[];

        if (posts.value.length > 0) {
            nextTick(() => {
                const warningShow = document.getElementById('warningShow');
                if (warningShow) {
                    warningShow.style.display = 'none';
                }
            })
        }
        if (posts.value.length === 0) {
            nextTick(() => {
                const warningShow = document.getElementById('warningShow');
                if (warningShow) {
                    warningShow.style.display = 'flex';
                    warningShow.textContent = 'No bookmarks yet'
                }
            })
        }
    } catch (err) {
        nextTick(() => {
            const warningShow = document.getElementById('warningShow');
            if (warningShow) {
                warningShow.style.display = 'flex';
                warningShow.textContent = 'Something went wrong, check your internet connection and reload page.'
            }
        })
    }
}

</script>
<template>
    <section class="bookmarksPage">
        <div id="warningShow"></div>
        <h2 v-show="!bigSizeScreen">Bookmarks</h2>
        <div class="bookmarksCon">
            <div v-if="posts?.length as number > 0" :class="{ resultsContainer: true }">
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
        </div>
    </section>
</template>
<style scoped>
h2 {
    text-align: center;
    margin: 10px 0;
}

.bookmarksPage {
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    padding-top: 55px;
    position: relative;
}

.bookmarksCon {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
}

.noBookmarks {
    width: 100%;
    text-align: center;
    margin-top: 20px;
    font-size: xx-large;
}

.imgCon {
    width: 50px;
    height: 50px;
    background-color: #efefef;
    border-radius: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}

.resultsContainer {
    border-top: 1px solid #ccc;
    padding-top: 10px;
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    height: 100%;
}

.result-item {
    margin-bottom: 10px;
    border-bottom: 1px solid #ccc;
    display: flex;
    flex-direction: row;
    width: 100%;
    display: flex;
    justify-content: center;

}

.result-item-image {
    width: 50px;
    height: 50px;
    margin-left: 5px;
    border-radius: 50%;
    background-color: #efefef;
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

@media screen and (min-width: 992px) {
    .result-item-other {
        width: 300px;
    }

    .imgCon {
        width: 70px;
        height: 70px;
    }
}
</style>