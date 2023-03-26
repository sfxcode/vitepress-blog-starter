<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'
import useAuthors from '../../../composables/useAuthors'

const props = defineProps<{
  name: string
}>()

const { site } = useData()

const { findByName } = useAuthors()
const author = computed(() => {
  return findByName(props.name)
})
</script>

<template>
  <div v-if="author" class="flex items-center space-x-4">
    <img
      v-if="author.avatar"
      class="w-7 h-7 rounded-full"
      :src="author.avatar"
      :alt="author.name"
    />
    <img
      v-else-if="author.gravatar"
      class="w-7 h-7 rounded-full"
      :src="`https://gravatar.com/avatar/${author.gravatar}`"
      :alt="author.name"
    />
    <a
      :href="`${site.base}blog${author.href}`"
      class="inline-flex items-center font-medium hover:text-[color:var(--vp-c-brand-dark)]"
      ><span class="font-medium dark:text-white">
        {{ author.name }}
      </span>
    </a>
  </div>
  <div v-else />
</template>

<style scoped></style>
