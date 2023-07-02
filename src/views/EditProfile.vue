<script setup lang="ts">
import { ref, type Ref, onUnmounted, watchEffect } from 'vue'
import { doc, updateDoc, getFirestore } from 'firebase/firestore'
import { getStorage, ref as refFromStorage, uploadBytes, getDownloadURL } from "firebase/storage";
import { useChatterStore } from '@/stores/store';
import { useRouter } from 'vue-router';
import useAuthentication from '@/composables/useAuth.vue'
import useUserDetails from '@/composables/useUserDetails.vue'
import SignOut from '@/composables/useSignOut.vue';
import useLoadingPage from '@/composables/useLoadingPage.vue';

useUserDetails()

const { app } = useAuthentication()
const router = useRouter()
const store = useChatterStore()
const db = getFirestore(app)
const storage = getStorage(app)

function backInHistory() {
    router.go(-1)
}

const fullname: Ref<string> = ref('')
const username: Ref<string> = ref('')
const bio: Ref<string> = ref('')
const blogname: Ref<string> = ref('')
const interests: Ref<string> = ref('')
const gender: Ref<string> = ref('')
const country: Ref<string> = ref('')
const Birthday: Ref<string> = ref('')
const showEmail: Ref<boolean> = ref(false)
const file = ref<File | null>(null)
const imageShow = ref<HTMLDivElement | null>(null)

const isLoading: Ref<boolean> = ref(true)

function addIamge() {
    let inputImg = document.getElementById('inputImg') as HTMLInputElement
    file.value = inputImg.files![0]
    let reader = new FileReader()
    reader.onload = function () {
        (imageShow.value as HTMLDivElement).style.backgroundImage = `url(${reader.result})`
    }
    reader.readAsDataURL(file.value)
}

function updateUser() {
    const userRef = doc(db, "users", `${store.signedUser.id}`);
    document.getElementById('updateBtn')?.setAttribute('disabled', 'true')
    if (file.value !== null) {
        const imageRef = refFromStorage(storage, `ChatterAppFiles/avatar/${store.signedUser.id}/${file.value!.name}`)
        uploadBytes(imageRef, file.value!).then(() => {
            getDownloadURL(imageRef).then((url) => {
                updateDoc(userRef, {
                    profilePicture: url,
                    bio: bio.value,
                    blogName: blogname.value,
                    dateOfBirth: Birthday.value,
                    fullName: fullname.value,
                    gender: gender.value,
                    interests: interests.value.split(','),
                    location: country.value,
                    username: username.value,
                    settings: {
                        privacySettings: {
                            showEmail: showEmail.value
                        }
                    }
                })
            })
        }).then(() => {
            router.push('/userProfile')
        }).catch((err) => {
            console.log(err)
        }).finally(()=>{
            document.getElementById('updateBtn')?.removeAttribute('disabled')
        })
    }
    else {
        updateDoc(userRef, {
            bio: bio.value,
            blogName: blogname.value,
            dateOfBirth: Birthday.value,
            fullName: fullname.value,
            gender: gender.value,
            interests: interests.value.split(','),
            location: country.value,
            username: username.value,
            settings: {
                privacySettings: {
                    showEmail: showEmail.value
                }
            }
        }).then(() => {
            router.push('/userProfile')
        }).catch((err) => {
            console.log(err)
        }).finally(()=>{
            document.getElementById('updateBtn')?.removeAttribute('disabled')
        })
    }
}


watchEffect(() => {
    if (imageShow.value) {
        imageShow.value.style.backgroundImage = `url(${store.signedUser.profilePicture})`
    }
})

let id = setTimeout(() => {

    fullname.value = store.signedUser.fullName
    username.value = store.signedUser.username
    bio.value = store.signedUser.bio
    blogname.value = store.signedUser.blogName
    Birthday.value = store.signedUser.dateOfBirth
    interests.value = store.signedUser.interests.join(',')
    gender.value = store.signedUser.gender
    country.value = store.signedUser.location
    showEmail.value = store.signedUser.settings.privacySettings.showEmail

    if (store.signedUser.id === undefined && store.authenticated === false) {
        router.push('/home')
    }
    else if (store.authenticated === true) {
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
            isLoading.value = false;
        }
    }
    else {
        isLoading.value = false;
    }
}, 5000)

onUnmounted(() => {
    clearTimeout(id)
    const warning = document.getElementById('warningShow') as HTMLDivElement
    warning.style.display = 'none'
})
</script>
<template>
    <!-- <div class="deleteAccount">
        <h3>Delete Account</h3>
        <p>Once you delete your account, there is no going back. Please be certain.</p>
        <button @click="Delete">Delete</button> -->
    <useLoadingPage v-if="isLoading" action-name="Loading data ..." />
    <main v-else>
        <header>
            <button @click.prevent="backInHistory">Back</button>
            <button :title="store.themeDetails.title" id="themeBtn" @click="store.changeTheme">
                <div id="themeImgContainer"><img :src="store.themeDetails.img" /></div>
            </button>
        </header>
        <form class="registration-form" @submit.prevent="updateUser">
            <div class="addNewImage">
                <div ref="imageShow" class="imageShow"></div>
                <label for="inputImg" class="custom-file-input" name="kddjdjdj">Change Image</label>
                <input type="file" @change.prevent="addIamge" id="inputImg" />
            </div>
            <div class="fullName">
                <div class="section">
                    <label for="fullname">Fullname:</label>
                    <input type="text" id="fullname" required autocomplete="" v-model="fullname" />
                </div>
                <span class="required-note">Required**</span>
            </div>
            <div class="username">
                <div class="section">
                    <label for="username">Username:</label>
                    <input type="text" id="username" required autocomplete="username" v-model="username" />
                </div>
                <span class="required-note">Required**</span>
            </div>
            <div class="bio">
                <div>
                    <label for="bio">Bio:</label>
                    <textarea id="bio" v-model="bio" maxlength="300" minlength="50"></textarea>
                </div>
                <span class="required-note">Minimum of 50 characters and maximum of 300 characters **</span>
            </div>
            <div class="blogname section">
                <label for="blogname">Blog Name:</label>
                <input type="text" id="blogname" v-model="blogname" />
            </div>
            <div class="interests">
                <div class="section">
                    <label for="interests">Interests:</label>
                    <input type="text" id="interests" placeholder="Posts tags separate with a comma" v-model="interests" />
                </div>
                <span class="example-note">Example: food, travel, sport, programming</span>
            </div>
            <div class="gender">
                <div class="radioGroup">
                    <h3>Gender:</h3>
                    <input type="radio" value="Male" name="gender" id="male2" required v-model="gender" />
                    <label for="male2">Male</label>
                    <input type="radio" value="Female" name="gender" id="female2" required v-model="gender" />
                    <label for="female2">Female</label>
                </div>
                <span class="required-note">Required**</span>
            </div>
            <section class="birthday">
                <div class="section">
                    <label for="birthday2">Birthday:</label>
                    <input type="date" id="birthday2" required v-model="Birthday" />
                </div>
                <span class="required-note">Required**</span>
            </section>
            <section class="Location">
                <div class="section">
                    <label for="country2"> Country: </label>
                    <input type="text" id="country2" placeholder="Country" required autocomplete="country-name"
                        v-model="country" />
                </div>
                <span class="required-note">Required**</span>
            </section>
            <section class="ShowEmail">
                <label for="showEmail">Show my email address:</label>
                <input type="checkbox" id="showEmail" v-model="showEmail" />
            </section>
            <button type="submit" id="updateBtn">Update</button>
        </form>

    </main>
</template>
<style scoped>
main {
    display: flex;
    flex-direction: column;
    align-items: center;
}

header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 10px;
}

.registration-form {
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 10px;
    width: 320px;
}

.section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.section label {
    width: 30%;
}

.section input {
    width: 70%;
}

#inputImg {
    display: none;
}

.registration-form>* {
    margin-bottom: 15px;
}

.addNewImage {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.imageShow {
    width: 100px;
    height: 100px;
    background-color: #ccc;
    border-radius: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}

.fullName,
.username,
.interests,
.gender,
.birthday,
.Location {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.bio {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.bio div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}

label {
    font-weight: bold;
}

.fullName input,
.username input,
.blogname input,
.interests input,
.birthday input,
.Location input {
    flex: 1;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.bio textarea {
    flex: 1;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
    height: 150px;
    width: 200px;
}

.gender {
    display: flex;
    flex-direction: column;
}

.radioGroup {
    display: flex;
    gap: 1rem;
    margin-top: 0.5rem;
}

.radioGroup input[type="radio"] {
    margin-right: 5px;
}

.required-note {
    color: red;
    font-size: 12px;
    align-self: flex-start;
    margin-top: 5px;
    font-weight: bolder;
}

.example-note {
    font-size: 14px;
    margin-top: 5px;
}

#showEmail {
    margin-top: 5px;
}

.ShowEmail label {
    margin-right: 10px;
}

.custom-file-input {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 4px 8px;
    cursor: pointer;
    font-size: 15px;
    display: inline;
    margin: 10px 0;
}

#updateBtn {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 4px 8px;
    cursor: pointer;
    font-size: 15px;
    display: inline;
    margin: 10px 0;
    width: 100px;
    height: 30px;
    border-radius: 5px;
    font-weight: bold;
    align-self: center;
}
</style>