'use client'
import { useEffect } from 'react'
import { cn } from '~/lib/utils/cn'

type ErrorProps = {
  error: Error
  reset: () => void
}

const Error = ({ error, reset }: ErrorProps) => {
  useEffect(() => {
    console.error({ error })
  }, [error])

  return (
    <div className={cn('z-50 mt-4 text-center')}>
      <p className={cn('mb-4 text-xl font-medium text-red-800 opacity-100 dark:text-red-300')}>
        Oops
      </p>
      <button
        className={cn('rounded-lg bg-red-900 px-4 py-2 text-white shadow-lg')}
        onClick={() => reset()}
      >
        Retry
      </button>
    </div>
  )
}

export default Error
