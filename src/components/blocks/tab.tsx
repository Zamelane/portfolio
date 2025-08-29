import { cn } from "@/src/lib/utils"
import { ChildrenOptionalProps } from '../../types';

type TabLayoutProps = ChildrenOptionalProps & {
  className?: string
}

export function TabLayout({ className, children }: TabLayoutProps) {
  return (
    <div className={cn(
      "w-full min-h-12 max-h-12 border-b border-b-theme-stroke",
      "flex flex-row",
      className
    )}>
      {children}
    </div>
  )
}

type TabProps = ChildrenOptionalProps & {
  className?: string
}
export function Tab({ children, className }: TabProps) {
  return (
    <div className={cn("inline-flex min-w-60 py-3 px-6 border-r border-r-theme-stroke", className)}>
      <span>{children}</span>
      <i className="ri-close-line ml-auto"/>
    </div>
  )
}