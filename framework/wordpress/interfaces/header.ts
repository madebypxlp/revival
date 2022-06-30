import Image from '@components/interfaces/Image'
import Link from '@components/interfaces/Link'
import { Brand } from '../queries/post-type-brands/brands'

export interface AcfOptionsHeader {
  alertBanner: AlertBar
  navigation: NavigationItem[]
}

export interface AlertBar {
  active: boolean
  leftCopy: string
  rightCopy: string
}

export interface NavigationItem {
  title: string
  highlight: boolean
  link: Link
  navigationLayouts: NavigationLayouts[]
}

export interface NavigationMarketingBox {
  title: string
  link: Link
  alignment: 'topLeft' | 'bottomLeft'
  image: Image
}

export type NavigationLayouts =
  | NavigationLayoutsDogs
  | NavigationLayoutsCats
  | NavigationLayoutsVaccines
  | NavigationLayoutsPharmacy
  | NavigationLayoutsNeed
  | NavigationLayoutsBrands
  | NavigationLayoutsHelp

export interface NavigationLayoutsDogs {
  fieldGroupName: 'AcfOptionsHeader_Header_navigation_NavigationLayouts_Dogs'
  links: { link: Link }[]
  quickLinks: { link: Link }[]
  marketingBox: NavigationMarketingBox
}

export interface NavigationLayoutsCats {
  fieldGroupName: 'AcfOptionsHeader_Header_navigation_NavigationLayouts_Cats'
  links: { link: Link }[]
  quickLinks: { link: Link }[]
  marketingBox: NavigationMarketingBox
}

export interface NavigationLayoutsVaccines {
  fieldGroupName: 'AcfOptionsHeader_Header_navigation_NavigationLayouts_Vaccines'
  columns: [
    {
      cta: Link
      links: { link: Link }[]
      title: string
    }
  ]
  quickLinks: { link: Link }[]
  marketingBox: NavigationMarketingBox
}

export interface NavigationLayoutsPharmacy {
  fieldGroupName: 'AcfOptionsHeader_Header_navigation_NavigationLayouts_Pharmacy'
  cta: Link
  listOfLinks: { link: Link }[]
  quickLinks: { link: Link }[]
  video: {
    copy: string
    headline: string
    link: Link
    thumbnail: Image
  }
}

export interface NavigationLayoutsNeed {
  fieldGroupName: 'AcfOptionsHeader_Header_navigation_NavigationLayouts_Need'
  chipLinks: { highlighted: boolean; link: Link }[]
  ctaLink: Link
  quickLinks: { link: Link }[]
}

export interface NavigationLayoutsBrands {
  fieldGroupName: 'AcfOptionsHeader_Header_navigation_NavigationLayouts_Brands'
  headline: string
  link: Link
  featuredBrands: Brand[]
}

export interface NavigationLayoutsHelp {
  fieldGroupName: 'AcfOptionsHeader_Header_navigation_NavigationLayouts_Help'
  headline: string
  copy: string
  link: Link
  actions: { icon: Image; link: Link }[]
}
