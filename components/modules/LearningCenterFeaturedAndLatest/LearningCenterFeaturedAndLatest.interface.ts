import { LearningCenterInterface } from 'framework/wordpress/interfaces/learning-center'

export default interface ILearningCenterFeaturedAndLatest {
  fieldGroupName: string
  latestStoriesHeadline: string
  featuredStoriesHeadline: string
  featuredArticles: [
    {
      article: LearningCenterInterface
    }
  ]
}
