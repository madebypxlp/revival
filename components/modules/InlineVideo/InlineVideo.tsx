import React, { FunctionComponent } from 'react'
import styles from './InlineVideo.module.scss'
import IInlineVideo from './InlineVideo.interface'
import Video from './../../ui/VideoComponent/VideoComponent'

const InlineVideoModule: FunctionComponent<{ module: IInlineVideo }> = ({
  module,
}) => {
  const { title, youtubeId } = module

  console.log(module)
  return (
    <div className={`${styles.root} container default-grid mb-80`}>
      {youtubeId && (
        <Video
          source={youtubeId}
          className="col-span-12 md:col-span-8 md:col-start-3 mb-45"
        />
      )}
      {title && (
        <div className="col-span-12 md:col-span-8 md:col-start-3 typo-h4 text-blue-default">
          {title}
        </div>
      )}
    </div>
  )
}

export default InlineVideoModule
