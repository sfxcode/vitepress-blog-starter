import path = require('path')
import fs = require('fs')
import { fileURLToPath } from 'url'
import matter = require('gray-matter')

export default () => {
  function readFrontMatter(file: string, parentDir: string, cache: Map<any, any>) {
    const fullPath = path.join(parentDir, file)
    const timestamp = fs.statSync(fullPath).mtimeMs

    const cached = cache.get(fullPath)
    if (cached && timestamp === cached.timestamp)
      return cached.post

    const src = fs.readFileSync(fullPath, 'utf-8')
    return matter(src, { excerpt: true })
  }

  function folderDir(name: string): string {
    // @ts-expect-error: import.meta is supported
    const dirname = path.dirname(fileURLToPath(import.meta.url))
    return path.resolve(dirname, `../../../blog/${name}`)
  }

  return { folderDir, readFrontMatter }
}
