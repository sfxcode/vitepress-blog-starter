<script setup lang="ts">
import PostAuthor2 from '../PostAuthor2.vue'
import PostIcon from '../PostIcon.vue'
import usePosts from '../../../composables/usePosts'
const { post } = usePosts()
</script>
<template>
  <span class="bg-primary-100 text-sm font-medium inline-flex items-center rounded">
    <PostIcon :category="post.category"></PostIcon>
  </span>
  <PostAuthor2 />
</template>
