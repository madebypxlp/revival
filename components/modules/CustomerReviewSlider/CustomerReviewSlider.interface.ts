export default interface ICustomerReviewSlider {
  fieldGroupName: string
  headline: string
  reviews: [
    {
      author: string
      reviewCopy: string
    }
  ]
}
