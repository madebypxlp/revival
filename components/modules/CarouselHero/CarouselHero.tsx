import React, { FunctionComponent } from 'react'
import c from 'classnames'
import styles from './CarouselHero.module.scss'
import ICarouselHero from './CarouselHero.interface'
import Button from '@components/ui/Button/Button'
import Ring from '@components/icons/Ring'

const CarouselHeroModule: FunctionComponent<{ module: ICarouselHero }> = ({
  module,
}) => {
  console.log(module)
  const { headline, copy, images, link, subline } = module
  return (
    <div className={`${styles.root}`}>
      <div className={'container default-grid'}>
        <div className={c(styles.subline)}>{subline}</div>
        <h2 className={c(styles.headline)}>{headline}</h2>
        <div className={c(styles.copy)}>{copy}</div>
        <div className={c(styles.buttonContainer)}>
          <Button
            link={link}
            className={c(styles.button)}
            type="default"
            variant="large"
            color="yellow"
          />
        </div>
      </div>
      <div
        className={'absolute top-0 left-0 w-full h-full container default-grid'}
      >
        <Ring className={'mt-255 col-start-6 col-span-3'} />
      </div>
    </div>
  )
}

export default CarouselHeroModule
