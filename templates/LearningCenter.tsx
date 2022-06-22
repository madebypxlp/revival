import LightHeroModule from '@components/modules/LightHero/LightHero'
import LightHeroFragment from '@components/modules/LightHero/LightHero.graphql'
import NewsletterSignUpModule from '@components/modules/NewsletterSignUp/NewsletterSignUp'
import NewsletterSignUpFragment from '@components/modules/NewsletterSignUp/NewsletterSignUp.graphql'

const TemplateLearningCenter = (props: any) => {
  return (
    <div>
      <LightHeroModule module={props.template.pageLearningCenter.lightHero} />
      <NewsletterSignUpModule
        module={props.template.pageLearningCenter.newsletterSignUp}
      />
    </div>
  )
}
export default TemplateLearningCenter

const TEMPLATE_PREFIX = 'Template_LearningCenter_Pagelearningcenter'

export const fragment = `
  ${LightHeroFragment(TEMPLATE_PREFIX)}
  ${NewsletterSignUpFragment(TEMPLATE_PREFIX)}
  fragment TemplateLearningCenter on Template_LearningCenter
  {
    templateName
    pageLearningCenter {
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
