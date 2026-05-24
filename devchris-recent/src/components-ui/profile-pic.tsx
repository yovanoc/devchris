import React from 'react'
import Image from 'next/image'

import { cn } from '~/lib/utils/cn'

type ProfilePicProps = {
  className: string
  profilePic: ImageAsset
}

export const ProfilePic = ({ className, profilePic }: ProfilePicProps) => {
  return (
    // <div className={cn(className)}>
    <Image
      className={cn(className, 'object-contain')}
      src={profilePic.url}
      alt='Christopher YOVANOVITCH - Fullstack Developer'
      quality={100}
      sizes='208px'
      width={208}
      height={208}
      // width={profilePic.metadata.dimensions.width}
      // height={profilePic.metadata.dimensions.height}
      // fill
      priority
    />
    // </div>
  )
}
