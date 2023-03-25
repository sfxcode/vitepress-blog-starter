<script setup>
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import PostTitle from './components/blog/PostTitle.vue'

const { Layout } = DefaultTheme
const { frontmatter } = useData()
</script>

<template>
  <Layout>
    <template #doc-before>
      <PostTitle v-if="frontmatter.blog" />
    </template>
  </Layout>
</template>
