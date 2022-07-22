interface IBreadCrumbsElement {
  label: string
  href: string
}

export default interface IBreadCrumbs {
  breadcrumbs: IBreadCrumbsElement[]
  className?: string
  sepCharacter?: string
}
