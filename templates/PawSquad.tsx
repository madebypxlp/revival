import ClassicHeroModule from '@components/modules/ClassicHero/ClassicHero'
import ClassicHeroFragment from '@components/modules/ClassicHero/ClassicHero.graphql'
import TeamGridModule from '@components/modules/TeamGrid/TeamGrid'
import TeamGridFragment from '@components/modules/TeamGrid/TeamGrid.graphql'

const TemplatePawSquad = (props: any) => {
  return (
    <div>
      <ClassicHeroModule module={props.template.pagePawSquad.classicHero} />
      <TeamGridModule module={props.template.pagePawSquad.teamGrid} />
    </div>
  )
}
export default TemplatePawSquad

const TEMPLATE_PREFIX = 'Template_PawSquad_Pagepawsquad'

export const fragment = `
  ${ClassicHeroFragment(TEMPLATE_PREFIX)}
  ${TeamGridFragment(TEMPLATE_PREFIX)}
  fragment TemplatePawSquad on Template_PawSquad
  {
    templateName
    pagePawSquad {
      fieldGroupName
      classicHero {
        ...ClassicHero_${TEMPLATE_PREFIX}
      }
      teamGrid {
        ...TeamGrid_${TEMPLATE_PREFIX}
      }
    }
  }
`
