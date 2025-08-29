import { cn } from "../lib/utils"

export function GreenBlur({ className }: { className?: string }) {
  return (
    <svg width="864" height="783" viewBox="0 0 864 783" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn('opacity-40', className)}>
      <g opacity="0.4" filter="url(#filter0_f_26532_1460)">
        <path d="M673.47 257.667L689.984 477.046L655.759 581.911L485.295 608.783L413.003 447.755L297.588 486.528L184.059 310.554L174 176.932L452.567 174.013L523.099 285.032L673.47 257.667Z" fill="#00D5BE" />
      </g>
      <defs>
        <filter id="filter0_f_26532_1460" x="0" y="0.0130005" width="863.984" height="782.77" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="87" result="effect1_foregroundBlur_26532_1460" />
        </filter>
      </defs>
    </svg>
  )
}

export function BlueBlur({ className }: { className?: string }) {
  return (
    <svg width="882" height="831" viewBox="0 0 882 831" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn('opacity-40', className)}>
      <g opacity="0.4" filter="url(#filter0_f_26532_1459)">
        <path d="M477.946 656.705L264.032 605.318L174.663 540.654L201.226 370.142L376.649 350.576L375.041 228.833L577.309 174.577L707.602 205.876L625.165 471.982L497.892 505.172L477.946 656.705Z" fill="#615FFF" />
      </g>
      <defs>
        <filter id="filter0_f_26532_1459" x="0.663452" y="0.576965" width="880.939" height="830.128" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="87" result="effect1_foregroundBlur_26532_1459" />
        </filter>
      </defs>
    </svg>
  )
}