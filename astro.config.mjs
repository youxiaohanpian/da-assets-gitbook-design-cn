import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://youxiaohanpian.github.io',
  base: '/da-assets-gitbook-cn',
  title: 'D.A. Assets 中文文档',
  trailingSlash: 'always',
  integrations: [
    starlight({
      title: 'D.A. Assets 中文文档',
      description: 'Figma to Unity 插件完整中文文档',
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        {
          label: '入门指南',
          items: [
            { label: '欢迎', link: '/01-welcome/' },
            { label: 'FCU 开发者入门', link: '/69-fcu-for-developers-introduction/' },
            { label: '场景设置', link: '/09-scene-setup/' },
          ],
        },
        {
          label: '导入帧',
          items: [
            { label: '导入帧概览', link: '/04-import-frames/' },
            { label: '从项目 URL 导入', link: '/72-import-from-project-url/' },
            { label: '从离线副本导入', link: '/73-import-from-offline-copy/' },
          ],
        },
        {
          label: '认证',
          items: [
            { label: '认证概览', link: '/03-auth/' },
            { label: '浏览器认证', link: '/44-auth-web-browser/' },
            { label: 'Token 认证', link: '/45-auth-token/' },
            { label: '认证问题', link: '/46-auth-issues/' },
          ],
        },
        {
          label: 'UI 组件',
          items: [
            { label: 'Asset UI', link: '/05-asset-ui/' },
            { label: '主设置', link: '/06-main-settings/' },
            { label: '图像与精灵', link: '/07-images-and-sprites/' },
            { label: '文本与字体', link: '/08-text-and-fonts/' },
            { label: 'Google Fonts', link: '/47-google-fonts/' },
            { label: '按钮', link: '/10-buttons/' },
            { label: '阴影', link: '/11-shadows/' },
            { label: 'D.A. Button', link: '/28-d.a.-button/' },
          ],
        },
        {
          label: '本地化',
          items: [
            { label: '本地化概览', link: '/14-localization/' },
            { label: 'I2 Localization', link: '/48-i2-localization/' },
            { label: 'D.A. Localizator', link: '/49-da-localizator/' },
            { label: 'DAL 入门', link: '/65-dal-get-started/' },
            { label: 'Bindings', link: '/66-bindings/' },
            { label: 'Fallback', link: '/67-fallback/' },
          ],
        },
        {
          label: '脚本生成器',
          items: [
            { label: '创建预制件', link: '/50-creating-prefabs/' },
            { label: 'SyncHelpers 序列化', link: '/51-serialization-synchelpers/' },
            { label: '属性序列化', link: '/52-serialization-attributes/' },
            { label: 'GameObject 名称序列化', link: '/53-serialization-gameobject-name/' },
          ],
        },
        {
          label: 'MCP Server',
          items: [
            { label: 'MCP Server 概览', link: '/12-mcp-server/' },
            { label: 'MCP UI', link: '/57-mcp-server-ui/' },
            { label: 'Figma 导入用法', link: '/58-mcp-usage-figma-import/' },
            { label: '助手用法', link: '/59-mcp-usage-assistant/' },
          ],
        },
        {
          label: '其他',
          items: [
            { label: '上下文菜单', link: '/13-context-menu/' },
            { label: '场景备份', link: '/33-scene-backups/' },
            { label: '表格翻译', link: '/75-table-translation/' },
            { label: '团队协作', link: '/62-teamwork/' },
          ],
        },
      ],
    }),
  ],
});
