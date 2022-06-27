import React, { FunctionComponent, useState } from 'react'
import styles from './PaginateChildren.module.scss'
import IPaginateChildren from './PaginateChildren.interface'
import cn from 'classnames'
import ChevronRight from '@components/icons/ChevronRight'

const PaginateChildren: FunctionComponent<IPaginateChildren> = (props) => {
  const { perPage, children, ...rest } = props

  const [page, setPage] = useState(1)
  const childrenArray = React.Children.toArray(children)

  const getCurrentChildren = () =>
    childrenArray.slice((page - 1) * perPage, page * perPage)

  const getTotalPages = () => Math.ceil(childrenArray.length / perPage)

  const getRange = () => {
    const range = Array.from({ length: getTotalPages() }, (_, i) => i + 1)
    // modify range here to shorten generated list
    return range
  }

  return (
    <>
      {getCurrentChildren()}

      {getTotalPages() > 1 && (
        <div className={styles.pagination}>
          <button
            className={cn(
              styles.button,
              page === 1 && 'opacity-0 pointer-events-none'
            )}
            onClick={() => setPage((prev) => prev - 1)}
          >
            <ChevronRight className="rotate-180" />
          </button>

          {getRange().map((p) => (
            <button
              onClick={() => setPage(p)}
              className={cn(styles.button, page === p && styles.buttonActive)}
            >
              {p}
            </button>
          ))}

          <button
            className={cn(
              styles.button,
              page === getTotalPages() && 'opacity-0 pointer-events-none'
            )}
            onClick={() => setPage((prev) => prev + 1)}
          >
            <ChevronRight />
          </button>
        </div>
      )}
    </>
  )
}

export default PaginateChildren
