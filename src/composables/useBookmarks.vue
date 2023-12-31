<script setup lang="ts">
import { ref, onMounted } from 'vue'
import useAuthentication from './useAuth.vue';
import { getFirestore, collection, query, where, getDocs, doc, updateDoc, onSnapshot, getDoc } from 'firebase/firestore'
import router from '@/router';
import { useChatterStore } from '@/stores/store';

const props = defineProps({
    viewPostId: String,
})

const { app } = useAuthentication()

const db = getFirestore(app)

const store = useChatterStore()

const PostQ = query(collection(db, 'posts'), where('postId', '==', `${props.viewPostId}`))

const bookmarked = ref(false)

async function getFieldFromFirebase(id: string) {
    try {
        const docRef = doc(db, 'users', `${id}`);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const field = docSnap.data().bookmarks; // Replace "fieldName" with the actual field name you want to retrieve
            store.signedUser.bookmarks = field
        }
    } catch (error) {
        console.error('Error getting field from Firebase:', error);
    }
}

onMounted(() => {
    onSnapshot(PostQ, (doc2) => {
        const post = doc2.docs[0].data()
        if (post !== undefined && post !== null && post.length !== 0) {
            if (post.postBookmarks.includes(store.signedUser.id)) {
                bookmarked.value = true;
                document.querySelectorAll(`#btnBook${props.viewPostId} span`).forEach((element) => {
                    element.textContent = `${post.postBookmarks.length}`;
                })
                getFieldFromFirebase(store.signedUser.id);
            }
            else if (!post.postBookmarks.includes(store.signedUser.id)) {
                bookmarked.value = false;
                document.querySelectorAll(`#btnBook${props.viewPostId} span`).forEach((element) => {
                    element.textContent = `${post.postBookmarks.length}`;
                })
                getFieldFromFirebase(store.signedUser.id);
            }
        }
    })
})

function bookmark(userId: string, postId: string) {
    if (userId === '' || userId === undefined) {
        const ans = confirm('You must be logged in to bookmark a post, will you love to sign up?')
        if (ans) {
            router.push('/join')
        }
    }
    else {
        (document.getElementById(`btnLike${postId}`) as HTMLButtonElement).setAttribute('disabled', 'true');

        const qUser = query(collection(db, 'users'), where('id', '==', `${userId}`))
        const qPost = query(collection(db, 'posts'), where('postId', '==', `${postId}`))

        try {
            getDocs(qUser)
                .then((document1) => {
                    const user = document1.docs[0].data();
                    getDocs(qPost)
                        .then((document2) => {
                            const post = document2.docs[0].data();

                            if (user !== undefined && user !== null && user.length !== 0 && post !== undefined && post !== null && post.length !== 0) {

                                if (user.bookmarks.some((postID: string) => postID === post.postId)) {
                                    updateDoc(doc(db, 'users', `${userId}`), {
                                        ['bookmarks']: user.bookmarks.filter((postID: string) => postID !== postId)
                                    })
                                    updateDoc(doc(db, 'posts', `${postId}`), {
                                        ['postBookmarks']: post.postBookmarks.filter((userID: string) => userID !== userId)
                                    })
                                }
                                else {
                                    updateDoc(doc(db, 'users', `${userId}`), {
                                        ['bookmarks']: [...user.bookmarks, postId]
                                    })
                                    updateDoc(doc(db, 'posts', `${postId}`), {
                                        ['postBookmarks']: [...post.postBookmarks, userId]
                                    })
                                }

                                (document.getElementById(`btnLike${postId}`) as HTMLButtonElement).removeAttribute('disabled');
                            }
                        })
                })
        }
        catch (err) {
            (document.getElementById(`btnLike${postId}`) as HTMLButtonElement).removeAttribute('disabled');
        }
    }
}
</script>
<template>
    <button :id="'btnBook' + `${viewPostId}`" @click.prevent="bookmark(store.signedUser.id, (props.viewPostId as string))">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-if="bookmarked">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path
                    d="M10.5 8.56L12 10.06M12 10.06L13.5 11.56M12 10.06L13.5 8.56M12 10.06L10.5 11.56M8.25 5H15.75C16.4404 5 17 5.58763 17 6.3125V19L12 15.5L7 19V6.3125C7 5.58763 7.55964 5 8.25 5Z"
                    stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
            </g>
        </svg>
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-else>
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path
                    d="M10.5 10.5L11.5 11.5L14 9M8.25 5H15.75C16.4404 5 17 5.58763 17 6.3125V19L12 15.5L7 19V6.3125C7 5.58763 7.55964 5 8.25 5Z"
                    stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
            </g>
        </svg>
        <span>0</span>
    </button>
</template>
<style scoped>
span {
    font-weight: bold;
    font-size: 12px;
}
</style>