'use client'

import { cn } from "@/src/lib/utils"
import Link from "next/link"
import { MenuButton } from "./menu"
import { usePathname } from "next/navigation"
import { config } from "@/config"

type MenuType = {
  center: MenuItemType[],
  right: MenuItemType[]
}
type MenuItemType = {
  name: string
  url: string
  strictUrlMatching?: boolean
}

export const MENU: MenuType = {
  center: [
    { name: '_hello', url: '/', strictUrlMatching: true },
    { name: '_about-me', url: '/about' },
    { name: '_projects', url: '/projects' }
  ],
  right: [
    { name: '_contact-me', url: '/contact' }
  ]
}

export function Header() {
  const pathname = usePathname()

  const isActive = (url: string, strictUrlMatching?: boolean) => {
    let location = pathname
    
    if (!location.endsWith('/')) {
      location += '/'
    }

    if (!url.endsWith('/')) {
      url += '/'
    }

    return strictUrlMatching ? location === url : location.startsWith(url)
  }

  return (
    <header className="flex flex-row flex-nowrap border-b border-b-theme-stroke min-h-14 overflow-clip">
      <Link href='/' className="h-full px-6 flex items-center min-w-[243px] not-lg:min-w-auto">
        <p>{ config.name } { config.surname }</p>
      </Link>

      <div className="h-full flex flex-row flex-nowrap not-lg:hidden">
        {
          MENU.center.map((item, key) => (
            <HeaderMenuItem
              key={key}
              isActive={isActive(item.url, item.strictUrlMatching)}
              {...item}
              position={key !== MENU.center.length - 1 ? 'start-or-center' : 'end'}
            />
          ))
        }
      </div>

      <div className="h-full ml-auto flex flex-row flex-nowrap not-lg:hidden">
        {
          MENU.right.map((item, key) => (
            <HeaderMenuItem
              key={key}
              isActive={isActive(item.url)}
              {...item}
              position='start-or-center'
            />
          ))
        }
      </div>

      <div className="ml-auto flex justify-center items-center lg:hidden">
        <MenuButton/>
      </div>
    </header>
  )
}

type HeaderMenuItemProps = MenuItemType & {
  position: 'start-or-center' | 'end',
  isActive?: boolean
}
export function HeaderMenuItem({ name, url, position, isActive }: HeaderMenuItemProps) {
  let className = 'border-l border-l-theme-stroke'

  if (position === 'end') {
    className = 'border-x border-x-theme-stroke'
  }

  return (
    <Link href={url} className={cn(
      "h-full px-8 flex justify-center items-center relative hover:bg-slate-700 hover:text-slate-50 transition-colors duration-150",
      isActive && "text-slate-50",
      className
      )}>
      <p>{name}</p>
      {
        isActive && (
          <div className="w-full min-h-[3px] bg-primary-background absolute bottom-0"/>
        )
      }
    </Link>
  )
}