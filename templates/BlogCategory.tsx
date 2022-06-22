import Link from '@components/interfaces/Link'
import BlogFilterModule from '@components/modules/BlogFilter/BlogFilter'
import LightHeroModule from '@components/modules/LightHero/LightHero'
import { Category, PostInterface } from 'framework/wordpress/interfaces/post'

const TemplateBlogCategory = ({
  category,
  data,
  categories,
}: {
  category: Category
  categories: Category[]
  data: PostInterface[]
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
        data={data}
        activeCategory={category}
        categories={categories}
        module={{ fieldGroupName: 'blogFilterModule', actionCta }}
      />
    </div>
  )
}
export default TemplateBlogCategory
