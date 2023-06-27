<script lang="ts">
import { useChatterStore } from '@/stores/store';
import { getFirestore, collection, query, where, getDocs, doc, updateDoc } from 'firebase/firestore'
import useUserDetails from '@/composables/useUserDetails.vue'
import useAuthentication from './useAuth.vue';

export default function useUnfollow(posterId: string, posterName: string) {

    useUserDetails()

    const { app } = useAuthentication()

    const db = getFirestore(app)

    const store = useChatterStore()

    const posterRef = collection(db, 'users')

    updateFollowsAndFollowing()

    async function updateFollowsAndFollowing() {
        try {
            const qUser = query(posterRef, where("id", '==', `${store.signedUser.id}`))
            const docUser = await getDocs(qUser)
            const user = docUser.docs[0].data()
            const qPoster = query(posterRef, where("id", '==', `${posterId}`))
            const docPoster = await getDocs(qPoster);
            const poster = docPoster.docs[0].data()

            const oldArryUser = user.following.theFollowings
            const newArrayUser = oldArryUser.filter((id: string) => id !== posterId)
            const newtotalUser = newArrayUser.length

            const oldArryPoster = poster.followers.theFollowers
            const newArrayPoster = oldArryPoster.filter((id: string) => id !== store.signedUser.id)
            const newtotalPoster = newArrayPoster.length

            const posterUpdateRef = doc(db, "users", posterId)
            const readerUpdateRef = doc(db, "users", store.signedUser.id)

            await updateDoc(posterUpdateRef, {
                ['followers.theFollowers']: newArrayPoster,
                ['followers.total']: newtotalPoster
            })

            await updateDoc(readerUpdateRef, {
                ['following.theFollowings']: newArrayUser,
                ['following.total']: newtotalUser,
                ['activityLog']: [...user.activityLog, {
                    type: `You unfollowed ${posterName}`,
                    details: {
                        'followingId': posterId,
                        'time': new Date()
                    }
                }]
            })
        } catch (error) {
            console.error(error)
        }
    }
}
</script>