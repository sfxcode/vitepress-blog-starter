import DefaultTheme from '@jcamp/vitepress-blog-theme/theme'
import type { App } from 'vue'
import './tailwind.postcss'
import daisyui from 'daisyui-vue'
import Feature from './components/tailwind/Feature.vue'
import Posts from './components/blog/Posts.vue'
import Post from './components/blog/Post.vue'
import PostDetail from './components/blog/PostDetail.vue'
import PostIcon from './components/blog/PostIcon.vue'
import PostAuthor from './components/blog/PostAuthor.vue'
import AuthorDetail from './components/blog/AuthorDetail.vue'
import MyLayout from './MyLayout.vue'

export default {
  ...DefaultTheme,
  Layout: MyLayout,
  enhanceApp({ app }: { app: App }) {
    app.use(daisyui) // register all components expect icons

    app.component('Feature', Feature)
    app.component('Posts', Posts)
    app.component('Post', Post)
    app.component('PostDetail', PostDetail)
    app.component('PostIcon', PostIcon)
    app.component('PostAuthor', PostAuthor)
    app.component('AuthorDetail', AuthorDetail)
  },
}
