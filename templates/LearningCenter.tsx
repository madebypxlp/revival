import LightHeroModule from '@components/modules/LightHero/LightHero'
import LightHeroFragment from '@components/modules/LightHero/LightHero.graphql'

const TemplateLearningCenter = (props: any) => {
  return (
    <div>
      <LightHeroModule module={props.template.pageLearningCenter.lightHero} />
    </div>
  )
}
export default TemplateLearningCenter

const TEMPLATE_PREFIX = 'Template_LearningCenter_Pagelearningcenter'

export const fragment = `
  ${LightHeroFragment(TEMPLATE_PREFIX)}
  fragment TemplateLearningCenter on Template_LearningCenter
  {
    templateName
    pageLearningCenter {
      fieldGroupName
      lightHero {
        ...LightHero_${TEMPLATE_PREFIX}
      }

    }
  }
`
