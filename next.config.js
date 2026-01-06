/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    
    // 生产环境输出配置
    output: 'standalone',
    
    // 自定义端口配置已在 package.json scripts 中指定
    
    // 环境变量
    env: {
      NEXT_PUBLIC_APP_NAME: '稻田蛙声学院',
    },
  }
  
  module.exports = nextConfig