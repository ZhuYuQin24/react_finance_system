import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    //vite中如何使用@ 配置路径别名?
    alias:[{find:"@",replacement:path.resolve(__dirname,"src")}]
  }
})
