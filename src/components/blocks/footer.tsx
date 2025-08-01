import { cn } from "@/src/lib/utils"
import Link from "next/link"

type SocialType = {
  icon: string,
  text?: string,
  url: string
}
type FooterConfigType = {
  social: SocialType[],
  gh: SocialType
}

const FOOTER_CONFIG: FooterConfigType = {
  social: [
    { icon: 'ri-vk-fill', url: '/' },
    { icon: 'ri-telegram-fill', url: '/' },
  ],
  gh: {
    icon: 'ri-github-fill',
    text: '@zamelane',
    url: 'https://github.com/zamelane',
  }
}

export function Footer() {
  return (
    <footer className="min-h-14 flex flex-row flex-nowrap border-t border-t-theme-stroke overflow-clip">
      <div className="h-full px-6 flex justify-center items-center not-lg:mr-auto">
        <p>find me in:</p>
      </div>

      <div className="h-full flex flex-row flex-nowrap">
        {
          FOOTER_CONFIG.social.map((item, key) => (
            <FooterSocialItem
              key={key}
              small
              {...item}
              position={key !== FOOTER_CONFIG.social.length - 1 ? 'start-or-center' : 'end'}
            />
          ))
        }
      </div>

      <div className="h-full flex flex-row flex-nowrap ml-auto not-lg:ml-0">
        <FooterSocialItem
          {...FOOTER_CONFIG.gh}
          position="start-or-center"
          className="not-lg:border-l-0 not-lg:px-4"
        />
      </div>

    </footer>
  );
}

type FooterSocialItemmProps = SocialType & {
  className?: string,
  position: 'start-or-center' | 'end',
  small?: boolean
}
export function FooterSocialItem({ icon, text, url, position, small, className }: FooterSocialItemmProps) {
  let classNameToSet = 'border-l border-l-theme-stroke'

  if (position === 'end') {
    classNameToSet = 'border-x border-x-theme-stroke'
  }

  return (
    <Link href={url} className={cn(
      "h-full flex justify-center items-center",
      small ? 'px-4' : 'px-8',
      cn(classNameToSet, className)
    )}>
      <p className="flex flex-row items-center gap-2"> <span className="not-lg:hidden">{text}</span> <i className={cn(icon, 'ri-xl')} /></p>
    </Link>
  )
}