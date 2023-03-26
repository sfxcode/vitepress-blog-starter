<script setup lang="ts">
const props = defineProps<{
  category: string
}>()
</script>

<template>
  <div>
    <div v-if="category === 'Article'" class="i-[heroicons-outline/book-open] mr-2" />
    <div v-if="category === 'Tutorial'" class="i-[heroicons-outline/academic-cap] mr-2" />
    <div v-if="category === 'Document'" class="i-[heroicons-outline/document] mr-2" />
    <span>{{ category }}</span>
  </div>
</template>

<style scoped>
a {
  font-weight: 500;
  color: var(--vp-c-brand);
  text-decoration-style: dotted;
  transition: color 0.25s;
}
</style>
