const InputArrow = ({ ...props }) => {
  return (
    <svg
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.7071 14.2929L15 13.5858L13.5858 15L14.2929 15.7071L15.7071 14.2929ZM19.2929 20.7071C19.6834 21.0976 20.3166 21.0976 20.7071 20.7071C21.0976 20.3166 21.0976 19.6834 20.7071 19.2929L19.2929 20.7071ZM14.2929 15.7071L19.2929 20.7071L20.7071 19.2929L15.7071 14.2929L14.2929 15.7071Z"
        fill="currentColor"
      />
      <circle
        cx="8.75"
        cy="8.75"
        r="7.75"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  )
}

export default InputArrow
