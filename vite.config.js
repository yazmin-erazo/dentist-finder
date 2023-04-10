import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'/dentist-finder/',
  build: {
    rollupOptions: {
      external: ['react-icons/Bs']
    }
  }
})