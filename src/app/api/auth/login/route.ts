// 登录 API
// API 层只做：参数校验 + 调用 service + 返回响应

import { NextRequest } from 'next/server'
import { z } from 'zod'
import { success, error, validationError } from '@/lib/response'
import { authService } from '@/modules/auth/auth.service'
import { logger } from '@/lib/logger'

// 参数验证 Schema
const loginSchema = z.object({
  email: z.string().email('邮箱格式不正确'),
  password: z.string().min(6, '密码至少6位'),
})

export async function POST(request: NextRequest) {
  try {
    // 1. 解析请求体
    const body = await request.json()

    // 2. 参数验证
    const result = loginSchema.safeParse(body)
    if (!result.success) {
      return validationError(result.error.format())
    }

    // 3. 调用业务层
    const data = await authService.login(result.data.email, result.data.password)

    // 4. 返回成功响应
    return success(data, '登录成功')
  } catch (err: any) {
    logger.error('登录失败', { error: err.message })
    return error(err.message || '登录失败')
  }
}