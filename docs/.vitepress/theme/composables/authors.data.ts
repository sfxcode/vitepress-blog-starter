import { createContentLoader } from 'vitepress'

export interface Author {
  name: string
  href: string
  avatar: string
  excerpt: string | undefined
}

declare const data: Author[]
export { data }

export default createContentLoader('blog/authors/*.md', {
  excerpt: true,
  transform(raw): Author[] {
    return raw
      .map(({ url, frontmatter, excerpt }) => ({
        name: frontmatter.name,
        avatar: frontmatter.avatar ?? '',
        href: url.replace('/blog/', '/'),
        excerpt,
      }))
      .sort((a, b) => a.name.localeCompare(b.name))
  },
})
