import { cn } from '~/lib/utils/cn'
// import { ContactInformations } from '~/components/contact-informations'
// import { ContactForm } from '~/components/contact-form'
import { PageLayout } from '~/components-ui/page-layout'
import { Wrapper } from '~/components-ui/wrapper'
// import { RecaptchaProvider } from '~/components-providers/recaptcha-provider'

const ContactPage = async () => {
  return (
    // <RecaptchaProvider>
      <PageLayout title='Contact'>
        <Wrapper>
					<div className={cn('my-4 flex flex-col gap-6')}>
						Coming soon...
            {/* <h4>
              To know more, or to talk about your projects, don&apos;t hesitate to contact me :
            </h4>
            <ContactInformations />
            <ContactForm /> */}
          </div>
        </Wrapper>
      </PageLayout>
    // </RecaptchaProvider>
  )
}

export default ContactPage
