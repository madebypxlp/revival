import { toInteger } from 'lodash'

/**
 * check if the link contains the basic wp url and clean it
 * @returns string - link
 */
export const cleanHref = (href: string | undefined) => {
  if (
    href &&
    process.env.NEXT_PUBLIC_WP_URL &&
    href.includes(process.env.NEXT_PUBLIC_WP_URL)
  ) {
    href = href.replace(process.env.NEXT_PUBLIC_WP_URL, '')
  }

  return href || '/'
}

export const isEmailValid = (email: string) => {
  // https://en.wikipedia.org/wiki/Email_address
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email#basic_validation
  // eslint-disable-next-line
  const regex =
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  return email.match(regex)
}

export const getBlogSlugAndPage = (_slug: string | string[] | undefined) => {
  const slug = (Array.isArray(_slug) ? _slug[0] : _slug) || ''
  const page = +(Array.isArray(slug) ? slug[1] || 'page-1' : 'page-1').replace(
    'page-',
    ''
  )
  return { slug, page }
}

export const isExpDateValid = (date: string) => {
  const regex = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/

  if (date.match(regex)) {
    //check if expiration date is in the future
    let month = toInteger(date.slice(0, 2))
    let year = toInteger(date.slice(3, 5)) + 2000
    let inputDate = new Date(year, month, 1)
    let currentDate = new Date()
    if (inputDate.getTime() >= currentDate.getTime()) return true
    else return false
  }

  return false
}

export const isCvvValid = (cvv: string) => {
  const regex = /^\d{3}$/
  return cvv.match(regex)
}

export const isCardValid = (card_nr: string) => {
  const regex = /^\d{13,19}$/
  return card_nr.match(regex)
}
