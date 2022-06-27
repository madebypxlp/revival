import React, { FunctionComponent, useState } from 'react'
import c from 'classnames'
import styles from './AlphabetList.module.scss'
import IAlphabetList from './AlphabetList.interface'

const AlphabetList: FunctionComponent<IAlphabetList> = (props) => {
  const { onSelect } = props
  const [active, setActive] = useState('all')
  const alphabet = [
    'all',
    '#',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ]

  const change = (key: string) => {
    setActive(key)
    onSelect(key)
  }

  return (
    <div className={`${styles.root} bg-blue w-full`}>
      {alphabet.map((e) => (
        <button
          onClick={() => change(e)}
          key={e}
          className={c({ [styles.active]: active === e })}
        >
          {e}
        </button>
      ))}
    </div>
  )
}

export default AlphabetList
