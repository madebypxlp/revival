import { getWpData } from 'framework/wordpress/wp'
import Image from 'next/image'
import Button from '@components/ui/Button/Button'
import { ACFGlobalData } from 'framework/wordpress/interfaces/globals'
import { Layout } from '@components/common'
import { AcfOptionsFooter } from 'framework/wordpress/interfaces/footer'
import { AcfOptionsHeader } from 'framework/wordpress/interfaces/header'

export const getStaticProps = getWpData

export default function Pages(pageProps: {
  globals: ACFGlobalData
  footer: AcfOptionsFooter
  header: AcfOptionsHeader
}) {
  const { globals, header, footer } = pageProps
  const { copy, quickLinks, image } = globals.notFound.data
  return (
    <Layout header={header} globals={globals} footer={footer}>
      <div className="flex flex-col justify-center items-center container default-grid mb-50 md:mt-100 md:mb-150">
        <div className="relative w-[350px] h-[216px] md:w-[372px]">
          <Image
            src={image.sourceUrl}
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
            quickLinks.map((link_, idx) => (
              <Button
                className="mb-10 lg:mb-0 md:mr-20"
                variant="large"
                type="default"
                color="yellow"
                key={link_.link.title}
                ariaLabel={link_.link.title}
                href={link_.link.url}
              >
                {link_.link.title}
              </Button>
            ))}
        </div>
      </div>
    </Layout>
  )
}
