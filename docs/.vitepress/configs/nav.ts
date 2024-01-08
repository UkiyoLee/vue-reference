import { type DefaultTheme } from "vitepress";

const navbar: DefaultTheme.NavItem[] = [
  {
    text: '指南',
    items: [
      { text: '深度教程', link: '/guide/deep-tutorial/introduction.md' },
      { text: '术语表', link: '/guide/glossary' }
    ]
  }
];

export default navbar;