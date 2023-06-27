<script lang="ts">
import { doc, getFirestore, updateDoc, collection, query, where, getDocs } from 'firebase/firestore'
import { getStorage, ref as refFromStorage, getDownloadURL } from "firebase/storage";
import useAuthentication from './useAuth.vue';
import { onAuthStateChanged } from 'firebase/auth'
import { useChatterStore } from '@/stores/store';

const { app, auth } = useAuthentication()
const store = useChatterStore()
const db = getFirestore(app)

async function getAvatar() {
    const storage = getStorage();
    const unknownAvatar = refFromStorage(storage, "ChatterAppFiles/avatar/unknown/UnkownUser.png")
    try {
        await getDownloadURL(unknownAvatar)
            .then((urlUnknown) => {
                if (store.signedUser.profilePicture === '')
                    store.signedUser.profilePicture = urlUnknown
                else {
                    const avatar = refFromStorage(storage, `${store.signedUser.profilePicture}`)
                    getDownloadURL(avatar)
                        .then((url) => {
                            store.signedUser.profilePicture = url
                        })
                }
            })
    }
    catch (error) {
        console.log(error)
    }
}

async function getUser(user: any) {
    const q = query(collection(db, 'users'), where('email', '==', `${user.email}`))
    try {
        await getDocs(q)
            .then((doc) => {
                store.signedUser = doc.docs[0].data()
                store.signedUser.isLogined = true
                store.signedUser.analyses.totalComments = doc.docs[0].data().comments.total.out
                store.signedUser.analyses.totalLiked = doc.docs[0].data().likes.total.out
                store.signedUser.analyses.totalPosts = doc.docs[0].data().posts.length
                getAvatar()
            })
    }
    catch (error) {
        console.log(error)
    }
}

export default function useUserDetails() {
    onAuthStateChanged(auth, (user: any) => {
        if (user) {
            store.authenticated = true
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