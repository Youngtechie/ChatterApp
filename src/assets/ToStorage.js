import { initializeApp } from 'firebase/app'
import { getStorage, ref, uploadBytes } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyBg8PMYQ0FP7j98iYIv_WxREEtkBjcaSow',
  authDomain: 'chatter-75076.firebaseapp.com',
  databaseURL: 'https://chatter-75076-default-rtdb.firebaseio.com',
  projectId: 'chatter-75076',
  storageBucket: 'chatter-75076.appspot.com',
  messagingSenderId: '814582770103',
  appId: '1:814582770103:web:514f7983d85b4db75da032',
  measurementId: 'G-866CY5CWWE'
}

const app = initializeApp(firebaseConfig)

// Initialize Firebase

export default async function Upload(classname, type) {
  // Initialize Cloud Storage and get a reference to the service
  const storage = getStorage(app)

  const FullStorage = ref(storage, 'ChatterAppFiles')

  const inputFile = document.querySelector(`.${classname}`).files[0]

  const cloudStorage = ref(FullStorage, `${type}/${inputFile.name}`)

  uploadBytes(cloudStorage, inputFile).catch((error) => {
    if (error.code === 'storage/unauthorized') {
      console.log('The file uploaded size exceeds 5mb')
    } else if (error.code === 'storage/canceled') {
      console.log('User canceled the upload')
    } else if (error.code === 'storage/unknown') {
      console.log('Unknown error occurred, inspect the server response')
    } else {
      console.log(error)
    }
  })
}
