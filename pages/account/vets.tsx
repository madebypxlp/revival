import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { getConfig } from '@framework/api'
import c from 'classnames'
import getAllPages from '@framework/common/get-all-pages'
import useCustomer from '@framework/customer/use-customer'
import { Layout } from '@components/common'
import AccountHero from '@components/ui/AccountHero/AccountHero'
import Translations from 'constants/translations'
import Button from '@components/ui/Button/Button'
import Link from '@components/ui/Link/Link'
import fetch from '../../framework/wordpress/wp-client'
import footerQuery from '../../framework/wordpress/queries/acfGlobalOptions/footer'
import headerQuery from '../../framework/wordpress/queries/acfGlobalOptions/header'
import styles from './vets.module.scss'
import AccountBreadcrumbs from '@components/ui/AccountBreadcrumbs/AccountBreadcrumbs'
import AccountLinkGroup from '@components/ui/AccountLinkGroup/AccountLinkGroup'

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

export default function Profile({
  header,
  footer,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { data } = useCustomer()
  console.log(data)

  const vet = {
    name: 'Beach City Animal Hospital - Redondo Beach',
    address: '2147 Warner Ave, Redondo Beach, CA 90277 (949) 500-1000',
  }
  const vets = [vet]
  return (
    <div className={styles.root}>
      <AccountHero
        headline={Translations.ACCOUNT.MY_VETS}
        className="md:mb-190"
      />
      <div className="container">
        <AccountBreadcrumbs current={Translations.ACCOUNT.MY_PETS} />
        <div className={styles.addNewVetContainer}>
          <Button color="yellow" variant="large" type="default">
            {Translations.ACCOUNT.ADD_NEW_VET}
          </Button>
        </div>
        <div className="default-grid gap-y-40 mb-65">
          {vets.map((v) => (
            <div
              key={v.name}
              className={c(
                styles.vetContainer,
                'col-span-2 md:col-span-6 lg:col-span-5'
              )}
            >
              <div className={styles.vetCard}>
                <h5>{v.name}</h5>
                <div>{v.address}</div>
              </div>
              <div className={styles.removeVetLinkContainer}>
                <Link color="blue" href="/">
                  {Translations.ACCOUNT.REMOVE_VET}
                </Link>
              </div>
            </div>
          ))}
        </div>
        <AccountLinkGroup mobileOnly className={'mb-300'} />
      </div>
    </div>
  )
}

Profile.Layout = Layout
