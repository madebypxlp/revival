import { FunctionComponent } from 'react'
import styles from '../Navbar.module.scss'
import cn from 'classnames'
import { NavigationLayoutsDogs } from 'framework/wordpress/interfaces/header'

const Navbar: FunctionComponent<{ module: NavigationLayoutsDogs }> = ({
  module,
}) => {
  const {} = module

  return (
    <div className={cn(styles.NavigationLayoutsDogs)}>
      <div className="container">NavigationLayoutsDogs</div>
    </div>
  )
}

export default Navbar
