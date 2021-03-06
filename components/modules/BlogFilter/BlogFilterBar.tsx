import React, { FunctionComponent } from 'react'
import IBlogFilter from './BlogFilter.interface'
import styles from './BlogFilter.module.scss'
import { Category, PostInterface } from 'framework/wordpress/interfaces/post'
import Input from '@components/ui/Input/Input'
import Link from '@components/ui/Link/Link'
import cn from 'classnames'
import Button from '@components/ui/Button/Button'

const BlogFilterBar: FunctionComponent<{
  categories: Category[]
  activeCategory?: Category
  cta?: IBlogFilter['actionCta']
  searchInputPlaceholder?: string
  variant?: string
}> = ({
  categories: _categories,
  activeCategory,
  cta,
  searchInputPlaceholder = 'Search the Blog',
  variant,
}) => {
  const categories = _categories.filter(
    (cat) => !['Uncategorized'].includes(cat.name)
  )

  return (
    <div
      className={cn(
        styles.root,
        'container blog-filter-bar',
        variant && styles[`variant-${variant}`]
      )}
    >
      <div className="md:default-grid">
        <Input
          className={'col-span-6 row-start-1 lg:col-span-4 xl:col-span-3'}
          placeholder={searchInputPlaceholder}
          variant="blue-outline"
          type="search"
          icon="search"
          size="small"
        />

        <div
          className={cn([
            styles.categoriesContainer,
            'md:flex flex-wrap items-center pb-25',
            'row-start-2 col-span-full xl:row-start-1',
            cta?.url ? 'xl:col-span-7' : 'xl:col-span-9',
          ])}
        >
          {!!categories?.length &&
            categories.map((cat) => (
              <Link
                href={cat.uri}
                className={cn([
                  'inline-block text-blue mr-16 md:mr-40',
                  activeCategory?.categoryId !== cat.categoryId &&
                    '!no-underline',
                ])}
              >
                {cat.name}
              </Link>
            ))}
        </div>

        {cta?.url && (
          <div
            className={cn(
              'md:-ml-16 md:text-right',
              'row-start-1 col-span-6 col-start-7 xl:col-span-2 xl:col-start-11'
            )}
          >
            <Button variant="large" color="yellow" link={cta} />
          </div>
        )}
      </div>
    </div>
  )
}

export default BlogFilterBar
