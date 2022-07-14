import React, { useMemo } from 'react'
import { createElement, Fragment, useEffect, useRef, useState } from 'react'
import { render } from 'react-dom'

import { usePagination, useSearchBox } from 'react-instantsearch-hooks'
import { autocomplete, AutocompleteOptions } from '@algolia/autocomplete-js'
import { BaseItem } from '@algolia/autocomplete-core'
import { createQuerySuggestionsPlugin } from '@algolia/autocomplete-plugin-query-suggestions'
import type { SearchClient } from 'algoliasearch/lite'

export const INSTANT_SEARCH_INDEX_NAME = 'product-data-test'
// export const INSTANT_SEARCH_QUERY_SUGGESTIONS =
//   'product-data-test_query_suggestions'
export const INSTANT_SEARCH_QUERY_SUGGESTIONS = INSTANT_SEARCH_INDEX_NAME

type AutocompleteProps = Partial<AutocompleteOptions<BaseItem>> & {
  className?: string
  searchClient: SearchClient
}

type SetInstantSearchUiStateOptions = {
  query: string
}

export function Autocomplete({
  searchClient,
  className,
  ...autocompleteProps
}: AutocompleteProps) {
  const autocompleteContainer = useRef<HTMLDivElement>(null)

  const { query, refine: setQuery } = useSearchBox()
  const { refine: setPage } = usePagination()

  const [instantSearchUiState, setInstantSearchUiState] =
    useState<SetInstantSearchUiStateOptions>({ query })

  const plugins = useMemo(() => {
    const querySuggestions = createQuerySuggestionsPlugin({
      searchClient,
      indexName: INSTANT_SEARCH_INDEX_NAME,
      // categoryAttribute: [
      //   // 'instant_search',
      //   // 'facets',
      //   // 'exact_matches',
      //   'manufacturerName',
      // ],
      // itemsWithCategories: 1,
      // categoriesPerItem: 1,
      transformSource({ source }) {
        return {
          ...source,
          sourceId: 'querySuggestionsPlugin',
          onSelect({ item }) {
            setInstantSearchUiState({ query: item.itemName as any as string })
          },
          getItems(params) {
            if (!params.state.query) {
              return []
            }
            const res = source.getItems(params)
            return res
          },
          templates: {
            ...source.templates,
            item(item) {
              return (
                <Fragment>
                  <span className="aa-SourceItemTitle">
                    {item.item.itemName as any as string}
                  </span>
                </Fragment>
              )
            },
          },
        }
      },
    })
    console.log(querySuggestions)
    return [querySuggestions]
  }, [])

  useEffect(() => {
    setQuery(instantSearchUiState.query)
    setPage(0)
  }, [instantSearchUiState])

  useEffect(() => {
    if (!autocompleteContainer.current) {
      return
    }

    const autocompleteInstance = autocomplete({
      ...autocompleteProps,
      container: autocompleteContainer.current,
      initialState: { query },
      plugins,
      onReset() {
        setInstantSearchUiState({ query: '' })
      },
      onSubmit({ state }) {
        setInstantSearchUiState({ query: state.query })
      },
      onStateChange({ prevState, state }) {
        if (prevState.query !== state.query) {
          setInstantSearchUiState({
            query: state.query,
          })
        }
      },
      renderer: { createElement, Fragment, render },
    })

    return () => autocompleteInstance.destroy()
  }, [])

  return <div className={className} ref={autocompleteContainer} />
}
