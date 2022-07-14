import { FunctionComponent } from 'react'
import styles from '../Navbar.module.scss'
import cn from 'classnames'
import { NavigationLayoutsDogs } from 'framework/wordpress/interfaces/header'
import NavigationMarketingBox from './NavigationMarketingBox'
import ArrowCTA from '@components/ui/ArrowCTA/ArrowCTA'
import parse from 'html-react-parser'
import NavbarDogs from './NavigationLayoutsDogs'

const Navbar: FunctionComponent<{ module: NavigationLayoutsDogs }> = NavbarDogs

export default Navbar
