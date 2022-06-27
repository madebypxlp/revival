import AuthorRowModule from '@components/modules/AuthorRow/AuthorRow'
import InlineImageModule from '@components/modules/InlineImage/InlineImage'
import InlineVideoModule from '@components/modules/InlineVideo/InlineVideo'
import MoreArticlesModule from '@components/modules/MoreArticles/MoreArticles'
import MorePostsModule from '@components/modules/MorePosts/MorePosts'
import NewsletterSignUpModule from '@components/modules/NewsletterSignUp/NewsletterSignUp'
import WYSIWYGModule from '@components/modules/WYSIWYG/WYSIWYG'
import { PostDetailPage } from 'framework/wordpress/interfaces/post'

const renderBlogDetail = (layout: any, props: PostDetailPage) => {
  switch (layout.fieldGroupName) {
    case 'Post_Detailpagepost_PageBuilder_Wysiwyg':
      return <WYSIWYGModule key="WYSIWYGModule" {...layout} />
    case 'Post_Detailpagepost_PageBuilder_InlineVideo':
      return (
        <InlineVideoModule
          key="InlineVideoModule"
          module={layout.inlineVideo}
        />
      )
    case 'Post_Detailpagepost_PageBuilder_AuthorRow':
      return <AuthorRowModule key="AuthorRowModule" module={props} />
    case 'Post_Detailpagepost_PageBuilder_InlineImage':
      return (
        <InlineImageModule
          key="InlineImageModule"
          module={layout.inlineImage}
        />
      )
    case 'Post_Detailpagepost_PageBuilder_MoreArticles':
      return (
        <MorePostsModule
          key="MorePostsModule"
          data={props.additionalData?.nodes}
          currentId={props.data.id}
          module={layout}
        />
      )
    case 'Post_Detailpagepost_PageBuilder_NewsletterSignUp':
      return (
        <NewsletterSignUpModule
          key="NewsletterSignUpModule"
          module={layout.newsletterSignUp}
        />
      )
    default:
      return `${layout.fieldGroupName} not found`
  }
}

export default renderBlogDetail
