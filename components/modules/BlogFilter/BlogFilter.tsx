import React, { FunctionComponent } from 'react'
import { Category, PostInterface } from 'framework/wordpress/interfaces/post'
import cn from 'classnames'
import PaginateChildren from '@components/ui/PaginateChildren/PaginateChildren'
import ArticleTeaser from '@components/ui/ArticleTeaser/ArticleTeaser'
import { useRouter } from 'next/router'
import pageQuery from 'framework/wordpress/queries/page/page-query'
import { getBlogSlugAndPage } from '@lib/utils'
import BlogFilterBar from './BlogFilterBar'
import IBlogFilter from './BlogFilter.interface'
import styles from './BlogFilter.module.scss'

const BlogFilterModule: FunctionComponent<{
  module: IBlogFilter
  data: PostInterface[]
  totalPosts?: number
  categories: Category[]
  activeCategory?: Category
}> = ({
  module,
  data,
  totalPosts,
  categories: _categories,
  activeCategory,
}) => {
  const { actionCta } = module

  const categories = _categories.filter(
    (cat) => !['Uncategorized'].includes(cat.name)
  )

  const isDetail = () => !!activeCategory
  const showFeatured = (index: number) => !isDetail() && index === 0

  const router = useRouter()
  const { pathname, query } = router

  const blogSlugAndPage = getBlogSlugAndPage(query?.slug)
  const paginationSettings = {
    perPage: 9,
    totalPages: totalPosts ? Math.ceil(totalPosts / 9) : 1,
    currentPage: blogSlugAndPage.page,
    onChange: (page: number) => {
      if (!isDetail()) return
      router.push({
        pathname,
        query: {
          slug: [blogSlugAndPage.slug, `page-${page}`],
        },
      })
    },
  }

  return (
    <div
      className={cn(
        styles.root,
        isDetail() ? 'mb-50 md:mb-100' : 'mb-40 md:mb-0',
        'overflow-hidden'
      )}
    >
      <BlogFilterBar
        categories={categories}
        activeCategory={activeCategory}
        cta={actionCta}
      />

      {!!data?.length && (
        <div className="container default-grid">
          <PaginateChildren {...paginationSettings}>
            {data.map((post, index) => (
              <ArticleTeaser
                post={post}
                key={post.id}
                className={'mb-40 md:mb-80'}
                variant={showFeatured(index) ? 'featured' : 'default'}
                textSize={showFeatured(index) ? 'medium' : 'default'}
              />
            ))}
          </PaginateChildren>
        </div>
      )}
    </div>
  )
}

export default BlogFilterModule
