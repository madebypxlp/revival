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
