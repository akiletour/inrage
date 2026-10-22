import { ReactNode } from 'react'

interface InfoCardProps {
  children: ReactNode
  className?: string
  borderColor?: 'orange' | 'gray' | 'blue'
}

export default function InfoCard({
  children,
  className = '',
  borderColor = 'orange',
}: InfoCardProps) {
  const borderColorClass = {
    orange: 'border-orange',
    gray: 'border-gray',
    blue: 'border-blue-500',
  }[borderColor]

  return (
    <div
      className={`border-l-4 bg-gray-darker/60 ${borderColorClass} rounded-r-xl px-6 py-5 md:px-8 md:py-6 [&>:first-child]:mt-0 [&>:last-child]:mb-0 ${className}`}
    >
      {children}
    </div>
  )
}
