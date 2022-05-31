import VideoHero from '@components/modules/VideoHero/VideoHero'
import VideoHeroFragment from '@components/modules/VideoHero/VideoHero.graphql'
import InlineText from '@components/modules/InlineText/InlineText'
import InlineTextFragment from '@components/modules/InlineText/InlineText.graphql'
import CustomerReviewSlider from '@components/modules/CustomerReviewSlider/CustomerReviewSlider'
import CustomerReviewSliderFragment from '@components/modules/CustomerReviewSlider/CustomerReviewSlider.graphql'
import ProductCategoryContentTabs from '@components/modules/ProductCategoryContentTabs/ProductCategoryContentTabs'
import ProductCategoryContentTabsFragment from '@components/modules/ProductCategoryContentTabs/ProductCategoryContentTabs.graphql'

const TemplateBrandListing = (props: any) => {
  return (
    <div>
      <VideoHero module={props.template.pageBrandListing.videoHero} />
      <InlineText module={props.template.pageBrandListing.inlineText} />
      <ProductCategoryContentTabs
        module={props.template.pageBrandListing.productCategoryContentTabs}
      />
      <CustomerReviewSlider
        module={props.template.pageBrandListing.customerReviewSlider}
      />
    </div>
  )
}
export default TemplateBrandListing

const TEMPLATE_PREFIX = 'Template_BrandListing_Pagebrandlisting'

export const fragment = `
  ${VideoHeroFragment(TEMPLATE_PREFIX)}
  ${ProductCategoryContentTabsFragment(TEMPLATE_PREFIX)}
  ${InlineTextFragment(TEMPLATE_PREFIX)}
  ${CustomerReviewSliderFragment(TEMPLATE_PREFIX)}
  fragment TemplateBrandListing on Template_BrandListing
  {
    templateName
    pageBrandListing {
      fieldGroupName
      videoHero {
        ...VideoHero_${TEMPLATE_PREFIX}
      }
      inlineText {
        ...InlineText_${TEMPLATE_PREFIX}
      }
      customerReviewSlider {
        ...CustomerReviewSlider_${TEMPLATE_PREFIX}
      }
      productCategoryContentTabs {
        ...ProductCategoryContentTabs_${TEMPLATE_PREFIX}
      }
    }
  }
`
