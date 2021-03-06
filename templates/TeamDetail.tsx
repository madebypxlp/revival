import { TeamInterface } from 'framework/wordpress/queries/post-type-team/team-query'
import renderTeamDetail from 'repeater/team-detail'

const TeamDetail = (props: TeamInterface) => {
  const {
    postTypeTeam: { pageBuilder },
  } = props

  return <div>{pageBuilder.map((e: any) => renderTeamDetail(e))}</div>
}
export default TeamDetail
