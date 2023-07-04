<script setup lang="ts">
import { ref } from 'vue'
import useAuthentication from './useAuth.vue';
import { getFirestore, collection, query, where, getDocs, doc, updateDoc } from 'firebase/firestore'
import router from '@/router';

const props = defineProps({
    currentUserId: String,
    viewPostId: String,
    viewPostPosterId: String,
})

const { app } = useAuthentication()

const db = getFirestore(app)

const commentValue = ref('')

async function addCommentButton(userId: string, postId: string, posterId: string, commentString: string) {
    if (userId === '' || userId === undefined) {
        return router.push('/login');
    }
    else if (commentString.trim() === "") {
        console.log('comment cannot be empty')
    }
    else {
        (document.getElementById('btnAddcomment') as HTMLButtonElement).setAttribute('disabled', 'true');

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

                                    const newcomment = {
                                        commentId: post.postComments.count,
                                        details: commentString,
                                        time: new Date()
                                    }

                                    function newOutArray(newComment: any) {
                                        const newCommentUpdate = user.comments.out.map((commentD: Record<string, any>) => {
                                            if (commentD.postId === postId) {
                                                return {
                                                    ...commentD,
                                                    commentArr: [...commentD.commentArr, newComment]
                                                };
                                            }
                                        })
                                        return newCommentUpdate
                                    }

                                    function newInArray(newComment: any) {
                                        const newCommentUpdate = poster.comments.in.map((commentD: Record<string, any>) => {
                                            if (commentD.postId === postId) {
                                                return {
                                                    ...commentD,
                                                    commentArr: [...commentD.commentArr, newComment]
                                                };
                                            }
                                        })
                                        return newCommentUpdate
                                    }

                                    if (user.comments.out.some((comment: any) => comment.postId === postId)) {
                                        updateDoc(doc(db, 'users', `${userId}`), {
                                            ['comments.out']: newOutArray(newcomment),
                                            ['comments.total.out']: user.comments.total.out + 1,
                                            ['activityLog']: [...user.activityLog, {
                                                type: 'You added another comment on this post',
                                                details: {
                                                    commentId: post.postComments.count,
                                                    postId: postId,
                                                    text: newcomment.details,
                                                    time: newcomment.time
                                                }
                                            }]
                                        })
                                    }
                                    else {
                                        updateDoc(doc(db, 'users', `${userId}`), {
                                            ['comments.out']: [...user.comments.out, {
                                                postId: postId,
                                                commentArr: [
                                                    newcomment
                                                ]
                                            }],
                                            ['comments.total.out']: user.comments.total.out + 1,
                                            ['activityLog']: [...user.activityLog, {
                                                type: 'You commented on this post',
                                                details: {
                                                    commentId: post.postComments.count,
                                                    postId: postId,
                                                    text: newcomment.details,
                                                    time: newcomment.time
                                                }
                                            }],
                                            ['interactions']: [...user.interactions, {
                                                type: 'Commented on this post',
                                                details: {
                                                    commentId: post.postComments.count,
                                                    postid: postId,
                                                    text: newcomment.details,
                                                    time: newcomment.time
                                                }
                                            }]
                                        })
                                    }

                                    if (post.postComments) {
                                        updateDoc(doc(db, 'posts', `${postId}`), {
                                            ['postComments.details']: [...post.postComments.details, {
                                                commentId: post.postComments.count,
                                                id: userId,
                                                text: newcomment.details,
                                                time: newcomment.time
                                            }],
                                            ['postComments.total']: post.postComments.total + 1,
                                            ['postComments.count']: post.postComments.count + 1
                                        })
                                    }

                                    if (poster.comments.in.some((comment: any) => comment.postId === postId)) {
                                        updateDoc(doc(db, 'users', `${posterId}`), {
                                            ['comments.in']: newInArray(newcomment),
                                            ['comments.total.in']: poster.comments.total.in + 1,
                                            ['notifications']: [...poster.notifications, {
                                                type: `Your got a comment from <b>${user.fullName}</b> on a post`,
                                                details: {
                                                    commentId: post.postComments.count,
                                                    postid: postId,
                                                    text: newcomment.details,
                                                    time: newcomment.time
                                                }
                                            }]
                                        })
                                    }
                                    else {
                                        updateDoc(doc(db, 'users', `${posterId}`), {
                                            ['comments.in']: [...poster.comments.in, {
                                                postId: postId,
                                                commentArr: [
                                                    newcomment
                                                ]
                                            }],
                                            ['comments.total.in']: poster.comments.total.in + 1,
                                            ['notifications']: [...poster.notifications, {
                                                type: `Your got a comment from <b>${user.fullName}</b> on a post`,
                                                details: {
                                                    commentId: post.postComments.count,
                                                    postid: postId,
                                                    text: newcomment.details,
                                                    time: newcomment.time
                                                }
                                            }]
                                        })
                                    }

                                    commentValue.value = "";
                                    (document.getElementById('btnAddcomment') as HTMLButtonElement).removeAttribute('disabled');
                                })
                        })

                })
        } catch (error) {
            console.log(error);
            (document.getElementById('btnAddcomment') as HTMLButtonElement).removeAttribute('disabled');
        }
    }
}

</script>
<template>
    <div class="commentAdd">
        <textarea v-model="commentValue" minlength="1" maxlength="1000"></textarea>
        <button
            @click.prevent="addCommentButton((props.currentUserId as string), (props.viewPostId as string), (props.viewPostPosterId as string), commentValue)"
            id="btnAddcomment">Add Comment</button>
    </div>
</template>
<style scoped>
.commentAdd {
    align-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 320px;
    margin-top: 10px;
}
textarea{
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 5px;
    margin-bottom: 10px;
    resize: none;
    height: 50px;
    width: 250px;
    outline: auto;
    background-color: transparent;
    overflow-y: scroll;
}
.NightApp textarea{
    color: #fff;
}

button{
    border: 2px outset #ccc;
    border-radius: 5px;
    padding: 5px;
    background-color: transparent;
    font-weight: 600;
    cursor: pointer;
    outline: none;
    width: 150px;
}
</style>