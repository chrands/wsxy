// 全局类型定义

export interface PaginationParams {
    page?: number
    pageSize?: number
  }
  
  export interface PaginationResult<T> {
    items: T[]
    total: number
    page: number
    pageSize: number
    totalPages: number
  }
  
  export interface RequestContext {
    userId?: string
    role?: string
  }