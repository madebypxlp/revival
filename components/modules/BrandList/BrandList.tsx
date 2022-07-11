import React, { FunctionComponent, useEffect, useState } from 'react'
import c from 'classnames'
import AlphabetList from '@components/ui/AlphabetList/AlphabetList'
import { Brand } from 'framework/wordpress/queries/post-type-brands/brands'
import Link from 'next/link'
import Fade from '@components/ui/Fade/Fade'
import IBrandList from './BrandList.interface'
import styles from './BrandList.module.scss'

interface Sorted {
  letter: string
  children: [Brand]
}

const BrandListModule: FunctionComponent<IBrandList> = ({ brands }) => {
  const { nodes } = brands
  const [data, setData] = useState<Sorted[]>([])
  const [originalData, setOriginalData] = useState<Sorted[]>([])

  useEffect(() => {
    const dataSet = Object.values(
      nodes.reduce((r: any, e: Brand) => {
        // get first letter of name of current element
        let letter = e.title[0]
        if (!letter.match(/[a-z]/i)) {
          letter = '#'
        }
        // if there is no property in accumulator with this letter create it
        if (!r[letter]) r[letter] = { letter, children: [e] }
        // if there is push current element to children array for that letter
        else r[letter].children.push(e)
        // return accumulator
        return r
      }, {})
    ) as [Sorted]

    const sortedSet = dataSet.sort((a, b) => a.letter.localeCompare(b.letter))
    setData(sortedSet)
    setOriginalData(sortedSet)
  }, [])

  const onFilter = (key: string) => {
    if (key === 'all') {
      setData(originalData)
    } else {
      const filtered = originalData?.filter(
        (e) => e.letter.toLowerCase() === key.toLowerCase()
      )
      setData(filtered)
    }
    setTimeout(() => {
      document
        .getElementById('brandList')
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 500)
  }

  return (
    <div className={`${styles.root} container py-70`}>
      <AlphabetList onSelect={(e) => onFilter(e)} />
      <div id="brandList">
        {data &&
          data.map((item: Sorted) => (
            <Fade key={`${item.letter}-${data.length}`}>
              <div className={c(styles.item)}>
                <div className={c(styles.head, 'col-span-full uppercase')}>
                  {item.letter}
                </div>
                {item.children && (
                  <div className={c('default-grid gap-y-0')}>
                    {item.children.map((i) => (
                      <div
                        key={i.title}
                        className={c(
                          styles.child,
                          'col-span-2 sm:col-span-1 md:col-span-4'
                        )}
                      >
                        <Link href="/">
                          <a className="underline-effect">{i.title}</a>
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Fade>
          ))}
      </div>
    </div>
  )
}

export default BrandListModule
