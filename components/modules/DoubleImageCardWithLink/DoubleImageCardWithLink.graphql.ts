import { ImageComponent } from '@components/fragments/Image'

const DoubleImageCardWithLinkFragment = (t: string) => `
  fragment DoubleImageCardWithLink on ${t}_DoubleImageCardWithLink {
    fieldGroupName
    cards {
      headline
      ${ImageComponent()}
      link {
        ...Link
      }
    }
  }
`
export default DoubleImageCardWithLinkFragment
