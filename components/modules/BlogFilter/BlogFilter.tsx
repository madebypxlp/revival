import React, { FunctionComponent } from 'react'
import styles from './BlogFilter.module.scss'
import IBlogFilter from './BlogFilter.interface'
import { Category, PostInterface } from 'framework/wordpress/interfaces/post'
import cn from 'classnames'
import BlogFilterBar from './BlogFilterBar'
import PaginateChildren from '@components/ui/PaginateChildren/PaginateChildren'
import ArticleTeaser from '@components/ui/ArticleTeaser/ArticleTeaser'
import { useRouter } from 'next/router'
import pageQuery from 'framework/wordpress/queries/page/page-query'

const BlogFilterModule: FunctionComponent<{
  module: IBlogFilter
  data: PostInterface[]
  cursors?: [{ cursor: string }]
  categories: Category[]
  activeCategory?: Category
}> = ({
  module,
  data,
  cursors = [],
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

  const paginationSettings = {
    perPage: 9,
    totalPages: isDetail() ? Math.ceil(cursors.length / 9) : 0,
    currentPage: !!query?.after
      ? Math.ceil(
          (cursors.findIndex(({ cursor }) => cursor === query.after) + 1) / 9
        )
      : 1,
    onChange: (page: number) => {
      const index = page * 9 - 10
      const cursor = cursors[index]?.cursor
      var newQuery: { [key: string]: string } = {
        ...query,
        after: cursor,
      }
      if (!cursor || page <= 1 || index <= 9) delete newQuery.after
      router.push({
        pathname,
        query: newQuery,
      })
    },
  }

  return (
    <div
      className={cn(
        styles.root,
        isDetail() ? 'mb-50 md:mb-100' : 'mb-40 md:mb-80',
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
