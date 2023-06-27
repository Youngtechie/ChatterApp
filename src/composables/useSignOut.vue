<script lang="ts">
import {  signOut } from 'firebase/auth'
import useAuthentication from '@/composables/useAuth.vue'

const {auth} = useAuthentication()

export default function SignOut() {
    signOut(auth)
}

</script>