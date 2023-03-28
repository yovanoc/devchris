import '~/assets/styles/globals.css'
import { Poppins } from 'next/font/google'

import { cn } from '~/lib/utils/cn'
import { Providers } from '~/components-providers/providers'
import { Banner } from '~/components/banner'
import { Navbar } from '~/components/navbar'

import type { PropsWithChildren } from 'react'
import type { Metadata } from 'next'
import { Background } from '~/components-ui/background'

export const metadata: Metadata = {
	title: 'Christopher YOVANOVITCH | Fullstack Developer',
	description:
		'Portfolio de Christopher YOVANOVITCH. Fullstack developer',
	creator: 'Christopher YOVANOVITCH',
	openGraph: {
		locale: 'fr-FR',
		title: 'Portfolio Christopher YOVANOVITCH | Fullstack Developer',
		description:
			'Portfolio de Christopher YOVANOVITCH. Fullstack developer',
		url: 'https://www.devchris.me',
		siteName: 'Portfolio Christopher YOVANOVITCH | Fullstack developer',
		images: [
			{
				url: 'https://www.devchris.me/og.jpeg',
				width: 1200,
				height: 600,
				alt: 'Portfolio Christopher YOVANOVITCH | Fullstack developer',
			},
		],
	},
	robots: {
		index: true,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: true,
			noimageindex: false,
		},
	},
}

const poppins = Poppins({
	weight: ['400', '500', '600', '700'],
	subsets: ['latin'],
	display: 'swap',
})

export const revalidate = 604800

const pageDetails: PageDetails = {
	fullName: 'Christopher YOVANOVITCH',
	job: 'Fullstack Developer',
	city: 'Lille',
	resume: {
		url: 'https://www.devchris.me/resume.pdf'
	},
	socials: [],
	title: 'Portfolio',
}

const HomeLayout = async ({ children }: PropsWithChildren) => {
	return (
		// <Background>
			<Providers>
				<div
					className={cn(
						'relative z-0 h-full w-full',
						'flex items-center justify-center',
						'text-color-base font-poppins',
						'bg-grey-50 dark:bg-grey-1000',
						poppins.className,
					)}
				>

					<div
						className={cn(
							'relative h-full w-full p-4 md:p-8',
							'flex flex-col items-center justify-start gap-3 ',
							'max-w-[68rem] md:static',
						)}
					>
						<Banner pageDetails={pageDetails} />
						<div
							className={cn(
								'dark:shadow-left-md relative z-10 w-full overflow-hidden rounded-md shadow-md lg:h-full',
								'flex grow flex-col',
								// 'animation-entry-app ',
								'bg-grey-0 dark:bg-grey-800',
							)}
						>
							<Navbar />
							{children}
						</div>
					</div>
				</div>
			</Providers>
		// </Background>
	)
}

export default HomeLayout
