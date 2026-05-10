import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { remarkBaseRewrite } from './src/plugins/remark-base-rewrite.js';

export default defineConfig({
  base: '/da-assets-gitbook-design-cn',
  // site 先注释掉，sitemap 插件会用到它，去掉可以避免 sitemap 生成报错
  // site: 'https://youxiaohanpian.github.io',
  title: 'D.A. Assets 设计师文档',
  trailingSlash: 'always',
  markdown: {
    remarkPlugins: [remarkBaseRewrite('/da-assets-gitbook-design-cn')],
  },
  integrations: [
    starlight({
      title: 'D.A. Assets 设计师文档',
      description: 'Figma Converter for Unity 设计师使用指南（中文版）',
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        {
          label: '入门指南',
          items: [
            { label: '布局规则', link: '/layout-rules/' },
            { label: '导入问题', link: '/import-issues/' },
          ],
        },
        {
          label: '设计基础',
          items: [
            { label: '图像合并', link: '/image-merging/' },
            { label: '图像分割', link: '/image-splitting/' },
            { label: '文本', link: '/text/' },
            { label: '命名与标签', link: '/naming-and-tags/' },
            { label: '实际标签列表', link: '/actual-tag-lists/' },
          ],
        },
        {
          label: '组件指南',
          items: [
            { label: 'D.A. Button', link: '/da-button-designer/' },
            { label: '输入字段', link: '/input-field/' },
            { label: '滚动视图', link: '/scroll-view/' },
            { label: '开关/复选框', link: '/toggle-checkbox/' },
            { label: '忽略标签', link: '/ignore-tag/' },
          ],
        },
        {
          label: '高级设计',
          items: [
            { label: 'UI 响应式设计', link: '/ui-responsivity/' },
            { label: '阴影与 True Shadow', link: '/shadows-and-true-shadow/' },
            { label: '组件的唯一性', link: '/uniqueness-of-components/' },
          ],
        },
        {
          label: '协作',
          items: [
            { label: '团队协作', link: '/teamwork/' },
          ],
        },
      ],
    }),
  ],
});
