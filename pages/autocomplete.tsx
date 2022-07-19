import { Autocomplete } from '@components/algolia/autocomplete'
import algoliasearch from 'algoliasearch/lite'
import { Panel } from 'react-instantsearch-dom'
import {
  InstantSearch,
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
      <style>{`
      .ais-Panel {
        margin-top: 2rem;
      }
      .ais-Panel-header {
        font-size: 1.8rem;
        font-weight: bold;
        text-transform: none;
      }
     .ais-HierarchicalMenu-link {
      font-size: 1.5rem;
     }
     input[type='search'] {
      width: 100%;
      height: 4rem;
      border: 1px solid grey;
      padding: 0 2rem;
     }

     `}</style>
      <div className="w-full pt-50">
        {searchClient && (
          <InstantSearch
            routing
            searchClient={searchClient}
            indexName="product-data-test"
          >
            <Autocomplete
              searchClient={searchClient}
              placeholder="Search products"
              detachedMediaQuery="none"
              openOnFocus
            />
            <Configure
              hitsPerPage={5}
              attributesToSnippet={['itemName:7', 'description:15']}
              snippetEllipsisText="…"
            />

            <Hits hitComponent={Hit} />
            <Panel header="Found categories for this input">
              <HierarchicalMenu attributes={['categories']} />
            </Panel>
            {/* <Pagination />*/}
          </InstantSearch>
        )}
      </div>
    </div>
  )
}
