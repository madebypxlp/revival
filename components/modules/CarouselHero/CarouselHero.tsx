import React, { FunctionComponent } from 'react'
import c from 'classnames'
import Button from '@components/ui/Button/Button'
import Ring from '@components/icons/Ring'
import ImageComponent from '@components/ui/Image/Image'
import ICarouselHero from './CarouselHero.interface'
import styles from './CarouselHero.module.scss'

const CarouselHeroModule: FunctionComponent<{ module: ICarouselHero }> = ({
  module,
}) => {
  const { headline, copy, images, link, subline } = module

  console.log(link)
  const ctaButtonClick = (event: Event) => {
    const anchorIndex = link.url.indexOf('#')
    if (anchorIndex > -1) {
      const elem = document.getElementById(link.url.substring(anchorIndex + 1))
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth', block: 'start' })
        event.preventDefault()
      }
    }
  }

  // images need to be duplicated for the infinite scrolling marquee to work correctly
  const carouselGroups = []
  for (let i = 0; i < 2; i += 1) {
    carouselGroups.push(
      <div className={styles.carouselGroup}>
        {images &&
          images.length > 0 &&
          images.map((image, index) => (
            <div key={image.image?.desktopImage?.sourceUrl}>
              <ImageComponent
                image={image.image}
                loading="eager"
                className={c({
                  [styles.imageSmallRound]: index % 3 == 1,
                  [styles.imageSmall]: index % 3 == 2,
                  [styles.imageLarge]: index % 3 === 0,
                })}
              />
            </div>
          ))}
      </div>
    )
  }

  return (
    <div className={`${styles.root}`}>
      <div className="container default-grid">
        <div className={c(styles.subline)}>
          {subline && <span>{subline}</span>}
        </div>
        <h2 className={c(styles.headline)}>
          {headline && <span>{headline}</span>}
        </h2>
        <div className={c(styles.copy)}>{copy && <span>{copy}</span>}</div>
        <div className={c(styles.buttonContainer)}>
          {link && (
            <Button
              onClick={ctaButtonClick}
              link={link}
              className={c(styles.button)}
              type="default"
              variant="large"
              color="yellow"
            />
          )}
        </div>
      </div>
      <div className={styles.carousel}>{carouselGroups}</div>
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{ zIndex: -1 }}
      >
        <div className="container h-full relative default-grid">
          <Ring className="mt-60 md:mt-255 col-start-2 col-span-1 md:col-start-6 md:col-span-3" />
          <Ring className="absolute bottom-0 col-start-1 col-span-1 md:col-start-2 md:col-span-3 translate-x-50" />
        </div>
      </div>
    </div>
  )
}

export default CarouselHeroModule
