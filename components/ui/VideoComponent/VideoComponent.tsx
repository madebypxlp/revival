import React, { FunctionComponent, Component, useState, useEffect } from 'react'
import styles from './VideoComponent.module.scss'
import IVideoComponent from './VideoComponent.interface'
import Plyr from 'plyr-react'
import 'plyr-react/dist/plyr.css'

const VideoComponent: FunctionComponent<IVideoComponent> = (props) => {
  const { source = '', options } = props
  const [mounted, setMounted] = useState<boolean>(false)

  const defaultOptions = {
    autoplay: false,
    volume: 1,
    controls: ['play-large'],
  }

  useEffect(() => {
    setTimeout(() => {
      setMounted(true)
    }, 100)
  }, [mounted])

  const provider = source.includes('vimeo')
    ? 'vimeo'
    : source.includes('youtu')
    ? 'youtube'
    : 'youtube'

  return (
    <div className={`${styles.root} ${styles.plyrCustom}`}>
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
