import { createContentLoader } from 'vitepress'
import { formatDistance } from 'date-fns'
export interface Post {
  title: string
  author: string
  href: string
  category: string
  date: {
    time: number
    string: string
    since: string
  }
  excerpt: string | undefined
}

declare const data: Post[]
export { data }

export default createContentLoader('blog/posts/*.md', {
  excerpt: true,
  transform(raw): Post[] {
    return raw
      .map(({ url, frontmatter, excerpt }) => ({
        title: frontmatter.title,
        author: frontmatter.author ? frontmatter.author : 'Unknown',
        href: url.replace('/blog/', '/'),
        excerpt,
        category: frontmatter.category ? frontmatter.category : 'Article',
        date: formatDate(frontmatter.date),
      }))
      .sort((a, b) => b.date.time - a.date.time)
  },
})

function formatDate(raw: string): Post['date'] {
  const date = new Date(raw)
  date.setUTCHours(12)
  return {
    time: +date,
    string: date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
    since: formatDistance(date, new Date(), { addSuffix: true }),
  }
}
