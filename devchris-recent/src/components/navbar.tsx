'use client'
import { usePathname } from 'next/navigation'
import { cn } from '~/lib/utils/cn'

import {
  HiOutlineIdentification,
  HiOutlineChatBubbleOvalLeftEllipsis,
  HiOutlineCommandLine,
  HiOutlineInboxStack,
} from 'react-icons/hi2'

import { NavbarLink } from '~/components-ui/navbar-link'

export const Navbar = () => {
  const currentRoute = usePathname()

  return (
    <nav>
      <ul className={cn('flex justify-center divide-x')}>
        <NavbarLink
          href='/profile'
          label='Profile'
          IconComponent={HiOutlineIdentification}
          currentRoute={currentRoute}
          ariaLabel='Access my profile'
        />
        <NavbarLink
          href='/skills'
          label='Skills'
          IconComponent={HiOutlineCommandLine}
          currentRoute={currentRoute}
          ariaLabel='Access my skills'
        />
        <NavbarLink
          href='/projects'
          label='Projects'
          IconComponent={HiOutlineInboxStack}
          currentRoute={currentRoute}
          ariaLabel='Access my projects'
        />
        <NavbarLink
          href='/contact'
          label='Contact'
          IconComponent={HiOutlineChatBubbleOvalLeftEllipsis}
          currentRoute={currentRoute}
          ariaLabel='Access my contact'
        />
      </ul>
    </nav>
  )
}
