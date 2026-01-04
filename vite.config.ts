import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/birthday-invite/'  // ← ОБЯЗАТЕЛЬНО слэш в начале и в конце
})