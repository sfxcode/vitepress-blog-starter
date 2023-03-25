<script setup>
import { useData } from 'vitepress'
import DefaultTheme from '@jcamp/vitepress-blog-theme/theme'
import PostTitle from './components/blog/PostTitle.vue'

const { Layout } = DefaultTheme
const { frontmatter } = useData()
</script>

<template>
  <Layout>
    <template #content-before>
      <div class="mt-6 w-full bg-gray-800">Large Title Here</div>
    </template>
    <template #doc-before>
      <PostTitle v-if="frontmatter.blog" />
    </template>
  </Layout>
</template>
