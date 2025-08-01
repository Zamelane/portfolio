'use client'

import { cn } from "@/src/lib/utils"
import Link from "next/link"
import { MenuButton } from "./menu"

type MenuType = {
  center: MenuItemType[],
  right: MenuItemType[]
}
type MenuItemType = {
  name: string
  url: string
}

export const MENU: MenuType = {
  center: [
    { name: '_hello', url: '/' },
    { name: '_about-me', url: '/about' },
    { name: '_projects', url: '/projects' }
  ],
  right: [
    { name: '_contact-me', url: '/contact' }
  ]
}

export function Header() {
  return (
    <header className="flex flex-row flex-nowrap border-b border-b-theme-stroke min-h-14 overflow-clip">
      <div className="h-full px-6 flex justify-center items-center">
        <p>me-name</p>
      </div>

      <div className="h-full ml-32 flex flex-row flex-nowrap not-lg:hidden">
        {
          MENU.center.map((item, key) => (
            <HeaderMenuItem
              key={key}
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
}
export function HeaderMenuItem({ name, url, position }: HeaderMenuItemProps) {
  let className = 'border-l border-l-theme-stroke'

  if (position === 'end') {
    className = 'border-x border-x-theme-stroke'
  }
  return (
    <Link href={url} className={cn("h-full px-8 flex justify-center items-center", className)}>
      <p>{name}</p>
    </Link>
  )
}