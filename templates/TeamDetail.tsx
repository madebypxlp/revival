import { TeamInterface } from 'framework/wordpress/team-query'
import renderTeamDetail from 'repeater/teamDetail'

const TeamDetail = (props: TeamInterface) => {
  const {
    postTypeTeam: { pageBuilder },
  } = props

  return <div>{pageBuilder.map((e: any) => renderTeamDetail(e))}</div>
}
export default TeamDetail
