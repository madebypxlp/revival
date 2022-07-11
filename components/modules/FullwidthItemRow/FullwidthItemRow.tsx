import React, { Fragment, FunctionComponent } from 'react'
import c from 'classnames'
import Image from 'next/image'
import ArrowCTA from '@components/ui/ArrowCTA/ArrowCTA'
import parse from 'html-react-parser'
import { useIsMobile } from '@commerce/utils/hooks'
import IFullwidthItemRow from './FullwidthItemRow.interface'
import styles from './FullwidthItemRow.module.scss'

const backgroundColors = {
  red: 'bg-red',
  blue: 'bg-blue',
}

const FullwidthItemRowModule: FunctionComponent<{
  module: IFullwidthItemRow
}> = ({ module }) => {
  const { headline, subline, items, backgroundColor = 'red' } = module
  const isMobile = useIsMobile()

  return (
    <div className={`${styles.root} container mt-20 mb-40 lg:mt-60 lg:mb-100`}>
      <div
        className={`${backgroundColors[backgroundColor]} rounded-[15px] default-grid-lg pt-30 pb-20 lg:pt-50 lg:pb-60`}
      >
        <div className="col-span-2 text-white lg:col-span-4 lg:pl-35 text-center lg:text-left">
          <div className="typo-eyebrow font-bold mb-10 tracking-widest">
            {subline}
          </div>
          <h3 className="typo-h3 mb-50 lg:w-[276px] mx-30 lg:mx-auto lg:w-auto">
            <div>{parse(headline)}</div>
          </h3>
        </div>

        <span className="hidden lg:block col-span-1" />

        <div
          className={c(
            styles.imageGridContainer,
            'col-span-2 lg:col-span-6 grid lg:gap-x-20 gap-y-20 lg:gap-y-0'
          )}
        >
          {items &&
            items.map((item) => (
              <Fragment key={item.label}>
                {item?.icon?.sourceUrl && (
                  <div className="mr-20 lg:mr-0 lg:mb-15 relative">
                    <Image
                      src={item.icon.sourceUrl}
                      alt={item.icon.altText}
                      width={isMobile ? 50 : 84}
                      height={isMobile ? 50 : 84}
                    />
                  </div>
                )}
                <h4 className="typo-h6 h-auto lg:text-center lg:mb-20 lg:self-start">
                  {parse(item.label)}
                </h4>
                {item?.link?.title && (
                  <ArrowCTA
                    className={`${styles.cta} ml-auto lg:ml-0`}
                    link={item.link}
                    children={isMobile && ' '}
                    orientation="right"
                    color="white"
                  />
                )}
                <div className={styles.lgonly} />
              </Fragment>
            ))}
        </div>
      </div>
    </div>
  )
}

export default FullwidthItemRowModule
