import type { Metadata } from 'next'
import './globals.css'
import { config } from '@/lib/config'

export const metadata: Metadata = {
  title: config.app.name,
  description: '医生内容平台',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}