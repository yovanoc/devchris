'use client'
import { useState } from 'react'
import { HiMapPin, HiOutlineBars3, HiXMark } from 'react-icons/hi2'

import { cn } from '~/lib/utils/cn'
import { useOutsideClick } from '~/lib/hooks/use-outside-click'
import { BannerSocials } from '~/components-ui/banner-socials'
import { BannerLinks } from '~/components-ui/banner-links'
import { DarkThemeButton } from '~/components-ui/dark-theme-button'


type BannerProps = {
  pageDetails: PageDetails
}

export const Banner = ({ pageDetails }: BannerProps) => {
  const [isBannerOpen, setIsBannerOpen] = useState(false)
  const containerRef = useOutsideClick(() => {
    setIsBannerOpen(false)
  })

  const toggleBanner = () => {
    if (isBannerOpen === true) {
      setIsBannerOpen(false)
    } else {
      setIsBannerOpen(true)
    }
  }

  return (
    <header
      ref={containerRef}
      className={cn(
        // 'animation-entry-banner',
        'transition-margin relative flex w-full shrink flex-col rounded-md text-center',
        'bg-grey-0 shadow-md dark:bg-grey-800',
        'md:static md:flex-row md:content-center md:items-center md:justify-between',
      )}
    >
      <div className={cn('md:order-2')}>
        {/* <BannerProfilePic
          className={cn(
            // 'animation-entry-profile-pic',
            'transition-image mx-auto mb-2 rounded-full shadow-md',
            'border-white dark:border-grey-700',
            isBannerOpen ? '-mt-16 h-32 w-32 border-[5px]' : '-mt-8 h-16 w-16 border-[3px]',
            'md:-mt-16 md:h-32 md:w-32 md:border-[5px]',
          )}
          profilePic={pageDetails.profilePic}
        /> */}

        <h1 className={cn('mb-1 mt-4 text-xl font-semibold')}>{pageDetails.fullName}</h1>

        <h2 className={cn('text-color-jade mb-2 text-sm font-medium')}>{pageDetails.job}</h2>

        <div
          className={cn(
            'text-color-light transition-text-size mb-4 flex items-center justify-center gap-1.5 text-sm font-medium',
          )}
        >
          <HiMapPin
            preserveAspectRatio={'xMidYMid slice'}
            className={cn('transition-image h-4 w-3')}
          />
          <p>{pageDetails.city}</p>
        </div>
      </div>

      <BannerSocials
        className={cn(
          'mb-4 mt-2',
          'transition-banner overflow-hidden',
          isBannerOpen ? 'max-h-9 opacity-100' : 'mb-0 mt-0 max-h-0 opacity-0',
          'md:order-1 md:mx-0 md:max-h-32 md:shrink md:basis-64 md:opacity-100',
        )}
        socials={pageDetails.socials}
      />

      <BannerLinks
        className={cn(
          'text-color-base mx-auto',
          'transition-banner overflow-hidden',
          isBannerOpen ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0',
          'md:order-3 md:mx-0 md:max-h-32 md:shrink md:basis-64 md:opacity-100',
        )}
        resume={pageDetails.resume}
      />

      {/* BUTTONS Dark Theme / Toggle Banner*/}

      <DarkThemeButton
        className={cn(
          'hover:text-color-jade transition-invert-button absolute pt-[2px]',
          'left-4 top-4 md:top-1 md:right-1 md:left-auto min-[1180px]:top-7 min-[1180px]:right-8',
        )}
      />

      <button
        onClick={toggleBanner}
        className={cn(
          'hover:text-color-jade transition-invert-button absolute top-4 right-4 h-8 w-8',
          'md:hidden',
        )}
        aria-label={isBannerOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
      >
        <HiXMark
          preserveAspectRatio={'xMidYMid slice'}
          className={cn(
            'absolute top-0 left-0 h-full w-full',
            isBannerOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0',
          )}
        />
        <HiOutlineBars3
          preserveAspectRatio={'xMidYMid slice'}
          className={cn(
            'absolute top-0 left-0 h-full w-full',
            isBannerOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100',
          )}
        />
      </button>
    </header>
  )
}
