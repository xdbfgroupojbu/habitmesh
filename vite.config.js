import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// hacky but fine for now
export default defineConfig({
  plugins: [vue()],
  server: { port: 5173 },
});
