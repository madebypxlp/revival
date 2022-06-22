import React, { FunctionComponent } from 'react'
import styles from './BlogFilter.module.scss'
import IBlogFilter from './BlogFilter.interface'
import { BlogPostInterface } from 'framework/wordpress/blog'

const BlogFilterModule: FunctionComponent<{
  module: IBlogFilter
  data: BlogPostInterface[]
}> = ({ module, data }) => {
  console.log(module, data)
  return <div className={`${styles.root} container`}>Blogfilter Module</div>
}

export default BlogFilterModule
