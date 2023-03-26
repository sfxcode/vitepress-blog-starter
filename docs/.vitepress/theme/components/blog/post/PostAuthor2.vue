<script setup lang="ts">
import { computed } from 'vue'
import usePosts from '../../../composables/usePosts'
import useAuthors from '../../../composables/useAuthors'

defineProps<{
  insideDoc?: boolean
}>()

const { findByName } = useAuthors()
const { post } = usePosts()

const author = computed(() => {
  return findByName(post.value.author)
})
</script>

<template>
  <dl
    class="pt-6 pb-10 xl:pt-11 xl:border-b xl:border-gray-200 dark:xl:border-slate-200/5"
    :class="{ 'xs:show xl:hidden': insideDoc }"
  >
    <dt class="sr-only">Authors</dt>
    <dd>
      <ul class="flex justify-center xl:block space-x-8 sm:space-x-12 xl:space-x-0 xl:space-y-8">
        <li v-if="author" class="flex items-center space-x-2">
          <img
            v-if="author.gravatar"
            :src="`https://gravatar.com/avatar/${author.gravatar}`"
            alt="author image"
            class="w-10 h-10 rounded-full"
          />
          <img
            v-else-if="author.avatar"
            :src="author.avatar"
            alt="author image"
            class="w-10 h-10 rounded-full"
          />
          <dl class="text-sm font-medium leading-5 whitespace-nowrap">
            <dt class="sr-only">Name</dt>
            <dd class="text-gray-900 dark:text-white">{{ author.name }}</dd>
            <dt v-if="author.twitter" class="sr-only">Twitter</dt>
            <dd v-if="author.twitter">
              <a
                :href="`https://twitter.com/${author.twitter}`"
                target="_blank"
                rel="noopener noreferrer"
                >{{ author.twitter }}</a
              >
            </dd>
          </dl>
        </li>
      </ul>
    </dd>
  </dl>
</template>
<style scoped>
a {
  font-weight: 500;
  color: var(--vp-c-brand);
  text-decoration-style: dotted;
  transition: color 0.25s;
}
</style>
