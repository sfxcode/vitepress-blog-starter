import DefaultTheme from '@jcamp/vitepress-blog-theme/theme'
import type { App } from 'vue'
import './tailwind.postcss'
import daisyui from 'daisyui-vue'
import Feature from './components/tailwind/Feature.vue'
import BlogHomeIndex from './components/blog/home/BlogIndex.vue'
import AuthorDetail from './components/blog/AuthorDetail.vue'
import Layout from './layout/Layout.vue'

export default {
  ...DefaultTheme,
  Layout: Layout,
  enhanceApp({ app }: { app: App }) {
    app.use(daisyui) // register all components expect icons

    app.component('Feature', Feature)
    app.component('BlogHomeIndex', BlogHomeIndex)
    app.component('AuthorDetail', AuthorDetail)
  },
}
