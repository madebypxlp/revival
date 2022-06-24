import { PostInterface } from 'framework/wordpress/interfaces/post'
import { LearningCenterInterface } from 'framework/wordpress/interfaces/learning-center'

export default interface IArticleTeaser {
  post: PostInterface | LearningCenterInterface
  variant?: 'default' | 'featured' | 'wide'
  textSize?: 'default' | 'medium' | 'large'
  className?: string
  buttonLabel?: string
}
