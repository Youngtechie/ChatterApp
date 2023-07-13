<script setup lang="ts">
import { onUnmounted, ref, type Ref, nextTick, onMounted } from 'vue';
import { useChatterStore } from '@/stores/store';
import { useRouter } from 'vue-router';
import useLoadingPage from "@/composables/useLoadingPage.vue";
import { getFirestore, collection, query, where, getDocs, type DocumentData, limit, doc, getDoc, onSnapshot } from 'firebase/firestore'
import getUser from '@/composables/useUserViewProfile.vue';
import useUserDetails from '@/composables/useUserDetails.vue'
import useCalculateTime from '@/composables/useCalculateTime.vue';
import useAuthentication from '@/composables/useAuth.vue'
import useFollow from '@/composables/useFollow.vue'
import useUnfollow from '@/composables/useUnfollow.vue'
import useCheckFollow from '@/composables/useCheckFollow.vue'
import useDetailButtons from '@/composables/useDetailButtons.vue'
import axios from 'axios'

const isFollowing = ref(false)

const router = useRouter();

const { app } = useAuthentication()

const db = getFirestore(app)

const DomParse = new DOMParser()

const poster = ref<Poster | null>()

const store = useChatterStore()

const props = defineProps(['userId'])

const divContent = ref('')

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

const interactionsArr = ref<EachInteraction[]>([])

onMounted(() => {
    useUserDetails()

    getUser(props.userId)

    nextTick(() => {
        const warning = document.getElementById('warningShow') as HTMLDivElement
        if (warning) {
            warning.style.display = 'none'
        }
    })

    store.section = 'personal'
})

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
            const warningShowInt = document.getElementById('warningShowint') as HTMLDivElement
            warningShowInt.style.display = 'flex';
            warningShowInt.textContent = "Check your network connection and try again"
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

function routeToPost(postId: string) {
    router.push(`/post/${postId}`)
}

function routeToProfile(userId: string) {
    if (userId === store.viwedProfile.id) {
        return router.push('/userProfile')
    }
    else {
        router.push(`/chatterUser/${userId}`)
    }
}

function changeSection(value: string) {
    store.section = value
    interactionsArr.value = []
    if (value === 'interaction') {
        nextTick(() => {
            const warningShowInt = document.getElementById('warningShowint') as HTMLDivElement
            warningShowInt.style.display = 'flex';
            warningShowInt.textContent = 'Loading ...'
            getPosts(store.viwedProfile.interactions)
        })
    }
}

const isLoading: Ref<boolean> = ref(true)

let id = setTimeout(() => {
    if (props.userId === store.signedUser.id) {
        router.push('/userProfile')
    }
    else if (store.viwedProfile.username === undefined && store.viwedProfile.id === undefined) {
        nextTick(() => {
            const warning = document.getElementById('warningShow') as HTMLDivElement
            if (warning) {
                warning.style.display = 'flex'
                warning.textContent = 'Check your network connection and try again'
            }
        })
    } else {
        useCheckFollow(props.userId, store.signedUser.id).then((isFollow) => {
            isFollowing.value = isFollow
        })
        onSnapshot(doc(db, 'users', props.userId), (doc) => {
            const data = doc.data()
            if (data !== undefined) {
                const { followers, following } = data
                store.viwedProfile.followers.total = followers.total
                store.viwedProfile.following.total = following.total
            }
        })
        isLoading.value = false
    }
}, 5000)

async function unFollow() {
    try {
        useUnfollow(props.userId, store.viwedProfile.blogName)
        isFollowing.value = !isFollowing.value
    }
    catch (error) {
        isFollowing.value = !isFollowing.value
    }
}

async function Follow() {
    try {
        useFollow(store.viwedProfile.id)
        isFollowing.value = !isFollowing.value
    } catch (error) {
        isFollowing.value = !isFollowing.value
    }
}

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

        <div class="body">
            <div class="copySection">
                <button title="Copy profile link"
                    @click="copyToClipboard(`https://chatterapp-by-olaegbe.netlify.app/chatterUser/${store.viwedProfile.id}`)">
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
                <div class="imgCon" :style="{ backgroundImage: `url(${store.viwedProfile.profilePicture})` }"></div>
            </div>

            <section class="sectionFoImage">
                <h3>{{ store.viwedProfile.fullName }}</h3>
                <p v-if="store.viwedProfile.bio.length > 0">{{ store.viwedProfile.bio }}</p>
                <div class="follow">
                    <p>{{ store.viwedProfile.followers.total }} Followers</p>
                    <p>||</p>
                    <p>{{ store.viwedProfile.following.total }} Following</p>
                </div>
            </section>

            <div class="btns">
                <button v-if="isFollowing" @click.prevent="unFollow"><svg width="24px" height="24px" viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg" fill="#000000">
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
                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" height="24px" viewBox="0 0 1000 1000"
                        enable-background="new 0 0 1000 1000" xml:space="preserve">
                        <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>
                        <g>
                            <path
                                d="M667.5,650c4.7,3.4,10.4,5.5,16.7,5.5c15.7,0,28.4-12.7,28.4-28.4c0-9.9-5-18.5-12.7-23.6l0,0c-33.9-23-71.2-41.3-111-54c91.6-47.6,154.3-143.3,154.3-253.7C743.2,138,615.3,10,457.4,10c-157.9,0-285.8,128-285.8,285.8c0,110.4,62.6,206.1,154.2,253.7c-174,55.5-300.2,217.9-301.3,410c0,0.2,0.1,2.5,0.1,2.5c1,14.8,13.2,26.6,28.2,26.6c15.1,0,27.5-11.8,28.5-26.6c0-207.6,168.3-376,376-376c77.8,0,150.1,23.6,210,64.1L667.5,650z M228.7,295.8c0-126.3,102.4-228.7,228.7-228.7c126.3,0,228.7,102.4,228.7,228.7c0,126.3-102.4,228.7-228.7,228.7C331.1,524.5,228.7,422.1,228.7,295.8z" />
                            <path
                                d="M947.9,786.1H827.4V666.6c0-15.2-12.3-27.6-27.6-27.6s-27.6,12.3-27.6,27.6v119.5H652c-15.2,0-27.6,12.3-27.6,27.6c0,15.2,12.3,27.6,27.6,27.6h120.3v121.2c0,15.2,12.3,27.6,27.6,27.6s27.6-12.3,27.6-27.6V841.2h120.5c15.2,0,27.6-12.3,27.6-27.6C975.4,798.4,963.1,786.1,947.9,786.1z" />
                        </g>
                    </svg>Follow</button>
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
                        <p><span>Full Name:</span> {{ store.viwedProfile.fullName }} </p>
                        <p><span>User Name:</span> {{ store.viwedProfile.username }}</p>
                        <p><span>Blog Name:</span> {{ store.viwedProfile.blogName }}</p>
                        <p v-if="store.viwedProfile.settings.privacySettings.showEmail"><span>Email:</span> {{
                            store.viwedProfile.email }}</p>
                        <p><span>Location:</span> {{ store.viwedProfile.location }}</p>
                        <p><span>Birthday:</span> {{ store.viwedProfile.dateOfBirth }}</p>
                        <p><span>Gender:</span> {{ store.viwedProfile.gender }}</p>
                        <p v-if="store.viwedProfile.interests.length > 0"><span>Interests:</span> {{
                            store.viwedProfile.interests.join(',') }} </p>
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
                                            store.viwedProfile.blogName
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

.copySection {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: absolute;
}

.copySection button {
    outline: none;
    border: none;
    cursor: pointer;
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
    position: fixed;
    background-color: #333333;
    z-index: 909090;
}

header button:first-of-type {
    border-radius: 10px;
    padding: 0 10px;
}

header button:hover {
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
}

.body {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 0;
    width: 100%;
    padding-top: 65px;
    height: 100vh;
}

.imageCon {
    margin-bottom: 0.5rem;
    border-radius: 50%;
    display: flex;
    flex-direction: row;
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
}

.btns button {
    padding: 5px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-weight: 600;
}

.NightApp button svg *,
.NightApp .copySection button svg * {
    fill: #fff;
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

button {
    cursor: pointer;
}
</style>