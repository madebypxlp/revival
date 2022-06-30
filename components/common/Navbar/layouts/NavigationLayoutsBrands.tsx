import { FunctionComponent } from 'react'
import styles from '../Navbar.module.scss'
import cn from 'classnames'
import { NavigationLayoutsBrands } from 'framework/wordpress/interfaces/header'

const Navbar: FunctionComponent<{ module: NavigationLayoutsBrands }> = ({
  module,
}) => {
  const {} = module

  return (
    <div className={cn(styles.NavigationLayoutsBrands)}>
      <div className="container">NavigationLayoutsBrands</div>
    </div>
  )
}

export default Navbar
