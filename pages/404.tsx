import { getWpData } from 'framework/wordpress/wp'
import Link from 'next/link'
import { ACFGlobalData } from 'framework/wordpress/globals'

export const getStaticProps = getWpData

export default function Pages({ notFound }: ACFGlobalData) {
  console.log(notFound.data)
  return (
    <>
      <h1>404 - Page Not Found</h1>
      <Link href="/">
        <a>Go back home</a>
      </Link>
    </>
  )
}
