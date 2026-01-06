// 自定义错误类
// 统一错误处理机制

export class AppError extends Error {
    constructor(
      public message: string,
      public code: string = 'ERROR',
      public statusCode: number = 400,
      public details?: any
    ) {
      super(message)
      this.name = 'AppError'
    }
  }
  
  export class ValidationError extends AppError {
    constructor(message: string, details?: any) {
      super(message, 'VALIDATION_ERROR', 422, details)
      this.name = 'ValidationError'
    }
  }
  
  export class UnauthorizedError extends AppError {
    constructor(message = '未授权访问') {
      super(message, 'UNAUTHORIZED', 401)
      this.name = 'UnauthorizedError'
    }
  }
  
  export class ForbiddenError extends AppError {
    constructor(message = '禁止访问') {
      super(message, 'FORBIDDEN', 403)
      this.name = 'ForbiddenError'
    }
  }
  
  export class NotFoundError extends AppError {
    constructor(message = '资源不存在') {
      super(message, 'NOT_FOUND', 404)
      this.name = 'NotFoundError'
    }
  }