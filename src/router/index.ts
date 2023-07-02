import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/HomePage.vue'),
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'landing page',
          component: ()=> import('../views/LandingPage.vue'),
          sensitive: true
        },
        {
          path: '/notification',
          name: 'Notification',
          component: ()=> import('../views/NotificationPage.vue'),
          sensitive: true
        },
        {
          path: '/search',
          name: 'Search',
          component: ()=> import('../views/SearchPage.vue'),
          sensitive: true

        },
        {
          path: '/explore',
          name: 'Explore',
          component: ()=> import('../views/ExplorePage.vue'),
          sensitive: true
        },
        {
          path: '/bookmarks',
          name: 'Bookmarks',
          component: ()=> import('../views/BookMarks.vue'),
          sensitive: true
        }
      ],

    },
    {
      path: '/login',
      name: 'Login',
      component: ()=> import('../views/JoinChatterPage.vue'),
      sensitive: true
    },
    {
      path: '/additionalData',
      name: 'AdditionalData',
      component: ()=> import('../views/AddAdditionalInfo.vue'),
      sensitive: true
    },
    {
      path: '/userAnalysis',
      name: 'UserAnalysis',
      component: ()=> import('../views/UserAnalysisPage.vue'),
      sensitive: true
    },
    {
      path: '/userProfile',
      name: 'Profile',
      component: ()=> import('../views/UserProfile.vue'),
      sensitive: true,
    },
    {
      path: '/chatterUser/:userId',
      name: 'ChatterUser',
      component: ()=> import('../views/ChatterUserPage.vue'),
      sensitive: true,
      props: true
    },
    {
      path: '/write/:postId?',
      name: 'Write',
      component: ()=> import('../views/WritePage.vue'),
      sensitive: true
    },
    {
      path: '/post/:postId',
      name: 'Post',
      component: ()=> import('../views/PostPage.vue'),
      sensitive: true,
      props: true
    },{
      path: '/editProfile',
      name: 'EditProfile',
      component: ()=> import('../views/EditProfile.vue'),
      sensitive: true
    },
    {
      path: '/NetworkError',
      name: 'NetworkError',
      component: ()=> import('../views/NetworkErrorPage.vue'),
      sensitive: true
    },
    {
      path: '/:catchAll(.*)',
      name: 'Error',
      component: ()=> import('../views/ErrorPage.vue'),
    }
  ]
})

export default router
