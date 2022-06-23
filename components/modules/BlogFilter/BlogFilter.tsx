import React, { FunctionComponent } from 'react'
import styles from './BlogFilter.module.scss'
import IBlogFilter from './BlogFilter.interface'
import { Category, PostInterface } from 'framework/wordpress/interfaces/post'
import cn from 'classnames'
import BlogFilterBar from './BlogFilterBar'
import PaginateChildren from '@components/ui/PaginateChildren/PaginateChildren'
import ArticleTeaser from '@components/ui/ArticleTeaser/ArticleTeaser'

const BlogFilterModule: FunctionComponent<{
  module: IBlogFilter
  data: PostInterface[]
  categories: Category[]
  activeCategory?: Category
}> = ({ module, data, categories: _categories, activeCategory }) => {
  const isDetail = () => !!activeCategory
  const { actionCta } = module

  const categories = _categories.filter(
    (cat) => !['Uncategorized'].includes(cat.name)
  )

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
          <PaginateChildren perPage={9}>
            {data.map((post, index) => (
              <ArticleTeaser
                post={post}
                key={post.id}
                className={'mb-40 md:mb-80'}
                variant={index === 0 ? 'featured' : 'default'}
              />
            ))}
          </PaginateChildren>
        </div>
      )}
    </div>
  )
}

export default BlogFilterModule
