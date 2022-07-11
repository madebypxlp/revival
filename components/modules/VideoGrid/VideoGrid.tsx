import React, { FunctionComponent } from 'react'
import Video from '@components/ui/VideoComponent/VideoComponent'
import styles from './VideoGrid.module.scss'
import IVideoGrid from './VideoGrid.interface'

const VideoGridModule: FunctionComponent<{ module: IVideoGrid }> = ({
  module,
}) => {
  const { headline, videos } = module

  return (
    <div className={`${styles.root} container mb-50 md:mb-100`}>
      {headline && (
        <h4 className="typo-h4 text-blue mb-20 md:mb-40">{headline}</h4>
      )}
      <div className="default-grid">
        {videos?.length &&
          videos.map((video) => {
            const { youtubeId, name, title } = video
            return (
              <div className="col-span-6 mb-30 md:mb-0" key={title}>
                <Video
                  source={youtubeId}
                  className="mb-10 md:mb-30 rounded-15 overflow-hidden"
                />
                {name && <h5 className="typo-h4 text-blue md:mb-10">{name}</h5>}
                {title && <p className={styles.title}>{title}</p>}
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default VideoGridModule
