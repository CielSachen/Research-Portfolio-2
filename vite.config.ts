import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/Research-Portfolio-2/',
  plugins: [react()],
});
