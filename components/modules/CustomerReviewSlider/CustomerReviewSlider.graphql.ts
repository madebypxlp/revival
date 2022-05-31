const CustomerReviewSliderFragment = (t: string) => `
  fragment CustomerReviewSlider on ${t}_CustomerReviewSlider {
    fieldGroupName
    headline
    reviews {
      author
      reviewCopy
    }
  }
`
export default CustomerReviewSliderFragment
