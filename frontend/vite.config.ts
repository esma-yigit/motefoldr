import EnvironmentPlugin from 'vite-plugin-environment'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// @ts-ignore
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    EnvironmentPlugin('all', { prefix: '', defineOn: 'import.meta.env' }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      '@assets': path.resolve(__dirname, 'src/assets'),
    },
  },
})
