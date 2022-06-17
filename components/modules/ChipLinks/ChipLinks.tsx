import React, { FunctionComponent } from 'react'
import styles from './ChipLinks.module.scss'
import IChipLinks from './ChipLinks.interface'
import Tag from '../../ui/Tag/Tag'
import Button from '../../ui/Button/Button'
import { Grid } from '@components/ui'
import { link } from 'fs'

const ChipLinksModule: FunctionComponent<{ module: IChipLinks }> = ({
  module,
}) => {
  const { headline, links } = module
  return (
    <div
      className={`${styles.root} container mt-20 mb-40 lg:mt-60 lg:mb-100 relative`}
    >
      <div className="rounded-[15px] default-grid-lg md:pl-45 md:py-75 py-45 bg-blue-default overflow-hidden relative">
        <div className={`${styles.backgroundImage}`}></div>
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
  )
}

export default ChipLinksModule
