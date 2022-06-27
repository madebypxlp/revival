import React, { FunctionComponent } from 'react'
import styles from './MoreArticles.module.scss'
import IMoreArticles from './MoreArticles.interface'
import Image from 'next/image'
import ArrowCTA from '@components/ui/ArrowCTA/ArrowCTA'
import { LearningCenterInterface } from 'framework/wordpress/interfaces/learning-center'

const MoreArticlesModule: FunctionComponent<{
  module: IMoreArticles
  data: LearningCenterInterface[]
  currentId: string
}> = ({ module, data, currentId }) => {
  const { headline } = module
  return (
    <div className={`${styles.root} container mb-100`}>
      {headline && <h3 className="typo-h4 text-blue mb-35">{headline}</h3>}
      <div className="default-grid gap-y-40">
        {data &&
          data.map((post) => {
            if (currentId === post.id) return null
            return (
              <div className="col-span-2 md:col-span-12 lg:col-span-6 grid grid-cols-6 gap-20">
                <div className="col-span-6 md:col-span-4 order-2 md:order-1">
                  <h4 className="typo-h6 text-blue mb-10">{post.title}</h4>
                  <p className="typo-small-paragraph mb-10">
                    Grooming your own pets gives you control over the style and
                    cut, and bonding time with your furry friends. A little
                    dog...
                  </p>
                  <ArrowCTA href={post.uri} orientation="right" color="blue">
                    Learn More
                  </ArrowCTA>
                </div>

                <div className="col-span-6 md:col-span-2 order-1 md:order-2 justify-self-center">
                  <Image
                    className="rounded-15 "
                    width="217"
                    height="140"
                    src={post.featuredImage.node.sourceUrl}
                    alt={post.featuredImage.node.altText}
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
