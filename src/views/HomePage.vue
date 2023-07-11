<script setup lang="ts">
import { type Ref, ref, onUnmounted, onMounted } from 'vue'
import { useChatterStore } from '@/stores/store';
import { useRouter } from 'vue-router';
import { signOut } from 'firebase/auth'
import useLoadingPage from "@/composables/useLoadingPage.vue";
import { doc, getFirestore, updateDoc } from 'firebase/firestore'
import useUserDetails from '@/composables/useUserDetails.vue'
import SignOut from '@/composables/useSignOut.vue';
import useAuthentication from '@/composables/useAuth.vue'


const { app, auth } = useAuthentication()

const db = getFirestore(app)

const router = useRouter();

const store = useChatterStore()

const showMoreAccount: Ref<boolean> = ref(false)

const isLoading: Ref<boolean> = ref(true)

onMounted(() => {
    useUserDetails()
    store.sidebar = false
})

function toggleSeeMore() {
    showMoreAccount.value = !showMoreAccount.value
    const svg = document.querySelector('#moreOptionbtn svg')
    if (svg?.classList.contains('rotate')) {
        svg?.classList.remove('rotate')
    }
    else {
        svg?.classList.add('rotate')
    }
}

let id = setTimeout(() => {
    if (store.authenticated === true) {
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
        else if (store.signedUser.id === undefined && store.signedUser.username === undefined) {
            const warningShow = document.getElementById('warningShow') as HTMLDivElement
            warningShow.style.display = 'flex'
            warningShow.textContent = 'An error occurred, check your internet connection and try reloading.'
        }
        else {
            isLoading.value = false
        }
    }
    else {
        isLoading.value = false
        clearTimeout(id)
    }
}, 5000)

onUnmounted(() => {
    clearTimeout(id)
    const warning = document.getElementById('warningShow') as HTMLDivElement
    if(warning){
        warning.style.display = 'none'
    }
})

function Signout() {
    try {
        signOut(auth).then(() => {
            const logoutId = store.signedUser.id
            const logOutUser = doc(db, 'users', logoutId)
            updateDoc(logOutUser, {
                isLogined: false
            })
            router.push('/login')
            store.signedUser = {}
        })
    }
    catch (error) {
        console.log(error)
    }
}

</script>
<template>
    <useLoadingPage v-if="isLoading" :action-name="'Loading...'" />
    <main v-else id="HomePage">
        <header>
            <button id="sidebarOpenBtn" @click.prevent="store.toggleSidebar()" title="Open sidebar"><svg
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff" width="24px" height="24px">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 18h18v-2H3v2zM3 13h18v-2H3v2zM3 6v2h18V6H3z" />
                </svg>
            </button>
            <RouterLink to="/write" :class="[{ writeBtn: true }, { Novisibility: !store.signedUser.isLogined && store.signedUser.length > 0 }]">
                <button>Write</button></RouterLink>
            <h1>Chatter</h1>
            <button :title="store.themeDetails.title" id="themeBtn" @click="store.changeTheme">
                <div id="themeImgContainer"><img :src="store.themeDetails.img" /></div>
            </button>
        </header>

        <nav v-if="store.sidebar" class="sidebar">
            <button @click.prevent="store.toggleSidebar()" id="togglebtn" title="Close sidebar"><svg
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffff" width="24px" height="24px">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path
                        d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
                </svg></button> <!--open and close sidebar-->
            <section class="profileSection" v-if="store.signedUser.isLogined">
                <RouterLink to="/userProfile" id="userProfile">
                    <button>
                        <div class="imgCon" :style="{ backgroundImage: `url(${store.signedUser.profilePicture})` }"></div>
                        <span>{{ (store.signedUser.username) }}</span>
                    </button>
                </RouterLink>

                <button v-if="store.signedUser.isLogined" @click.prevent="toggleSeeMore" id="moreOptionbtn">
                    <svg fill="#ffffff" height="15px" width="15px" version="1.1" id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330"
                        xml:space="preserve">

                        <g id="SVGRepo_bgCarrier" stroke-width="0" />

                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                        <g id="SVGRepo_iconCarrier">
                            <path id="XMLID_225_"
                                d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z" />
                        </g>
                    </svg>
                </button> <!-- buttton for more accounts option -->
            </section>

            <div v-else class="nav-nologined-btn">
                <section id="loginSection">
                    <RouterLink to="/login"><button>Join/Login</button></RouterLink>
                </section>

                <RouterLink to="/explore" id="exploreBtn" v-if="!store.signedUser.isLogined"> <button> <svg height="24px"
                            width="24px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-41.56 -41.56 498.71 498.71"
                            xml:space="preserve" fill="#000000">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <g>
                                    <path style="fill:none;"
                                        d="M207.795,24C106.451,24,24,106.45,24,207.793c0,101.346,82.451,183.797,183.795,183.797 c101.344,0,183.795-82.451,183.795-183.797C391.59,106.45,309.139,24,207.795,24z M322.508,109.027l-0.098,0.181 c-0.137,0.283-0.287,0.558-0.445,0.83l-72.305,134.701c-1.115,2.073-2.814,3.773-4.889,4.887l-135.131,72.572 c-0.048,0.026-0.096,0.053-0.145,0.078l-0.051,0.027l-0.002-0.003c-3.391,1.735-7.548,1.836-11.156-0.105 c-1.06-0.569-2-1.275-2.809-2.085c-3.648-3.648-4.648-9.389-2.08-14.166l72.596-135.034c1.114-2.073,2.813-3.773,4.887-4.888 l135.065-72.625c5.838-3.139,13.113-0.952,16.252,4.887c1.861,3.463,1.836,7.427,0.299,10.738L322.508,109.027z">
                                    </path>
                                    <polygon style="fill:none;" points="133.371,282.278 219.172,236.141 179.502,196.47 ">
                                    </polygon>
                                    <path style="fill:#fff;"
                                        d="M207.795,0C93.217,0,0,93.216,0,207.793C0,322.372,93.217,415.59,207.795,415.59 c114.578,0,207.795-93.218,207.795-207.797C415.59,93.216,322.374,0,207.795,0z M207.795,391.59 C106.451,391.59,24,309.139,24,207.793C24,106.45,106.451,24,207.795,24C309.139,24,391.59,106.45,391.59,207.793 C391.59,309.139,309.139,391.59,207.795,391.59z">
                                    </path>
                                    <polygon style="fill:#0b63d5;" points="236.153,219.179 282.282,133.371 196.48,179.507 ">
                                    </polygon>
                                    <path style="fill:#fff;"
                                        d="M322.198,98.284c-3.139-5.839-10.414-8.025-16.252-4.887l-135.065,72.625 c-2.073,1.115-3.773,2.814-4.887,4.888L93.398,305.945c-2.568,4.777-1.568,10.518,2.08,14.166c0.809,0.81,1.748,1.516,2.809,2.085 c3.608,1.94,7.766,1.84,11.156,0.105l0.002,0.003l0.051-0.027c0.049-0.025,0.097-0.052,0.145-0.078l135.131-72.572 c2.074-1.114,3.773-2.813,4.889-4.887l72.305-134.701c0.158-0.272,0.309-0.547,0.445-0.83l0.098-0.181l-0.012-0.004 C324.034,105.711,324.059,101.747,322.198,98.284z M133.371,282.278l46.131-85.808l39.67,39.671L133.371,282.278z M236.153,219.179 l-39.672-39.672l85.801-46.136L236.153,219.179z">
                                    </path>
                                </g>
                            </g>
                        </svg>

                        Explore
                    </button>
                </RouterLink>
            </div>

            <!--If more accounts button is clicked-->
            <section v-if="showMoreAccount" id="MoreAccounts">
                <section>
                    <span>Reader</span>
                    <span v-if="store.asReader === true">Current</span>
                </section>

                <section>
                    <span>Author</span>
                    <span v-if="store.asReader === false">Current</span>
                </section>

                <button @click.prevent="store.toggleAccountType" id="switchBtn">Switch Account</button>
            </section>

            <!--To be shown if signedUser is login-->
            <section class="otherNavDetails" v-if="store.signedUser.isLogined">
                <RouterLink to="/userAnalysis">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffff" width="24px" height="24px">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path
                                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-.5-10h-3v2h3v-2zm0 4h-3v6h3v-6z" />
                        </svg>
                        User Analysis
                    </button>
                </RouterLink>
                <RouterLink to="/trendings"> <button>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-trending-up">
                            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                            <polyline points="17 6 23 6 23 12"></polyline>
                        </svg>
                        Trending
                    </button>
                </RouterLink>
                <RouterLink to="/bookmarks">
                    <button>
                        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M15.75 5H8.25C7.55964 5 7 5.58763 7 6.3125V19L12 15.5L17 19V6.3125C17 5.58763 16.4404 5 15.75 5Z"
                                    stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></path>
                            </g>
                        </svg>
                        Bookmarks
                    </button>
                </RouterLink>

                <button id="signOutBtn" @click.prevent="Signout()">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffff" width="24px" height="24px">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M14 5l-1.41 1.41L16.17 11H4v2h12.17l-3.58 3.59L14 19l6-6z" />
                    </svg>
                    Sign Out
                </button>
            </section>
        </nav>

        <nav class="sidebar2">
            <section class="profileSection" v-if="store.signedUser.isLogined">
                <RouterLink to="/userProfile" id="userProfile">
                    <button>
                        <div class="imgCon" :style="{ backgroundImage: `url(${store.signedUser.profilePicture})` }"></div>
                        <span>{{ (store.signedUser.username) }}</span>
                    </button>
                </RouterLink>

                <button v-if="store.signedUser.isLogined" @click.prevent="toggleSeeMore" id="moreOptionbtn">
                    <svg fill="#ffffff" height="15px" width="15px" version="1.1" id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330"
                        xml:space="preserve">

                        <g id="SVGRepo_bgCarrier" stroke-width="0" />

                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                        <g id="SVGRepo_iconCarrier">
                            <path id="XMLID_225_"
                                d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z" />
                        </g>
                    </svg>
                </button> <!-- buttton for more accounts option -->
            </section>

            <div v-else class="nav-nologined-btn">
                <section id="loginSection">
                    <RouterLink to="/login"><button>Join/Login</button></RouterLink>
                </section>

                <RouterLink to="/explore" id="exploreBtn" v-if="!store.signedUser.isLogined"> <button> <svg height="24px"
                            width="24px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-41.56 -41.56 498.71 498.71"
                            xml:space="preserve" fill="#000000">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <g>
                                    <path style="fill:none;"
                                        d="M207.795,24C106.451,24,24,106.45,24,207.793c0,101.346,82.451,183.797,183.795,183.797 c101.344,0,183.795-82.451,183.795-183.797C391.59,106.45,309.139,24,207.795,24z M322.508,109.027l-0.098,0.181 c-0.137,0.283-0.287,0.558-0.445,0.83l-72.305,134.701c-1.115,2.073-2.814,3.773-4.889,4.887l-135.131,72.572 c-0.048,0.026-0.096,0.053-0.145,0.078l-0.051,0.027l-0.002-0.003c-3.391,1.735-7.548,1.836-11.156-0.105 c-1.06-0.569-2-1.275-2.809-2.085c-3.648-3.648-4.648-9.389-2.08-14.166l72.596-135.034c1.114-2.073,2.813-3.773,4.887-4.888 l135.065-72.625c5.838-3.139,13.113-0.952,16.252,4.887c1.861,3.463,1.836,7.427,0.299,10.738L322.508,109.027z">
                                    </path>
                                    <polygon style="fill:none;" points="133.371,282.278 219.172,236.141 179.502,196.47 ">
                                    </polygon>
                                    <path style="fill:#fff;"
                                        d="M207.795,0C93.217,0,0,93.216,0,207.793C0,322.372,93.217,415.59,207.795,415.59 c114.578,0,207.795-93.218,207.795-207.797C415.59,93.216,322.374,0,207.795,0z M207.795,391.59 C106.451,391.59,24,309.139,24,207.793C24,106.45,106.451,24,207.795,24C309.139,24,391.59,106.45,391.59,207.793 C391.59,309.139,309.139,391.59,207.795,391.59z">
                                    </path>
                                    <polygon style="fill:#0b63d5;" points="236.153,219.179 282.282,133.371 196.48,179.507 ">
                                    </polygon>
                                    <path style="fill:#fff;"
                                        d="M322.198,98.284c-3.139-5.839-10.414-8.025-16.252-4.887l-135.065,72.625 c-2.073,1.115-3.773,2.814-4.887,4.888L93.398,305.945c-2.568,4.777-1.568,10.518,2.08,14.166c0.809,0.81,1.748,1.516,2.809,2.085 c3.608,1.94,7.766,1.84,11.156,0.105l0.002,0.003l0.051-0.027c0.049-0.025,0.097-0.052,0.145-0.078l135.131-72.572 c2.074-1.114,3.773-2.813,4.889-4.887l72.305-134.701c0.158-0.272,0.309-0.547,0.445-0.83l0.098-0.181l-0.012-0.004 C324.034,105.711,324.059,101.747,322.198,98.284z M133.371,282.278l46.131-85.808l39.67,39.671L133.371,282.278z M236.153,219.179 l-39.672-39.672l85.801-46.136L236.153,219.179z">
                                    </path>
                                </g>
                            </g>
                        </svg>

                        Explore
                    </button>
                </RouterLink>
            </div>

            <!--If more accounts button is clicked-->
            <section v-if="showMoreAccount" id="MoreAccounts">
                <section>
                    <span>Reader</span>
                    <span v-if="store.asReader === true">Current</span>
                </section>

                <section>
                    <span>Author</span>
                    <span v-if="store.asReader === false">Current</span>
                </section>

                <button @click.prevent="store.toggleAccountType" id="switchBtn">Switch Account</button>
            </section>

            <!--To be shown if signedUser is login-->
            <section class="otherNavDetails" v-if="store.signedUser.isLogined">
                <RouterLink to="/userAnalysis">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffff" width="24px" height="24px">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path
                                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-.5-10h-3v2h3v-2zm0 4h-3v6h3v-6z" />
                        </svg>
                        User Analysis
                    </button>
                </RouterLink>
                <RouterLink to="/trendings"> <button>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-trending-up">
                            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                            <polyline points="17 6 23 6 23 12"></polyline>
                        </svg>
                        Trending
                    </button>
                </RouterLink>
                <RouterLink to="/bookmarks">
                    <button>
                        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M15.75 5H8.25C7.55964 5 7 5.58763 7 6.3125V19L12 15.5L17 19V6.3125C17 5.58763 16.4404 5 15.75 5Z"
                                    stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></path>
                            </g>
                        </svg>
                        Bookmarks
                    </button>
                </RouterLink>

                <button id="signOutBtn" @click.prevent="Signout()">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffff" width="24px" height="24px">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M14 5l-1.41 1.41L16.17 11H4v2h12.17l-3.58 3.59L14 19l6-6z" />
                    </svg>
                    Sign Out
                </button>
            </section>
        </nav>

        <RouterView></RouterView>

        <section id="navigators">
            <RouterLink to="/home"><button>Home</button></RouterLink>
            <RouterLink to="/search"><button>Search</button></RouterLink>
            <RouterLink to="/notification" v-show="!store.signedUser.isLogined"><button
                    id="notification-button">Notification<span class="dot"
                        v-show="!store.signedUser.isLogined"></span></button>
            </RouterLink>
        </section>

        <div id="warningShow"></div>
    </main>
</template>
<style scoped>
#HomePage {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    position: relative;
}

.Novisibility {
    visibility: hidden;
}

.sidebar2 {
    display: none;
    max-width: 250px;
    align-items: center;
    justify-content: center;
    padding-top: 0;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    height: 50px;
    background-color: #333333;
    color: #efefef;
    width: 100vw;
    position: fixed;
    border-bottom: 1px solid #ccc;
    z-index: 9999;
}

header #sidebarOpenBtn {
    background-color: transparent;
}
header button{
    cursor: pointer;
}

.imgCon {
    width: 50px;
    height: 50px;
    background-color: #efefef;
    border-radius: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    margin-right: 10px;
}

nav {
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 200px;
    top: 0;
    background-color: #333333;
    padding-top: 55px;
    z-index: 999;
    max-width: 30%;
}

#loginSection button,
#exploreBtn button {
    background-color: transparent;
    color: #efefef;
    border: none;
    padding: 0.5rem 1rem;
    margin: 0.5rem 0;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border: 5px outset #3333;
    font-weight: 600;
}

.nav-nologined-btn {
    align-self: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

#loginSection button:hover,
#exploreBtn button:hover {
    background-color: #5555;
}

nav #navFooter {
    position: absolute;
    bottom: 50px;
    width: 100%;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #333333;
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

#navigators button:hover, header button:hover {
    background-color: #007bff;
    color: #fff;
}

#navigators a {
    text-decoration: none;
    color: #000;
}

#notification-button {
    position: relative;
}

#notification-button .dot {
    position: absolute;
    top: 0;
    right: -3px;
    width: 10px;
    height: 10px;
    background-color: red;
    border-radius: 50%;
}

nav button {
    background-color: #eaeaea;
    color: #333333;
    padding: 5px;
    border: none;
    border-radius: 5px;
    margin-bottom: 10px;
    cursor: pointer;
}

nav #togglebtn {
    background-color: transparent;
    border: none;
    border-radius: 5px;
    border: 2px outset #333333;
    padding: 5px;
    margin-bottom: 30px;

}

nav #togglebtn:hover {
    background-color: #5555;
}

nav p {
    color: #aaaaaa;
    margin-top: 20px;
    text-align: center;
}

.profileSection {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: space-around;
    background-color: transparent;
    align-self: flex-start;
    justify-self: center;
}

.profileSection span {
    color: #fff;
    text-transform: capitalize;
}

.profileSection button {
    background-color: transparent;
    color: #333333;
    border: none;
    border-radius: 5px;
    padding: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
}

.profileSection a button:hover {
    background-color: grey;
}

.profileSection button:hover svg {
    background-color: #dddddd;
    fill: black;
}

.profileSection a {
    text-decoration: none;
    color: #fff;
}

#MoreAccounts {
    display: flex;
    flex-direction: column;
    border-top: 2px solid #ccc;
    border-bottom: 2px solid #ccc;
    width: 100%;
    padding: 5px;
    margin-bottom: 5px;
    align-self: flex-start;
    justify-content: flex-start;
}

#MoreAccounts section {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    width: 100%;
    background-color: transparent;
    margin-bottom: 5px;
}

#MoreAccounts section span:first-of-type {
    font-size: 20px;
    color: #fff;
}

#MoreAccounts section span:nth-child(2) {
    font-size: 12px;
    color: #fff;
    background-color: blue;
    padding: 2px;
    border-radius: 5px;
}

.rotate {
    transform: rotate(180deg);
}

#switchBtn {
    align-self: center;
    width: 70%;
    margin-bottom: 5px;
}

.otherNavDetails {
    width: 100%;
}

.otherNavDetails button {
    width: 100%;
    border: none;
    border-radius: 0px;
    padding: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    font-weight: bolder;
    background-color: transparent;
    color: #efefef;
    margin: 0;
}

.otherNavDetails button:hover {
    background-color: #dddddd;
    color: #333333;
}

.otherNavDetails button:hover svg {
    background-color: #dddddd;
    fill: black;
}

.otherNavDetails a {
    text-decoration: none;
}

.otherNavDetails button svg {
    margin-right: 10px;
}

.fill {
    fill: #fff;
}

.fill:hover {
    fill: #000;
}

@media screen and (max-width: 767px) {

    nav,
    .sidebar2 {
        max-width: 250px;
        z-index: 10000;
    }

    #navigators {
        z-index: 10001;
    }

    .writeBtn {
        display: none;
    }

    #sidebarOpenBtn {
        display: block;
    }

}

@media screen and (min-width: 768px) {
    #HomePage {
        flex-direction: row;
    }

    .sidebar2 {
        position: sticky;
        display: flex;
        width: 30%;
    }

    .writeBtn {
        display: block;
    }

    .writeBtn button {
        background-color: transparent;
        color: #efefef;
        border: 2px solid #ccc;
        padding: 0.3rem;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        font-weight: 600;
        border-radius: 30%;
    }

    #sidebarOpenBtn {
        display: none;
    }
}

@media screen and (min-width: 768px) and (max-width: 991px) {}

@media screen and (min-width: 992px) {}

@media screen and (min-width: 1200px) {}</style>