'use client'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi2'

import { cn } from '~/lib/utils/cn'

type DarkThemeButtonProps = {
  className?: string
}

export const DarkThemeButton = ({ className }: DarkThemeButtonProps) => {
  const [mounted, setMounted] = useState(false)
  const { theme, resolvedTheme, setTheme } = useTheme()

  const toggleTheme = () => {
    if (resolvedTheme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <>
      <button
        onClick={toggleTheme}
        className={cn(
          className,
          resolvedTheme === 'dark' ? 'scale-0 opacity-0' : 'scale-100 opacity-100',
        )}
        aria-label='use dark theme'
      >
        <HiOutlineMoon preserveAspectRatio={'xMidYMid slice'} className={cn('h-7 w-7')} />
      </button>

      <button
        onClick={toggleTheme}
        className={cn(
          className,
          'scale-100 opacity-100',
          resolvedTheme === 'light' ? 'scale-0 opacity-0' : 'scale-100 opacity-100',
        )}
        aria-label='use light theme'
      >
        <HiOutlineSun preserveAspectRatio={'xMidYMid slice'} className={cn('h-7 w-7')} />
      </button>
    </>
  )
}
