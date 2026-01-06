// Next.js 中间件
// 处理全局请求拦截（如认证检查）

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // 示例：可在此添加全局认证检查
  // const token = request.cookies.get('token')
  
  // 暂时直接放行
  return NextResponse.next()
}

export const config = {
  // 指定哪些路径需要经过中间件
  matcher: [
    /*
     * 匹配所有路径，除了：
     * - api (API 路由)
     * - _next/static (静态文件)
     * - _next/image (图片优化)
     * - favicon.ico (网站图标)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}