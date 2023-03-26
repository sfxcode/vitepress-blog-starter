import type { Ref } from 'vue'
import { computed, ref } from 'vue'
import { useData, useRoute } from 'vitepress'
import type { Author } from './authors.data'
import { data as authors } from './authors.data'

export default () => {
  const { site } = useData()

  const route = useRoute()

  const path = route.path

  function findByName(name: string): Author {
    return authors.find((p) => p.name === name)
  }

  function findCurrentIndex() {
    return authors.findIndex((p) => `${site.value.base}blog${p.href}` === route.path)
  }

  const author = computed(() => authors[findCurrentIndex()])
  const nextAuthor = computed(() => authors[findCurrentIndex() - 1])
  const prevAuthor = computed(() => authors[findCurrentIndex() + 1])

  return { authors, author, nextAuthor, prevAuthor, findByName, path }
}
