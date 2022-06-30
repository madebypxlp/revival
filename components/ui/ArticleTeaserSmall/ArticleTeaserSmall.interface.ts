import { LearningCenterInterface } from 'framework/wordpress/interfaces/learning-center'
import { PostInterface } from 'framework/wordpress/interfaces/post'

export default interface IArticleTeaserSmall {
  article: PostInterface | LearningCenterInterface
  variant: string
}
