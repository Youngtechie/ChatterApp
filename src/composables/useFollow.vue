<script lang="ts">
import { useChatterStore } from '@/stores/store';
import router from '@/router';
import { getFirestore, collection, query, where, getDocs, doc, updateDoc } from 'firebase/firestore'
import useAuthentication from './useAuth.vue';

export default function useFollow(posterId: string) {

    const { app } = useAuthentication()

    const db = getFirestore(app)

    const store = useChatterStore()

    const posterRef = collection(db, 'users')

    async function callFunction() {
        if (store.signedUser.id === undefined || store.signedUser.id === '') {
            const ans = confirm('You need to be signed in to follow someone. Do you want to sign in?')
            if (ans === true) {
                router.push('/login')
            }
        }
        else {
            updateFollowsAndFollowing()
        }
    }

    async function updateFollowsAndFollowing() {
        try {
            const qUser = query(posterRef, where("id", '==', `${store.signedUser.id}`))
            const docUser = await getDocs(qUser)
            const user = docUser.docs[0].data()
            const qPoster = query(posterRef, where("id", '==', `${posterId}`))
            const docPoster = await getDocs(qPoster);
            const poster = docPoster.docs[0].data()

            if (user !== undefined && user !== null && user.length !== 0 && poster !== undefined && poster !== null && poster.length !== 0) {
                const oldArryUser = user.following.theFollowings
                const newArrayUser = [...oldArryUser, posterId]
                const newtotalUser = newArrayUser.length

                const oldArryPoster = poster.followers.theFollowers
                const newArrayPoster = [...oldArryPoster, store.signedUser.id]
                const newtotalPoster = newArrayPoster.length

                const posterUpdateRef = doc(db, "users", posterId)
                const readerUpdateRef = doc(db, "users", store.signedUser.id)

                await updateDoc(posterUpdateRef, {
                    ['followers.theFollowers']: newArrayPoster,
                    ['followers.total']: newtotalPoster,
                    ['notifications']: [...poster.notifications, {
                        type: `${store.signedUser.fullName} started following you`,
                        details: {
                            'followerId': store.signedUser.id,
                            'time': new Date()
                        }
                    }]
                })

                await updateDoc(readerUpdateRef, {
                    ['following.theFollowings']: newArrayUser,
                    ['following.total']: newtotalUser,
                    ['activityLog']: [...user.activityLog, {
                        type: 'New following',
                        details: {
                            'followingId': posterId,
                            'time': new Date()
                        }
                    }]
                })
            }

        } catch (error) {
            alert('An occured while trying to follow this user. Please try again later')
        }
    }

    callFunction()
}
</script>