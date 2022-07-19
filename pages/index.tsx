import algoliasearch from 'algoliasearch/lite'
import {
  InstantSearch,
  SearchBox,
  Hits,
  Pagination,
  Configure,
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
        <div className="hit-image flex items-center">
          <img
            style={{ width: '80px' }}
            src={hit.primaryPicture}
            alt={hit.name}
          />
        </div>
        <div>
          <h5>{hit.itemName}</h5>
          <span className="typo-nav-links">{hit.keywords}</span>
        </div>
      </article>
    )
  }

  return (
    <div className="container h-[70vh] flex justify-center">
      <div className="w-full pt-50">
        {searchClient && (
          <InstantSearch
            searchClient={searchClient}
            indexName="product-data-test"
          >
            <Configure hitsPerPage={7} />
            <SearchBox />
            <Hits hitComponent={Hit} />
            <Pagination />
          </InstantSearch>
        )}
      </div>
    </div>
  )
}
