import React, { FunctionComponent } from 'react'
import styles from './TeamGrid.module.scss'
import ITeamGrid from './TeamGrid.interface'
import Image from 'next/image'
import Button from '@components/ui/Button/Button'

const TeamGridModule: FunctionComponent<{ module: ITeamGrid }> = ({
  module,
}) => {
  const { headline, team } = module
  return (
    <div className={`${styles.root} container`}>
      <div className={styles.headlineContainer}>
        {headline && <h4>{headline}</h4>}
      </div>
      <div className={styles.teamGridContainer}>
        {team &&
          team.map(({ member }) => {
            const tm = member.postTypeTeam
            const links = tm.links
            return (
              <div className={styles.teamMemberContainer}>
                <div className={styles.teamImageContainer}>
                  <Image
                    width={tm.profileImage.mediaDetails.width}
                    height={tm.profileImage.mediaDetails.height}
                    src={tm.profileImage.sourceUrl}
                    layout={'fill'}
                    objectFit={'contain'}
                  />
                </div>
                <div className={styles.teamMemberName}>
                  {tm.name && <h4>{tm.name}</h4>}
                </div>
                <div className={styles.teamMemberTitle}>
                  {tm.title && <span>{tm.title}</span>}
                </div>
                <div className={styles.teamMemberCopy}>
                  {tm.copy && <span>{tm.copy}</span>}
                </div>
                {links && links.length > 0 && (
                  <div className={styles.teamMemberLinksContainer}>
                    {links.map((l) => {
                      return (
                        <Button
                          href={l.link.url}
                          color="yellow"
                          variant="large"
                          type="default"
                        >
                          {l.link.title}
                        </Button>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default TeamGridModule
