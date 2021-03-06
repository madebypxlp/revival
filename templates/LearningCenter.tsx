import ChipLinksModule from '@components/modules/ChipLinks/ChipLinks'
import ChipLinksFragment from '@components/modules/ChipLinks/ChipLinks.graphql'
import InlineTextModule from '@components/modules/InlineText/InlineText'
import InlineTextFragment from '@components/modules/InlineText/InlineText.graphql'
import LearningCenterFeaturedAndLatestModule from '@components/modules/LearningCenterFeaturedAndLatest/LearningCenterFeaturedAndLatest'
import LearningCenterFeaturedAndLatestFragment from '@components/modules/LearningCenterFeaturedAndLatest/LearningCenterFeaturedAndLatest.graphql'
import LearningCenterFilterModule from '@components/modules/LearningCenterFilter/LearningCenterFilter'
import LearningCenterFilterFragment from '@components/modules/LearningCenterFilter/LearningCenterFilter.graphql'
import LightHeroModule from '@components/modules/LightHero/LightHero'
import LightHeroFragment from '@components/modules/LightHero/LightHero.graphql'
import NewsletterSignUpModule from '@components/modules/NewsletterSignUp/NewsletterSignUp'
import NewsletterSignUpFragment from '@components/modules/NewsletterSignUp/NewsletterSignUp.graphql'

const TemplateLearningCenter = (props: any) => {
  const {
    template: { pageLearningCenter },
    latestLearningCenterPosts: { nodes = [] },
    categories,
    filterData,
  } = props
  return (
    <div>
      <LightHeroModule module={pageLearningCenter.lightHero} />
      <LearningCenterFeaturedAndLatestModule
        latestPosts={nodes}
        categories={categories?.nodes}
        module={pageLearningCenter.learningCenterFeaturedAndLatest}
      />
      <ChipLinksModule module={pageLearningCenter.chipLinks} />
      <InlineTextModule module={pageLearningCenter.inlineText} />
      <LearningCenterFilterModule {...filterData} />
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
  ${LearningCenterFilterFragment(TEMPLATE_PREFIX)}
  ${ChipLinksFragment(TEMPLATE_PREFIX)}
  ${InlineTextFragment(TEMPLATE_PREFIX)}
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
      learningCenterFilter {
        ...LearningCenterFilter_${TEMPLATE_PREFIX}
      }
      newsletterSignUp {
        ...NewsletterSignUp_${TEMPLATE_PREFIX}
      }
      chipLinks {
        ...ChipLinks_${TEMPLATE_PREFIX}
      }
      inlineText {
        ...InlineText_${TEMPLATE_PREFIX}
      }
    }
  }
`
