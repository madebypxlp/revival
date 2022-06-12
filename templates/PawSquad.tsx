import ClassicHeroModule from '@components/modules/ClassicHero/ClassicHero'
import ClassicHeroFragment from '@components/modules/ClassicHero/ClassicHero.graphql'

const TemplatePawSquad = (props: any) => {
  return (
    <div>
      <ClassicHeroModule module={props.template.pagePawSquad.classicHero} />
    </div>
  )
}
export default TemplatePawSquad

const TEMPLATE_PREFIX = 'Template_PawSquad_Pagepawsquad'

export const fragment = `
  ${ClassicHeroFragment(TEMPLATE_PREFIX)}
  fragment TemplatePawSquad on Template_PawSquad
  {
    templateName
    pagePawSquad {
      fieldGroupName
      classicHero {
        ...ClassicHero_${TEMPLATE_PREFIX}
      }

    }
  }
`
