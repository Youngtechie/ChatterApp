<script lang="ts">
import { useChatterStore } from '@/stores/store';
import { getStorage, ref as storageRef, uploadBytes, deleteObject, getDownloadURL } from 'firebase/storage'
import { doc, getFirestore, collection, addDoc, serverTimestamp, updateDoc, getDoc } from 'firebase/firestore'
import { type Ref, ref } from 'vue';
import useAuthentication from '@/composables/useAuth.vue';
import router from '@/router';

const { app } = useAuthentication()

const db = getFirestore(app)

const store = useChatterStore()

const storage = getStorage(app)

const FullStorage = storageRef(storage, 'ChatterAppFiles')

type mediaFullPaths = {
    id: number
    mediaFullPath: string
}

type DeepFileC = {
    id: number;
    fileName: string;
    nameType: string;
}

export default async function CreatePostToCloud(rawDocument: string, docContent: string, title: string[], tag: string, type: string, disableComment: boolean, postId: string, lastMediaId: number, allMedias: DeepFileC[], imageDelete: boolean) {
    if (type === "post") {
        const Post = store.createPost()
        Post.postTitle = title
        Post.postSettings.disableComments = disableComment
        Post.postTag = tag.charAt(0).toUpperCase() + tag.slice(1).toLowerCase()
        Post.posterId = store.signedUser.id

        if (postId !== "") {
            const postRef = doc(db, 'posts', postId)
            const post = await getDoc(postRef)
            const postID = post.data()?.postId

            const cloudPostContain = storageRef(FullStorage, `posts/${postID}/postContent`)
            const cloudPostRawContain = storageRef(FullStorage, `posts/${postID}/postRawContent`)

            const fileBolb = new Blob([docContent], { type: "text/plain" });
            const rawFileBolb = new Blob([rawDocument], { type: "text/plain" });

            const UploadTask = uploadBytes(cloudPostContain, fileBolb)
            const UploadRawTask = uploadBytes(cloudPostRawContain, rawFileBolb)

            try {
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

                const postLastMedias = post.data()?.postMedia as mediaFullPaths[]

                const mediaFullPaths = ref<mediaFullPaths[]>([])

                postLastMedias.forEach((media) => {
                    const match = allMedias.find(med => med.id === media.id)
                    if (match && match !== undefined) {
                        mediaFullPaths.value.push(media);
                    }
                    else {
                        const nameType = media.mediaFullPath.split('/')[3]
                        const fileName = media.mediaFullPath.split('/')[4]

                        const mediaRef = storageRef(storage, `ChatterAppFiles/posts/${postID}/${nameType}/${fileName}`);
                        deleteObject(mediaRef);
                    }
                })

                if (store.fileInputs.length > 0) {
                    await Promise.all(allMedias.map(async (element) => {
                        if (element.id > lastMediaId) {
                            const inputFile = store.uploadFiles(element.id);
                            const cloudStorage = storageRef(FullStorage, `posts/${postID}/${element.nameType}/${inputFile?.file.name}`);
                            uploadBytes(cloudStorage, inputFile?.file as File).then(() => {
                                getDownloadURL(cloudStorage).then((url) => {
                                    mediaFullPaths.value.push({
                                        id: element.id,
                                        mediaFullPath: url
                                    })
                                })
                            })
                        }
                    })
                    )
                }

                if(imageDelete === true && store.coverImageFile === null) {
                    const coverImageStorage = storageRef(FullStorage, `posts/${postID}/${postID}CoverImage`);
                    deleteObject(coverImageStorage).then(() => {
                        updateDoc(postRef, {
                            postCoverImage: ''
                        })
                    })
                }

                if (store.coverImageFile !== null ) {
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
                    postMedia: mediaFullPaths.value,
                    postLastModified: new Date(),
                    postTitle: title,
                    postSettings: {
                        disableComments: disableComment,
                        allowReposts: true
                    },
                    postTag: tag.charAt(0).toUpperCase() + tag.slice(1).toLowerCase()
                })

                router.push(`/post/${postId}`);
                (document.getElementById('publishBtn') as HTMLInputElement).removeAttribute('disabled');
            } catch (err) {
                (document.getElementById('publishBtn') as HTMLInputElement).removeAttribute('disabled');

                const error = document.querySelector('#ErrorShow span') as HTMLSpanElement
                (document.getElementById('ErrorShow') as HTMLDivElement).style.display = 'flex'
                error.textContent = 'Something went wrong, check your internet connection and try again.'
            }
        }
        else {
            const newPost = await addDoc(collection(db, 'posts'), { ...Post })

            try {
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

                if (store.fileInputs.length > 0) {

                    const mediaFullPaths: Ref<mediaFullPaths[]> = ref([])

                    const postRef = doc(db, 'posts', newPost.id)

                    await Promise.all(store.fileInputs.map(async (f) => {
                        const inputFile = store.uploadFiles(f.id)
                        const cloudStorage = storageRef(FullStorage, `posts/${newPost.id}/${f.nameType}s/${inputFile?.file.name}`)
                        uploadBytes(cloudStorage, inputFile?.file as File).then(() => {
                            getDownloadURL(cloudStorage).then((url) => {
                                mediaFullPaths.value.push({
                                    id: f.id,
                                    mediaFullPath: url
                                })
                            })
                        })
                    }))

                    await updateDoc(postRef, {
                        postMedia: mediaFullPaths.value
                    })
                }
                if(imageDelete === true && store.coverImageFile === null) {
                    const postRef = doc(db, 'posts', newPost.id)
                    const coverImageStorage = storageRef(FullStorage, `posts/${newPost.id}/${newPost.id}CoverImage`);
                    deleteObject(coverImageStorage).then(() => {
                        updateDoc(postRef, {
                            postCoverImage: ''
                        })
                    })
                }

                if (store.coverImageFile !== null ) {
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
                }

                await router.push(`/post/${newPost.id}`);
                (document.getElementById('publishBtn') as HTMLInputElement).removeAttribute('disabled');
            } catch (err) {
                (document.getElementById('publishBtn') as HTMLInputElement).removeAttribute('disabled');
                const error = document.querySelector('#ErrorShow span') as HTMLSpanElement
                (document.getElementById('ErrorShow') as HTMLDivElement).style.display = 'flex'
                error.textContent = 'Something went wrong, check your internet connection and try again.'
            }
        }
    }
}
</script>