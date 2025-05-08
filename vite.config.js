import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', //Cambiamos el prefijo para Netlify
  publicDir: 'public', //Asegura que Vite copie los archivos de public/
});