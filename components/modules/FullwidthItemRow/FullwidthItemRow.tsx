import React, { FunctionComponent } from 'react'
import styles from './FullwidthItemRow.module.scss'
import IFullwidthItemRow from './FullwidthItemRow.interface'
import ChevronRight from '@components/icons/ChevronRight'
import Image from 'next/image'
import Link from 'next/link'
import ArrowCTA from '@components/ui/ArrowCTA/ArrowCTA'
import parse from 'html-react-parser'

const FullwidthItemRowModule: FunctionComponent<{
  module: IFullwidthItemRow
}> = ({ module }) => {
  console.log(module)

  const { headline, subline, items, backgroundColor } = module

  return (
    <div className={`${styles.root} container `}>
      <div className="bg-red rounded-[15px] default-grid pt-30 pb-20 md:pb-60">
        <div className="col-span-2 text-white flex justify-center flex-col items-center md:col-span-4 md:items-start md:pl-35">
          <div className="typo-eyebrow text-16 leading-[30px] font-bold mb-10 tracking-widest">
            {subline}
          </div>
          <h3 className="typo-h3 mb-50 text-center w-[276px] md:w-auto md:text-left">
            <div dangerouslySetInnerHTML={{ __html: `${headline}` }} />
          </h3>
        </div>
        <div
          className="col-span-2 md:col-span-7 md:col-start-6 
        flex justify-center items-center flex-col md:flex-row md:justify-start md:mt-60"
        >
          {items &&
            items.map((item, idx) => {
              return (
                <div
                  key={item.link.title}
                  className="text-white flex col-span-2 mb-20 items-center justify-between md:flex-col relative"
                >
                  <div className=" relative w-[50px] h-[50px] md:w-[84px] md:h-[84px]  mr-20 md:mr-0 md:mb-15">
                    <Image
                      src={item.icon.sourceUrl}
                      alt={item.icon.altText}
                      layout="fill"
                    />
                  </div>
                  <h4 className="typo-h6 w-[196px] md:w-[217px] typo-h6 h-auto mr-15 md:text-center md:mb-20">
                    {parse(item.label)}
                  </h4>
                  <ArrowCTA link={item} orientation="right" color="white" />
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
}

export default FullwidthItemRowModule
