import { defineStore } from 'pinia'
import {ref} from 'vue'
import type { DocumentData } from 'firebase/firestore'

interface textarea{
  title: string;
  content: HTMLDivElement;
}

export const useChatterStore = defineStore('chatter', () => {
  const userId = ref('')
  const asReader = ref(true) 
  const section = 'personal' 
  const sidebar = ref(false) 
  const signedUser: DocumentData = {}
  const viwedPost: DocumentData = ref({})
  const viwedProfile: DocumentData = {}
  const coverImageFile = ref<File | null>(null)
  const viwedPosterFollowed = ref(false)
  const textarea: textarea[] = []

  const themeDetails = ref({
    theme: 'light',
    img: '/day.png',
    title: 'Day Mode'
  })

  // Theme-related functions
  function changeTheme() {
    // Updates the themeDetails based on the current theme
    themeDetails.value.img = themeDetails.value.theme === 'light' ? '/night.png' : '/day.png'
    themeDetails.value.title = themeDetails.value.theme === 'light' ? 'Dark Mode' : 'Light Mode'
    themeDetails.value.theme = themeDetails.value.theme === 'light' ? 'dark' : 'light'

    const app = document.querySelector('#app')
    if (app?.className === 'DayApp') {
      // Switches the class of the app element for theme switching
      document.querySelector('#app')?.setAttribute('class', 'NightApp')
    } else {
      app?.removeAttribute('class')
      document.querySelector('#app')?.setAttribute('class', 'DayApp')
    }
  }

  // Sidebar-related functions
  function toggleSidebar() {
    // Toggles the sidebar value
    sidebar.value = !sidebar.value
  }

  function toggleAccountType() {
    asReader.value = !asReader.value
    toggleSidebar()
  }

  const authenticated = false // Refactor: Use camelCase for variable names (authenticated)

  // User class
  class User {
    username = ''
    email = ''
    profilePicture = ''
    bio = ''
    dateOfBirth = ''
    location = ''
    followers: Record<string, any> = {
      total: 0,
      theFollowers: []
    }
    following: Record<string, any> = {
      total: 0,
      theFollowings: []
    }
    posts: string[] | null = []
    likes: Record<string, any> = {
      out: [],
      in: [],
      total: {
        out: 0,
        in: 0
      }
    }
    comments: Record<string, any> = {
      out: [],
      in: [],
      total: {
        out: 0,
        in: 0
      }
    }
    notifications: string[] = []
    settings: Record<string, any> = {
      privacySettings: {
        showEmail: true,
        showLastSeen: true,
        blockedUsers: []
      },
      securitySettings: {
        emailVerified: false
      }
    }
    interests: string[] = []
    activityLog: any[] = []
    savedPosts: string[] = []
    badges: string[] = []
    relationshipStatus = ''
    education: string[] = []
    workExperience: string[] = []
    lastActive = ''
    fullName = ''
    id = ''
    gender = ''
    isLogined = false
    blogName = ''
    contacts: string[] = []
    interactions: string[] = []
    bookmarks: string[] = []
    analyses: Record<string, any> = {
      totalComments: 0,
      totalLiked: 0,
      totalPosts: 0,
      totalPostsLikes: 0,
      totalPostsComments: 0,
      totalReposts: 0
    }

    constructor(email: string) {
      this.email = email
    }
  }

  class Post {
    posterId = ''
    postId = ''
    postTitle: string[] = []
    postContain = ""
    postRawContent = ""
    postTag = ''
    postTime = ""
    postLastModified = ""
    postLikes: Record<string, any> = {
        ids: [],
        total: 0
      }
    postComments: Record<string, any> = {
      details: [],
      total: 0,
      count: 0
    }
    postReposts = 0
    postViews = 0
    postBookmarks: string[] = []
    postMedia: string[] = []
    postSettings: Record<string, any> = {
      disableComments: false,
      allowReposts: true
    }
  }

  function createUser(email: string) {
    // Creates a new User instance with the provided email
    return new User(email)
  }

  function createPost(){
    return new Post
  }

  
  return {
    // Expose the necessary variables and functions from the store
    asReader,
    section,
    sidebar,
    signedUser,
    coverImageFile,
    themeDetails,
    authenticated,
    userId,
    viwedPost,
    viwedPosterFollowed,
    viwedProfile,
    textarea,
    changeTheme,
    toggleSidebar,
    createUser,
    toggleAccountType,
    createPost
  }
})
