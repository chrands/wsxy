// 配置中心 - 所有配置集中管理
// 禁止在代码中硬编码配置值

export const config = {
    app: {
      name: process.env.NEXT_PUBLIC_APP_NAME || '稻田蛙声学院',
      url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3344',
      port: 3344,
    },
  
    jwt: {
      secret: process.env.JWT_SECRET || 'default-secret-change-in-production',
      expiresIn: '7d',
    },
  
    db: {
      url: process.env.DATABASE_URL,
    },
  
    logging: {
      level: process.env.LOG_LEVEL || 'info',
    },
  
    // 分页配置
    pagination: {
      defaultPageSize: 20,
      maxPageSize: 100,
    },
  
    // 业务配置（预留扩展点）
    business: {
      // 医生认证相关配置
      doctor: {
        verificationRequired: true,
      },
      // 订单相关配置
      order: {
        timeoutMinutes: 30,
      },
    },
  } as const
  
  export type Config = typeof config