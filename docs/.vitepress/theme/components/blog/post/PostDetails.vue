<script setup lang="ts">
import PostAuthor2 from './PostAuthor2.vue'
import usePosts from '../../../composables/usePosts'
import PostIcon from '../PostIcon.vue'

defineProps<{
  insideDoc?: boolean
}>()

const { post } = usePosts()
</script>
<template>
  <div
    class="flex justify-center xl:block space-x-8 sm:space-x-12 xl:space-x-0 xl:space-y-8"
    :class="{ 'xs:show xl:hidden': insideDoc }"
  >
    <span class="bg-primary-100 text-sm font-medium inline-flex items-center rounded">
      <PostIcon :category="post.category"></PostIcon>
    </span>
  </div>
  <PostAuthor2 inside-doc />
</template>
