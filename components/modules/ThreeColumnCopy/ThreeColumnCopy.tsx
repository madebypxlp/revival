import React, { FunctionComponent } from 'react'
import c from 'classnames'
import parse from 'html-react-parser'
import styles from './ThreeColumnCopy.module.scss'
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
      {headline && <h3 className={styles.headline}>{parse(headline)}</h3>}
      {columns &&
        columns.map((col) => (
          <div key={col.copy} className={styles.contentColumn}>
            {parse(col.copy)}
          </div>
        ))}
    </div>
  )
}

export default ThreeColumnCopyModule
