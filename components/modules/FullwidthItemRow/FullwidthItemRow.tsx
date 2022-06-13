import React, { FunctionComponent } from 'react'
import styles from './FullwidthItemRow.module.scss'
import IFullwidthItemRow from './FullwidthItemRow.interface'
import Image from 'next/image'
import ArrowCTA from '@components/ui/ArrowCTA/ArrowCTA'
import parse from 'html-react-parser'
import { useIsMobile } from '@commerce/utils/hooks'

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
    <div className={`${styles.root} container mt-20 mb-40 md:mt-60 md:mb-100`}>
      <div
        className={`${backgroundColors[backgroundColor]} rounded-[15px] default-grid pt-30 pb-20 md:pt-50 md:pb-60`}
      >
        <div className="col-span-2 text-white md:col-span-4 md:pl-35 text-center md:text-left">
          <div className="typo-eyebrow font-bold mb-10 tracking-widest">
            {subline}
          </div>
          <h3 className="typo-h3 mb-50 w-[276px] mx-auto md:w-auto">
            <div dangerouslySetInnerHTML={{ __html: `${headline}` }} />
          </h3>
        </div>

        <span className="hidden md:block col-span-1"></span>

        {items &&
          items.map((item, idx) => {
            return (
              <div
                key={item?.link?.title || item?.label}
                className="text-white col-span-2 mb-20 pl-20 pr-30 md:px-0 md:mb-0 md:pt-50 md:flex flex-row"
              >
                <div className="relative flex items-center md:flex-col">
                  {item?.icon?.sourceUrl && (
                    <div className="mr-20 md:mr-0 md:mb-15">
                      <Image
                        src={item.icon.sourceUrl}
                        alt={item.icon.altText}
                        width={isMobile ? 50 : 84}
                        height={isMobile ? 50 : 84}
                      />
                    </div>
                  )}
                  <h4 className="typo-h6 h-auto md:text-center md:mb-20 md:mt-auto">
                    {parse(item.label)}
                  </h4>
                  {item?.link?.title && (
                    <ArrowCTA
                      className={styles.cta + ' ml-auto md:ml-0'}
                      link={item.link}
                      children={isMobile && ' '}
                      orientation="right"
                      color="white"
                    />
                  )}
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default FullwidthItemRowModule
