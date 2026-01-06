// 认证工具（JWT）
// 提供 token 生成、验证等基础功能

import jwt from 'jsonwebtoken'
import { config } from './config'

export interface TokenPayload {
  userId: string
  email: string
  role: string
}

/**
 * 生成 JWT Token
 */
export function generateToken(payload: TokenPayload): string {
  return jwt.sign(payload, config.jwt.secret, {
    expiresIn: config.jwt.expiresIn,
  })
}

/**
 * 验证 JWT Token
 */
export function verifyToken(token: string): TokenPayload | null {
  try {
    const decoded = jwt.verify(token, config.jwt.secret) as TokenPayload
    return decoded
  } catch (error) {
    return null
  }
}

/**
 * 从请求头获取 Token
 */
export function getTokenFromHeader(request: Request): string | null {
  const authorization = request.headers.get('Authorization')
  if (!authorization || !authorization.startsWith('Bearer ')) {
    return null
  }
  return authorization.substring(7)
}

/**
 * 从请求中获取当前用户信息
 */
export function getCurrentUser(request: Request): TokenPayload | null {
  const token = getTokenFromHeader(request)
  if (!token) return null
  return verifyToken(token)
}