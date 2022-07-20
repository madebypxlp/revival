import React, { FunctionComponent } from 'react'
import ImageComponent from '@components/ui/Image/Image'
import Image from '@components/interfaces/Image'
import Button from '@components/ui/Button/Button'
import cn from 'classnames'
import ArrowCTA from '@components/ui/ArrowCTA/ArrowCTA'
import { EllipseHole, EllipseFull } from '@components/icons'
import ITextImage from './TextImage.interface'
import styles from './TextImage.module.scss'

interface ImageWrapperInterface {
  flipOrientation: boolean
  image: Image
  className: string
  index: number
}

const ImageWrapper = ({
  flipOrientation,
  image,
  className,
  index,
}: ImageWrapperInterface) => {
  if (flipOrientation) {
    return (
      <div
        className={`${className} md:col-span-6 col-span-12 relative mt-30 md:mt-55`}
      >
        <EllipseHole
          className={cn(
            index === 0 && 'ellipseHoleOne',
            index === 1 && 'alternateHole',
            index === 2 && 'ellipseHoleThree',
            'absolute'
          )}
        />
        <EllipseFull
          className={cn(
            index === 0 && 'ellipseFullOne',
            index === 1 && 'alternateFull',
            index === 2 && 'ellipseFullThree',
            'absolute'
          )}
        />
        <div className="default-grid w-full h-full absolute">
          <div className="col-span-1 col-start-2 md:col-span-8 md:col-start-1 relative" />
        </div>
        <div className="flex md:grid default-grid w-full h-full">
          <div className={`md:col-span-10 ${styles.image_block}`}>
            <div className="relative">
              <ImageComponent image={image} className={styles.image_left} />
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div
      className={`${className} md:col-span-6 md:col-start-7 col-span-12 relative mt-30 md:mt-0`}
    >
      <div className="default-grid w-full h-full absolute md:-left-100">
        <div className="col-span-1 md:col-span-5">
          <div className={`${styles.image_right_pattern1_wrapper}`}>
            <div className={styles.image_right_pattern1} />
          </div>
        </div>
      </div>
      <div className="flex justify-end md:grid default-grid w-full h-full">
        <div
          className={`${styles.image_block} ${
            index === 1
              ? 'md:col-span-12 md:col-start-1'
              : 'md:col-span-10 md:col-start-3'
          }`}
        >
          <div className={`${styles.image_wrapper} relative`}>
            <div className="flex justify-end items-end w-full h-full absolute">
              <div className={`${styles.image_right_pattern2_wrapper}`}>
                <div className={styles.image_right_pattern2} />
              </div>
            </div>
            <ImageComponent image={image} className={styles.image_right} />
          </div>
        </div>
      </div>
    </div>
  )
}

const TextImageModule: FunctionComponent<{ module: ITextImage }> = ({
  module,
}) => (
  <div className={`${styles.root} overflow-hidden`}>
    <div className="container">
      {module.rows.map((row, idx) => (
        <div
          key={row.subline}
          className={`default-grid items-center ${styles.row}`}
        >
          {row.flipOrientation && (
            <ImageWrapper
              index={idx}
              flipOrientation={row.flipOrientation}
              image={row.image}
              className="hidden md:flex"
            />
          )}
          <div
            className={`${
              row.flipOrientation
                ? 'md:col-span-6 md:col-start-7 lg:col-span-4 lg:col-start-8'
                : 'md:col-span-6 md:col-start-1 lg:col-span-4 lg:col-start-2'
            } col-span-12 pt-0 `}
          >
            {row.subline && (
              <p className="typo-eyebrow text-blue uppercase">{row.subline}</p>
            )}
            {row.headline && (
              <h3 className="mt-10 text-blue">{row.headline}</h3>
            )}
            {row.copy && (
              <p className="typo-large-paragraph-text-image mt-20">
                {row.copy}
              </p>
            )}
            <div className="flex items-center mt-25 ">
              {row.buttonLink && (
                <Button
                  variant="large"
                  color="yellow"
                  type="default"
                  className="mr-20"
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
                  subnav
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
            index={idx}
          />
        </div>
      ))}
    </div>
  </div>
)

export default TextImageModule
