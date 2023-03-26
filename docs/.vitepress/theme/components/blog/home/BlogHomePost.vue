<script setup lang="ts">
import { useData } from 'vitepress'
import type { Post } from '../../../composables/posts.data'
import PostIcon from '../PostIcon.vue'
import BlogHomeAuthor from './BlogHomeAuthor.vue'

const props = defineProps<{
  post: Post
}>()
const { site } = useData()
</script>

<template>
  <article
    class="p-6 rounded-lg border border-[color:var(--vp-c-brand-light)] shadow-md dark:border-[color:var(--vp-c-brand-dark)]"
  >
    <div class="flex justify-between items-center mb-5 text-gray-500">
      <span
        class="bg-primary-100 text-[color:var(--vp-c-brand-light)] dark:text-[color:var(--vp-c-brand-dark)] text-sm font-medium inline-flex items-center rounded"
      >
        <PostIcon :category="post.category">
          <span class="text-sm">{{ post.date.since }}</span>
        </PostIcon>
      </span>
    </div>
    <h2
      class="mb-2 text-2xl font-bold tracking-tight text-[color:var(--vp-c-brand-light)] dark:text-[color:var(--vp-c-brand-dark)]"
    >
      <a :href="`${site.base}blog${post.href}`">{{ post.title }}</a>
    </h2>
    <p class="mb-5 font-light" v-html="post.excerpt" />
    <div class="flex justify-between items-center">
      <BlogHomeAuthor :name="post.author" />
      <a
        :href="`${site.base}blog${post.href}`"
        class="inline-flex items-center font-medium hover:text-[color:var(--vp-c-brand-dark)]"
      >
        Read more
        <div class="i-[bx/right-arrow-alt] ml-2" />
      </a>
    </div>
  </article>
</template>

<style scoped></style>
