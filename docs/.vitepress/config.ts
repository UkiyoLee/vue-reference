import { defineConfig } from 'vitepress'
import nav from './configs/nav'
import sidebar from './configs/sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vue 入门教程",
  description: "A Vue Tutorial For Learners",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      src: 'https://img1.baidu.com/it/u=3875084872,415645148&fm=253&fmt=auto&app=138&f=JPEG?w=380&h=380',
      alt: 'Vue Logo'
    },
    logoLink: '/',
    nav,
    sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    returnToTopLabel: '返回顶部',
    editLink: {
      text: '在 GitHub 上编辑此页',
      pattern: 'https://github.com/kameneats/vue-reference/docs/:path'
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    }
  },

  head: [
    [ 'link', { rel: 'icon', href: '/base/favicon.ico' } ]
  ],
})
