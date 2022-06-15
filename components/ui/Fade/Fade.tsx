import React, { FunctionComponent } from 'react'
import { useInView } from 'react-intersection-observer'
import { useIsMobile } from '@commerce/utils/hooks'
import styles from './Fade.module.scss'
import IFade from './Fade.interface'

const Fade = (props: IFade) => {
  const {
    children,
    threshold = 0.25,
    delay = 0,
    className = '',
    disableOnMobile = true,
  } = props

  const { ref, inView } = useInView({
    threshold,
    delay,
    triggerOnce: true,
  })

  const isMobile = useIsMobile()
  if (isMobile && disableOnMobile) return children

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`${styles.root} ${inView ? styles['fade--in'] : ''}`}
    >
      {children}
    </div>
  )
}

export default Fade
