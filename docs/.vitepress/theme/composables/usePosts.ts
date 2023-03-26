import type { Ref } from 'vue'
import { computed, ref } from 'vue'
import { useData, useRoute } from 'vitepress'
import type { Post } from './posts.data'
import { data as posts } from './posts.data'

export default () => {
  const { site } = useData()

  const route = useRoute()

  const path = route.path

  function findCurrentIndex() {
    return posts.findIndex((p) => `${site.value.base}blog${p.href}` === route.path)
  }

  const post = computed(() => posts[findCurrentIndex()])
  const nextPost = computed(() => posts[findCurrentIndex() - 1])
  const prevPost = computed(() => posts[findCurrentIndex() + 1])

  return { posts, post, nextPost, prevPost, path }
}
