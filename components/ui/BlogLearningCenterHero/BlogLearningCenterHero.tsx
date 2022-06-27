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
    { el: <FacebookIconRound />, href: data?.socialLinks.facebook },
    { el: <TwitterIconRound />, href: data?.socialLinks.twitter },
    { el: <LinkedInIconRound />, href: data?.socialLinks.linkedin },
  ]

  const links = icons.map((icon) => {
    if (!icon.href) return null
    return (
      <Link href={icon.href}>
        <a className="inline-block w-75 h-75">{icon.el}</a>
      </Link>
    )
  })

  const onClickCopy = () => {
    navigator.clipboard.writeText(window.location.toString())
  }

  return (
    <div className={`${styles.root} default-grid gap-20 lg:gap-0 lg:pb-80`}>
      <div className="container lg:col-start-1 col-span-full lg:col-span-6 lg:row-span-1 lg:row-start-3 lg:mb-40">
        <h6 className="uppercase typo-category text-blue max-w-[57rem]">
          {categoriesArray.join(', ')}
        </h6>
        <h2 className="text-blue ">{title}</h2>
        <p className="text-20 leading-30 font-normal">{author}</p>
        <p className="text-20 leading-30 font-normal">{formatDate(date)}</p>
      </div>

      <div className="-30 col-span-full aspect-w-[1280] aspect-h-[720] lg:col-span-6 relative lg:row-span-6">
        <Image
          src={featuredImage.node.sourceUrl}
          alt={featuredImage.node.altText}
          layout="fill"
          className="z-20 rounded-bl"
        />
        <div className={`${styles.circle} hidden lg:block`}></div>
      </div>

      <div className="container flex justify-center items-center lg:block col-span-full lg:col-span-6 lg:row-span-1 lg:row-start-4">
        {links}
        <button className="inline-block w-75 h-75" onClick={onClickCopy}>
          <CopyIconRound />
        </button>
        <button
          className="inline-block w-75 h-75"
          onClick={() => window.print()}
        >
          <PrintIconRound />
        </button>
      </div>
    </div>
  )
}

export default BlogLearningCenterHero
