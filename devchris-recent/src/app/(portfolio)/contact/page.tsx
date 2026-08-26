import { cn } from '~/lib/utils/cn'
import { PageLayout } from '~/components-ui/page-layout'
import { Wrapper } from '~/components-ui/wrapper'

const ContactPage = async () => {
  return (
    <PageLayout title='Contact'>
      <Wrapper>
        <div className={cn('my-4 flex flex-col gap-6')}>
          <p>
            I&apos;m available for focused freelance projects and technical
            collaborations.
          </p>
          <div className={cn('flex flex-wrap gap-4')}>
            <a href='mailto:yovano_c@outlook.com'>Email me</a>
            <a href='https://github.com/yovanoc' target='_blank' rel='noreferrer'>
              GitHub
            </a>
            <a
              href='https://www.linkedin.com/in/yovanoc/'
              target='_blank'
              rel='noreferrer'
            >
              LinkedIn
            </a>
          </div>
        </div>
      </Wrapper>
    </PageLayout>
  )
}

export default ContactPage
