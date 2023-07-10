<script setup lang="ts">
import { onUnmounted, ref, type Ref } from 'vue';
import { useRouter } from 'vue-router';
import { useChatterStore } from '@/stores/store';
import { collection, query, where, getDocs, getFirestore, setDoc, doc } from "firebase/firestore";
import { GoogleAuthProvider, signInWithPopup, setPersistence, browserSessionPersistence } from "firebase/auth";
import { getStorage, ref as refFromStorage, getDownloadURL } from "firebase/storage";
import useLoadingPage from "@/composables/useLoadingPage.vue";
import useAuthentication from '@/composables/useAuth.vue';
import axios from 'axios';
import useUserDetails from '@/composables/useUserDetails.vue'

useUserDetails()

type AnyObject = {
    [key: string]: any;
};

const { auth, provider, app } = useAuthentication()
const db = getFirestore(app);
const store = useChatterStore()
const storage = getStorage(app)
const router = useRouter()
const details: AnyObject = ref({})
const isLoading: Ref<boolean> = ref(true)
let timeOut: ReturnType<typeof setTimeout>;

async function getUserDetails(accessToken: any, result: any) {
    const accessUrl = `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${accessToken}`
    axios.post('/https://inspiring-meerkat-ba9084.netlify.app/.netlify/functions/access', { accessUrl }).then((res) => {
        details.value = res.data.details
        const q = query(collection(db, 'users'), where('email', '==', `${details.value.email}`))
        getDocs(q).then((document) => {
            const ChatterAcc = document?.docs
            if (ChatterAcc.length < 1 && details.value.email) {
                const NewUser = store.createUser(details.value.email)

                const firstName = details.value.given_name !== undefined ? details.value.given_name : ''
                const lastName = details.value.family_name !== undefined ? details.value.family_name : ''

                NewUser.fullName = firstName + ' ' + lastName

                NewUser.id = result.user.uid

                const unknownAvatar = refFromStorage(storage, "ChatterAppFiles/avatar/unknown/UnkownUser.png")

                getDownloadURL(unknownAvatar).then((url) => {
                    NewUser.profilePicture = url
                }).finally(() => {
                    setDoc(doc(db, "users", `${result.user.uid}`), { ...NewUser }).then(() => {
                        isLoading.value = true
                        router.push('/additionalData')
                    })
                })
            }
            else if (ChatterAcc.length > 0 && ChatterAcc[0].data().username.trim() !== '') {
                isLoading.value = true
                router.push('/home')
            }
            else if (ChatterAcc.length > 0 && ChatterAcc[0].data().username === '') {
                router.push('/additionalData')
            }
        })
    }).catch(() => {
        const warningShow = document.getElementById('warningShow') as HTMLDivElement
        if (warningShow) {
            warningShow.style.display = 'flex'
            warningShow.textContent = 'Something went wrong, check your internet connection and try again.'
        }
    })
}

function LoginWithGmail() {
    setPersistence(auth, browserSessionPersistence)
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            getUserDetails(credential?.accessToken, result)
        }).catch(() => {
            const warningShow = document.getElementById('warningShow') as HTMLDivElement
            if (warningShow) {
                warningShow.style.display = 'flex'
                warningShow.textContent = 'Something went wrong, check your internet connection and try again.'
                timeOut = setTimeout(() => {
    const warningShow = document.getElementById('warningShow') as HTMLDivElement
                warningShow.style.display = 'none'
}, 3000)
            }
        })
}

timeOut = setTimeout(() => {
    isLoading.value = false
}, 3000)

onUnmounted(() => {
    clearTimeout(timeOut)
    const warning = document.getElementById('warningShow') as HTMLDivElement
    if (warning) {
        warning.style.display = 'none'
    }
})

</script>
<template>
    <useLoadingPage v-if="isLoading" :actionName="'Loading...'" />
    <main v-else id="JoinPage">
        <header>
            <RouterLink to="/"><button>Home</button></RouterLink>
            <button :title="store.themeDetails.title" id="themeBtn" @click="store.changeTheme">
                <div id="themeImgContainer"><img :src="store.themeDetails.img" /></div>
            </button>
        </header>
        <div id="Authenticate">
            <div v-if="store.authenticated && store.signedUser.username !== '' && store.signedUser.username !== undefined"
                class="section">
                <h2>You are Logged In</h2>
            </div>
            <div v-else class="section">
                <button class="google-button" @click="LoginWithGmail()">
                    <svg class="google-icon" viewBox="0 0 533.5 544.3">
                        <path fill="#4285F4"
                            d="M533.5 278.2c0-18.3-1.5-36.3-4.4-53.8H272.2v98.7h139.2c-6.1 32.3-24.1 59.6-51 77.9v65h82.7c48.6-44.8 76.3-110.8 76.3-187.8z" />
                        <path fill="#34A853"
                            d="M272.2 544.3c69.3 0 127.4-22.6 169.9-61.6l-82.7-65c-22.9 15.4-52.5 24.4-87.2 24.4-66.8 0-123.4-45.1-143.9-105.6H28.9v65c42.2 83.2 127.1 137.2 227.6 137.2z" />
                        <path fill="#FBBC05"
                            d="M128.3 323.9c-7.6-22.9-7.6-47.6 0-70.6V187h-87.2c-26.4 51.2-26.4 111.4 0 162.6l87.2-65z" />
                        <path fill="#EB4335"
                            d="M272.2 106.7c37.6 0 71.6 12.9 98.3 34l73.7-73.7C399.6 19.7 339.2 0 272.2 0 171.7 0 86.8 54 44.6 135.1l87.6 65c20.5-60.5 76.9-103.4 140-103.4z" />
                    </svg>
                    Continue with Google
                </button>
            </div>
        </div>
        <section id="footer">
            &copy; Olaegbe Abdul-Rahmon Pelumi 2023
        </section>
        <div id="warningShow"></div>
    </main>
</template>
<style scoped>
#JoinPage {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

#JoinPage header {
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    margin: 0;
}

#JoinPage header button {
    margin: 10px;
}

.themeBtn {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
}

.themeBtn img {
    width: 24px;
    height: 24px;
}

/* Styles for the authentication section */
#Authenticate {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    height: 80%;
    text-align: center;
}

/* Styles for the logged-in section */
#Authenticate .section {
    padding: 3rem;
}

/* Styles for the "You are Logged In" heading */
#Authenticate h2 {
    margin-bottom: 1rem;
}

/* Styles for the buttons */
button {
    padding: 0.5rem 1rem;
    border-radius: 10px;
    margin-right: 1rem;
    cursor: pointer;
}

/* Styles for the footer section */
#footer {
    height: 5%;
}

.google-button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    padding: 0.5rem 1rem;
    font-weight: bold;
    cursor: pointer;
}

.google-icon {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.5rem;
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

/* Additional styles to adjust the size of the button and icon as needed */
</style>
