import React, {
  FunctionComponent,
  MouseEventHandler,
  useEffect,
  useState,
} from 'react'
import styles from './LearningCenterFilter.module.scss'
import router, { useRouter } from 'next/router'
import { Category } from 'framework/wordpress/interfaces/post'
import { LearningCenterInterface } from 'framework/wordpress/interfaces/learning-center'
import PaginateChildren from '@components/ui/PaginateChildren/PaginateChildren'
import ArticleTeaser from '@components/ui/ArticleTeaser/ArticleTeaser'
import Input from '@components/ui/Input/Input'
import { useDebounce } from '@lib/hooks/useDebounce'
import { getBlogSlugAndPage } from '@lib/utils'
import Link from '@components/ui/Link/Link'

const LearningCenterFilterModule: FunctionComponent<{
  categories: Category[]
  contentTypes: Category[]
  posts: LearningCenterInterface[]
  totalPosts?: number
  activeCategory?: Category
}> = ({
  categories: _categories,
  contentTypes,
  posts,
  activeCategory,
  totalPosts,
}) => {
  const categories = _categories.filter(
    (cat) => !['Uncategorized'].includes(cat.name)
  )
  const isDetail = () => !!activeCategory
  const articleCount = totalPosts || posts?.length

  const router = useRouter()
  const { pathname, query } = router
  const slugAndPage = getBlogSlugAndPage(query?.slug)

  const defaultCategories = Array.isArray(query.categories)
    ? query.categories
    : query.categories
    ? [query.categories]
    : []
  if (activeCategory?.slug && !defaultCategories.includes(activeCategory?.slug))
    defaultCategories.push(activeCategory.slug)
  const defaultTypes = Array.isArray(query.types)
    ? query.types
    : query.types
    ? [query.types]
    : []

  const [selectedCategories, setSelectedCategories] =
    useState<string[]>(defaultCategories)
  const [selectedContentTypes, setSelectedContentTypes] =
    useState<string[]>(defaultTypes)
  const debouncedCategories = useDebounce(selectedCategories, 750)
  const debouncedTypes = useDebounce(selectedContentTypes, 750)

  // handle filter change
  useEffect(() => {
    if (!router.isReady) return
    if (!debouncedCategories?.length && !debouncedTypes?.length) return
    if (debouncedCategories === defaultCategories) return
    if (debouncedTypes === defaultTypes) return

    // use current slug on detail page otherwise get slug of first selected category
    const _slug = isDetail() ? slugAndPage.slug : debouncedCategories[0]
    const _categories = [
      ...new Set(
        debouncedCategories.filter((s: string) => s !== activeCategory?.slug)
      ),
    ].sort() as string[]
    if (!isDetail()) _categories.shift()

    router.push({
      pathname: '/learning-center/category/[slug]',
      query: {
        ...query,
        slug: _slug,
        categories: _categories,
        types: debouncedTypes,
      },
    })
  }, [debouncedCategories, debouncedTypes])

  // handle pagination change
  const paginationSettings = {
    perPage: 6,
    totalPages: totalPosts ? Math.ceil(totalPosts / 6) : 1,
    currentPage: slugAndPage.page,
    onChange: (page: number) => {
      if (!isDetail()) return
      router.push({
        pathname,
        query: {
          ...query,
          slug: [slugAndPage.slug, `page-${page}`],
        },
      })
    },
  }

  const handleCategoryChange = (checked: boolean | string, slug: string) => {
    !!checked
      ? setSelectedCategories((prev) =>
          Array.from(new Set([...prev, slug])).sort()
        )
      : setSelectedCategories((prev) =>
          [...new Set(prev.filter((s) => s !== slug))].sort()
        )
  }

  const handleContentTypeChange = (checked: boolean | string, slug: string) => {
    !!checked
      ? setSelectedContentTypes((prev) => [...new Set([...prev, slug])].sort())
      : setSelectedContentTypes((prev) =>
          [...new Set(prev.filter((s) => s !== slug))].sort()
        )
  }

  const clearCategories: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault()
    setSelectedCategories(defaultCategories)
  }

  const clearTypes: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault()
    setSelectedContentTypes(defaultTypes)
  }

  return (
    <div className={`${styles.root} container mb-40 md:mb-80`}>
      <div className="default-grid">
        <div className="hidden md:block col-span-2 mb-60">
          <p className="typo-eyebrow mb-25">Filter by Categories</p>
          <hr />
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
                  disabled={activeCategory?.slug === slug}
                  square
                  onChange={(v) => handleCategoryChange(v, slug)}
                />
              )
            })}
          <hr />
          <Link
            className="-mt-10 mb-30"
            color="blue"
            fakeLink
            onClick={clearCategories}
          >
            Clear all
          </Link>

          <p className="typo-eyebrow mb-25">Filter by Content Type</p>
          <hr />
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
          <hr />
          <Link
            className="-mt-10 mb-30"
            color="blue"
            fakeLink
            onClick={clearTypes}
          >
            Clear all
          </Link>
        </div>
        <div className="col-span-2 md:col-span-10">
          {!!posts?.length && (
            <div className="md:h-full md:pl-65 md:flex flex-col">
              <p className="typo-eyebrow mb-20">{articleCount} Articles</p>
              <PaginateChildren {...paginationSettings}>
                {posts.map((post, index) => (
                  <ArticleTeaser
                    post={post}
                    key={post.id}
                    variant="wide"
                    className="mb-40 md:mb-0"
                  />
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
