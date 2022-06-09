import React, { FunctionComponent } from 'react'
import styles from './TextImage.module.scss'
import ITextImage from './TextImage.interface'
import { builtinModules } from 'module'
import ImageComponent from '@components/ui/Image/Image'
import Image from '@components/interfaces/Image'
import Button from '@components/ui/Button/Button'
import ArrowCTA from '@components/ui/ArrowCTA/ArrowCTA'

interface ImageWrapperInterface {
  flipOrientation: boolean
  image: Image
  className: string
}

const ImageWrapper = ({
  flipOrientation,
  image,
  className,
}: ImageWrapperInterface) => {
  if (flipOrientation) {
    return (
      <div
        className={`${className} md:col-span-6 col-span-12 relative mt-30 md:mt-0`}
      >
        <div className="default-grid w-full h-full absolute">
          <div
            className={`col-span-1 col-start-2 md:col-span-8 md:col-start-5 relative`}
          >
            <div className={`${styles.image_left_pattern1_wrapper}`}>
              <div className={styles.image_left_pattern1}></div>
            </div>
          </div>
        </div>
        <div className="flex md:grid default-grid w-full h-full">
          <div className={`md:col-span-10 ${styles.image_block}`}>
            <div className={`relative`}>
              <ImageComponent
                width={1}
                height={1}
                image={image}
                className={styles.image_left}
              />
              <div className={`${styles.image_left_pattern2_block}`}>
                <div className={`${styles.image_left_pattern2_wrapper}`}>
                  <div className={styles.image_left_pattern2}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div
        className={`${className} md:col-span-6 md:col-start-7 col-span-12 relative mt-30 md:mt-0`}
      >
        <div className="default-grid w-full h-full absolute">
          <div className={`col-span-1 md:col-span-6`}>
            <div className={`${styles.image_right_pattern1_wrapper}`}>
              <div className={styles.image_right_pattern1}></div>
            </div>
          </div>
        </div>
        <div className="flex justify-end md:grid default-grid w-full h-full">
          <div
            className={`${styles.image_block} md:col-span-10 md:col-start-3`}
          >
            <div className={`${styles.image_wrapper} relative`}>
              <div className="flex justify-end items-end w-full h-full absolute">
                <div className={`${styles.image_right_pattern2_wrapper}`}>
                  <div className={styles.image_right_pattern2}></div>
                </div>
              </div>
              <ImageComponent
                width={1}
                height={1}
                image={image}
                className={styles.image_right}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const TextImageModule: FunctionComponent<{ module: ITextImage }> = ({
  module,
}) => {
  return (
    <div className={`${styles.root} container`}>
      {module.rows.map((row) => (
        <div key={row.subline} className={`default-grid ${styles.row}`}>
          {row.flipOrientation && (
            <ImageWrapper
              flipOrientation={row.flipOrientation}
              image={row.image}
              className="hidden md:flex"
            />
          )}
          <div
            className={`${
              row.flipOrientation
                ? 'md:col-span-5 md:col-start-8'
                : 'md:col-span-4 md:col-start-2'
            } col-span-12 md:pt-140 pt-0`}
          >
            {row.subline && (
              <p className="typo-eyebrow text-blue uppercase">{row.subline}</p>
            )}
            {row.headline && (
              <h3 className="mt-10 text-blue">{row.headline}</h3>
            )}
            {row.copy && (
              <p className="typo-large-paragraph mt-20">{row.copy}</p>
            )}
            <div className="flex items-center mt-25">
              {row.buttonLink && (
                <Button
                  variant="large"
                  color="yellow"
                  type="default"
                  className="mr-30"
                  href={row.buttonLink.url}
                >
                  {row.buttonLink.title}
                </Button>
              )}
              {row.classicLink && (
                <ArrowCTA
                  orientation="right"
                  color="blue"
                  href={row.classicLink.url}
                >
                  {row.classicLink.title}
                </ArrowCTA>
              )}
            </div>
          </div>
          <ImageWrapper
            flipOrientation={row.flipOrientation}
            image={row.image}
            className={!row.flipOrientation ? '' : 'md:hidden'}
          />
        </div>
      ))}
    </div>
  )
}

export default TextImageModule
