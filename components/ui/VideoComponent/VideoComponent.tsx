import React, { FunctionComponent, Component, useState, useEffect } from 'react'
import styles from './VideoComponent.module.scss'
import IVideoComponent from './VideoComponent.interface'
import Plyr from 'plyr-react'
import 'plyr-react/dist/plyr.css'
import classNames from 'classnames'

const VideoComponent: FunctionComponent<IVideoComponent> = (props) => {
  const { source = '', options, className } = props
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
    : 'html5'

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
