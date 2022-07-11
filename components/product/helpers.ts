import type { Product } from '@commerce/types'

export type SelectedOptions = {
  size: string | null
  color: string | null
}

export function getVariant(product: Product, opts: SelectedOptions) {
  const _variant = product.variants.find((variant) =>
    Object.entries(opts).every(([key, value]) =>
      variant.options.find((option) => {
        if (
          option.__typename === 'MultipleChoiceOption' &&
          option.displayName.toLowerCase() === key.toLowerCase()
        ) {
          return option.values.find((v) => v.label.toLowerCase() === value)
        }
        return false
      })
    )
  )
  return _variant
}
