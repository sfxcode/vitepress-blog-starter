<script setup>
import { useData } from 'vitepress'
import DefaultTheme from '@jcamp/vitepress-blog-theme/theme'
import PostTop from './PostTop.vue'
import PostBottom from './PostBottom.vue'
import AsideTop from './PostAsideTop.vue'
import AsideBottom from './PostAsideBottom.vue'

const { Layout } = DefaultTheme
const { frontmatter } = useData()
</script>

<template>
  <Layout>
    <template #doc-before>
      <PostTop v-if="frontmatter.blog"></PostTop>
    </template>
    <template #doc-footer-before>
      <PostBottom v-if="frontmatter.blog"></PostBottom>
    </template>
    <template #aside-top>
      <AsideTop v-if="frontmatter.blog"></AsideTop>
    </template>
    <template #aside-bottom>
      <AsideBottom v-if="frontmatter.blog"></AsideBottom>
    </template>
  </Layout>
</template>
