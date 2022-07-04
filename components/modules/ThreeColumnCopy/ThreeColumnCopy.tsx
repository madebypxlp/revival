import React, { FunctionComponent } from 'react'
import styles from './ThreeColumnCopy.module.scss'
import c from 'classnames'
import parse from 'html-react-parser'
import IThreeColumnCopy from './ThreeColumnCopy.interface'

const ThreeColumnCopyModule: FunctionComponent<{
  module: IThreeColumnCopy
}> = ({ module }) => {
  const { subline, headline, columns, backgroundColor } = module

  return (
    <div
      className={`${styles.root} container default-grid`}
      style={{ backgroundColor }}
    >
      {subline && (
        <div className={c(styles.subline, 'typo-eyebrow')}>{subline}</div>
      )}
      {headline && <h3 className={styles.headline}>{headline}</h3>}
      {columns &&
        columns.map((col) => {
          return <div className={styles.contentColumn}>{parse(col.copy)}</div>
        })}
    </div>
  )
}

export default ThreeColumnCopyModule
