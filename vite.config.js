import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

//https://vite.dev/config/
export default defineConfig({
    base: '/Proyecto-1DAW-LM/', //Ajustamos la ruta del reporsitorio
    plugins: [react()],
    build: {
        outDir: 'docs', //Aseguramos que los archivos generados vayan a la carpeta /docs
    },
});