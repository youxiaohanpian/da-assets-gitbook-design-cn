import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://youxiaohanpian.github.io',
  base: '/da-assets-designers',
  title: 'D.A. Assets 设计师文档',
  trailingSlash: 'always',
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
            { label: '命名和标签', link: '/naming-and-tags/' },
          ],
        },
        {
          label: '高级设计',
          items: [
            { label: 'UI 响应式设计', link: '/ui-responsivity/' },
            { label: '忽略标签', link: '/ignore-tag/' },
            { label: '实际标签列表', link: '/actual-tag-lists/' },
          ],
        },
        {
          label: 'D.A. Button',
          items: [
            { label: 'D.A. Button 设计师版', link: '/da-button-designer/' },
          ],
        },
      ],
    }),
  ],
});
