import { defineConfig } from 'vitepress'
import { SearchPlugin } from 'vitepress-plugin-search'
import { version } from '../../package.json'

export default defineConfig({
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
    console.log(pageData.relativePath)
    pageData.frontmatter.blog = pageData.relativePath.indexOf('blog/') >= 0 ? 'blog' : ''
    pageData.frontmatter.aside =
      pageData.relativePath.indexOf('blog/') >= 0 ? 'left' : pageData.frontmatter.aside
  },
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
