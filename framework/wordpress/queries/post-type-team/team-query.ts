import Image from '@components/fragments/Image'
import Link from '@components/fragments/Link'
import ClassicHeroFragment from '@components/modules/ClassicHero/ClassicHero.graphql'
import InlineTextFragment from '@components/modules/InlineText/InlineText.graphql'
import InlineVideoFragment from '@components/modules/InlineVideo/InlineVideo.graphql'
import TableAccordionFragment from '@components/modules/TableAccordion/TableAccordion.graphql'

const TEMPLATE = 'Team_Posttypeteam_PageBuilder'

export default `
  ${Link}
  ${Image}
  ${TableAccordionFragment(TEMPLATE)}
  ${InlineTextFragment(TEMPLATE, true)}
  ${InlineVideoFragment(TEMPLATE, true)}
  ${ClassicHeroFragment(TEMPLATE, true)}
  query team($slug: String) {
    entry: teamBy(slug: $slug) {
      id
      title
      slug
      postTypeTeam {
        pageBuilder {
          ...TableAccordion_${TEMPLATE}
          ...InlineText_${TEMPLATE}
          ...InlineVideo_${TEMPLATE}
          ...TableAccordion_${TEMPLATE}
          ...ClassicHero_${TEMPLATE}
        }
      }
    }
  }
`

export interface TeamInterface {
  id: string
  title: string
  slug: string

  postTypeTeam: {
    pageBuilder: [any]
  }
}
