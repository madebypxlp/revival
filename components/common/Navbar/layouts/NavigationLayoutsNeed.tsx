import { FunctionComponent } from 'react'
import styles from '../Navbar.module.scss'
import cn from 'classnames'
import { NavigationLayoutsNeed } from 'framework/wordpress/interfaces/header'

const Navbar: FunctionComponent<{ module: NavigationLayoutsNeed }> = ({
  module,
}) => {
  const {} = module

  return (
    <div className={cn(styles.NavigationLayoutsNeed)}>
      <div className="container">NavigationLayoutsNeed</div>
    </div>
  )
}

export default Navbar
