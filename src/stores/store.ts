import { defineStore } from 'pinia'
import {ref} from 'vue'
import type { DocumentData } from 'firebase/firestore'

interface FileInput {
  file: File;
  id: number;
  nameType: string;
}

interface textarea{
  title: string;
  content: HTMLDivElement;
}

export const useChatterStore = defineStore('chatter', () => {
  const asReader = ref(true) 
  const section = 'personal' 
  const sidebar = ref(false) 
  const signedUser: DocumentData = {}
  const viwedPost: DocumentData = {}
  const viwedProfile: DocumentData = {}
  const fileInputs = [] as FileInput[]
  const viwedPosterFollowed = ref(false)
  const textarea: textarea[] = []

    function addFileInput(file: File, id: number, nameType: string) {
      fileInputs.push({file, id, nameType});
    }
    function removeFileInput(name: string) {
      fileInputs.splice(fileInputs.findIndex((fileInput) => fileInput.file.name === name), 1);
    }
    function clearFileInputs() {
      fileInputs.splice(0, fileInputs.length) ;
    }
    function uploadFiles(id: number) {
      return fileInputs.find((fileInput) => fileInput.id === id);
    }

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
    themeDetails,
    authenticated,
    viwedPost,
    fileInputs,
    viwedPosterFollowed,
    viwedProfile,
    textarea,
    changeTheme,
    toggleSidebar,
    createUser,
    toggleAccountType,
    addFileInput,
    removeFileInput,
    clearFileInputs,
    uploadFiles,
    createPost
  }
})
