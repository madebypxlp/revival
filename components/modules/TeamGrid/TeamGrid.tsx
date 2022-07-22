import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import Button from '@components/ui/Button/Button'
import { useIsMobile } from '@commerce/utils/hooks'
import ArrowCTA from '@components/ui/ArrowCTA/ArrowCTA'
import ITeamGrid from './TeamGrid.interface'
import styles from './TeamGrid.module.scss'

const TeamGridModule: FunctionComponent<{ module: ITeamGrid }> = ({
  module,
}) => {
  const { headline, team } = module
  const isMobile = useIsMobile()

  return (
    <div className={`${styles.root}`}>
      <div className="container">
        <div className={styles.headlineContainer}>
          {headline && <h4>{headline}</h4>}
        </div>
        <div className={styles.teamGridContainer}>
          {team &&
            team.map(({ member }) => {
              const tm = member.postTypeTeam
              const { links } = tm
              return (
                <div key={tm.name} className={styles.teamMemberContainer}>
                  <div className={styles.teamImageContainer}>
                    <Image
                      alt=""
                      src={tm.profileImage.sourceUrl}
                      layout="fill"
                      objectFit="contain"
                      className="bg-white"
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
                      {links.map(({ link }) => (
                        <div key={link.title} className="">
                          <Button
                            color="yellow"
                            variant="large"
                            type="default"
                            link={link}
                            className="hidden md:block"
                          />
                          <ArrowCTA
                            link={link}
                            className="block md:hidden"
                            subnav
                            orientation="right"
                            color="yellow"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
}

export default TeamGridModule
