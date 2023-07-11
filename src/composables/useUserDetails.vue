<script lang="ts">
import { nextTick } from 'vue';
import { doc, getFirestore, updateDoc, collection, query, where, getDocs } from 'firebase/firestore'
import useAuthentication from './useAuth.vue';
import { onAuthStateChanged } from 'firebase/auth'
import { useChatterStore } from '@/stores/store';
const { app, auth } = useAuthentication()
const db = getFirestore(app)

export default async function useUserDetails() {
    const store = useChatterStore()
    async function getUser(user: any) {
    const q = query(collection(db, 'users'), where('email', '==', `${user.email}`))
    try {
        await getDocs(q)
            .then((doc) => {
                if(doc.docs.length > 0){
                    store.signedUser = Object.assign({}, doc.docs[0].data());
                    store.signedUser.isLogined = true
                    store.signedUser.analyses.totalComments = doc.docs[0].data().comments.total.out
                    store.signedUser.analyses.totalLiked = doc.docs[0].data().likes.total.out
                    store.signedUser.analyses.totalPosts = doc.docs[0].data().posts.length
                }
            })
    }
    catch (error) {
        nextTick(() => {
            const warningShow = document.getElementById('warningShow');
            if (warningShow) {
                warningShow.style.display = 'flex';
                warningShow.textContent = 'An error occurred, check your internet connection and try reloading.'
            }
        })
    }
}
    onAuthStateChanged(auth, (user: any) => {
        if (user) {
            store.authenticated = true
            store.userId = user.uid
            getUser(user).finally(() => {
                if(store.signedUser.id !== null && store.signedUser.id !== undefined && store.signedUser.length > 0 && store.signedUser.id !== ''){
                    updateDoc(doc(db, "users", `${store.signedUser.id}`), store.signedUser);
                }
            })
        }
        else {
            store.authenticated = false
        }
    });
}

</script>