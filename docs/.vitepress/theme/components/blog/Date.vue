<script setup lang="ts">
import usePosts from '../../composables/usePosts'
const { post, nextPost, prevPost } = usePosts()

function getDateTime() {
  return new Date(post.value.date.time).toISOString()
}
</script>

<template>
  <dl>
    <dt class="sr-only">Published on</dt>
    <dd class="text-base leading-6 font-medium text-gray-500 dark:text-gray-300">
      <time :datetime="getDateTime()">{{ post.date.string }}</time>
    </dd>
  </dl>
</template>
