import { cn } from "@/src/lib/utils"
import { ChildrenOptionalProps } from '../../types';

type TabLayoutProps = ChildrenOptionalProps & {
  className?: string
}

export function TabLayout({ className, children }: TabLayoutProps) {
  return (
    <div className={cn(
      "w-full min-h-12 max-h-12 border-b border-b-theme-stroke",
      className
    )}>
      {children}
    </div>
  )
}