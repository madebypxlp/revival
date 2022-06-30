import React, { FC, useState, useEffect } from 'react'
import throttle from 'lodash.throttle'
import cn from 'classnames'
import s from './Navbar.module.scss'

const NavbarRoot: FC<{
  className?: string
  children?: React.ReactNode
}> = (props) => {
  const [hasScrolled, setHasScrolled] = useState(false)

  const { className, children } = props

  useEffect(() => {
    const handleScroll = throttle(() => {
      const offset = 0
      const { scrollTop } = document.documentElement
      const scrolled = scrollTop > offset

      if (hasScrolled !== scrolled) {
        setHasScrolled(scrolled)
      }
    }, 200)

    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [hasScrolled])

  return (
    <div className={cn(s.root, className, { XYZ: hasScrolled })}>
      {children}
    </div>
  )
}

export default NavbarRoot
