import { FunctionComponent } from 'react'
import styles from '../Navbar.module.scss'
import cn from 'classnames'
import { NavigationLayoutsVaccines } from 'framework/wordpress/interfaces/header'

const Navbar: FunctionComponent<{ module: NavigationLayoutsVaccines }> = ({
  module,
}) => {
  const {} = module

  return (
    <div className={cn(styles.NavigationLayoutsVaccines)}>
      <div className="container">NavigationLayoutsVaccines</div>
    </div>
  )
}

export default Navbar
