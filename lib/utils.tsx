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
