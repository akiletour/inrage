import { ReactNode } from "react"

interface CalloutProps {
  children?: ReactNode
}

export function Callout({ children }: CalloutProps) {
  return <div className="text-2xl text-white md:text-3xl">{children}</div>
}
