import React, { FunctionComponent, useEffect, useRef } from 'react'
import styles from './TextImageHero.module.scss'
import ITextImageHero from './TextImageHero.interface'
import Text from '@components/ui/Text/Text'
import ImageComponent from '@components/ui/Image/Image'

const TextImageHeroModule: FunctionComponent<{ module: ITextImageHero }> = ({
  module,
}) => {
  const { subline, headline, copy, image } = module
  const imageRef = useRef(null)
  const gridRef = useRef(null)

  const setWidth = () => {
    const layoutWidth = (document as any).querySelector('main.fit').clientWidth
    const containerWidth = (gridRef.current as any).clientWidth
    let width = '100%'
    if (window.innerWidth >= 768) {
      width = `calc(100% + ${(layoutWidth - containerWidth) / 2}px)`
    }
    ;(imageRef.current as any).style.width = width
  }
  useEffect(() => {
    if (typeof window != 'undefined' && imageRef.current && gridRef.current) {
      setWidth()
      window.addEventListener('resize', setWidth)
    }
    return () => {
      window.removeEventListener('resize', setWidth)
    }
  }, [process.browser, imageRef.current, gridRef.current])
  return (
    <div className={`${styles.root} container`}>
      <div className={`default-grid`} ref={gridRef}>
        <div className={`col-span-2 md:col-span-5 ${styles.text_block}`}>
          <Text className={styles.subline}>{subline}</Text>
          <Text className={styles.headline}>{headline}</Text>
          <Text className={styles.copy}>{copy}</Text>
        </div>
        <div className="col-span-2 md:col-span-7">
          <div className="image-wrapper" ref={imageRef}>
            <ImageComponent image={image} className={styles.image} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TextImageHeroModule
