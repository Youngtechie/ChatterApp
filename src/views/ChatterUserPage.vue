<script setup lang="ts">
import { onUnmounted, ref, type Ref } from 'vue';
import { useChatterStore } from '@/stores/store';
import { useRouter } from 'vue-router';
import useLoadingPage from "@/composables/useLoadingPage.vue";
import getUser from '@/composables/useUserViewProfile.vue';
import useUserDetails from '@/composables/useUserDetails.vue'

useUserDetails()

const router = useRouter();

const store = useChatterStore()

const props = defineProps(['userId'])

getUser(props.userId)

const asReader = ref(true)

const section = ref('personal')

function back() {
    router.go(-1)
}

function changeSection(value: string) {
    section.value = value
}

function toggleAccountType(){
    asReader.value = !asReader.value
}

const isLoading: Ref<boolean> = ref(true)

let id = setTimeout(() => {
    if (props.userId === store.signedUser.id) {
        router.push('/userProfile')
    }
    else{
        isLoading.value = false
    }
}, 5000)

onUnmounted(() => {
    clearTimeout(id)
})
</script>
<template>
    <useLoadingPage v-if="isLoading" action-name="Laoding User...."/>
    <main v-else>
        <header>
            <button @click="back">back</button>
            <button>search</button>
            <button :title="store.themeDetails.title" class="themeBtn" @click="store.changeTheme()">
                <img :src="store.themeDetails.img" />
            </button>
        </header>

        <div>
            <div>
                <img />
                <div>
                    <img /> <!-- profilePic -->
                </div>
            </div>

            <section>
                <h3>{{ store.viwedProfile.fullName }}</h3> <!--fullname-->
                <span></span> <!-- username -->
                <p v-if="asReader">Reader</p> <!--Acoount mode: -->
                <p v-else>Author</p>
            </section>
            <button @click="toggleAccountType">Switch Account</button>
            <div v-if="asReader"> <!--section to show personal info and other interaction for reader mode -->
                <div>
                    <button @click="changeSection('personal')">Personal</button>
                    <button @click="changeSection('interaction')">Interactions</button>
                </div>
                <div :class="{ show: section === 'personal', none: section !== 'personal' }">
                    <!--personal details -->
                    <p>Full Name: {{ store.viwedProfile.fullName }} </p>
                    <p>User Name: @{{ store.viwedProfile.username }}</p>
                    <p>Biography: {{ store.viwedProfile.bio }}</p>
                    <p>Email: {{ store.viwedProfile.email }}</p>
                    <p>Location: {{ store.viwedProfile.location }}</p>
                    <P>{{ store.viwedProfile.followers.total }}Following</P>
                    <P>{{ store.viwedProfile.following.total }}Followers</P>
                    <p>Birthday: {{ store.viwedProfile.dateOfBirth }}</p>
                    <p>Gender: {{ store.viwedProfile.gender }}</p>
                    <p>Relationship Status: {{ store.viwedProfile.relationshipStatus }}</p>
                    <!-- <p> interests </p> -->
                </div>
                <div :class="{ show: section === 'interaction', none: section !== 'interaction' }">
                    <!--interaction details -->
                    <p v-if="store.viwedProfile.interactions.length === 0">No interactions yet.</p>
                    <div v-else>
                        <div v-for="(interaction, index) in store.viwedProfile.interactions" :key="index">
                            <p>{{ interaction.type }}</p>
                            <p>{{ interaction.details.followerId }}</p>
                            <p>{{ interaction.details.time }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div v-else> <!--section to show personal info and other interaction for author mode -->
                <div>
                    <button @click="changeSection('personal')">Personal</button>
                    <button @click="changeSection('interaction')">Re-Posts</button>
                </div>
                <div :class="{ show: section === 'personal', none: section !== 'personal' }">
                    <!--personal details -->
                    <p>Blog Name: {{ store.viwedProfile.blogName }} </p>
                    <p>User Name: @{{ store.viwedProfile.username }}</p>
                    <p>Biography: @{{ store.viwedProfile.bio }}</p>
                    <p>Email: {{ store.viwedProfile.email }}</p>
                    <p>Location: {{ store.viwedProfile.location }}</p>
                    <P>{{ store.viwedProfile.followers.total }}Following</P>
                    <P>{{ store.viwedProfile.following.total }}Followers</P>
                    <p>Birthday: {{ store.viwedProfile.dateOfBirth }}</p>
                    <p>Gender: {{ store.viwedProfile.gender }}</p>
                    <p>Relationship Status: {{ store.viwedProfile.relationshipStatus }}</p>
                </div>
                <div :class="{ show: section === 'interaction', none: section !== 'interaction' }">
                    <!--interaction details -->
                    <p v-if="store.viwedProfile.interactions.length === 0">No interactions yet.</p>
                    <div v-else>
                        <div v-for="(interaction, index) in store.viwedProfile.interactions" :key="index">
                            <p>{{ interaction.type }}</p>
                            <p>{{ interaction.details.followerId }}</p>
                            <p>{{ interaction.details.time }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <footer>
            <RouterLink to="/home"><button>Home</button></RouterLink>
            <RouterLink to="/search"><button>Search</button></RouterLink>
            <RouterLink to="/notification"><button>Notification</button></RouterLink>
        </footer>
    </main>
</template>
<style>
.none {
    display: none;
}

.show {
    display: flex;
    flex-direction: column;
}
</style>