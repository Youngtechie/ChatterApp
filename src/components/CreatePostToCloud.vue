<script lang="ts">
import { nextTick } from "vue";
import { useChatterStore } from '@/stores/store';
import { getStorage, ref as storageRef, uploadBytes, deleteObject, getDownloadURL } from 'firebase/storage'
import { doc, getFirestore, collection, addDoc, serverTimestamp, updateDoc, getDoc, setDoc, type DocumentData } from 'firebase/firestore'
import useAuthentication from '@/composables/useAuth.vue';
import router from '@/router';

const { app } = useAuthentication()

const db = getFirestore(app)

const store = useChatterStore()

const storage = getStorage(app)

const FullStorage = storageRef(storage, 'ChatterAppFiles')

export default async function CreatePostToCloud(rawDocument: string, docContent: string, title: string[], tag: string, type: string, disableComment: boolean, postId: string, imageDelete: boolean) {
    if (type === "post") {
        nextTick(() => {
            const warningShow = document.getElementById("warningShow") as HTMLDivElement
            if (warningShow) {
                warningShow.style.display = 'flex'
                warningShow.textContent = "Publishing your post ..."
            }
        })

        const Post = store.createPost()
        Post.postTitle = title
        Post.postSettings.disableComments = disableComment
        Post.postTag = tag.charAt(0).toUpperCase() + tag.slice(1).toLowerCase()
        Post.posterId = store.signedUser.id

        if (postId !== "") {
            const postRef = doc(db, 'posts', postId)
            const post = await getDoc(postRef)
            const postID = post.data()?.postId

            if (post.data()!.postTag !== tag.charAt(0).toUpperCase() + tag.slice(1).toLowerCase()) {
                const tagRef1 = doc(db, 'tags', post.data()!.postTag)
                const tagRef2 = doc(db, 'tags', tag.charAt(0).toUpperCase() + tag.slice(1).toLowerCase())
                const tagResult1 = await getDoc(tagRef1)
                const tagResult2 = await getDoc(tagRef2)

                updateDoc((tagRef1), {
                    counts: tagResult1.data()!.counts - 1
                })

                if (tagResult2.exists()) {
                    updateDoc((tagRef2), {
                        counts: tagResult2.data()!.counts + 1
                    })
                }
                else {
                    setDoc((tagRef2), {
                        counts: 1
                    })
                }
            }

            const cloudPostContain = storageRef(FullStorage, `posts/${postID}/postContent`)
            const cloudPostRawContain = storageRef(FullStorage, `posts/${postID}/postRawContent`)

            const fileBolb = new Blob([docContent], { type: "text/plain" });
            const rawFileBolb = new Blob([rawDocument], { type: "text/plain" });

            const UploadTask = uploadBytes(cloudPostContain, fileBolb)
            const UploadRawTask = uploadBytes(cloudPostRawContain, rawFileBolb)

            UploadTask.then(() => {
                const contentRef = storageRef(FullStorage, `posts/${postID}/postContent`)
                getDownloadURL(contentRef).then((url) => {
                    updateDoc(postRef, {
                        postContain: url
                    })
                })
            })

            UploadRawTask.then(() => {
                const rawContentRef = storageRef(FullStorage, `posts/${postID}/postRawContent`)
                getDownloadURL(rawContentRef).then((url) => {
                    updateDoc(postRef, {
                        postRawContent: url
                    })
                })
            })

            if (imageDelete === true && store.coverImageFile === null) {
                const coverImageStorage = storageRef(FullStorage, `posts/${postID}/${postID}CoverImage`);
                deleteObject(coverImageStorage).then(() => {
                    updateDoc(postRef, {
                        postCoverImage: ''
                    })
                })
            }

            if (store.coverImageFile !== null) {
                const coverImage = store.coverImageFile
                const coverImageStorage = storageRef(FullStorage, `posts/${postID}/${postID}CoverImage`);
                uploadBytes(coverImageStorage, coverImage as File).then(() => {
                    getDownloadURL(coverImageStorage).then((url) => {
                        updateDoc(postRef, {
                            postCoverImage: url
                        })
                    })
                })
            }

            await updateDoc(postRef, {
                postLastModified: new Date(),
                postTitle: title,
                postSettings: {
                    disableComments: disableComment,
                    allowReposts: true
                },
                postTag: tag.charAt(0).toUpperCase() + tag.slice(1).toLowerCase()
            })

            nextTick(() => {
                const warningShow = document.getElementById("warningShow") as HTMLDivElement
                if (warningShow) {
                    warningShow.textContent = "Post has been published"
                }
            }).then(() => {
                setTimeout(() => {
                    const ans = confirm('Do you want to view your post?')
                    if (ans === true) {
                        const warningShow = document.getElementById("warningShow") as HTMLDivElement
                        if (warningShow) {
                            warningShow.style.display = "none"
                        }
                        router.push(`/post/${postId}`);
                    }
                    else {
                        const warningShow = document.getElementById("warningShow") as HTMLDivElement
                        if (warningShow) {
                            warningShow.style.display = "none"
                        }
                        router.push({ name: "Home" });
                    }
                }, 2000)
            });

            (document.getElementById('publishBtn') as HTMLInputElement).removeAttribute('disabled');
        }
        else {
            if (tag.trim() !== '') {
                const tagRef = doc(db, 'tags', tag.charAt(0).toUpperCase() + tag.slice(1).toLowerCase())
                const tagResult = await getDoc(tagRef) as DocumentData
                if (tagResult.exist()) {
                    updateDoc((tagRef), {
                        counts: tagResult.data().counts + 1
                    })
                }
                else {
                    setDoc((tagRef), {
                        counts: 1
                    })
                }
            }
            const newPost = await addDoc(collection(db, 'posts'), { ...Post })

            await updateDoc(doc(db, 'posts', newPost.id), {
                postTime: serverTimestamp(),
                postId: newPost.id
            })

            const posterRef = doc(db, 'users', store.signedUser.id);
            const documentSnapshot = await getDoc(posterRef);
            const currentArray = documentSnapshot.data()?.posts

            const updatedArray = [...currentArray, newPost.id];

            await updateDoc(posterRef, {
                ['posts']: updatedArray
            })

            const cloudPostContain = storageRef(FullStorage, `posts/${newPost.id}/postContent`)
            const cloudPostRawContain = storageRef(FullStorage, `posts/${newPost.id}/postRawContent`)

            const fileBolb = new Blob([docContent], { type: "text/plain" });
            const rawFileBolb = new Blob([rawDocument], { type: "text/plain" });

            const UploadTask = uploadBytes(cloudPostContain, fileBolb)
            const UploadRawTask = uploadBytes(cloudPostRawContain, rawFileBolb)

            UploadTask.then(() => {
                const postRef = doc(db, 'posts', newPost.id)
                const contentRef = storageRef(FullStorage, `posts/${newPost.id}/postContent`)
                getDownloadURL(contentRef).then((url) => {
                    updateDoc(postRef, {
                        postContain: url
                    })
                })
            })

            UploadRawTask.then(() => {
                const postRef = doc(db, 'posts', newPost.id)
                const rawContentRef = storageRef(FullStorage, `posts/${newPost.id}/postRawContent`)
                getDownloadURL(rawContentRef).then((url) => {
                    updateDoc(postRef, {
                        postRawContent: url
                    })
                })
            })

            if (imageDelete === true && store.coverImageFile === null) {
                const postRef = doc(db, 'posts', newPost.id)
                const coverImageStorage = storageRef(FullStorage, `posts/${newPost.id}/${newPost.id}CoverImage`);
                deleteObject(coverImageStorage).then(() => {
                    updateDoc(postRef, {
                        postCoverImage: ''
                    })
                })
            }

            if (store.coverImageFile !== null) {
                const postRef = doc(db, 'posts', newPost.id)
                const coverImage = store.coverImageFile
                const coverImageStorage = storageRef(FullStorage, `posts/${newPost.id}/${newPost.id}CoverImage`);
                uploadBytes(coverImageStorage, coverImage as File).then(() => {
                    getDownloadURL(coverImageStorage).then((url) => {
                        updateDoc(postRef, {
                            postCoverImage: url
                        })
                    })
                })

                nextTick(() => {
                    const warningShow = document.getElementById("warningShow") as HTMLDivElement
                    if (warningShow) {
                        warningShow.textContent = "Post has been published"
                    }
                }).then(() => {
                    setTimeout(() => {
                        const ans = confirm('Do you want to view your post?')
                        if (ans === true) {
                            const warningShow = document.getElementById("warningShow") as HTMLDivElement
                            if (warningShow) {
                                warningShow.style.display = "none"
                            }
                            router.push(`/post/${postId}`);
                        }
                        else {
                            const warningShow = document.getElementById("warningShow") as HTMLDivElement
                            if (warningShow) {
                                warningShow.style.display = "none"
                            }
                            router.push({ name: "Home" });
                        }
                    }, 2000)
                });

                (document.getElementById('publishBtn') as HTMLInputElement).removeAttribute('disabled');
            };
        }
    }
}
</script>