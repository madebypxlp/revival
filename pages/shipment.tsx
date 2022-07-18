import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import cn from 'classnames'
import Translations from 'constants/translations'
import { Layout } from '@components/common'
import { getConfig } from '@framework/api'
import getAllPages from '@framework/common/get-all-pages'
import { SAMPLE_PRODUCT } from '@components/ui/ComponentRenderer/ComponentRenderer'
import fetch from '../framework/wordpress/wp-client'
import styles from './shipment.module.scss'
import footerQuery from '../framework/wordpress/queries/acfGlobalOptions/footer'
import headerQuery from '../framework/wordpress/queries/acfGlobalOptions/header'
import CartProduct from '@components/ui/CartProduct/CartProduct'
import Button from '@components/ui/Button/Button'

export async function getStaticProps({
  preview,
  locale,
}: GetStaticPropsContext) {
  const config = getConfig({ locale })
  const { pages } = await getAllPages({ config, preview })
  const header = await fetch({ query: headerQuery })
  const footer = await fetch({ query: footerQuery })
  return {
    props: {
      pages,
      header: { ...header?.acfOptionsHeader?.header },
      footer: footer?.acfOptionsFooter?.footer,
    },
  }
}

export default function Orders({
  header,
  footer,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const copyText =
    'Please select below whether you’d like to ship your standard items with the temperature sensitive iteams, which must ship via 2-day or Overnight, or if you’d prefer to ship them separately.'

  const products = [SAMPLE_PRODUCT, SAMPLE_PRODUCT]
  return (
    <div className={styles.root}>
      <div className="container">
        <div className="default-grid">
          <div className={styles.headlineContainer}>
            <h2>{Translations.UPDATE_SHIPMENTS}</h2>
          </div>
          <div className={styles.copyContainer}>{copyText}</div>
        </div>
        {products &&
          products.map((p) => (
            <CartProduct
              variant="account"
              currencyCode="USD"
              key={p.id}
              product={p}
              className="mb-40 pb-40 light-border-b"
              rightColumn="shipment-options"
            />
          ))}
        <div className="mb-85">
          <Button color="yellow" variant="large" type="default">
            {Translations.SAVE_UPDATES}
          </Button>
        </div>
      </div>
    </div>
  )
}

Orders.Layout = Layout
