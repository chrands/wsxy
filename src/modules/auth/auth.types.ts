// 认证模块类型定义

export interface LoginRequest {
    email: string
    password: string
  }
  
  export interface RegisterRequest {
    email: string
    password: string
    name?: string
    phone?: string
  }
  
  export interface AuthResponse {
    token: string
    user: {
      id: string
      email: string
      name?: string
      role: string
    }
  }