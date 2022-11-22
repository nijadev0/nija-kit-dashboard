import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // resolve: {
  //   alias: {
  //     $assets: resolve('src/assets'),
  //     $components: resolve('src/components'),
  //     $utilities: resolve('src/utilities'),
  //   },
  // },
});
