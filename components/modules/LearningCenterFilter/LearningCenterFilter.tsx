import React, { FunctionComponent, useState } from 'react'
import styles from './LearningCenterFilter.module.scss'
import { useRouter } from 'next/router'
import { Category } from 'framework/wordpress/interfaces/post'
import { LearningCenterInterface } from 'framework/wordpress/interfaces/learning-center'
import PaginateChildren from '@components/ui/PaginateChildren/PaginateChildren'
import ArticleTeaser from '@components/ui/ArticleTeaser/ArticleTeaser'
import Input from '@components/ui/Input/Input'

const LearningCenterFilterModule: FunctionComponent<{
  categories: Category[]
  contentTypes: Category[]
  posts: LearningCenterInterface[]
  activeCategory?: Category
}> = ({ categories: _categories, contentTypes, posts, activeCategory }) => {
  const categories = _categories.filter(
    (cat) => !['Uncategorized'].includes(cat.name)
  )
  const isDetail = () => !!activeCategory
  const articleCount = isDetail() ? posts?.length : 6

  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedContentTypes, setSelectedContentTypes] = useState<string[]>([])

  const paginationSettings = {
    perPage: 6,
    totalPages: 1,
    currentPage: 1,
    onChange: (page: number) => {
      if (!isDetail()) return
      // router.push({
      //   pathname,
      //   query: {
      //     slug: [blogSlugAndPage.slug, `page-${page}`],
      //   },
      // })
    },
  }

  const handleCategoryChange = (checked: boolean | string, id: string) => {
    !!checked
      ? setSelectedCategories((prev) => [...prev, id])
      : setSelectedCategories((prev) => prev.filter((i) => i !== id))
  }

  const handleContentTypeChange = (checked: boolean | string, id: string) => {
    !!checked
      ? setSelectedContentTypes((prev) => [...prev, id])
      : setSelectedContentTypes((prev) => prev.filter((i) => i !== id))
  }

  return (
    <div className={`${styles.root} container`}>
      <div className="default-grid">
        <div className="col-span-2">
          <p className="typo-eyebrow mb-25">Filter by Categories</p>
          {!!categories?.length &&
            categories.map((cat) => {
              const { id, name } = cat
              return (
                <Input
                  className={styles.checkbox}
                  type="checkbox"
                  key={id}
                  label={name}
                  square
                  onChange={(v) => handleCategoryChange(v, id)}
                />
              )
            })}

          <p className="typo-eyebrow mb-25">Filter by Content Type</p>
          {!!contentTypes?.length &&
            contentTypes.map((type) => {
              const { id, name } = type
              return (
                <Input
                  className={styles.checkbox}
                  type="checkbox"
                  key={id}
                  label={name}
                  square
                  onChange={(v) => handleContentTypeChange(v, id)}
                />
              )
            })}
        </div>
        <div className="col-span-10">
          <p className="typo-eyebrow md:pl-65 mb-20">{articleCount} Articles</p>

          {!!posts?.length && (
            <div className="md:pl-65">
              <PaginateChildren {...paginationSettings}>
                {posts.map((post, index) => (
                  <ArticleTeaser post={post} key={post.id} variant="wide" />
                ))}
              </PaginateChildren>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default LearningCenterFilterModule
