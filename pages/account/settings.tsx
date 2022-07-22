import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { getConfig } from '@framework/api'
import getAllPages from '@framework/common/get-all-pages'
import useCustomer from '@framework/customer/use-customer'
import { Layout } from '@components/common'
import AuthModal from '@components/ui/AuthModal/AuthModal'
import AccountHero from '@components/ui/AccountHero/AccountHero'
import AccountSettings from '@components/ui/AccountSettings/AccountSettings'
import fetch from '../../framework/wordpress/wp-client'
import footerQuery from '../../framework/wordpress/queries/acfGlobalOptions/footer'
import headerQuery from '../../framework/wordpress/queries/acfGlobalOptions/header'

export async function getStaticProps({
  preview,
  locale,
}: GetStaticPropsContext) {
  // const config = getConfig({ locale })
  // const { pages } = await getAllPages({ config, preview })
  const header = await fetch({ query: headerQuery })
  const footer = await fetch({ query: footerQuery })
  return {
    props: {
      // pages,
      header: { ...header?.acfOptionsHeader?.header },
      footer: footer?.acfOptionsFooter?.footer,
    },
  }
}

export default function Profile({
  header,
  footer,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  // const { data } = useCustomer()

  return (
    <div>
      <AccountHero headline="Account Settings" />
      <AccountSettings />
    </div>
  )
}

Profile.Layout = Layout
