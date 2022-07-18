const Phone = ({ ...props }) => (
  <svg
    width="28"
    {...props}
    height="45"
    viewBox="0 0 28 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 2L7 2C4.23858 2 2 4.23857 2 6.99999L2 37.8C2 40.5614 4.23858 42.8 7 42.8H21C23.7614 42.8 26 40.5614 26 37.8L26 7C26 4.23858 23.7614 2 21 2Z"
      stroke="white"
      strokeWidth="3"
    />
    <path
      d="M9.5 5.5C8.67157 5.5 8 6.17157 8 7C8 7.82843 8.67157 8.5 9.5 8.5V5.5ZM18.5 8.5C19.3284 8.5 20 7.82843 20 7C20 6.17157 19.3284 5.5 18.5 5.5V8.5ZM9.5 8.5L18.5 8.5V5.5L9.5 5.5V8.5Z"
      fill="white"
    />
    <circle cx="13.5" cy="36.5" r="2.5" fill="white" />
  </svg>
)

export default Phone
