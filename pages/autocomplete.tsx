import { Autocomplete } from '@components/algolia/autocomplete'
import algoliasearch from 'algoliasearch/lite'
import { Panel } from 'react-instantsearch-dom'
import {
  InstantSearch,
  SearchBox,
  Hits,
  Pagination,
  Configure,
  Snippet,
  HierarchicalMenu,
} from 'react-instantsearch-hooks-web'

const searchClient =
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID &&
  process.env.NEXT_PUBLIC_ALGOLIA_SECRET_KEY
    ? algoliasearch(
        process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
        process.env.NEXT_PUBLIC_ALGOLIA_SECRET_KEY
      )
    : undefined

export default () => {
  function Hit({ hit }: any) {
    return (
      <article className="hit flex items-center">
        <div className="hit-image">
          <img
            style={{ width: '80px' }}
            src={hit.primaryPicture}
            alt={hit.name}
          />
        </div>
        <div>
          <h6>{hit.itemName}</h6>
        </div>
      </article>
    )
  }

  return (
    <div className="container h-[100vh] flex justify-center">
      Hello :)
      <div className="w-full pt-50">
        {searchClient && (
          <InstantSearch
            routing
            searchClient={searchClient}
            indexName="product-data-test"
          >
            {/* <SearchBox /> */}
            <Autocomplete
              searchClient={searchClient}
              placeholder="Search products"
              detachedMediaQuery="none"
              openOnFocus
            />
            <Configure
              attributesToSnippet={['itemName:7', 'description:15']}
              snippetEllipsisText="…"
            />

            <Hits hitComponent={Hit} />
            <Panel header="Categories">
              <HierarchicalMenu attributes={['manufacturerName']} />
            </Panel>
            <Pagination />
          </InstantSearch>
        )}
      </div>
    </div>
  )
}
