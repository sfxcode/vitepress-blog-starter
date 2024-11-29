<script setup lang="ts">
import { useData } from 'vitepress'
import useAuthors from '../../composables/useAuthors'

const { site } = useData()

const { currentAuthor: author, prevAuthor, nextAuthor } = useAuthors()
</script>

<template>
  <div>
    <div>
      <div>
        <div class="flex justify-between items-center mb-1 text-gray-500">
          <img
            class="w-10 h-10 rounded-full"
            :src="author.data.avatar"
            :alt="author.name"
          >
          <span class="ml-4 text-4xl text-[color:var(--vp-c-brand-light)] dark:text-[color:var(--vp-c-brand-dark)]">
            {{ author.name }}
          </span>
        </div>
        <div class="flex justify-between items-center mt-4 text-gray-500">
          <a
            v-if="prevAuthor" :href="`${site.base}blog${prevAuthor.href}`"
            class="inline-flex items-center font-medium dark:text-white hover:text-[color:var(--vp-c-brand-dark)]"
          >
            <div class="i-bx:arrow-back mr-2" />
            <span>Previous Author</span>
          </a>
          <div v-if="!prevAuthor" />
          <a
            v-if="nextAuthor" :href="`${site.base}blog${nextAuthor.href}`"
            class="inline-flex items-center font-medium dark:text-white hover:text-[color:var(--vp-c-brand-dark)]"
          >
            <span>Next Author</span>
            <div class="i-bx:right-arrow-alt ml-2" />
          </a>
        </div>
      </div>
      <slot />
    </div>
  </div>
</template>

<style scoped>
.vp-doc h1, h2, h3, hr {
  margin: 12px 0 0 0;
}
</style>
