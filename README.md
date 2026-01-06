# 稻田蛙声学院（DauTeenVoice Academy）

医生内容平台 - 项目骨架

## 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **数据库**: PostgreSQL + Prisma ORM
- **认证**: JWT
- **部署**: Ubuntu + 宝塔面板 + PM2

---

## 快速开始

### 1. 安装依赖

\`\`\`bash
npm install
\`\`\`

### 2. 配置环境变量

复制 `.env.example` 为 `.env.local`，并填写配置：

\`\`\`bash
cp .env.example .env.local
\`\`\`

修改数据库连接信息和 JWT 密钥。

### 3. 初始化数据库

\`\`\`bash
npm run db:push
\`\`\`

### 4. 启动开发服务器

\`\`\`bash
npm run dev
\`\`\`

访问：http://localhost:3344

---

## 项目架构

### 📂 目录说明

\`\`\`
src/
├── app/              # Next.js App Router
│   ├── api/          # API 路由（RESTful 接口）
│   ├── (auth)/       # 认证相关页面
│   └── (platform)/   # 平台主体页面
├── modules/          # 业务模块（核心业务逻辑）
│   ├── auth/
│   ├── user/
│   ├── doctor/
│   ├── post/
│   └── order/
├── lib/              # 工具库【地基文件 - 稳定不变】
│   ├── db.ts         # Prisma 客户端
│   ├── response.ts   # 统一响应格式
│   ├── auth.ts       # 认证工具
│   ├── logger.ts     # 日志
│   ├── config.ts     # 配置中心
│   └── errors.ts     # 错误定义
├── types/            # TypeScript 类型定义
└── middleware.ts     # Next.js 中间件
\`\`\`

### 🔒 地基文件（不应随意修改）

以下文件是项目架构的基础，已经过精心设计，除非有重大架构调整，否则不应修改：

- `src/lib/db.ts` - 数据库连接单例
- `src/lib/response.ts` - 统一响应格式
- `src/lib/config.ts` - 配置中心
- `src/lib/errors.ts` - 错误定义
- `src/lib/logger.ts` - 日志工具
- `src/lib/auth.ts` - 认证工具
- `src/middleware.ts` - 全局中间件

### 🏗️ 开发规范

#### API 开发流程

1. **定义类型** → `src/modules/{模块}/{模块}.types.ts`
2. **实现服务层** → `src/modules/{模块}/{模块}.service.ts`（业务逻辑）
3. **创建 API** → `src/app/api/{路径}/route.ts`（只做参数校验 + 调用 service）

#### 示例：添加新功能

假设添加「课程管理」功能：

\`\`\`
1. 创建类型定义: src/modules/course/course.types.ts
2. 实现业务逻辑: src/modules/course/course.service.ts
3. 创建 API 接口: src/app/api/courses/route.ts
4. 添加数据库模型: prisma/schema.prisma（添加 Course 模型）
5. 运行数据库迁移: npm run db:push
\`\`\`

---

## 部署到宝塔面板

### 1. 构建项目

\`\`\`bash
npm run build
\`\`\`

### 2. 上传到服务器

将整个项目文件夹上传到服务器（推荐使用 `/www/wwwroot/dauteenvoice-academy`）

### 3. 安装 PM2（如未安装）

\`\`\`bash
npm install -g pm2
\`\`\`

### 4. 配置环境变量

在服务器上创建 `.env.local` 文件，填写生产环境配置

### 5. 启动项目

\`\`\`bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
\`\`\`

### 6. 宝塔反向代理配置

在宝塔面板中添加网站，配置反向代理到 `http://127.0.0.1:3344`

---

## 数据库管理

### 查看数据库

\`\`\`bash
npm run db:studio
\`\`\`

### 修改 Schema 后同步

\`\`\`bash
npm run db:push
\`\`\`

---

## 常用命令

| 命令 | 说明 |
|------|------|
| `npm run dev` | 启动开发服务器（端口 3344） |
| `npm run build` | 构建生产版本 |
| `npm run start` | 启动生产服务器 |
| `npm run db:push` | 同步数据库 Schema |
| `npm run db:studio` | 打开数据库可视化工具 |

---

## 注意事项

1. **不要在代码中硬编码配置**，所有配置必须放在 `src/lib/config.ts` 或环境变量中
2. **所有业务逻辑必须在 `src/modules/` 中实现**，API 层只做参数校验和调用
3. **统一使用 `src/lib/response.ts` 返回 API 响应**
4. **地基文件（lib 目录）除非架构调整，否则不要修改**
5. **生产环境务必修改 `JWT_SECRET`**

---

## 团队协作建议

- 使用 Git 进行版本控制
- 遵循统一的代码风格（配置 ESLint + Prettier）
- 每个功能模块独立开发，避免耦合
- API 接口使用 RESTful 规范
- 数据库修改必须通过 Prisma Schema，不要直接修改数据库

---

## 后续扩展点

- [ ] 添加用户认证中间件
- [ ] 实现文件上传功能
- [ ] 集成支付系统
- [ ] 添加邮件/短信服务
- [ ] 集成 Redis 缓存
- [ ] 添加单元测试

---

## 许可证

Private Project
\`\`\`

---

## 🎯 总结

### 已完成

✅ 完整的项目目录结构  
✅ 数据库 Schema 基础占位  
✅ 统一的 API 响应格式  
✅ 配置中心（集中管理配置）  
✅ 认证工具（JWT）  
✅ 日志工具  
✅ 错误处理机制  
✅ 业务模块预留（modules 目录）  
✅ PM2 部署配置（适配宝塔）  
✅ 完整的 README 文档  

### 项目特点

1. **职责清晰**：API 层只做参数校验 + 调用 service，业务逻辑全部在 modules
2. **配置集中**：所有配置在 `config.ts`，禁止散落在代码中
3. **响应统一**：所有 API 使用 `response.ts` 返回标准格式
4. **架构稳定**：lib 目录为地基文件，后续不应随意修改
5. **易于扩展**：新功能只需在 modules 添加模块即可

### 启动步骤

\`\`\`bash
npm install
cp .env.example .env.local  # 修改配置
npm run db:push
npm run dev  # 访问 http://localhost:3344
\`\`\`

---

**项目已经是"空仓库级别"的骨架，可以直接开始开发业务逻辑！**