import LearningCenterFeaturedAndLatestModule from '@components/modules/LearningCenterFeaturedAndLatest/LearningCenterFeaturedAndLatest'
import LearningCenterFeaturedAndLatestFragment from '@components/modules/LearningCenterFeaturedAndLatest/LearningCenterFeaturedAndLatest.graphql'
import LightHeroModule from '@components/modules/LightHero/LightHero'
import LightHeroFragment from '@components/modules/LightHero/LightHero.graphql'
import NewsletterSignUpModule from '@components/modules/NewsletterSignUp/NewsletterSignUp'
import NewsletterSignUpFragment from '@components/modules/NewsletterSignUp/NewsletterSignUp.graphql'

const TemplateLearningCenter = (props: any) => {
  const {
    template: { pageLearningCenter },
    latestLearningCenterPosts: { nodes = [] },
    categories,
  } = props
  return (
    <div>
      <LightHeroModule module={pageLearningCenter.lightHero} />
      <LearningCenterFeaturedAndLatestModule
        latestPosts={nodes}
        categories={categories?.nodes}
        module={pageLearningCenter.learningCenterFeaturedAndLatest}
      />
      <NewsletterSignUpModule module={pageLearningCenter.newsletterSignUp} />
    </div>
  )
}
export default TemplateLearningCenter

const TEMPLATE_PREFIX = 'Template_LearningCenter_Pagelearningcenter'

export const fragment = `
  ${LightHeroFragment(TEMPLATE_PREFIX)}
  ${NewsletterSignUpFragment(TEMPLATE_PREFIX)}
  ${LearningCenterFeaturedAndLatestFragment(TEMPLATE_PREFIX)}
  fragment TemplateLearningCenter on Template_LearningCenter
  {
    templateName
    pageLearningCenter {
      fieldGroupName
      lightHero {
        ...LightHero_${TEMPLATE_PREFIX}
      }
      learningCenterFeaturedAndLatest {
        ...LearningCenterFeaturedAndLatest_${TEMPLATE_PREFIX}
      }
      newsletterSignUp {
        ...NewsletterSignUp_${TEMPLATE_PREFIX}
      }
    }
  }
`
