import { forwardRef } from 'react'

const SliderArrowLeft = forwardRef<SVGSVGElement, { className: string }>(
  (props, ref) => {
    return (
      <svg
        viewBox="15 15 70 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ref={ref}
        {...props}
      >
        <circle
          cx="50"
          cy="50"
          r="35"
          transform="rotate(180 50 50)"
          fill="white"
        />
        <path
          d="M53.0607 57.9393C53.6464 58.5251 53.6464 59.4749 53.0607 60.0607C52.4749 60.6464 51.5251 60.6464 50.9393 60.0607L53.0607 57.9393ZM43 50L41.9393 51.0607C41.3536 50.4749 41.3536 49.5251 41.9393 48.9393L43 50ZM50.9393 39.9393C51.5251 39.3536 52.4749 39.3536 53.0607 39.9393C53.6464 40.5251 53.6464 41.4749 53.0607 42.0607L50.9393 39.9393ZM50.9393 60.0607L41.9393 51.0607L44.0607 48.9393L53.0607 57.9393L50.9393 60.0607ZM41.9393 48.9393L50.9393 39.9393L53.0607 42.0607L44.0607 51.0607L41.9393 48.9393Z"
          fill="currentColor"
        />
      </svg>
    )
  }
)

export default SliderArrowLeft
