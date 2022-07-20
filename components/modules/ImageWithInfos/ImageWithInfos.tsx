import React, { FunctionComponent } from 'react'
import UIImage from '@components/ui/Image/Image'
import Image from 'next/image'
import Button from '@components/ui/Button/Button'
import cn from 'classnames'
import GradientOverlay from '@components/ui/GradientOverlay/GradientOverlay'
import IImageWithInfos from './ImageWithInfos.interface'
import styles from './ImageWithInfos.module.scss'

const ImageWithInfosModule: FunctionComponent<{ module: IImageWithInfos }> = ({
  module,
}) => {
  const { image, headline, subline, sublineImage, link, copy, facts } = module

  return (
    <div className={`${styles.root} relative md:mb-60`}>
      <div className="container">
        <div className="flex justify-center items-center min-h-[55.5rem] md:relative">
          <GradientOverlay className="absolute inset-0">
            <UIImage
              image={image}
              layout="fill"
              className={cn('absolute inset-0', styles.backgroundImage)}
            />
          </GradientOverlay>
          <div className="flex items-center justify-center flex-col z-10">
            <div
              className={cn([
                'flex flex-row items-center',
                facts?.length ? 'md:mb-50 mb-10' : 'mb-10',
              ])}
            >
              {subline && (
                <div
                  className={cn([
                    'text-white',
                    facts?.length ? 'typo-h6' : 'typo-eyebrow',
                  ])}
                >
                  {subline}
                </div>
              )}
              {sublineImage?.sourceUrl && (
                <div className="relative ml-5 md:ml-15">
                  <Image
                    src={sublineImage.sourceUrl}
                    alt={sublineImage.altText}
                    width={25}
                    height={30}
                  />
                </div>
              )}
            </div>

            {headline && (
              <h3 className="typo-h3 text-white mb-20 text-center">
                {headline}
              </h3>
            )}

            {copy && (
              <p className="typo-fact text-white md:w-[45rem] max-w-full text-center mb-10">
                {copy}
              </p>
            )}

            {!!facts?.length && (
              <div className="mt-10 mb-30 hidden lg:flex">
                {facts.map((fact) => (
                  <div
                    key={fact.text}
                    className={`${styles.fact} flex items-center md:mx-7 typo-fact text-white`}
                  >
                    {fact?.icon?.sourceUrl && (
                      <div className="relative mr-15">
                        <Image
                          src={fact.icon.sourceUrl}
                          alt={fact.icon.altText}
                          width={22}
                          height={22}
                        />
                      </div>
                    )}
                    {fact.text}
                  </div>
                ))}
              </div>
            )}

            {link?.title && (
              <Button
                className="mt-10"
                color="yellow"
                variant="large"
                type="default"
                link={link}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageWithInfosModule
