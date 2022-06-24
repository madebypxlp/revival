import ClassicHeroModule from '@components/modules/ClassicHero/ClassicHero'
import ClassicHeroFragment from '@components/modules/ClassicHero/ClassicHero.graphql'
import FullwidthItemRowModule from '@components/modules/FullwidthItemRow/FullwidthItemRow'
import FullwidthItemRowFragment from '@components/modules/FullwidthItemRow/FullwidthItemRow.graphql'
import TeamGridModule from '@components/modules/TeamGrid/TeamGrid'
import TeamGridFragment from '@components/modules/TeamGrid/TeamGrid.graphql'
import TextImageModule from '@components/modules/TextImage/TextImage'
import TextImageFragment from '@components/modules/TextImage/TextImage.graphql'

const TemplatePawSquad = (props: any) => {
  const {
    template: { pagePawSquad },
  } = props
  return (
    <div>
      <ClassicHeroModule module={pagePawSquad.classicHero} />
      <FullwidthItemRowModule module={pagePawSquad.fullwidthItemRow} />
      <TeamGridModule module={pagePawSquad.teamGrid} />
      <TextImageModule module={pagePawSquad.textImage} />
    </div>
  )
}
export default TemplatePawSquad

const TEMPLATE_PREFIX = 'Template_PawSquad_Pagepawsquad'

export const fragment = `
  ${ClassicHeroFragment(TEMPLATE_PREFIX)}
  ${TeamGridFragment(TEMPLATE_PREFIX)}
  ${TextImageFragment(TEMPLATE_PREFIX)}
  ${FullwidthItemRowFragment(TEMPLATE_PREFIX)}
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
      textImage {
        ...TextImage_${TEMPLATE_PREFIX}
      }
      fullwidthItemRow {
        ...FullwidthItemRow_${TEMPLATE_PREFIX}
      }
    }
  }
`
