import type { InferGetStaticPropsType } from 'next'
import { PageInterface } from 'framework/wordpress/interfaces/page'
import algoliasearch from 'algoliasearch'
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom'

export default function () {
  const searchClient = algoliasearch(
    'YourApplicationID',
    'YourSearchOnlyAPIKey'
  )
  return (
    <div className="container">
      <InstantSearch searchClient={searchClient} indexName="demo_ecommerce">
        <SearchBox />
        <Hits />
      </InstantSearch>
    </div>
  )
}
