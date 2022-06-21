const SliderArrowLeft = ({ ...props }) => {
  return (
    <svg
      viewBox="15 15 70 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_d_901_127531)">
        <circle
          cx="50"
          cy="50"
          r="35"
          transform="rotate(180 50 50)"
          fill="white"
        />
      </g>
      <path
        d="M53.0607 57.9393C53.6464 58.5251 53.6464 59.4749 53.0607 60.0607C52.4749 60.6464 51.5251 60.6464 50.9393 60.0607L53.0607 57.9393ZM43 50L41.9393 51.0607C41.3536 50.4749 41.3536 49.5251 41.9393 48.9393L43 50ZM50.9393 39.9393C51.5251 39.3536 52.4749 39.3536 53.0607 39.9393C53.6464 40.5251 53.6464 41.4749 53.0607 42.0607L50.9393 39.9393ZM50.9393 60.0607L41.9393 51.0607L44.0607 48.9393L53.0607 57.9393L50.9393 60.0607ZM41.9393 48.9393L50.9393 39.9393L53.0607 42.0607L44.0607 51.0607L41.9393 48.9393Z"
        fill="currentColor"
      />
      <defs>
        <filter
          id="filter0_d_901_127531"
          x="0"
          y="0"
          width="100"
          height="100"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="7.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_901_127531"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_901_127531"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}

export default SliderArrowLeft
