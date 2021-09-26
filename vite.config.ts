import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { VitePWA } from 'vite-plugin-pwa'
import { viteMockServe } from 'vite-plugin-mock'

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir)
}

export default defineConfig({
  plugins: [
    vue(),
    viteMockServe({
      supportTs: false,
    }),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'My TodoList',
        short_name: 'todoList',
        description: 'This is TodoList PWA',
        icons: [
          {
            src: '/images/icons/icon-48-48.png',
            sizes: '48x48',
            type: 'image/png',
          },
          {
            src: '/images/icons/icon-72-72.png',
            sizes: '72x72',
            type: 'image/png',
          },
          {
            src: '/images/icons/icon-96-96.png',
            sizes: '96x96',
            type: 'image/png',
          },
          {
            src: '/images/icons/icon-128-128.png',
            sizes: '128x128',
            type: 'image/png',
          },
          {
            src: '/images/icons/icon-144-144.png',
            sizes: '144x144',
            type: 'image/png',
          },
          {
            src: '/images/icons/icon-192-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/images/icons/icon-512-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
        lang: 'zh',
        scope: '/',
        start_url: '/',
        display: 'standalone',
        orientation: 'any',
        theme_color: '#f1f3f9',
        background_color: '#f1f3f9',
        prefer_related_applications: false,
      },
    }),
  ],
  resolve: {
    alias: [
      {
        find: /\/@\//,
        replacement: pathResolve('src') + '/',
      },
    ],
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData: `@import "${pathResolve('./src/assets/css/global.less')}";`,
      },
    },
  },
})
