import { useEffect, useState } from 'react'
import getSlug from './get-slug'

export function useSearchMeta(asPath: string) {
  const [pathname, setPathname] = useState<string>('/search')
  const [category, setCategory] = useState<string | undefined>()
  const [brand, setBrand] = useState<string | undefined>()

  useEffect(() => {
    // Only access asPath after hydration to avoid a server mismatch
    const path = asPath.split('?')[0]
    const parts = path.split('/')

    const c = parts[2]
    const b = parts[3]

    //  if (c === 'designers') {
    // eslint-disable-next-line prefer-destructuring
    // c = parts[4]
    //  }

    setPathname(path)
    if (c !== category) setCategory(c)
    //  if (b !== brand) setBrand(b)
  }, [asPath])

  return { pathname, category }
}

// Removes empty query parameters from the query object
export const filterQuery = (query: any) =>
  Object.keys(query).reduce<any>((obj, key) => {
    if (query[key]?.length) {
      obj[key] = query[key]
    }
    return obj
  }, {})

export const getCategoryPath = (path: string) => {
  const category = getSlug(path)

  return `/search/}${category ? `/${category}` : ''}`
}
