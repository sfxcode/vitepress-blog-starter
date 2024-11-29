import type { MarkdownRenderer } from 'vitepress'
import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { createMarkdownRenderer } from 'vitepress'
import useBlogFile from './useBlogFile'

let md: MarkdownRenderer

const { folderDir, readFrontMatter } = useBlogFile()

const dir = folderDir('authors')

export interface Author {
  name: string
  href: string
  excerpt: string | undefined
  data: Record<string, any>
}

declare const data: Author[]
export { data }

async function load(): Promise<Author[]>
async function load() {
  md = md || (await createMarkdownRenderer(process.cwd()))
  return fs
    .readdirSync(dir)
    .map(file => getAuthor(file, dir))
    .sort((a, b) => a.name.localeCompare(b.name))
}

export default {
  watch: path.join(dir, '*.md'),
  load,
}

const cache = new Map()

function getAuthor(file: string, parentDir: string): Author {
  const fullPath = path.join(parentDir, file)
  const timestamp = fs.statSync(fullPath).mtimeMs

  const { data, excerpt } = readFrontMatter(file, parentDir, cache)

  const author: Author = {
    name: data.name,
    href: `/authors/${file.replace(/\.md$/, '.html')}`,
    excerpt: excerpt && md.render(excerpt),
    data,
  }

  cache.set(fullPath, {
    timestamp,
    post: author,
  })
  return author
}
