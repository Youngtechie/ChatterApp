<script setup lang="ts">
import { onMounted } from 'vue'
import useAuthentication from './useAuth.vue';
import { getFirestore, collection, query, where, getDocs, doc, updateDoc, onSnapshot } from 'firebase/firestore'
import router from '@/router';
import { useChatterStore } from '@/stores/store';

const props = defineProps({
    viewPostId: String,
    viewPostPosterId: String,
})

const { app } = useAuthentication()

const db = getFirestore(app)

const store = useChatterStore()

const PostQ = query(collection(db, 'posts'), where('postId', '==', `${props.viewPostId}`))

onMounted(() => {
    try {
        onSnapshot(PostQ, (doc2) => {
            const post = doc2.docs[0].data()
            if (post !== undefined && post !== null && post.length !== 0) {
                if (post.postLikes.ids.includes(store.signedUser.id)) {
                    document.querySelectorAll(`#btnLike${props.viewPostId} svg path`).forEach((element: any) => {
                        element.style.fill = 'red';
                    })
                    document.querySelectorAll(`#btnLike${props.viewPostId} span`).forEach((element: any) => {
                        element.textContent = `${post.postLikes.total}`;
                    })
                }
                else if (!post.postLikes.ids.includes(store.signedUser.id)) {
                    document.querySelectorAll(`#btnLike${props.viewPostId} svg path`).forEach((element: any) => {
                        element.style.fill = 'none';
                    })
                    document.querySelectorAll(`#btnLike${props.viewPostId} span`).forEach((element: any) => {
                        element.textContent = `${post.postLikes.total}`;
                    })
                }
            }
        })
    } catch (error) {
        //
    }
})



async function likeButton(userId: string, postId: string, posterId: string) {

    if (userId === '' || userId === undefined) {
        const ans = confirm('You need to be signed in to like a post. Do you want to sign in?')
        if (ans === true) {
            router.push('/login')
        }
    }
    else {
        (document.getElementById(`btnLike${postId}`) as HTMLButtonElement).setAttribute('disabled', 'true');

        const qUser = query(collection(db, 'users'), where('id', '==', `${userId}`))
        const qPost = query(collection(db, 'posts'), where('postId', '==', `${postId}`))
        const qPoster = query(collection(db, 'users'), where('id', '==', `${posterId}`))

        try {
            getDocs(qUser)
                .then((document1) => {
                    const user = document1.docs[0].data()
                    getDocs(qPost)
                        .then((document2) => {
                            const post = document2.docs[0].data()
                            getDocs(qPoster)
                                .then((document3) => {
                                    const poster = document3.docs[0].data()
                                    
                                    if (user !== undefined && user !== null && user.length !== 0 && post !== undefined && post !== null && post.length !== 0 && poster !== undefined && poster !== null && poster.length !== 0) {
                                        if (user.likes.out.some((like: any) => like.postid === postId)) {
                                            updateDoc(doc(db, 'users', `${userId}`), {
                                                ['likes.out']: user.likes.out.filter((like: Record<string, any>) => like.postid !== postId),
                                                ['likes.total.out']: user.likes.total.out - 1,
                                                ['activityLog']: [...user.activityLog, {
                                                    type: 'You unliked this post',
                                                    details: {
                                                        'postId': postId,
                                                        'time': new Date()
                                                    }
                                                }],
                                                ["interactions"]: user.interactions.filter((interaction: Record<string, any>) => interaction.type === 'Liked a post' && interaction.details.postid === postId)
                                            })
                                        }
                                        else {
                                            updateDoc(doc(db, 'users', `${userId}`), {
                                                ['likes.out']: [...user.likes.out, {
                                                    'postid': postId,
                                                    'time': new Date()
                                                }],
                                                ['likes.total.out']: user.likes.total.out + 1,
                                                ['activityLog']: [...user.activityLog, {
                                                    type: 'You liked this post',
                                                    details: {
                                                        'postId': postId,
                                                        'time': new Date()
                                                    }
                                                }],
                                                ['interactions']: [...user.interactions, {
                                                    type: 'Liked this post',
                                                    details: {
                                                        postid: postId,
                                                        time: new Date()
                                                    }
                                                }]
                                            })
                                        }

                                        if (post.postLikes.ids.some((id: string) => id === userId)) {
                                            updateDoc(doc(db, 'posts', `${postId}`), {
                                                ['postLikes.ids']: post.postLikes.ids.filter((id: string) => id !== userId),
                                                ['postLikes.total']: post.postLikes.total - 1
                                            })
                                        }
                                        else {
                                            updateDoc(doc(db, 'posts', `${postId}`), {
                                                ['postLikes.ids']: [...post.postLikes.ids, userId],
                                                ['postLikes.total']: post.postLikes.total + 1
                                            })
                                        }

                                        if (poster.likes.in.some((like: any) => like.postid === postId)) {
                                            updateDoc(doc(db, 'users', `${posterId}`), {
                                                ['likes.in']: poster.likes.in.filter((like: Record<string, any>) => like.postid !== postId),
                                                ['likes.total.in']: poster.likes.total.in - 1,
                                            })
                                        }
                                        else {
                                            if (posterId === userId) {
                                                updateDoc(doc(db, 'users', `${posterId}`), {
                                                    ['likes.in']: [...poster.likes.in, {
                                                        postid: postId,
                                                        time: new Date()
                                                    }],
                                                    ['likes.total.in']: poster.likes.total.in + 1,
                                                })
                                            }
                                            else {
                                                updateDoc(doc(db, 'users', `${posterId}`), {
                                                    ['likes.in']: [...poster.likes.in, {
                                                        postid: postId,
                                                        time: new Date()
                                                    }],
                                                    ['likes.total.in']: poster.likes.total.in + 1,
                                                    ['notifications']: [...poster.notifications, {
                                                        type: `You got a like from <b>${user.fullName}</b> on a post`,
                                                        details: {
                                                            'postId': postId,
                                                            'time': new Date()
                                                        }
                                                    }]
                                                })
                                            }
                                        }

                                        (document.getElementById(`btnLike${postId}`) as HTMLButtonElement).removeAttribute('disabled');
                                    }

                                })
                        })
                })
        } catch (error) {
            alert("An error occurred, You can't like this post");
            (document.getElementById(`btnLike${postId}`) as HTMLButtonElement).removeAttribute('disabled');
        }
    }
}

</script>
<template>
    <button
        @click.prevent="likeButton(store.signedUser.id, (props.viewPostId as string), (props.viewPostPosterId as string))"
        :id="'btnLike' + `${viewPostId}`" class="like-button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="15" height="15">
            <path
                d="M12.5,4.17C7.71,0,0,3.92,0,8.75c0,4.61,3.9,8.35,12.5,16.25C20.1,17.1,24,13.36,24,8.75C24,3.92,16.29,0,12.5,4.17z" />
        </svg>
        <span>0</span>
    </button>
</template>
<style scoped>
span {
    font-weight: bold;
    font-size: smaller;
}

svg path {
    fill: none;
}
</style>