import React, { FunctionComponent } from 'react'
import styles from './ImageWithInfos.module.scss'
import IImageWithInfos from './ImageWithInfos.interface'
import UIImage from '@components/ui/Image/Image'
import Image from 'next/image'
import Button from '@components/ui/Button/Button'

const ImageWithInfosModule: FunctionComponent<{ module: IImageWithInfos }> = ({
  module,
}) => {
  const { image, headline, subline, sublineImage, link, copy, facts } = module

  return (
    <div className={`${styles.root} relative`}>
      <UIImage image={image} layout="fill" className="absolute inset-0" />
      <div className="min-h-[55.5rem] flex justify-center items-center container relative z-10">
        <div className="flex items-center justify-center flex-col">
          <div className="flex flex-row items-center mb-10">
            {subline && <div className="typo-h6 text-white">{subline}</div>}
            {sublineImage?.sourceUrl && (
              <div className="relative w-25 h-30 ml-5 md:ml-15">
                <Image
                  src={sublineImage.sourceUrl}
                  alt={sublineImage.altText}
                  layout="fill"
                />
              </div>
            )}
          </div>

          {headline && (
            <h3 className="typo-h3 text-white mb-20 md:mb-0">{headline}</h3>
          )}

          {copy && (
            <p className="typo-fact text-white w-[45rem] max-w-full text-center mb-10">
              {copy}
            </p>
          )}

          {!!facts?.length && (
            <div className="my-40 hidden lg:flex">
              {facts.map((fact) => {
                return (
                  <div
                    className={`${styles.fact} flex items-center md:mx-7 typo-fact text-white`}
                  >
                    {fact?.icon?.sourceUrl && (
                      <div className="relative w-[22px] h-[22px] mr-15">
                        <Image
                          src={fact.icon.sourceUrl}
                          alt={fact.icon.altText}
                          layout="fill"
                        />
                      </div>
                    )}
                    {fact.text}
                  </div>
                )
              })}
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
  )
}

export default ImageWithInfosModule
