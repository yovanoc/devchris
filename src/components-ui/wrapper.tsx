import { cn } from '~/lib/utils/cn'
import type { PropsWithChildren } from 'react'

export const Wrapper = ({ children }: PropsWithChildren) => {
  return <div className={cn('px-4 lg:px-8')}>{children}</div>
}
