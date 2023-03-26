import type { DefaultTheme } from 'vitepress'
import { defineConfigWithTheme } from 'vitepress'
import { SearchPlugin } from 'vitepress-plugin-search'
import { version } from '../../package.json'
import { genFeed } from './genFeed.js'

export interface BlogFeedConfig {
  /**
   * baseUrl
   *
   * @example 'https://vitepress.site/blog'
   * @default 'localhost/blog'  Feed won't have accurate links
   */
  baseUrl?: string

  /**
   * The title of the feed
   *
   * @example 'My Blog Feed'
   * @default blog.title
   */
  title?: string

  /**
   * The description of the feed
   *
   * @example 'My Blog Feeds Description'
   * @default blog.description
   */
  description?: string

  /**
   * The id of the feed
   *
   * @default baseUrl
   */
  id?: string

  /**
   * The link of the feed
   *
   * @default baseUrl
   */
  link?: string

  /**
   * The language of the feed
   *
   * @default 'en'
   */
  language?: string

  /**
   * The image of the feed
   *
   * @default ''
   */
  image?: string

  /**
   * The favicon used in the RSS feed, added to the baseUrl
   *
   * @example '/feedfavicon.ico'
   * @default '/favicon.ico'
   */
  favicon?: string

  /**
   * The copyright used in the RSS feed
   *
   * @example 'Copyright (c) 2023-present, Me and blog contributors'
   */
  copyright?: string
}

export interface BlogConfig {
  /**
   * The title of the blog
   *
   * @example 'My Blog'
   */
  title?: string

  /**
   * The description of the blog, used as a subtitle on the blog's home page
   *
   * @example 'My Interesting Content'
   */
  description?: string

  /**
   * The blog's url relative to the site
   *
   * @example '/myblog'
   * @default '/blog'
   */
  url?: string

  /**
   * Config options related to the blog's generated RSS feed
   *
   */
  feed?: BlogFeedConfig
}

export interface BlogThemeConfig extends DefaultTheme.Config {
  /**
   * Config options related to the blog
   *
   */
  blog?: BlogConfig
}

export default defineConfigWithTheme<BlogThemeConfig>({
  title: 'VitePress Blog Starter',
  description: 'Blog included. Built on top of TailwindCSS and Daisy UI.',
  base: '/',
  cleanUrls: true,
  themeConfig: {
    footer: {
      message: 'VitePress Blog Starter',
      copyright: 'Copyright © 2022 SFXCode',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/jcamp-code/vitepress-tailwind-blog-starter' },
    ],
    editLink: {
      pattern: 'https://github.com/jcamp-code/vitepress-tailwind-blog-starter/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },
    nav: nav(),
    sidebar: {
      '/guide/': sidebarGuide(),
      '/config/': sidebarConfig(),
    },
    blog: {
      title: 'My Blog',
      description: 'Some articles for sample Blog',
    },
  },
  markdown: {
    headers: {
      level: [0, 0],
    },
  },
  vite: {
    plugins: [SearchPlugin()],
    build: {
      ssr: false,
    },
  },
  async transformPageData(pageData) {
    pageData.frontmatter.blog = pageData.relativePath.includes('blog/') ? 'blog' : ''
    pageData.frontmatter.aside = pageData.relativePath.includes('blog/')
      ? 'left'
      : pageData.frontmatter.aside
  },
  buildEnd: genFeed,
})

function nav() {
  return [
    { text: 'Guide', link: '/guide/', activeMatch: '/guide/' },
    { text: 'Configs', link: '/config/', activeMatch: '/config/' },
    { text: 'Blog', link: '/blog/', activeMatch: '/blog/' },
    {
      text: 'External Docs',
      items: [
        {
          text: 'Vitepress',
          link: 'https://vitepress.vuejs.org',
        },
        {
          text: 'Tailwind CSS',
          link: 'https://tailwindcss.com',
        },
        {
          text: 'DaisyUI-Vue',
          link: 'https://daief.tech/daisyui-vue/',
        },
        {
          text: 'Tailwind CSS Icons Plugin',
          link: 'https://github.com/jcamp-code/tailwindcss-plugin-icons',
        },
      ],
    },
    {
      text: version,
      items: [
        {
          text: 'Changelog',
          link: 'https://github.com/sfxcode/vitepress-blog-starter/blob/main/CHANGELOG.md',
        },
      ],
    },
  ]
}

function sidebarGuide() {
  return [
    {
      text: 'Introduction',
      collapsible: true,
      items: [{ text: 'What is this?', link: '/guide/' }],
    },
    {
      text: 'Features',
      collapsible: true,
      items: [
        { text: 'TailwindCSS', link: '/guide/features/tailwindcss' },
        { text: 'DaisyUI-Vue', link: '/guide/features/daisyui' },
      ],
    },
  ]
}

function sidebarConfig() {
  return [
    {
      text: 'Config',
      items: [
        { text: 'Introduction', link: '/config/' },
        { text: 'TailwindCSS', link: '/config/tailwindcss' },
        { text: 'DaisyUI-Vue', link: '/config/daisyui' },
      ],
    },
  ]
}
