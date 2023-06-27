<script setup lang="ts">
import { type Ref, ref, onUnmounted } from 'vue'
import { useChatterStore } from '@/stores/store';
import { useRouter } from 'vue-router';
import { signOut } from 'firebase/auth'
import useLoadingPage from "@/composables/useLoadingPage.vue";
import { doc, getFirestore, updateDoc } from 'firebase/firestore'
import useUserDetails from '@/composables/useUserDetails.vue'
import SignOut from '@/composables/useSignOut.vue';
import useAuthentication from '@/composables/useAuth.vue'

useUserDetails()

const { app, auth } = useAuthentication()

const db = getFirestore(app)

const router = useRouter();

const store = useChatterStore()

const showMoreAccount: Ref<boolean> = ref(false)

const isLoading: Ref<boolean> = ref(true)

store.sidebar = false

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
        if (store.signedUser.id === undefined && store.signedUser.username === undefined) {
            router.push({ name: 'NetworkError', query: { redirect: `${router.currentRoute.value.path}` } })
        }
        else if (store.signedUser.id !== undefined && store.signedUser.username === '') {
            console.log('User registration not finished... Logging out user.....')
            SignOut()
            store.authenticated = false
            router.push('/login')
        }
        else {
            isLoading.value = false
        }
    }
    else {
        isLoading.value = false
    }
}, 5000)

onUnmounted(() => {
    clearTimeout(id)
})

function Signout() {
    try {
        signOut(auth).then(() => {
            const logoutId = store.signedUser.id
            const logOutUser = doc(db, 'users', logoutId)
            store.signedUser = {}
            updateDoc(logOutUser, {
                isLogined: false
            })
            router.push('/login')
        })
    }
    catch (error) {
        console.log(error)
    }
}

</script>
<template>
    <useLoadingPage v-if="isLoading" :action-name="'Loading...'"/>
    <main v-else id="HomePage">
        <header>
            <button id="sidebarOpenBtn" @click.prevent="store.toggleSidebar()" title="Open sidebar"><svg xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24" fill="#ffffff" width="24px" height="24px">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 18h18v-2H3v2zM3 13h18v-2H3v2zM3 6v2h18V6H3z" />
                </svg>
            </button>
            <h1>Chatter</h1>
            <button :title="store.themeDetails.title" id="themeBtn" @click="store.changeTheme">
                <div id="themeImgContainer"><img :src="store.themeDetails.img" /></div>
            </button>
        </header>

        <RouterView></RouterView>

        <nav v-show="store.sidebar" class="sidebar">
            <button @click.prevent="store.toggleSidebar()" id="togglebtn" title="Close sidebar"><svg xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24" fill="#ffff" width="24px" height="24px">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path
                        d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
                </svg></button> <!--open and close sidebar-->
            <section class="profileSection" v-if="store.signedUser.isLogined">
                <RouterLink to="/userProfile" id="userProfile">
                    <button>
                        <img :src="store.signedUser.profilePicture" height="40" :alt="store.signedUser.fullName + 'profile pic'"/>
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

            <section v-else id="loginSection">
                <RouterLink to="/login"><button>Join/Login</button></RouterLink>
            </section>
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
                <RouterLink to="/userAnalysis"><button>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffff" width="24px" height="24px">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path
                                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-.5-10h-3v2h3v-2zm0 4h-3v6h3v-6z" />
                        </svg>
                        User Analysis
                    </button></RouterLink>
                <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffff" width="24px" height="24px">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path
                            d="M19.21 12.04c.04-.32.07-.65.07-.98s-.03-.66-.07-.98l2.03-1.58c.2-.16.26-.44.13-.67l-2-3.46a.491.491 0 0 0-.62-.19l-2.5 1c-.47-.39-.96-.73-1.48-.98l-.38-2.63a.496.496 0 0 0-.5-.42h-4a.5.5 0 0 0-.5.42l-.38 2.63c-.52.25-1.01.59-1.48.98l-2.5-1a.49.49 0 0 0-.62.19l-2 3.46c-.13.23-.07.51.13.67l2.03 1.58c-.04.32-.07.65-.07.98s.03.66.07.98l-2.03 1.58c-.2.16-.26.44-.13.67l2 3.46c.13.23.41.31.63.18l2.5-1c.47.39.96.73 1.48.98l.38 2.63c.03.18.17.32.35.36h4c.18-.04.32-.17.35-.36l.38-2.63c.52-.25 1.01-.59 1.48-.98l2.5 1c.22.09.5.01.63-.18l2-3.46c.13-.23.07-.51-.13-.67l-2.03-1.58zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" />
                    </svg>

                    General settings</button>
                <button id="signOutBtn" @click.prevent="Signout()"><svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24" fill="#ffff" width="24px" height="24px">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M14 5l-1.41 1.41L16.17 11H4v2h12.17l-3.58 3.59L14 19l6-6z" />
                    </svg>Sign Out</button>
            </section>

            <section id="navFooter">
                <button>Report Bug</button>
                <p>&copy; Olaegbe Abdul-Rahmon 2023</p>
            </section>
        </nav>

        <section id="navigators">
            <RouterLink to="/home"><button>Home</button></RouterLink>
            <RouterLink to="/search"><button>Search</button></RouterLink>
            <RouterLink to="/notification"><button id="notification-button">Notification<span class="dot" v-show="!store.signedUser.isLogined"></span></button>
            </RouterLink>
        </section>
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

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    height: 10vh;
    background-color: #333333;
    color: #efefef;
}

header #sidebarOpenBtn {
    background-color: transparent;
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
    padding-top: 2rem;
}

#loginSection{
    position: absolute;
    top: 40%;
}
#loginSection button{
    background-color: transparent;
    color: #efefef;
    border: none;
    padding: 0.5rem 1rem;
    margin: 0.5rem 0;
    cursor: pointer;
    font-size: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border: 5px outset #3333;
    font-weight: 600;
}
#loginSection button:hover{
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

#notification-button .dot {
    position: absolute;
    top: 0;
    right: -3px;
    width: 10px;
    height: 10px;
    background-color: red;
    border-radius: 50%;
}

.sidebar button {
    background-color: #eaeaea;
    color: #333333;
    padding: 5px;
    border: none;
    border-radius: 5px;
    margin-bottom: 10px;
    font-size: 16px;
    cursor: pointer;
}

.sidebar button:hover {
    background-color: #dddddd;
}

.sidebar #togglebtn {
    background-color: transparent;
    border: none;
    border-radius: 5px;
    border: 2px outset #333333;
    padding: 5px;
    font-size: 16px;
    margin-bottom: 30px;
}

.sidebar #togglebtn:hover {
    background-color: #5555;
}

.sidebar p {
    font-size: 12px;
    color: #aaaaaa;
    margin-top: 20px;
    text-align: center;
}

.profileSection {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
    width: 100%;
    justify-content: space-between;
    background-color: transparent;
}

.profileSection img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
    border: 2px solid #efefef;
    background-color: #efefef;
}

.profileSection span {
    font-size: 12px;
    color: #fff;
    text-transform: capitalize;
}

.profileSection button {
    background-color: transparent;
    color: #333333;
    border: none;
    border-radius: 5px;
    padding: 5px;
    font-size: 12px;
    cursor: pointer;
    display: flex;
    align-items: center;
}

.profileSection a button:hover {
    background-color: #dddddd;
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
    font-size: 12px;
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
}</style>