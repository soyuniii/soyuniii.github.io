import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// soyuniii.github.io(유저 페이지)는 루트 경로에서 서빙되므로 base는 '/'
export default defineConfig({ base: '/', plugins: [react()] })
