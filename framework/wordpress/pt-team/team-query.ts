import Link from '@components/interfaces/Link'
import TableAccordionFragment from '@components/modules/TableAccordion/TableAccordion.graphql'

const TEMPLATE = 'Team_Posttypeteam_PageBuilder'

export default `
  ${TableAccordionFragment(TEMPLATE)}
  query team($slug: String) {
    entry: teamBy(slug: $slug) {
      id
      title
      slug
      postTypeTeam {
        pageBuilder {
          ...TableAccordion_${TEMPLATE}
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
