<script setup lang="ts">
import { ref, onUnmounted, onMounted, nextTick } from 'vue'
import { useChatterStore } from '@/stores/store';
import { getFirestore, collection, query, where, getDocs, type DocumentData, doc, getDoc, limit, orderBy } from 'firebase/firestore'
import { useRouter } from 'vue-router';
import useUserDetails from '@/composables/useUserDetails.vue'
import useAuthentication from '@/composables/useAuth.vue'
import axios from 'axios'
import useDetailButtons from '@/composables/useDetailButtons.vue'
import useCalculateTime from '@/composables/useCalculateTime.vue'

onUnmounted(() => {
    const warning = document.getElementById('warningShow') as HTMLDivElement
    if (warning) {
        warning.style.display = 'none'
    }
})
const divContent = ref('')

const DomParse = new DOMParser()

useUserDetails()

const { app } = useAuthentication()

const store = useChatterStore()

const db = getFirestore(app)

const router = useRouter()

const isLoading = ref(true)

const presentSection = ref('interested_section')

interface Poster {
    img: string,
    id: string,
    fullName: string,
    username: string,
    blogname: string,
}

const interests = ref<string[]>([])

const posts = ref<DocumentData[] | null>([])
const poster = ref<Poster | null>()
const followings = ref<DocumentData[] | null>([])
const stopNoDataF = ref(0)
const stopNoDataR = ref(0)

onMounted(() => {
    nextTick(() => {
        const warningShow = document.getElementById('warningShow');
        if (warningShow) {
            warningShow.style.display = 'flex';
            warningShow.textContent = 'Loading ...'
        }
    })

    store.signedUser.interests.forEach((interest: string) => {
        const newInterest = interest.trim()
        interests.value.push(newInterest.charAt(0).toUpperCase() + newInterest.slice(1).toLowerCase())
    })

    try {
        getPostsByTag(interests.value)
    } catch (error) {
        nextTick(() => {
            const warningShow = document.getElementById('warningShow');
            if (warningShow) {
                warningShow.style.display = 'flex';
                warningShow.textContent = 'Something went wrong, check your internet connection and reload page.';
            }
        })
    }
})

function handleChangeSection(section: string) {
    posts.value = []
    followings.value = []
    presentSection.value = section
    nextTick(() => {
        const warningShow = document.getElementById('warningShow');
        if (warningShow) {
            warningShow.style.display = 'flex';
            warningShow.textContent = 'Loading ...'
        }
    })

    if (section === 'following_section') {
        try {
            getFollowings()
        } catch (error) {
            nextTick(() => {
                const warningShow = document.getElementById('warningShow');
                if (warningShow) {
                    warningShow.style.display = 'flex';
                    warningShow.textContent = 'Something went wrong, check your internet connection and reload page.';
                }
            })
        }
    }
    if (section === 'interested_section') {
        posts.value = []
        try {
            getPostsByTag(interests.value)
        } catch (error) {
            nextTick(() => {
                const warningShow = document.getElementById('warningShow');
                if (warningShow) {
                    warningShow.style.display = 'flex';
                    warningShow.textContent = 'Something went wrong, check your internet connection and reload page.';
                }
            })
        }
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

async function getPostContent(post: DocumentData) {
    divContent.value = ''
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

async function getPostsByTag(tags: string[]) {
    const length = tags.length < 10 ? tags.length : 10;
    const numOfData = Math.floor(10 / length as number);
    posts.value = []
    const promises = tags.map(async (tag) => {
        const postsQuery = query(
            collection(db, 'posts'),
            where('postTag', '==', tag),
            orderBy('postTime', 'desc'),
            limit(numOfData)
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
                    isLoading.value = false;


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
    else if (posts.value.length === 0) {
        nextTick(() => {
            const warningShow = document.getElementById('warningShow');
            if (warningShow) {
                warningShow.style.display = 'flex';
                warningShow.style.flexDirection = 'column'
                warningShow.innerHTML = 'No post found for your interest(s) <button>View Trendings</button>'

            }
        })
    }
    if (posts.value.length === 10) {
        stopNoDataR.value = 10;
    }
}

async function getFollowings() {
    const length = store.signedUser.following.theFollowings.length < 10 ? store.signedUser.following.theFollowings.length : 10;
    const numOfData = Math.floor(10 / length as number);
    followings.value = [];

    const promises = store.signedUser.following.theFollowings.map(async (followingId: string) => {
        const followingsQuery = query(
            collection(db, 'posts'),
            where('posterId', '==', followingId),
            orderBy('postTime', 'desc'),
            limit(numOfData)
        );

        const querySnapshot = await getDocs(followingsQuery);

        return Promise.all(
            querySnapshot.docs.map(async (doc) => {
                const following = doc.data();

                if (following !== undefined && following !== null && following.length !== 0) {
                    await getPostContent(following);

                    const bodyImgRemove = DomParse.parseFromString(divContent.value, 'text/html');
                    bodyImgRemove.body.querySelectorAll('img').forEach((tag) => {
                        tag.remove();
                    });
                    bodyImgRemove.body.querySelectorAll('video').forEach((tag) => {
                        tag.remove();
                    });
                    bodyImgRemove.body.querySelector('h1')?.remove();

                    divContent.value = bodyImgRemove.body.innerHTML;
                    following.postContain = divContent.value;

                    await getPoster(following.posterId);

                    following.posterDetails = poster.value;
                    poster.value = null;
                    isLoading.value = false;

                    return following;
                }
            })
        );
    });

    const resolvedFollowings = await Promise.all(promises);
    const flattenedFollowings = resolvedFollowings.flat();

    followings.value = flattenedFollowings;

    if (followings.value.length === 10) {
        stopNoDataF.value = 10;
    }

    if (followings.value.length > 0) {
        nextTick(() => {
            const warningShow = document.getElementById('warningShow');
            if (warningShow) {
                warningShow.style.display = 'none';
            }
        })
    }
    else if (followings.value.length === 0 && store.signedUser.following.theFollowings > 0) {
        nextTick(() => {
            const warningShow = document.getElementById('warningShow');
            if (warningShow) {
                warningShow.style.display = 'flex';
                warningShow.textContent = 'No post to show from your followings.';
            }
        })
    }
    else{
        nextTick(() => {
            const warningShow = document.getElementById('warningShow');
            if (warningShow) {
                warningShow.style.display = 'flex';
                warningShow.textContent = 'You are currently not following anyone yet';
            }
        })
    }
}

</script>
<template>
    <div class="btns">
        <button type="button" @click="handleChangeSection('interested_section')"
            :class="{ active: presentSection === 'interested_section' }">Interested</button>
        <button type="button" @click="handleChangeSection('following_section')"
            :class="{ active: presentSection === 'following_section' }">Followings</button>
    </div>
    <div v-if="posts?.length as number > 0 && presentSection === 'interested_section'" :class="{ resultsContainer: true }">
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
    <div v-else-if="followings?.length as number > 0 && presentSection === 'following_section'"
        :class="{ resultsContainer: true }">
        <div v-for="(following, index) in followings" :key="index" class="result-item">
            <img :src="following.posterDetails.img" :alt="following.posterDetails.username + 'profile picture'"
                class="result-item-image" @click.prevent="routeToProfile(following.posterId)" />
            <div class="result-item-other">
                <div class="result-item-header">
                    <span @click.prevent="routeToProfile(following.posterId)">{{ following.posterDetails.blogname }}</span>
                    <span>{{ useCalculateTime(following.postTime.seconds) }}</span>
                </div>
                <div v-html="following.postContain" id="divContent" @click.prevent="routeToPost(following.postId)"></div>
                <useDetailButtons :post="following" />
            </div>
        </div>
    </div>
    <div v-show="store.signedUser.following.theFollowings.length === 0 && presentSection === 'following_section'"
        class="noFollower">
        You are not following any one yet.
    </div>
</template>
<style scoped>
.btns {
    height: 5%;
    width: 100%;
}

.noFollower {
    width: 100%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow-y: scroll;
    font-size: larger;
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

.result-item-image {
    width: 50px;
    height: 50px;
    margin-left: 5px;
    border-radius: 50%;
    background-color: #efefef;
}

.btns button {
    width: 50%;
    height: 100%;
    border-right: none;
    border-left: none;
    border-top: none;
    outline: none;
    cursor: pointer;
    font-weight: bold;
}

.active {
    border-bottom: 3px solid blue;
}

.resultsContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
    overflow-y: scroll;
    height: 80vh;
    padding-bottom: 40px;
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

</style>