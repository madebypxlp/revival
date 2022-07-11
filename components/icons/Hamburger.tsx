import cn from 'classnames'

const Hamburger = ({ ...props }) => {
  const { isClosed, className, onClick } = props

  const p1 = cn(
    { '-rotate-45 translate-y-15': isClosed },
    'duration-300 ease-in-out'
  )
  const p2 = cn({ hidden: isClosed }, 'duration-300 ease-in-out')
  const p3 = cn(
    { 'rotate-45 -translate-y-13 translate-x-13': isClosed },
    'duration-300 ease-in-out'
  )
  return (
    <svg
      className={className}
      onClick={onClick}
      width="25"
      height="25"
      viewBox="0 0 25 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 2H24"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        className={p1}
      />

      <path
        d="M1 9H24"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        className={p2}
      />

      <path
        d="M1 16H24"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        className={p3}
      />
    </svg>
  )
}

export default Hamburger
