<script lang="ts">
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore'
import useAuthentication from './useAuth.vue';
import { useChatterStore } from '@/stores/store';
import useUserDetails from '@/composables/useUserDetails.vue'

const store = useChatterStore()

useUserDetails()

export default async function useCheckFollow(posterId: string, userId: string): Promise<boolean> {

    const { app } = useAuthentication()

    const db = getFirestore(app)

    const posterRef = collection(db, 'users')

    if (store.signedUser.id === undefined || store.signedUser.id === '') {
        console.log('not signed in')
        return false
    }
    else {
        return await checkFollow()
    }

    async function checkFollow() {
        try {
            const q = query(posterRef, where("id", '==', `${userId}`));
            const q2 = query(posterRef, where("id", '==', `${posterId}`));

            const doc = await getDocs(q);
            const doc2 = await getDocs(q2);

            const user = doc.docs[0].data();
            const poster = doc2.docs[0].data();

            return poster.followers.theFollowers.includes(userId) && user.following.theFollowings.includes(posterId);
        } catch (error) {
            console.log(userId, posterId)
            return false;
        }
    }

}
</script>