import Link from 'next/link'
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs'

import { cn } from '~/lib/utils/cn'

type BannerSocialsProps = {
  className?: string
  socials?: Array<Social>
}

export const BannerSocials = ({ className, socials }: BannerSocialsProps) => {
  return (
    <div
      className={cn(
        className,
        'text-color-light flex items-center justify-center gap-4 md:justify-start md:pl-8',
      )}
    >
      <Link
        href='https://github.com/yovanoc'
        className={cn('hover:text-color-jade transition-text-color p-1')}
        target='_blank'
        aria-label='Access my github'
      >
        <BsGithub preserveAspectRatio={'xMidYMid meet'} className={cn('h-6 w-6')} target='_blank' />
      </Link>
      <Link
        href='https://www.linkedin.com/in/yovanoc/'
        className={cn('hover:text-color-jade transition-text-color p-1')}
        target='_blank'
        aria-label='Access my Linkedin'
      >
        <BsLinkedin preserveAspectRatio={'xMidYMid meet'} className={cn('h-6 w-6')} />
      </Link>
      <Link
        href='https://twitter.com/yovano_c'
        className={cn('hover:text-color-jade transition-text-color p-1')}
        target='_blank'
        aria-label='Access my Twitter'
      >
        <BsTwitter preserveAspectRatio={'xMidYMid meet'} className={cn('h-6 w-6')} />
      </Link>
    </div>
  )
}
