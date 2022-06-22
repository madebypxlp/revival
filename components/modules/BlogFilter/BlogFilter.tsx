import React, { FunctionComponent } from 'react'
import styles from './BlogFilter.module.scss'
import IBlogFilter from './BlogFilter.interface'
import { Category, PostInterface } from 'framework/wordpress/interfaces/post'
import Input from '@components/ui/Input/Input'
import Link from '@components/ui/Link/Link'
import cn from 'classnames'
import Button from '@components/ui/Button/Button'
import BlogFilterBar from './BlogFilterBar'
import PaginateChildren from '@components/ui/PaginateChildren/PaginateChildren'

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
        <div className="container default-grid grid-cols-3">
          <PaginateChildren perPage={9}>
            {data.map((post) => {
              return (
                <div>
                  {/* replace with article teaser component */}
                  {post.title}
                </div>
              )
            })}
          </PaginateChildren>
        </div>
      )}
    </div>
  )
}

export default BlogFilterModule
