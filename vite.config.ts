import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { VitePWA } from 'vite-plugin-pwa'

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}



export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'My TodoList',
        short_name: 'todoList',
        description: 'This is TodoList PWA',
        lang: 'zh',
        scope: '/',
        start_url: '/',
        display: 'standalone',
        orientation: 'any',
        theme_color: '#1a1b1c',
        background_color: '#1a1b1c',
        prefer_related_applications: false
      }
    })
  ],
  resolve: {
    alias: [
      {
        find: /\/@\//,
        replacement: pathResolve('src') + '/',
      }
    ]
  }
})
