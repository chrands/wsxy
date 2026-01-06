// 认证服务层 - 业务逻辑预留区
// 实际业务逻辑在此实现

import { prisma } from '@/lib/db'
import { generateToken } from '@/lib/auth'
import { ValidationError, UnauthorizedError } from '@/lib/errors'
import bcrypt from 'bcryptjs'

export class AuthService {
  /**
   * 用户登录
   * TODO: 实现完整的登录逻辑
   */
  async login(email: string, password: string) {
    // 业务逻辑在此实现
    throw new Error('业务逻辑待实现')
  }

  /**
   * 用户注册
   * TODO: 实现完整的注册逻辑
   */
  async register(data: { email: string; password: string; name?: string }) {
    // 业务逻辑在此实现
    throw new Error('业务逻辑待实现')
  }

  /**
   * 密码哈希
   */
  async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 10)
  }

  /**
   * 密码验证
   */
  async verifyPassword(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash)
  }
}

export const authService = new AuthService()