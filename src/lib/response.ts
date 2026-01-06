// 统一 API 响应格式
// 所有 API 必须使用此工具返回数据

export interface ApiResponse<T = any> {
    success: boolean
    message: string
    data?: T
    error?: {
      code: string
      details?: any
    }
    timestamp: string
  }
  
  /**
   * 成功响应
   */
  export function success<T>(data?: T, message = '操作成功'): Response {
    const response: ApiResponse<T> = {
      success: true,
      message,
      data,
      timestamp: new Date().toISOString(),
    }
    return Response.json(response, { status: 200 })
  }
  
  /**
   * 失败响应
   */
  export function error(
    message = '操作失败',
    code = 'ERROR',
    status = 400,
    details?: any
  ): Response {
    const response: ApiResponse = {
      success: false,
      message,
      error: {
        code,
        details,
      },
      timestamp: new Date().toISOString(),
    }
    return Response.json(response, { status })
  }
  
  /**
   * 未授权响应
   */
  export function unauthorized(message = '未授权访问'): Response {
    return error(message, 'UNAUTHORIZED', 401)
  }
  
  /**
   * 禁止访问响应
   */
  export function forbidden(message = '禁止访问'): Response {
    return error(message, 'FORBIDDEN', 403)
  }
  
  /**
   * 资源未找到响应
   */
  export function notFound(message = '资源不存在'): Response {
    return error(message, 'NOT_FOUND', 404)
  }
  
  /**
   * 参数验证失败响应
   */
  export function validationError(details?: any): Response {
    return error('参数验证失败', 'VALIDATION_ERROR', 422, details)
  }