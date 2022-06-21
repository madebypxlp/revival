import LightHeroModule from '@components/modules/LightHero/LightHero'
import LightHeroFragment from '@components/modules/LightHero/LightHero.graphql'
import NewsletterSignUpModule from '@components/modules/NewsletterSignUp/NewsletterSignUp'
import NewsletterSignUpFragment from '@components/modules/NewsletterSignUp/NewsletterSignUp.graphql'

const TemplateBlog = (props: any) => {
  return (
    <div>
      <LightHeroModule module={props.template.pageBlog.lightHero} />
      <NewsletterSignUpModule
        module={props.template.pageBlog.newsletterSignUp}
      />
    </div>
  )
}
export default TemplateBlog

const TEMPLATE_PREFIX = 'Template_Blog_Pageblog'

export const fragment = `
  ${LightHeroFragment(TEMPLATE_PREFIX)}
  ${NewsletterSignUpFragment(TEMPLATE_PREFIX)}
  fragment TemplateBlog on Template_Blog
  {
    templateName
    pageBlog {
      fieldGroupName
      lightHero {
        ...LightHero_${TEMPLATE_PREFIX}
      }
      newsletterSignUp {
        ...NewsletterSignUp_${TEMPLATE_PREFIX}
      }
    }
  }
`
