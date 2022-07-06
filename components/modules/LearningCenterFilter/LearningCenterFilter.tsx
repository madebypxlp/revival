import React, { FunctionComponent, useEffect, useState } from 'react'
import styles from './LearningCenterFilter.module.scss'
import router, { useRouter } from 'next/router'
import { Category } from 'framework/wordpress/interfaces/post'
import { LearningCenterInterface } from 'framework/wordpress/interfaces/learning-center'
import PaginateChildren from '@components/ui/PaginateChildren/PaginateChildren'
import ArticleTeaser from '@components/ui/ArticleTeaser/ArticleTeaser'
import Input from '@components/ui/Input/Input'
import { useDebounce } from '@lib/hooks/useDebounce'

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

  const router = useRouter()
  const { pathname, query } = router

  const defaultCategories = Array.isArray(query.categories)
    ? query.categories
    : []
  if (activeCategory?.slug) defaultCategories.push(activeCategory.slug)
  const defaultTypes = Array.isArray(query.types) ? query.types : []

  const [selectedCategories, setSelectedCategories] =
    useState<string[]>(defaultCategories)
  const [selectedContentTypes, setSelectedContentTypes] =
    useState<string[]>(defaultTypes)
  const debouncedState = useDebounce(
    { selectedCategories, selectedContentTypes },
    750
  )

  useEffect(() => {
    const {
      selectedCategories: _selectedCategories,
      selectedContentTypes: _selectedContentTypes,
    } = debouncedState

    if (!_selectedCategories?.length && !_selectedContentTypes?.length) return
    router.push({
      pathname,
      query: {
        ...query,
        categories: _selectedCategories.filter(
          (cs: string) => cs !== activeCategory?.slug
        ),
        types: _selectedContentTypes,
      },
    })
  }, [debouncedState.selectedCategories, debouncedState.selectedContentTypes])

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

  const handleCategoryChange = (checked: boolean | string, slug: string) => {
    !!checked
      ? setSelectedCategories((prev) => [...prev, slug])
      : setSelectedCategories((prev) => prev.filter((s) => s !== slug))
  }

  const handleContentTypeChange = (checked: boolean | string, slug: string) => {
    !!checked
      ? setSelectedContentTypes((prev) => [...prev, slug])
      : setSelectedContentTypes((prev) => prev.filter((s) => s !== slug))
  }

  return (
    <div className={`${styles.root} container`}>
      <div className="default-grid">
        <div className="col-span-2">
          <p className="typo-eyebrow mb-25">Filter by Categories</p>
          {!!categories?.length &&
            categories.map((cat) => {
              const { slug, name } = cat
              return (
                <Input
                  className={styles.checkbox}
                  type="checkbox"
                  key={slug}
                  label={name}
                  checked={selectedCategories.includes(slug)}
                  square
                  onChange={(v) => handleCategoryChange(v, slug)}
                />
              )
            })}

          <p className="typo-eyebrow mb-25">Filter by Content Type</p>
          {!!contentTypes?.length &&
            contentTypes.map((type) => {
              const { slug, name } = type
              return (
                <Input
                  className={styles.checkbox}
                  type="checkbox"
                  key={slug}
                  label={name}
                  checked={selectedContentTypes.includes(slug)}
                  square
                  onChange={(v) => handleContentTypeChange(v, slug)}
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
