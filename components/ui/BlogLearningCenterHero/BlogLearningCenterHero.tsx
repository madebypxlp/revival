import React, { FunctionComponent } from 'react'
import styles from './BlogLearningCenterHero.module.scss'
import IBlogLearningCenterHero from './BlogLearningCenterHero.interface'
import { LearningCenterInterface } from 'framework/wordpress/interfaces/learning-center'
import { PostInterface } from 'framework/wordpress/interfaces/post'
import FacebookIconRound from '@components/icons/FacebookIconRound'
import LinkedInIconRound from '@components/icons/LinkedInIconRound'
import PrintIconRound from '@components/icons/PrintIconRound'
import CopyIconRound from '@components/icons/CopyIconRound'
import TwitterIconRound from '@components/icons/TwitterIconRound'
import Image from 'next/image'
import Link from 'next/link'
import { useIsMobile } from '@commerce/utils/hooks'
import BlogHeroCircle from '@components/icons/BlogHeroCircle'

const formatDate = (dateObject: string) => {
  const date = new Date(dateObject).toLocaleString('en-us', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
  //	.replace(',', ' -');
  return date
}

const BlogLearningCenterHero: FunctionComponent<
  LearningCenterInterface | PostInterface
> = (props) => {
  const { categories, date, title, featuredImage, uri } = props
  let data

  const isMobile = useIsMobile()

  if ('detailPageLearningCenter' in props) {
    data = props.detailPageLearningCenter
  }

  if ('detailPagePost' in props) {
    data = props.detailPagePost
  }

  var categoriesArray: string[] = []
  categories.nodes.map((el) => {
    categoriesArray.push(el.name)
  })

  const author = `By ${data?.authorName}`

  const icons = [
    {
      el: <FacebookIconRound />,
      href: data?.socialLinks.facebook,
    },
    { el: <TwitterIconRound />, href: data?.socialLinks.twitter },
    { el: <LinkedInIconRound />, href: data?.socialLinks.linkedin },
  ]

  const links = icons.map((icon) => {
    if (!icon.href) return null
    return (
      <Link href={icon.href}>
        <a className="inline-block w-60 h-60 md:w-75 md:h-75 flex-shrink-0">
          {icon.el}
        </a>
      </Link>
    )
  })

  const onClickCopy = () => {
    navigator.clipboard.writeText(window.location.toString())
  }

  const ImageComponent = (
    <div className={styles.imageWrapper}>
      <div className="aspect-w-[771] aspect-h-[500]">
        <Image
          src={featuredImage.node.sourceUrl}
          alt={featuredImage.node.altText}
          layout="fill"
          objectFit="cover"
          className="md:z-20 md:rounded-bl-30"
        />
        <div className={`${styles.circle} hidden md:block`}>
          <BlogHeroCircle />
        </div>
      </div>
    </div>
  )

  return (
    <div
      className={`${styles.root} container default-grid gap-20 md:gap-0 md:pb-80`}
    >
      <div className="md:col-start-1 col-span-full pt-30 md:pt-0 md:col-span-6 md:row-span-1 md:row-start-3 md:mb-40">
        <h6 className="uppercase typo-category text-blue max-w-55">
          {categoriesArray.join(', ')}
        </h6>
        <h2 className="text-blue">{title}</h2>
        <p className="text-20 leading-30 font-normal">{author}</p>
        <p className="text-20 leading-30 font-normal mb-20 md:mb-0">
          {formatDate(date)}
        </p>
        {isMobile && ImageComponent}
      </div>
      {!isMobile && ImageComponent}
      <div className="flex justify-center items-center md:block col-span-full md:col-span-6 md:row-span-1 md:row-start-4 md:-mx-14 ">
        {links}
        <button
          className="inline-block w-60 h-60 md:w-75 md:h-75 flex-shrink-0"
          onClick={onClickCopy}
        >
          <CopyIconRound />
        </button>
        <button
          className="inline-block w-60 h-60 md:w-75 md:h-75 flex-shrink-0"
          onClick={() => window.print()}
        >
          <PrintIconRound />
        </button>
      </div>
    </div>
  )
}

export default BlogLearningCenterHero
