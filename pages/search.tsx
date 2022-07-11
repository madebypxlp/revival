import cn from 'classnames'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'

import { Layout } from '@components/common'
import { ProductCard } from '@components/product'
import { Container, Grid, Skeleton } from '@components/ui'

import { getConfig } from '@framework/api'
import useSearch from '@framework/product/use-search'
import getAllPages from '@framework/common/get-all-pages'
import getSiteInfo from '@framework/common/get-site-info'

import rangeMap from '@lib/range-map'

// TODO(bc) Remove this. This should come from the API
import getSlug from '@lib/get-slug'

import {
  filterQuery,
  getCategoryPath,
  getDesignerPath,
  useSearchMeta,
} from '@lib/search'
import { Product } from '@commerce/types'
import headerQuery from '../framework/wordpress/queries/acfGlobalOptions/header'
import footerQuery from '../framework/wordpress/queries/acfGlobalOptions/footer'
import fetch from '../framework/wordpress/wp-client'

// TODO (bc) : Remove or standarize this.
const SORT = Object.entries({
  'latest-desc': 'Latest arrivals',
  'trending-desc': 'Trending',
  'price-asc': 'Price: Low to high',
  'price-desc': 'Price: High to low',
})

export async function getStaticProps({
  preview,
  locale,
}: GetStaticPropsContext) {
  const config = getConfig({ locale })
  const { pages } = await getAllPages({ config, preview })
  const { categories, brands } = await getSiteInfo({ config, preview })
  const header = await fetch({ query: headerQuery })
  const footer = await fetch({ query: footerQuery })
  return {
    props: {
      pages,
      categories,
      brands,
      header: { ...header?.acfOptionsHeader?.header },
      footer: footer?.acfOptionsFooter?.footer,
    },
  }
}

export default function Search({
  categories,
  brands,
  header,
  footer,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [activeFilter, setActiveFilter] = useState('')
  const [toggleFilter, setToggleFilter] = useState(false)

  const router = useRouter()
  const { asPath } = router
  const { q, sort } = router.query
  // `q` can be included but because categories and designers can't be searched
  // in the same way of products, it's better to ignore the search input if one
  // of those is selected
  const query = filterQuery({ sort })

  const { pathname, category, brand } = useSearchMeta(asPath)
  const activeCategory = categories.find(
    (cat) => getSlug(cat.path) === category
  )
  const activeBrand = brands.find(
    (b) => getSlug(b.node.path) === `brands/${brand}`
  )?.node

  const { data } = useSearch({
    search: typeof q === 'string' ? q : '',
    // TODO: Shopify - Fix this type
    categoryId: activeCategory?.entityId as any,
    // TODO: Shopify - Fix this type
    brandId: (activeBrand as any)?.entityId,
    sort: typeof sort === 'string' ? sort : '',
  })

  const handleClick = (event: any, filter: string) => {
    if (filter !== activeFilter) {
      setToggleFilter(true)
    } else {
      setToggleFilter(!toggleFilter)
    }
    setActiveFilter(filter)
  }

  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-3 mb-20">
        <div className="col-span-8 lg:col-span-2 order-1 lg:order-none">
          {/* Categories */}
          <div className="relative inline-block w-full">
            <div className="lg:hidden">
              <span className="rounded-15 shadow-sm">
                <button
                  onClick={(e) => handleClick(e, 'categories')}
                  className="flex justify-between w-full rounded-sm border border-gray-300 px-4 py-5 bg-white  leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150"
                  id="options-menu"
                  aria-haspopup="true"
                  aria-expanded="true"
                >
                  {activeCategory?.name
                    ? `Category: ${activeCategory?.name}`
                    : 'All Categories'}
                  <svg
                    className="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </span>
            </div>
            <div
              className={`origin-top-left absolute lg:relative left-0 mt-5 w-full rounded-15 shadow-lg lg:shadow-none z-10 mb-10 lg:block ${
                activeFilter !== 'categories' || toggleFilter !== true
                  ? 'hidden'
                  : ''
              }`}
            >
              <div className="rounded-sm bg-white shadow-xs lg:bg-none lg:shadow-none">
                <div
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <ul>
                    <li
                      className={cn(
                        'block  leading-5 text-gray-700 lg:text-base lg:no-underline lg:font-bold lg:tracking-wide hover:bg-gray-100 lg:hover:bg-transparent hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900',
                        {
                          underline: !activeCategory?.name,
                        }
                      )}
                    >
                      <Link
                        href={{ pathname: getCategoryPath('', brand), query }}
                      >
                        <button
                          onClick={(e) => handleClick(e, 'categories')}
                          className="block lg:inline-block px-4 py-5 lg:p-0 lg:my-2 lg:mx-4"
                        >
                          All Categories
                        </button>
                      </Link>
                    </li>
                    {categories.map((cat) => (
                      <li
                        key={cat.path}
                        className={cn(
                          'block  leading-5 text-gray-700 hover:bg-gray-100 lg:hover:bg-transparent hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900',
                          {
                            underline:
                              activeCategory?.entityId === cat.entityId,
                          }
                        )}
                      >
                        <Link
                          href={{
                            pathname: getCategoryPath(cat.path, brand),
                            query,
                          }}
                        >
                          <button
                            onClick={(e) => handleClick(e, 'categories')}
                            className="block lg:inline-block px-4 py-5 lg:p-0 lg:my-2 lg:mx-4"
                          >
                            {cat.name}
                          </button>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Designs */}
          <div className="relative inline-block w-full">
            <div className="lg:hidden mt-3">
              <span className="rounded-15 shadow-sm">
                <button
                  onClick={(e) => handleClick(e, 'brands')}
                  className="flex justify-between w-full rounded-sm border border-gray-300 px-4 py-5 bg-white  leading-5 font-medium text-gray-900 hover:text-gray-500 focus:outline-none focus:border-blue-300 active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150"
                  id="options-menu"
                  aria-haspopup="true"
                  aria-expanded="true"
                >
                  {activeBrand?.name
                    ? `Design: ${activeBrand?.name}`
                    : 'All Designs'}
                  <svg
                    className="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </span>
            </div>
            <div
              className={`origin-top-left absolute lg:relative left-0 mt-5 w-full rounded-15 shadow-lg lg:shadow-none z-10 mb-10 lg:block ${
                activeFilter !== 'brands' || toggleFilter !== true
                  ? 'hidden'
                  : ''
              }`}
            >
              <div className="rounded-sm bg-white shadow-xs lg:bg-none lg:shadow-none">
                <div
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <ul>
                    <li
                      className={cn(
                        'block  leading-5 text-gray-700 lg:text-base lg:no-underline lg:font-bold lg:tracking-wide hover:bg-gray-100 lg:hover:bg-transparent hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900',
                        {
                          underline: !activeBrand?.name,
                        }
                      )}
                    >
                      <Link
                        href={{
                          pathname: getDesignerPath('', category),
                          query,
                        }}
                      >
                        <button
                          onClick={(e) => handleClick(e, 'brands')}
                          className="block lg:inline-block px-4 py-5 lg:p-0 lg:my-2 lg:mx-4"
                        >
                          All Designers
                        </button>
                      </Link>
                    </li>
                    {brands.flatMap(({ node }) => (
                      <li
                        key={node.path}
                        className={cn(
                          'block  leading-5 text-gray-700 hover:bg-gray-100 lg:hover:bg-transparent hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900',
                          {
                            // @ts-ignore Shopify - Fix this types
                            underline: activeBrand?.entityId === node.entityId,
                          }
                        )}
                      >
                        <Link
                          href={{
                            pathname: getDesignerPath(node.path, category),
                            query,
                          }}
                        >
                          <button
                            onClick={(e) => handleClick(e, 'brands')}
                            className="block lg:inline-block px-4 py-5 lg:p-0 lg:my-2 lg:mx-4"
                          >
                            {node.name}
                          </button>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Products */}
        <div className="col-span-8 order-3 lg:order-none">
          {(q || activeCategory || activeBrand) && (
            <div className="mb-10 transition ease-in duration-75">
              {/* eslint-disable-next-line no-nested-ternary */}
              {data ? (
                <>
                  <span
                    className={cn('animated', {
                      fadeIn: data.found,
                      hidden: !data.found,
                    })}
                  >
                    Showing {data.products.length} results{' '}
                    {q && (
                      <>
                        for &quot;<strong>{q}</strong>&quot;
                      </>
                    )}
                  </span>
                  <span
                    className={cn('animated', {
                      fadeIn: !data.found,
                      hidden: data.found,
                    })}
                  >
                    {q ? (
                      <>
                        There are no products that match &quot;
                        <strong>{q}</strong>&quot;
                      </>
                    ) : (
                      <>
                        There are no products that match the selected category &
                        designer
                      </>
                    )}
                  </span>
                </>
              ) : q ? (
                <>
                  Searching for: &quot;<strong>{q}</strong>&quot;
                </>
              ) : (
                <>Searching...</>
              )}
            </div>
          )}

          {data ? (
            <Grid layout="normal">
              {data.products.map((product: Product) => (
                <ProductCard
                  variant="simple"
                  key={product.path}
                  className="animated fadeIn"
                  product={product}
                  imgProps={{
                    width: 480,
                    height: 480,
                  }}
                />
              ))}
            </Grid>
          ) : (
            <Grid layout="normal">
              {rangeMap(12, (i) => (
                <Skeleton
                  key={i}
                  className="w-full animated fadeIn"
                  height={325}
                />
              ))}
            </Grid>
          )}
        </div>

        {/* Sort */}
        <div className="col-span-8 lg:col-span-2 order-2 lg:order-none">
          <div className="relative inline-block w-full">
            <div className="lg:hidden">
              <span className="rounded-15 shadow-sm">
                <button
                  onClick={(e) => handleClick(e, 'sort')}
                  className="flex justify-between w-full rounded-sm border border-gray-300 px-4 py-5 bg-white  leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150"
                  id="options-menu"
                  aria-haspopup="true"
                  aria-expanded="true"
                >
                  {sort ? `Sort: ${sort}` : 'Relevance'}
                  <svg
                    className="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </span>
            </div>
            <div
              className={`origin-top-left absolute lg:relative left-0 mt-5 w-full rounded-15 shadow-lg lg:shadow-none z-10 mb-10 lg:block ${
                activeFilter !== 'sort' || toggleFilter !== true ? 'hidden' : ''
              }`}
            >
              <div className="rounded-sm bg-white shadow-xs lg:bg-none lg:shadow-none">
                <div
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <ul>
                    <li
                      className={cn(
                        'block  leading-5 text-gray-700 lg:text-base lg:no-underline lg:font-bold lg:tracking-wide hover:bg-gray-100 lg:hover:bg-transparent hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900',
                        {
                          underline: !sort,
                        }
                      )}
                    >
                      <Link href={{ pathname, query: filterQuery({ q }) }}>
                        <button
                          onClick={(e) => handleClick(e, 'sort')}
                          className="block lg:inline-block px-4 py-5 lg:p-0 lg:my-2 lg:mx-4"
                        >
                          Relevance
                        </button>
                      </Link>
                    </li>
                    {SORT.map(([key, text]) => (
                      <li
                        key={key}
                        className={cn(
                          'block  leading-5 text-gray-700 hover:bg-gray-100 lg:hover:bg-transparent hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900',
                          {
                            underline: sort === key,
                          }
                        )}
                      >
                        <Link
                          href={{
                            pathname,
                            query: filterQuery({ q, sort: key }),
                          }}
                        >
                          <button
                            onClick={(e) => handleClick(e, 'sort')}
                            className="block lg:inline-block px-4 py-5 lg:p-0 lg:my-2 lg:mx-4"
                          >
                            {text}
                          </button>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

Search.Layout = Layout
