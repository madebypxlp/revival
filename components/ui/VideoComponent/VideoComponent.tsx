import React, { FunctionComponent, useState, useEffect } from 'react'
import Plyr from 'plyr-react'
import { useIsMobile } from '@commerce/utils/hooks'
import styles from './VideoComponent.module.scss'
import IVideoComponent from './VideoComponent.interface'
import 'plyr-react/dist/plyr.css'

const VideoComponent: FunctionComponent<IVideoComponent> = (props) => {
  const { source = '', options, className } = props
  const [mounted, setMounted] = useState<boolean>(false)
  const isMobile = useIsMobile()

  const defaultOptions = {
    autoplay: false,
    volume: 1,
    controls: [isMobile ? 'play' : '', 'play-large'],
    nativeControlsForTouch: true,
  }

  useEffect(() => {
    setTimeout(() => {
      setMounted(true)
    }, 100)
  }, [mounted])

  const provider = source.includes('vimeo') ? 'vimeo' : 'youtube'

  return (
    <div className={`${styles.root} ${className}`}>
      {mounted ? (
        <Plyr
          source={{
            type: 'video',
            sources: [{ src: source, provider }],
          }}
          options={{ ...options, ...defaultOptions }}
        />
      ) : (
        <div className="aspect-w-16 aspect-h-9" />
      )}
    </div>
  )
}

export default VideoComponent
