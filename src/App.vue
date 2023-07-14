<script setup lang="ts">
import { RouterView } from 'vue-router'
import { onMounted } from 'vue'
import './assets/main.css'
import {useSeoMeta} from '@unhead/vue'

onMounted(() => {
  useSeoMeta({
        title: 'ChatterApp',
        author: 'Olaegbe Abdul-Rahmon ',
        description: 'Unleash the power of Words, Connect with Like-minded Readers on chatterApp',
        ogTitle: 'ChatterApp',
        ogDescription: 'Unleash the power of Words, Connect with Like-minded Readers on chatterApp',
        ogImage: 'https://firebasestorage.googleapis.com/v0/b/chatter-75076.appspot.com/o/android-chrome-512x512.png?alt=media&token=04762555-2965-4bdd-b57c-d0121fcfbd89',
        twitterTitle: 'ChatterApp',
        twitterDescription: 'Unleash the power of Words, Connect with Like-minded Readers on chatterApp',
        twitterImage: 'https://firebasestorage.googleapis.com/v0/b/chatter-75076.appspot.com/o/android-chrome-512x512.png?alt=media&token=04762555-2965-4bdd-b57c-d0121fcfbd89',
    })
  const chatterApp = document.querySelector('#app')
  chatterApp?.setAttribute('class', 'DayApp')
})

</script>

<template>
  <RouterView />
</template>