<script setup lang="ts">
import { ref, type Ref, onUnmounted, watchEffect, onMounted, nextTick } from 'vue'
import { doc, updateDoc, getFirestore, deleteDoc } from 'firebase/firestore'
import { useChatterStore } from '@/stores/store';
import { useRouter } from 'vue-router';
import useAuthentication from '@/composables/useAuth.vue'
import useUserDetails from '@/composables/useUserDetails.vue'
import useLoadingPage from '@/composables/useLoadingPage.vue';
import SignOut from '@/composables/useSignOut.vue'

const { app, auth } = useAuthentication()
const router = useRouter()
const store = useChatterStore()
const db = getFirestore(app)

const fullName: Ref<string> = ref('')

onMounted(() => {
  useUserDetails()
})

watchEffect(() => {
  if (store.signedUser.fullName) {
    fullName.value = store.signedUser.fullName
  }
})

const username: Ref<string> = ref('')

const Location: Ref<string> = ref('')

const gender: Ref<string> = ref('')

const Birthday: Ref<string> = ref('')

const isLoading: Ref<boolean> = ref(true)

const interests: Ref<string> = ref('')

async function AddOtherInfo() {
  if (store.signedUser.id !== undefined && store.signedUser.id !== null && store.signedUser.id !== '') {
    await updateDoc(doc(db, 'users', `${store.signedUser.id}`), {
      blogName: username.value.charAt(0).toUpperCase() + username.value.slice(1).toLowerCase() + 'Blog',
      username: username.value.charAt(0).toUpperCase() + username.value.slice(1).toLowerCase(),
      dateOfBirth: Birthday.value,
      location: Location.value,
      gender: gender.value,
      isLogined: true,
      interests: interests.value.split(','),
      fullName: fullName.value
    })
    router.push({ name: 'Home' })
  }
}

function Delete() {
  if (store.signedUser.id !== undefined && store.signedUser.id !== '' && store.signedUser.id !== null) {
    const ans = confirm('Are you sure you want to delete your account?')
    if (ans) {
      nextTick(() => {
        const warningShow = document.getElementById('warningShow') as HTMLDivElement
        if (warningShow) {
          warningShow.style.display = 'flex'
          warningShow.textContent = 'Deleting your account...'
        }
        let deletedId = store.signedUser.id
        const user = auth.currentUser
        user?.delete().then(()=>{
          SignOut()
          store.signedUser = {}
          deleteDoc(doc(db, 'users', `${deletedId}`))
          store.authenticated = false
          router.push({ name: 'Home' })
        })
      })
    }
    else{
      return
    }
  }
}

let id = setTimeout(() => {
  if (store.signedUser.username !== undefined) {
    if (store.signedUser.username.trim() !== '') {
      router.push({ name: 'Home' })
    }
    else {
      isLoading.value = false
    }
  }
  else {
    router.push({ name: 'Home' })
  }
}, 5000)

onUnmounted(() => {
  clearTimeout(id)
  const warningShow = document.getElementById('warningShow') as HTMLDivElement
  if (warningShow) {
    warningShow.style.display = 'none'
  }
})

</script>

<template>
  <useLoadingPage v-if="isLoading" :action-name="'Loading...'" />
  <div v-else id="otherInfoCon">
    <div id="warningShow"></div>
    <form @submit.prevent="AddOtherInfo" class="otherInfoForm">
      <section class="fullname">
        <label for="fullname2">Full Name:</label>
        <input type="text" id="fullname2" required autocomplete="additional-name" v-model="fullName" />
      </section>

      <section class="username">
        <label for="username2">Username:</label>
        <input type="text" id="username2" required autocomplete="username" v-model="username" pattern="[^\d]+"
          maxlength="15" />
      </section>

      <section class="gender">
        <h3>Choose your gender</h3>
        <div class="radioGroup">
          <input type="radio" value="Male" name="gender" id="male2" required v-model="gender" />
          <label for="male2">Male</label>
          <input type="radio" value="Female" name="gender" id="female2" required v-model="gender" />
          <label for="female2">Female</label>
        </div>
      </section>


      <section class="birthday">
        <label for="birthday2">Birthday:</label>
        <input type="date" id="birthday2" required v-model="Birthday" />
      </section>

      <section class="Location">
        <label for="country2"> Country: </label>
        <input type="text" id="country2" placeholder="Country" required autocomplete="country-name" v-model="Location" />
      </section>

      <div class="interests">
        <div class="section">
          <label for="interests">Interests:</label>
          <input type="text" id="interests" placeholder="Posts tags separate with a comma" required v-model="interests" />
        </div>
        <span class="example-note">Example: Food, Travel, Sport, Programming, Fashion, Meme</span>
      </div>

      <section class="btns">
        <input type="submit" value="Submit" class="submit-button" />

        <button @click.prevent="Delete" class="delete-button">Delete Account</button>
      </section>
    </form>
  </div>
</template>

<style scoped>
#otherInfoCon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.otherInfoForm {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 10px;
}

.username,
.gender,
.Location,
.birthday,
.interests,
.fullname {
  margin-bottom: 1.5rem;
  width: 100%;
}

.username,
.Location,
.birthday,
.interests .section,
.fullname {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  width: 100%;
}

.gender {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px outset blue;
  border-radius: 10px;
  padding: 1rem;
}

.gender h3 {
  margin-bottom: 1rem;
}

label {
  font-weight: bold;
  width: 30%;
}

input[type="text"],
input[type="date"] {
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 70%;
}

.radioGroup {
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
}

.submit-button,
.delete-button {
  padding: 0.5rem;
  text-align: center;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.delete-button{
  color: red;
  background-color: none;
}

.submit-button:hover {
  background-color: #0056b3;
}

.delete-button:hover {
  background-color: red;
}

.submit-button:active,
.delete-button:active {
  background-color: #004080;
}

.btns {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 300px;
}


.example-note {
  font-size: 14px;
  margin-top: 5px;
}
</style>