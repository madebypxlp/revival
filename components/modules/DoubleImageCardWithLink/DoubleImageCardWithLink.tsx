import React, { FunctionComponent } from 'react'
import ImageComponent from '@components/ui/Image/Image'
import Button from '@components/ui/Button/Button'
import styles from './DoubleImageCardWithLink.module.scss'
import IDoubleImageCardWithLink from './DoubleImageCardWithLink.interface'

const DoubleImageCardWithLinkModule: FunctionComponent<{
  module: IDoubleImageCardWithLink
}> = ({ module }) => (
  <div className={`${styles.root} container`}>
    <div className="default-grid">
      {module.cards.map((card, idx) => (
        <div
          key={card.headline}
          className={`col-span-2 md:col-span-6 relative ${styles.card}`}
        >
          <ImageComponent image={card.image} className={styles.image} />
          <h3 className={`${styles.headline}`}>{card.headline}</h3>
          <Button
            variant="small"
            color="yellow"
            type="default"
            link={card.link}
            className={styles.link}
          />
        </div>
      ))}
    </div>
  </div>
)

export default DoubleImageCardWithLinkModule
