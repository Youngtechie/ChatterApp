<script lang="ts">
import { doc, getFirestore, updateDoc, collection, query, where, getDocs } from 'firebase/firestore'
import useAuthentication from './useAuth.vue';
import { onAuthStateChanged } from 'firebase/auth'
import { useChatterStore } from '@/stores/store';

const { app, auth } = useAuthentication()
const store = useChatterStore()
const db = getFirestore(app)

async function getUser(user: any) {
    const q = query(collection(db, 'users'), where('email', '==', `${user.email}`))
    try {
        await getDocs(q)
            .then((doc) => {
                if(doc.docs.length > 0){
                    store.signedUser = doc.docs[0].data()
                    store.signedUser.isLogined = true
                    store.signedUser.analyses.totalComments = doc.docs[0].data().comments.total.out
                    store.signedUser.analyses.totalLiked = doc.docs[0].data().likes.total.out
                    store.signedUser.analyses.totalPosts = doc.docs[0].data().posts.length
                }
            })
    }
    catch (error) {
        console.log(error)
    }
}

export default async function useUserDetails() {
    onAuthStateChanged(auth, (user: any) => {
        if (user) {
            store.authenticated = true
            store.userId = user.uid
            getUser(user).then(() => {
                updateDoc(doc(db, "users", `${store.signedUser.id}`), store.signedUser);
            })
        }
        else {
            store.authenticated = false
        }
    });
}

</script>