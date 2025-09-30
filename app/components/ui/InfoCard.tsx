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
      className={`bg-gray-dark/50 border-l-4 ${borderColorClass} p-12 lg:p-16 backdrop-blur-sm rounded-r-lg ${className}`}
    >
      {children}
    </div>
  )
}
