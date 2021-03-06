import React, { FunctionComponent } from 'react'
import styles from './InlineImage.module.scss'
import IInlineImage from './InlineImage.interface'
import Image from '@components/ui/Image/Image'
import c from 'classnames'

const InlineImageModule: FunctionComponent<{ module: IInlineImage }> = ({
  module,
}) => {
  const { alignment, image } = module
  return (
    <div className={`${styles.root} container`}>
      <div className="default-grid">
        <Image
          image={image}
          className={c({
            'col-span-1 md:col-span-4 rounded-15 overflow-hidden mb-45': true,
            'md:col-start-2': alignment === 'left',
            'col-start-2 md:col-start-8': alignment === 'right',
          })}
        />
      </div>
    </div>
  )
}

export default InlineImageModule
