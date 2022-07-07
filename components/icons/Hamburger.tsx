import cn from 'classnames'

const Hamburger = ({ ...props }) => {
  const { isClosed } = props
  return (
    <svg
      {...props}
      width="25"
      height="25"
      viewBox="0 0 25 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 2H24"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        className={cn(
          isClosed && '-rotate-45 translate-y-15',
          'duration-300 ease-in-out'
        )}
      />

      <path
        d="M1 9H24"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        className={cn(isClosed && 'hidden', 'duration-300 ease-in-out')}
      />

      <path
        d="M1 16H24"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        className={cn(
          isClosed && 'rotate-45 -translate-y-13 translate-x-13',
          'duration-300 ease-in-out'
        )}
      />
    </svg>
  )
}

export default Hamburger
