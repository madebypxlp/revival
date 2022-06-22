import React, { FunctionComponent } from 'react'
import styles from './MoreArticles.module.scss'
import IMoreArticles from './MoreArticles.interface'
import Image from 'next/image'
import ArrowCTA from '@components/ui/ArrowCTA/ArrowCTA'

const MoreArticlesModule: FunctionComponent<IMoreArticles> = ({
  module,
  data,
}) => {
  const { headline } = module

  console.log('DATA' + module, data)
  //  TODO: FILTER OUT CURRENT ARTICLE IF IN DATA
  return (
    <div className={`${styles.root} container`}>
      {headline && <h3 className="typo-h4 text-blue mb-35">{headline}</h3>}
      <div className="default-grid  gap-y-20 md:gap-y-40">
        {data &&
          data.map((data) => {
            return (
              <div className="  col-span-2 md:col-span-6 grid grid-cols-6 gap-20">
                <div className="col-span-4">
                  <h4 className="typo-h5 text-blue">{data.title}</h4>
                  <p className="typo-small-paragraph mb-10">
                    Grooming your own pets gives you control over the style and
                    cut, and bonding time with your furry friends. A little
                    dog...
                  </p>
                  <ArrowCTA href={data.uri} orientation="right" color="blue">
                    Learn More
                  </ArrowCTA>
                </div>

                <div className="col-span-2">
                  <Image
                    width="217"
                    height="140"
                    src={data.featuredImage.node.sourceUrl}
                    alt={data.featuredImage.node.altText}
                  />
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default MoreArticlesModule
