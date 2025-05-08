import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Proyecto-1DAW-LM/', //Para que pueda funcionar GitHub Pages
  build: {
    rollupOptions: {
      external: ['/Proyecto-1DAW-LM/*'], //Ignorar estas rutas como módulos
    },
  },
});