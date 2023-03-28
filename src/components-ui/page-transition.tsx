import { cn } from '~/lib/utils/cn'

import type { PropsWithChildren } from 'react'

type PageTransitionProps = PropsWithChildren<{
  className?: string
}>

export const PageTransition = ({ children, className }: PageTransitionProps) => {
  return <div className={cn('page-transition relative')}>{children}</div>
}
