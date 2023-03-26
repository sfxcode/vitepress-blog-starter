<script setup lang="ts">
import PostAuthor2 from '../components/blog/post/PostAuthor2.vue'
import PostIcon from '../components/blog/PostIcon.vue'
import usePosts from '../composables/usePosts'
const { post } = usePosts()
</script>
<template>
  <span class="bg-primary-100 text-sm font-medium inline-flex items-center rounded">
    <PostIcon :category="post.category"></PostIcon>
  </span>
  <PostAuthor2 />
</template>
