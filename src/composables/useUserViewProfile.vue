<script lang="ts">

import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore'
import { getStorage, ref as refFromStorage, getDownloadURL } from "firebase/storage";
import useAuthentication from './useAuth.vue';
import { useChatterStore } from '@/stores/store';

const { app } = useAuthentication()
const store = useChatterStore()
const db = getFirestore(app)

export default async function getUser(id: string) {
    const storage = getStorage();
    const unknownAvatar = refFromStorage(storage, "ChatterAppFiles/avatar/unknown/UnkownUser.png")
    const q = query(collection(db, 'users'), where('id', '==', `${id}`))
    try {
        await getDocs(q)
            .then((doc) => {
                store.viwedProfile = doc.docs[0].data()
                getDownloadURL(unknownAvatar)
                    .then((urlUnknown) => {
                        if (store.viwedProfile.profilePicture === '')
                            store.viwedProfile.profilePicture = urlUnknown
                    })
            })
    }
    catch (error) {
        console.log(error)
    }
}
</script>