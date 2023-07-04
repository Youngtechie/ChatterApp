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

// function createCanvasWithWord(word: string, backgroundImageUrl: string) {

//     const coverImageRef = storageRef(storage, 'ChatterAppFiles/canvas-cover.jpg')
//     const coverUrl = await getDownloadURL(coverImageRef)

//     // Create the canvas element
//     var canvas = document.createElement("canvas");

//     // Set the width and height of the canvas
//     canvas.width = 300; // Set your desired width
//     canvas.height = 200; // Set your desired height

//     // Get the 2D context of the canvas
//     var context = canvas.getContext("2d");

//     // Load the background image
//     var backgroundImage = new Image();
//     backgroundImage.src = backgroundImageUrl;
//     backgroundImage.style.backgroundSize = 'cover';

//     // When the image is loaded, draw it on the canvas
//     backgroundImage.onload = function () {
//         // Draw the background image
//         if (context) {
//             context.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

//             // Set the font style
//             context.font = "40px Arial"; // Set your desired font size and family

//             // Set the text alignment to center
//             context.textAlign = "center";

//             // Set the text baseline to middle
//             context.textBaseline = "middle";

//             // Set the fill color
//             context.fillStyle = "black"; // Set your desired color

//             // Calculate the center coordinates of the canvas
//             var centerX = canvas.width / 2;
//             var centerY = canvas.height / 2;

//             // Draw the word in the center of the canvas
//             context.fillText(word, centerX, centerY);
//         }
//     };

//     // Return the canvas element
//     return canvas;
// }


// async function updatePost(array: mediaFullPaths[], id: string) {
//     if (array.length > 0) {
//         const urls: url[] = []
//         const postRef = doc(db, 'posts', id)

//         // const documentSnapshot = await getDoc(postRef);
//         // const documentToEdit = documentSnapshot.data()?.postContain

//         // const documentRef = storageRef(storage, documentToEdit)
//         // const documentToEditUrl = await getDownloadURL(documentRef)

//         array.forEach((arr) => {
//             const refFromStorage = storageRef(storage, arr.mediaFullPath)
//             getDownloadURL(refFromStorage)
//                 .then((url) => {
//                     urls.push({
//                         "id": arr.id,
//                         "mediaUrl": url
//                     })
//                 })
//         })

//         updateDoc(postRef, {
//             postMedia: urls
//         })
//     }
//     // fetch(documentToEditUrl)
//     //     .then((res) => {
//     //         res.text()
//     //             .then((content) => {
//     //                 if (urls.length > 0) {
//     //                     const editedDoc = removeSrcAttributes(content, urls)
//     //                     const editedDocRef = storageRef(storage, documentToEdit)
//     //                     const fileBolb = new Blob([editedDoc], { type: "text/plain" });
//     //                     const UploadTask = uploadBytes(editedDocRef, fileBolb)
//     //                     UploadTask.then(() => {
//     //                         const postRef = doc(db, 'posts', id)
//     //                         console.log(editedDocRef.fullPath)
//     //                         updateDoc(postRef, {
//     //                             postContain: editedDocRef.fullPath
//     //                         })
//     //                     })

//     //                 }
//     //             })
//     //     })

//     // function removeSrcAttributes(htmlString: string, urls: { mediaUrl: string }[]): string {
//     //     // Regular expression pattern to match img and video tags with src attributes
//     //     const regex = /<(img|video)([^>]+?)src\s*=\s*['"]([^'"]*?)['"]/gi;

//     //     // Replace the src attributes with URL
//     //     const modifiedString = htmlString.replace(regex, (match, tag, attributes) => {
//     //         const url = urls.shift(); // Retrieve the next URL from the URLs array
//     //         if (url) {
//     //             return `<${tag}${attributes}src="${url.mediaUrl}"`; // Replace src attribute with the media URL
//     //         }
//     //         return match; // Return the original matched tag if no more URLs are available
//     //     });

//     //     return modifiedString;
//     // }
// }

export default async function CreatePostToCloud(rawDocument: string, docContent: string, title: string[], tag: string, type: string, disableComment: boolean, postId: string, lastMediaId: number, allMedias: DeepFileC[]) {
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
                    postMedia: mediaFullPaths.value,
                    postLastModified: new Date(),
                    postTitle: title,
                    postSettings: {
                        disableComments: disableComment,
                        allowReposts: true
                    },
                    postTag: tag.charAt(0).toUpperCase() + tag.slice(1).toLowerCase()
                })

                await router.push(`/post/${postId}`)
            } catch (err) {
                const error = document.querySelector('#ErrorShow span') as HTMLSpanElement
                error.style.display = 'flex'
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

                    await router.push(`/post/${newPost.id}`)
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
                }
            } catch (err) {
                const error = document.querySelector('#ErrorShow span') as HTMLSpanElement
                error.style.display = 'flex'
                error.textContent = 'Something went wrong, check your internet connection and try again.'
            }
        }
    }
}
</script>