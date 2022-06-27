import React, { FunctionComponent } from 'react'
import styles from './DoubleImageCardWithLink.module.scss'
import IDoubleImageCardWithLink from './DoubleImageCardWithLink.interface'
import ImageComponent from '@components/ui/Image/Image'
import Button from '@components/ui/Button/Button'

const DoubleImageCardWithLinkModule: FunctionComponent<{
  module: IDoubleImageCardWithLink
}> = ({ module }) => {
  console.log(module)
  return (
    <div className={`${styles.root} container`}>
      <div className={`default-grid`}>
        {module.cards.map((card, idx) => (
          <div
            key={idx}
            className={`col-span-2 md:col-span-6 relative ${styles.card}`}
          >
            <ImageComponent image={card.image} className={styles.image} />
            <h3 className={`${styles.headline}`}>{card.headline}</h3>
            <Button
              variant="small"
              color="yellow"
              type="default"
              target={card.link.target}
              href={card.link.url}
              className={styles.link}
            >
              {card.link.title}
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DoubleImageCardWithLinkModule
