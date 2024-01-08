import { type DefaultTheme } from 'vitepress';

const sidebar: DefaultTheme.Sidebar = {
  '/guide/deep-tutorial': [
    { text: '开始', items: [
      { text: '简介', link: '/guide/deep-tutorial/introduction' },
      { text: '快速上手', link: '/guide/deep-tutorial/get-started' }
    ] },
  ]
};

export default sidebar;