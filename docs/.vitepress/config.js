import Unocss from 'unocss/vite'
import { defineConfig } from 'vitepress'
import { version } from '../../package.json'

export default defineConfig({
  title: 'VitePress Blog Starter',
  description: 'Blog included. Built on top of UnoCSS and Anu.',
  base: '/viyrpress-blog-starter/',
  themeConfig: {
    footer: {
      message: 'VitePress Blog Starter',
      copyright: 'Copyright © 2022 SFXCode',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/sfxcode/vitepress-blog-starter' },
    ],
    editLink: {
      pattern: 'https://github.com/sfxcode/vitepress-blog-starter/edit/main/docs/:path',
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
    plugins: [
      Unocss({
        configFile: '../../unocss.config.ts',
      }),
    ],
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
          text: 'UnoCSS',
          link: 'https://uno.antfu.me',
        },
        {
          text: 'Anu',
          link: 'https://anu-vue.netlify.app',
        },
      ],
    },
    {
      text: version,
      items: [
        {
          text: 'vitepress-blog-starter',
          link: 'https://github.com/sfxcode/vitepress-blog-starter',
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
      items: [
        { text: 'What is this?', link: '/guide/' },
      ],
    },
    {
      text: 'Features',
      collapsible: true,
      items: [
        { text: 'UnoCSS', link: '/guide/features/unocss' },
        { text: 'Anu', link: '/guide/features/anu' },
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
        { text: 'UnoCSS', link: '/config/unocss' },
        { text: 'Anu', link: '/config/anu' },
      ],
    },
  ]
}
