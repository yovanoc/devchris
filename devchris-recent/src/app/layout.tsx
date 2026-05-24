import '~/assets/styles/globals.css'
import { cn } from '~/lib/utils/cn'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='fr' suppressHydrationWarning>
      <head />
      <body className={cn('h-screen w-screen')}>{children}</body>
    </html>
  )
}

export default RootLayout
