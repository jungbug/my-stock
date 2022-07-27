import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import {resolve} from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import babel from 'vite-plugin-babel';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    babel(),
    AutoImport({
      resolvers: [
        ElementPlusResolver()
      ]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  envDir: './config',
  envPrefix: 'ENV_',
  server: {
    port: 5050,
  },
  build: {
    outDir: './dist',
    cssCodeSplit: true
  }
})
