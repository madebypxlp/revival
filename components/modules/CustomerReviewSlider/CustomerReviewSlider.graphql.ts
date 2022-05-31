const CustomerReviewSliderFragment = (t: string) => `
  fragment CustomerReviewSlider_${t} on ${t}_CustomerReviewSlider {
    fieldGroupName
    headline
    reviews {
      author
      reviewCopy
    }
  }
`
export default CustomerReviewSliderFragment
