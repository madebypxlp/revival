import cn from 'classnames'
import { FC } from 'react'
import { Check } from '@components/icons'
import { isDark } from '@lib/colors'
import Button from '@components/ui/Button/Button'
import IButton from '@components/ui/Button/Button.interface'
import s from './Swatch.module.scss'

interface Props {
  active?: boolean
  children?: any
  className?: string
  label?: string
  variant?: 'size' | 'color' | string
  color?: string
}

const Swatch: FC<Omit<IButton, 'variant'> & Props> = ({
  className,
  color = '',
  label,
  variant = 'size',
  active,
  ...props
}) => {
  variant = variant?.toLowerCase()
  label = label?.toLowerCase()

  const rootClassName = cn(
    s.root,
    {
      [s.active]: active,
      [s.size]: variant === 'size',
      [s.color]: color,
      [s.dark]: color ? isDark(color) : false,
    },
    className
  )

  return (
    <Button
      className={rootClassName}
      variant="small"
      color="yellow"
      aria-label="Variant Swatch"
      type="default"
    >
      {variant === 'color' && active && (
        <span>
          <Check />
        </span>
      )}
      {variant === 'size' ? label : null}
    </Button>
  )
}

export default Swatch
