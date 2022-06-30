import { FunctionComponent } from 'react'
import styles from '../Navbar.module.scss'
import cn from 'classnames'
import { NavigationLayoutsHelp } from 'framework/wordpress/interfaces/header'

const Navbar: FunctionComponent<{ module: NavigationLayoutsHelp }> = ({
  module,
}) => {
  const {} = module

  return (
    <div className={cn(styles.NavigationLayoutsHelp)}>
      <div className="container">NavigationLayoutsHelp</div>
    </div>
  )
}

export default Navbar
