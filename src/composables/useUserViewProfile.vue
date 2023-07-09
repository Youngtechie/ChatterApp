<script lang="ts">
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore'
import useAuthentication from './useAuth.vue';
import { useChatterStore } from '@/stores/store';

const { app } = useAuthentication()
const store = useChatterStore()
const db = getFirestore(app)

export default async function getUser(id: string) {
    const q = query(collection(db, 'users'), where('id', '==', `${id}`))
    await getDocs(q)
        .then((doc) => {
            if(doc.docs[0].data().length !== 0){
                store.viwedProfile = doc.docs[0].data()
            }
        })
}
</script>