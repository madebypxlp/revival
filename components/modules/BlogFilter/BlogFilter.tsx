import React, { FunctionComponent } from 'react'
import styles from './BlogFilter.module.scss'
import IBlogFilter from './BlogFilter.interface'
import { Category, PostInterface } from 'framework/wordpress/interfaces/post'

const BlogFilterModule: FunctionComponent<{
  module: IBlogFilter
  data: PostInterface[]
  categories: Category[]
  activeCategory?: Category
}> = ({ module, data, categories, activeCategory }) => {
  console.log(module, data, categories, activeCategory)

  //  PLEASE DO NOT RENDER THE UNCATEGORIZED CATEGORY!

  return <div className={`${styles.root} container`}>Blogfilter Module</div>
}

export default BlogFilterModule
