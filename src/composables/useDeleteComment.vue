<script setup lang="ts">
import useAuthentication from './useAuth.vue';
import { getFirestore, collection, query, where, getDocs, doc, updateDoc, getDoc, type DocumentData } from 'firebase/firestore'
import { useChatterStore } from '@/stores/store';

const props = defineProps({
    currentUserId: String,
    viewPostId: String,
    viewPostPosterId: String,
    commentId: Number,
    commentText: String,
})

const { app } = useAuthentication()

const store = useChatterStore()

const db = getFirestore(app)

async function updateStore() {
    const postRef = doc(db, "posts", (props.viewPostId as string))
    await getDoc(postRef)
        .then((doc) => {
            store.viwedPost = doc.data() as DocumentData
        }).catch((error) => {
            console.log(error)
        })
}

async function deleteComment(userId: string, postId: string, posterId: string, commentIndex: number, commentText: string) {
    if (userId === '' || userId === undefined) {
        return
    }
    else {
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

                                    function newOutArray(type: DocumentData) {
                                        const newCommentUpdate = type.comments.out.map((commentD: Record<string, any>) => {
                                            if (commentD.postId === postId) {
                                                if (commentD.commentArr.length > 1) {
                                                    const updatedCommentArr = commentD.commentArr.filter(
                                                        (comment: Record<string, any>) => comment.commentId !== commentIndex
                                                    );
                                                    return {
                                                        ...commentD,
                                                        commentArr: updatedCommentArr
                                                    };
                                                } else {
                                                    // Return null if you want to exclude the element from the array
                                                    return null;
                                                }
                                            }
                                            return commentD;
                                        });

                                        // Remove null elements from the array
                                        const updatedOutArray = newCommentUpdate.filter((comment: any) => comment !== null);
                                        return updatedOutArray;
                                    }

                                    function newInArray(type: DocumentData) {
                                        const newCommentUpdate = type.comments.in.map((commentD: Record<string, any>) => {
                                            if (commentD.postId === postId) {
                                                if (commentD.commentArr.length > 1) {
                                                    const updatedCommentArr = commentD.commentArr.filter(
                                                        (comment: Record<string, any>) => comment.commentId !== commentIndex
                                                    );
                                                    return {
                                                        ...commentD,
                                                        commentArr: updatedCommentArr
                                                    };
                                                } else {
                                                    // Return null if you want to exclude the element from the array
                                                    return null;
                                                }
                                            }
                                            return commentD;
                                        });

                                        // Remove null elements from the array
                                        const updatedOutArray = newCommentUpdate.filter((comment: any) => comment !== null);
                                        return updatedOutArray;
                                    }

                                    if (user !== undefined && user !== null && user.length !== 0 && post !== undefined && post !== null && post.length !== 0 && poster !== undefined && poster !== null && poster.length !== 0) {

                                        if (user.comments.out.some((comment: any) => comment.postId === postId)) {
                                            updateDoc(doc(db, 'users', `${userId}`), {
                                                ['comments.out']: newOutArray(user),
                                                ['comments.total.out']: user.comments.total.out - 1,
                                                ['activityLog']: [...user.activityLog, {
                                                    type: 'You deleted a comment on this post',
                                                    details: {
                                                        commentId: commentIndex,
                                                        postId: postId,
                                                        text: commentText,
                                                        time: new Date()
                                                    }
                                                }],
                                                ["interactions"]: user.interactions.filter((interaction: Record<string, any>) => interaction.details.commentId !== commentIndex)
                                            })
                                        }
                                        if (post.postComments) {
                                            updateDoc(doc(db, 'posts', `${postId}`), {
                                                ['postComments.details']: post.postComments.details.filter((comment: Record<string, any>) => comment.commentId !== commentIndex),
                                                ['postComments.total']: post.postComments.total - 1
                                            })
                                        }

                                        if (poster.comments.in.some((comment: any) => comment.postId === postId)) {
                                            updateDoc(doc(db, 'users', `${posterId}`), {
                                                ['comments.in']: newInArray(poster),
                                                ['comments.total.in']: poster.comments.total.in - 1,
                                                ["notifications"]: poster.notifications.filter((notification: Record<string, any>) => notification.details.commentId !== commentIndex)
                                            })
                                        }

                                        updateStore();
                                    }

                                })
                        })

                })
        } catch (error) {
            throw new Error("Error deleting comment");   
        }
    }
}
</script>
<template>
    <button class="delBtn"
        @click.prevent="deleteComment((props.currentUserId as string), (props.viewPostId as string), (props.viewPostPosterId as string), (commentId as number), (commentText as string))">Delete</button>
</template>
<style scoped>
.delBtn {
    color: red;
    cursor: pointer;
    border-radius: 10px;
}

.delBtn {
    background-color: red;
    color: white;
}

.delBtn:hover {
    background-color: transparent;
    color: red;
}
</style>