export function BackIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" {...props}>
      <g filter="url(#filter0_b_1107_8425)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.0001 35.4164C11.4867 35.4164 4.58341 28.5147 4.58341 19.9997C4.58341 11.4864 11.4867 4.58305 20.0001 4.58305C28.5134 4.58305 35.4167 11.4864 35.4167 19.9997C35.4167 28.5147 28.5134 35.4164 20.0001 35.4164Z"
          fill="white"
          fillOpacity="0.05"
        />
        <path
          d="M20.0001 35.9164C11.2106 35.9164 4.08341 28.7909 4.08341 19.9997C4.08341 11.2102 11.2106 4.08305 20.0001 4.08305C28.7896 4.08305 35.9167 11.2102 35.9167 19.9997C35.9167 28.7909 28.7895 35.9164 20.0001 35.9164Z"
          stroke="white"
          strokeOpacity="0.2"
        />
      </g>
      <path
        d="M22.4038 25.785L16.5938 20L22.4038 14.215"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <filter
          id="filter0_b_1107_8425"
          x="-36.1508"
          y="-36.1513"
          width="112.302"
          height="112.302"
          filterUnits="userSpaceOnUse"
          colorinterpolation-filters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="19.8671" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1107_8425" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_1107_8425"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}
