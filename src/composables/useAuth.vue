<script lang="ts">
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from "firebase/auth";


export default function useAuthentication() {

    const firebaseConfig = {
        apiKey: "AIzaSyBg8PMYQ0FP7j98iYIv_WxREEtkBjcaSow",
        authDomain: "chatter-75076.firebaseapp.com",
        databaseURL: "https://chatter-75076-default-rtdb.firebaseio.com",
        projectId: "chatter-75076",
        storageBucket: "chatter-75076.appspot.com",
        messagingSenderId: "814582770103",
        appId: "1:814582770103:web:514f7983d85b4db75da032",
        measurementId: "G-866CY5CWWE"
    };

    const app = initializeApp(firebaseConfig);
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app)
   

    return { auth, provider, app }
}

</script>