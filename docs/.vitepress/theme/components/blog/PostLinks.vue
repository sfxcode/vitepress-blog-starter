<script setup lang="ts">
import usePosts from '../../composables/usePosts'

defineProps<{
  insideDoc?: boolean
}>()

const { currentPost: post, nextPost, prevPost } = usePosts()
</script>
<template>
  <footer
    class="text-sm font-medium leading-5 mb-24 divide-y divide-gray-200 dark:divide-slate-200/5"
    :class="{ 'xs:show lg:hidden': insideDoc }"
  >
    <div class="py-3" v-if="nextPost">
      <h2 class="text-xs tracking-wide uppercase text-gray-500 dark:text-white">Next Article</h2>
      <div class="link">
        <a :href="`/blog${nextPost.href}`">{{ nextPost.title }}</a>
      </div>
    </div>
    <div class="py-3" v-if="prevPost">
      <h2 class="text-xs tracking-wide uppercase text-gray-500 dark:text-white">
        Previous Article
      </h2>
      <div class="link">
        <a :href="`/blog${prevPost.href}`"> {{ prevPost.title }}</a>
      </div>
    </div>
    <div class="pt-3">
      <a class="link" href="/">← Back to the blog</a>
    </div>
  </footer>
</template>

<style scoped>
a {
  font-weight: 500;
  color: var(--vp-c-brand);
  text-decoration-style: dotted;
  transition: color 0.25s;
}
</style>
