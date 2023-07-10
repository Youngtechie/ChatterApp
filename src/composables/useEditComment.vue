<script setup lang="ts">
import { ref } from 'vue'
import useAuthentication from './useAuth.vue';
import { getFirestore, collection, query, where, getDocs, doc, updateDoc, getDoc, type DocumentData } from 'firebase/firestore'
import { useChatterStore } from '@/stores/store';

const props = defineProps({
    currentUserId: String,
    viewPostId: String,
    viewPostPosterId: String,
    commentId: Number,
    commentText: String,
    divEditId: String,
})
const { app } = useAuthentication()

const store = useChatterStore()

const db = getFirestore(app)

const editCommentValue = ref('')

const toEdit = ref(false)

async function updateStoreComments() {
    const postRef = doc(db, "posts", (props.viewPostId as string))
    await getDoc(postRef)
        .then((doc) => {
            store.viwedPost = doc.data() as DocumentData
        }).catch((error) => {
            console.log(error)
        })
}

async function updateCommentButton(userId: string, postId: string, posterId: string, commentString: string, commentId: number) {
    if (userId === '' || userId === undefined) {
        return
    }
    else if (commentString.trim() === "") {
        alert('Comment cannot be empty')
    }
    else {
        (document.getElementById('btnEditComment') as HTMLButtonElement).setAttribute('disabled', 'true');

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

                                    function newOutArray() {
                                        const newCommentUpdate = user.comments.out.map((commentD: Record<string, any>) => {
                                            if (commentD.postId === postId) {
                                                const updatedCommentArr = commentD.commentArr.map((comment: Record<string, any>) => {
                                                    if (comment.commentId === commentId) {
                                                        // Update the details property of the matching comment with the provided commentString
                                                        return { ...comment, details: commentString };
                                                    }
                                                    return comment;
                                                });

                                                // Return a new object with the updated commentArr
                                                return {
                                                    ...commentD,
                                                    commentArr: updatedCommentArr
                                                };
                                            }
                                            return commentD;
                                        });

                                        return newCommentUpdate;
                                    }


                                    function newInArray() {
                                        const newCommentUpdate = poster.comments.in.map((commentD: Record<string, any>) => {
                                            if (commentD.postId === postId) {
                                                const updatedCommentArr = commentD.commentArr.map((comment: Record<string, any>) => {
                                                    if (comment.commentId === commentId) {
                                                        // Update the details property of the matching comment with the provided commentString
                                                        return { ...comment, details: commentString };
                                                    }
                                                    return comment;
                                                });

                                                // Return a new object with the updated commentArr
                                                return {
                                                    ...commentD,
                                                    commentArr: updatedCommentArr
                                                };
                                            }
                                            return commentD;
                                        });

                                        return newCommentUpdate;
                                    }

                                    function postNewArray() {
                                        const updatedDetails = post.postComments.details.map((comment: Record<string, any>) => {
                                            if (comment.commentId === commentId) {
                                                // Update the details property of the matching comment with the provided commentString
                                                return { ...comment, text: commentString };
                                            }
                                            return comment;
                                        });

                                        return updatedDetails
                                    }

                                    if (user.comments.out.some((comment: any) => comment.postId === postId)) {
                                        updateDoc(doc(db, 'users', `${userId}`), {
                                            ['comments.out']: newOutArray(),
                                            ['activityLog']: [...user.activityLog, {
                                                type: 'You edited your comment on this post',
                                                details: {
                                                    commentId: post.postComments.count,
                                                    postId: postId,
                                                    text: commentString,
                                                    time: new Date()
                                                }
                                            }]
                                        })
                                    }

                                    if (post.postComments) {
                                        updateDoc(doc(db, 'posts', `${postId}`), {
                                            ['postComments.details']: postNewArray()
                                        })
                                    }

                                    if (poster.comments.in.some((comment: any) => comment.postId === postId)) {
                                        updateDoc(doc(db, 'users', `${posterId}`), {
                                            ['comments.in']: newInArray()
                                        })
                                    }

                                    (document.getElementById('btnEditComment') as HTMLButtonElement).removeAttribute('disabled');
                                    updateStoreComments();
                                    toEdit.value = false
                                })
                        })

                })
        } catch (error) {
            alert('An error occurred, try again');
            (document.getElementById('btnEditComment') as HTMLButtonElement).removeAttribute('disabled');
        }
    }
}

function enableEditor(divEditId: string) {
    const commentDiv = document.getElementById(`${divEditId}`) as HTMLDivElement
    editCommentValue.value = commentDiv.innerText
    toEdit.value = true
}

function cancelEdit() {
    (document.getElementById('btnEditComment') as HTMLButtonElement).setAttribute('disabled', 'true');
    editCommentValue.value = ''
    toEdit.value = false
}

</script>
<template>
    <button v-if="!toEdit" @click.prevent="enableEditor(props.divEditId as string)" class="editBTn">Edit</button>
    <div id="editContainer" v-else>
        <div id="centerContainer">
            <textarea v-model="editCommentValue" minlength="1" maxlength="1000"></textarea>
            <button id="btnEditComment"
                @click.prevent="updateCommentButton((props.currentUserId as string), (props.viewPostId as string), (props.viewPostPosterId as string), (editCommentValue as string), (commentId as number))">Update</button>
            <button @click.prevent="cancelEdit">Cancel</button>
        </div>
    </div>
</template>
<style scoped>
#editContainer {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
}

#centerContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: grey;
}
textarea {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 5px;
    margin-bottom: 10px;
    resize: none;
    height: 40%;
    width: 90%;
    outline: auto;
    background-color: transparent;
    overflow-y: scroll;
    color: #fff;
    font-size: large;
}
button:not(.editBTn) {
    border: 2px outset #ccc;
    border-radius: 5px;
    padding: 5px;
    font-weight: 600;
    cursor: pointer;
    outline: none;
    width: 150px;
    margin-top: 10px;
}

</style>