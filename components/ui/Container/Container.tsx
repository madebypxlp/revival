import cn from 'classnames'
import React, { FC } from 'react'

interface Props {
  className?: string
  children?: any
  el?: keyof JSX.IntrinsicElements
  clean?: boolean
}

const Container: FC<Props> = ({ children, className, el, clean }) => {
  const rootClassName = cn(className, {
    'mx-auto px-5': !clean,
  })

  const Component = el || 'div'

  return <Component className={rootClassName}>{children}</Component>
}

export default Container
