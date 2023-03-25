import { createContentLoader } from 'vitepress'

export interface Author {
  name: string
  href: string
  excerpt: string | undefined
  data: Record<string, any>
}

declare const data: Author[]
export { data }

export default createContentLoader('blog/authors/*.md', {
  excerpt: true,
  transform(raw): Author[] {
    return raw
      .map(({ url, frontmatter, excerpt }) => ({
        name: frontmatter.name,
        href: url.replace('/blog/', '/'),
        excerpt,
        data: frontmatter,
      }))
      .sort((a, b) => a.name.localeCompare(b.name))
  },
})
