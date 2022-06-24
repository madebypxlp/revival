import React, { FunctionComponent } from 'react'
import styles from './ChipLinks.module.scss'
import IChipLinks from './ChipLinks.interface'
import Button from '../../ui/Button/Button'
import { useRouter } from 'next/router'

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
          } default-grid-lg md:pl-45 md:py-75 py-45 overflow-hidden relative`}
        >
          {!fullwidthVariant && (
            <div className={`${styles.backgroundImage}`}></div>
          )}
          <h3 className="typo-h3 pl-30 md:pl-0 col-span-full text-white md:mb-55 mb-30 ">
            <div dangerouslySetInnerHTML={{ __html: `${headline}` }} />
          </h3>
          <div className="flex md:flex-wrap md:gap-15 md:w-[1015px] col-span-full flex-wrap md:justify-start justify-center">
            {links.map((link) => {
              return (
                <Button
                  variant="small"
                  className="no-underline m-5"
                  outline={!link.defaultYellow}
                  color={link.defaultYellow ? 'yellow' : 'chipWhite'}
                  type="default"
                  href={link.link.url}
                >
                  {link.link.title}
                </Button>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChipLinksModule
