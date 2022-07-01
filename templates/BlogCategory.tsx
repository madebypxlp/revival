import Link from '@components/interfaces/Link'
import BlogFilterModule from '@components/modules/BlogFilter/BlogFilter'
import LightHeroModule from '@components/modules/LightHero/LightHero'
import NewsletterSignUpModule from '@components/modules/NewsletterSignUp/NewsletterSignUp'
import { ACFGlobalData } from 'framework/wordpress/interfaces/globals'
import { Category, PostInterface } from 'framework/wordpress/interfaces/post'

const TemplateBlogCategory = ({
  category,
  data,
  totalPosts,
  categories,
  globals,
}: {
  category: Category
  categories: Category[]
  globals: ACFGlobalData
  data: {
    nodes: PostInterface[]
  }
  totalPosts: number
}) => {
  const actionCta: Link = {
    title: 'Newsletter Signup',
    url: '#newsletter',
  }
  return (
    <div>
      <LightHeroModule
        module={{
          fieldGroupName: 'lightHero',
          headline: category.name,
          subline: category.description,
        }}
      />
      <BlogFilterModule
        data={data.nodes}
        totalPosts={totalPosts}
        activeCategory={category}
        categories={categories}
        module={{ fieldGroupName: 'blogFilterModule', actionCta }}
      />
      <NewsletterSignUpModule module={globals.globals.newsletterSignUp} />
    </div>
  )
}
export default TemplateBlogCategory
