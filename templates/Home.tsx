import HeroCarousel from '@components/modules/HeroCarousel/HeroCarousel'
import HeroCarouselFragment from '@components/modules/HeroCarousel/HeroCarousel.graphql'
import FullwidthItemRow from '@components/modules/FullwidthItemRow/FullwidthItemRow'
import FullwidthItemRowFragment from '@components/modules/FullwidthItemRow/FullwidthItemRow.graphql'
import ShopByCategory from '@components/modules/ShopByCategory/ShopByCategory'
import ShopByCategoryFragment from '@components/modules/ShopByCategory/ShopByCategory.graphql'
import ChipLinks from '@components/modules/ChipLinks/ChipLinks'
import ChipLinksFragment from '@components/modules/ChipLinks/ChipLinks.graphql'
import ProductSlider from '@components/modules/ProductSlider/ProductSlider'
import ProductSliderFragment from '@components/modules/ProductSlider/ProductSlider.graphql'
import TextImage from '@components/modules/TextImage/TextImage'
import TextImageFragment from '@components/modules/TextImage/TextImage.graphql'
import OurBrands from '@components/modules/OurBrands/OurBrands'
import OurBrandsFragment from '@components/modules/OurBrands/OurBrands.graphql'
import DoubleImageCardWithLink from '@components/modules/DoubleImageCardWithLink/DoubleImageCardWithLink'
import DoubleImageCardWithLinkFragment from '@components/modules/DoubleImageCardWithLink/DoubleImageCardWithLink.graphql'
import CustomerReviewSlider from '@components/modules/CustomerReviewSlider/CustomerReviewSlider'
import CustomerReviewSliderFragment from '@components/modules/CustomerReviewSlider/CustomerReviewSlider.graphql'
import ImageWithInfos from '@components/modules/ImageWithInfos/ImageWithInfos'
import ImageWithInfosFragment from '@components/modules/ImageWithInfos/ImageWithInfos.graphql'
import ResourceGrid from '@components/modules/ResourceGrid/ResourceGrid'
import ResourceGridFragment from '@components/modules/ResourceGrid/ResourceGrid.graphql'

const TemplateHome = (props: any) => {
  return (
    <div>
      <HeroCarousel module={props.template.pageHome.heroCarousel} />
      <FullwidthItemRow module={props.template.pageHome.fullwidthItemRow} />
      <ShopByCategory module={props.template.pageHome.shopByCategory} />
      <ChipLinks module={props.template.pageHome.chipLinks} />
      <ProductSlider module={props.template.pageHome.productSlider} />
      <TextImage module={props.template.pageHome.textImage} />
      <OurBrands module={props.template.pageHome.ourBrands} />
      <DoubleImageCardWithLink
        module={props.template.pageHome.doubleImageCardWithLink}
      />
      <CustomerReviewSlider
        module={props.template.pageHome.customerReviewSlider}
      />
      <ImageWithInfos module={props.template.pageHome.imageWithInfos} />
      <ResourceGrid module={props.template.pageHome.resourceGrid} />
    </div>
  )
}
export default TemplateHome

const TEMPLATE_PREFIX = 'Template_Home_Pagehome'

export const fragment = `
  ${HeroCarouselFragment(TEMPLATE_PREFIX)}
  ${FullwidthItemRowFragment(TEMPLATE_PREFIX)}
  ${ShopByCategoryFragment(TEMPLATE_PREFIX)}
  ${ChipLinksFragment(TEMPLATE_PREFIX)}
  ${ProductSliderFragment(TEMPLATE_PREFIX)}
  ${TextImageFragment(TEMPLATE_PREFIX)}
  ${OurBrandsFragment(TEMPLATE_PREFIX)}
  ${DoubleImageCardWithLinkFragment(TEMPLATE_PREFIX)}
  ${CustomerReviewSliderFragment(TEMPLATE_PREFIX)}
  ${ImageWithInfosFragment(TEMPLATE_PREFIX)}
  ${ResourceGridFragment(TEMPLATE_PREFIX)}
  fragment TemplateHome on Template_Home {
    templateName
    pageHome {
      fieldGroupName
      heroCarousel {
        ...HeroCarousel
      }
      fullwidthItemRow {
        ...FullwidthItemRow
      }
      shopByCategory {
        ...ShopByCategory
      }
      chipLinks {
        ...ChipLinks
      }
      productSlider {
        ...ProductSlider
      }
      textImage {
        ...TextImage
      }
      ourBrands {
        ...OurBrands
      }
      doubleImageCardWithLink {
        ...DoubleImageCardWithLink
      }
      customerReviewSlider {
        ...CustomerReviewSlider
      }
      imageWithInfos {
        ...ImageWithInfos
      }
      resourceGrid {
        ...ResourceGrid
      }
    }
  }
`
