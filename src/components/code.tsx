import { cn } from "@/src/lib/utils";
import { ChildrenOptionalProps, ChildrenProps } from "@/src/types";
import Link from "next/link";

export const CodeBlock = ({ children, className }: ChildrenProps & { className?: string }) => (
  <div className={cn("border border-solid border-theme-stroke bg-codeblock-background rounded-xl p-6", className)}>
    {children}
  </div>
)

type CodeLineProps = ChildrenOptionalProps & {
  lineNumber?: number,
  lineSymbols?: number,
  className?: string,
  wrap?: boolean
}
export function CodeLine({ children, wrap, lineNumber, lineSymbols, className }: CodeLineProps) {
  return (
    <div className={cn("flex flex-row gap-2 leading-7 text-base text-foreground whitespace-pre-wrap", className, wrap ? 'flex-wrap' : 'flex-nowrap')}>
      {
        lineNumber && (
          <p className="mr-5">{" ".repeat((lineSymbols || 1) - lineNumber.toString().length)}{lineNumber}</p>
        )}
      {children}
    </div>
  )
}

export const CodeConst = () => (<p className="text-indigo-500">const</p>)
export const CodeVarName = ({ children }: ChildrenProps<string>) => (<p className="text-teal-400">{children}</p>)

type CodeStringValueProps = ChildrenProps<string> & {
  quotationMark?: string,
  isLink?: boolean,
  className?: string
}
export function CodeStringValue({ children, className, isLink, quotationMark }: CodeStringValueProps) {
  quotationMark ??= "“”"
  const classNameToSet = cn("text-link-foreground", className)
  const content = `${quotationMark[0]}${children}${quotationMark[Math.max(0, Math.min(1, quotationMark.length - 1))]}`

  if (isLink) {
    return <Link href={children} className={cn(classNameToSet, 'underline')}>{content}</Link>
  }

  return <p className={classNameToSet}>{content}</p>
}

export const CodeFunction = ({ children }: ChildrenOptionalProps<string>) => (<p className="text-link-foreground">{children || 'function'}</p>)
export const CodeOperator = ({ children }: ChildrenProps<string>) => (<p className="text-indigo-500">{children}</p>)
export const CodeType = ({ children }: ChildrenProps<string>) => (<p className="text-amber-500">{children}</p>)
export const CodeFunctionType = ({ children }: ChildrenProps<string>) => (<p className="text-emerald-500">{children}</p>)
export const CodeFunctionExecute = ({ children }: ChildrenProps<string>) => (<p className="text-purple-500">{children}</p>)

export function Comment({ children }: ChildrenProps<string>) {
  return (
    <p className="text-foreground text-base leading-6">{"// "}{children}</p>
  )
}