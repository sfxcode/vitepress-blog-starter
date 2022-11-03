<script setup lang="ts">
import { defineProps } from 'vue'
import type { Author } from '../../composables/authors.data'

const props = defineProps<{
  author: Author
}>()
</script>

<template>
  <div v-if="author" class="flex items-center space-x-4">
    <img
      class="w-7 h-7 rounded-full"
      :src="author.data.avatar"
      :alt="author.name"
    >
    <a
      :href="`/blog${author.href}`"
      class="inline-flex items-center font-medium hover:text-[color:var(--vp-c-brand-dark)]"
    ><span class="font-medium dark:text-white">
      {{ author.name }}
    </span>
    </a>
  </div>
  <div v-else />
</template>

<style scoped></style>
