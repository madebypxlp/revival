import { getWpData } from 'framework/wordpress/wp'
import { ACFGlobalData } from 'framework/wordpress/globals'
import Image from 'next/image'
import Button from '@components/ui/Button/Button'

export const getStaticProps = getWpData

export default function Pages({ notFound }: ACFGlobalData) {
  console.log(notFound.data)
  const { copy, quickLinks } = notFound.data
  return (
    <div className="flex flex-col justify-center items-center container default-grid ">
      <div className="mt-50 relative w-[350px] h-[216px] md:w-[372px]">
        <Image
          src={'/logo_404.png'}
          layout="fill"
          alt="404"
          objectFit="cover"
        />
      </div>
      <p className="typo-fact w-[300px] md:w-[452px] text-center md:mb-90 mb-50">
        {copy}
      </p>
      <div className="flex flex-col justify-center items-center lg:flex-row">
        {quickLinks &&
          quickLinks.map((link_, idx) => {
            return (
              <Button
                className="mb-30 lg:mb-0 md:mr-20"
                variant="large"
                type="default"
                color="yellow"
                key={link_.link.title}
                ariaLabel={link_.link.title}
                href={link_.link.url}
              >
                {link_.link.title}
              </Button>
            )
          })}
      </div>
    </div>
  )
}
