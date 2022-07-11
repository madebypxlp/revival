import React, { FunctionComponent } from 'react'
import c from 'classnames'
import parse from 'html-react-parser'
import styles from './ChipLinks.module.scss'
import IChipLinks from './ChipLinks.interface'
import Button from '../../ui/Button/Button'

const ChipLinksModule: FunctionComponent<{ module: IChipLinks }> = ({
  module,
}) => {
  const { headline, links, fullwidthVariant = false } = module

  return (
    <div
      className={`${styles.root} mt-20 lg:mt-60 relative ${
        fullwidthVariant ? 'bg-blue-default' : 'mb-40 lg:mb-100'
      }`}
    >
      <div className="container">
        <div
          className={`${
            fullwidthVariant ? '' : 'rounded-[15px] bg-blue-default'
          } default-grid-lg px-30 md:px-45 md:py-75 py-45 overflow-hidden relative`}
        >
          {!fullwidthVariant && <div className={`${styles.backgroundImage}`} />}
          <h3 className="typo-h3 col-span-full text-white md:mb-55 mb-30 ">
            {parse(headline)}
          </h3>
          <div className="flex md:flex-wrap md:gap-15 lg:max-w-[1015px] col-span-full flex-wrap md:justify-start justify-center">
            {links.map((link) => (
              <Button
                key={`${link.link.title}`}
                variant="small"
                className={c('no-underline m-5', styles.buttons)}
                outline={!link.defaultYellow}
                color={link.defaultYellow ? 'yellow' : 'chipWhite'}
                type="default"
                href={link.link.url}
              >
                {link.link.title}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChipLinksModule
