<script setup lang="ts">
import usePosts from '../../../composables/usePosts'
import Date from '../Date.vue'
import PostDetails from '../PostDetails.vue'
const { post } = usePosts()
</script>
<template>
  <header class="pt-6 xl:pb-10 space-y-1 text-center">
    <Date />
    <h1
      class="text-3xl leading-9 font-extrabold text-gray-900 dark:text-white tracking-tight sm:text-4xl sm:leading-10 md:text-5xl md:leading-14"
    >
      {{ post.title }}
    </h1>
  </header>
  <PostDetails inside-doc></PostDetails>
</template>
