import { ReactNode } from 'react'

interface Props {
  icon: ReactNode
  value: string
  label: string
}

export default function KeypointItem({ icon, value, label }: Props) {
  return (
    <div className="text-center text-white flex items-center flex-col">
      <div className="w-20 md:w-30 h-20 md:h-30 border-2 border-white rounded-full flex items-center justify-center">
        {icon}
      </div>
      <div className="font-medium text-2xl mt-4">{value}</div>
      <div className="leading-5">{label}</div>
    </div>
  )
}
