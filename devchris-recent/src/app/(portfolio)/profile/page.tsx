import { cn } from '~/lib/utils/cn'
import { PageLayout } from '~/components-ui/page-layout'
import { Wrapper } from '~/components-ui/wrapper'
import { ProfilePic } from '~/components-ui/profile-pic'

const bio = 'lorem ipsum'
const profilePic: ImageAsset = {
	url: 'https://www.devchris.me/images/profile.jpg',
	metadata: {
		dimensions: {
			width: 100,
			height: 100
		}
	}
}

const ProfilePage = async () => {
  return (
    <PageLayout title="Profile">
      <Wrapper>
        <div
          className={cn(
            'mt-2 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8 lg:mt-4',
          )}
        >
          <ProfilePic
            className={cn(
              // 'animation-entry-profile-pic',
              'relative mt-4 h-52 w-52 shrink-0 shadow-md',
              'transition-image overflow-hidden rounded-full',
              'border-white dark:border-grey-700',
            )}
            profilePic={profilePic}
          />
          <div className={cn('prose-profile shrink grow basis-80')}>
            {bio}
          </div>
        </div>
      </Wrapper>
    </PageLayout>
  )
}

export default ProfilePage
