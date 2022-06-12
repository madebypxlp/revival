import { MediaItem } from '@components/interfaces/Image'
import Link from '@components/interfaces/Link'

export default interface ITeamGrid {
  fieldGroupName: string
  headline: string
  team: [
    {
      member: {
        id: string
        postTypeTeam: {
          copy: string
          name: string
          title: string
          profileImage: MediaItem
          links: [link: Link]
        }
      }
    }
  ]
}
