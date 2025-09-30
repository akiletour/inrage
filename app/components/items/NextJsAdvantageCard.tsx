import { ReactNode } from 'react'

type Props = {
  icon: ReactNode
  title: string
  description: string
  highlight?: string
}

export default function NextJsAdvantageCard({
  icon,
  title,
  description,
  highlight,
}: Props) {
  return (
    <div className="group text-center p-6 hover:bg-gray-dark/50 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-orange/5 border border-transparent hover:border-orange/20 focus-within:ring-2 focus-within:ring-orange/30 focus-within:ring-offset-2 focus-within:ring-offset-gray-darker">
      <div className="w-32 h-32 mx-auto mb-8 flex items-center justify-center bg-orange rounded-full group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg group-hover:shadow-orange/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-white group-hover:text-orange transition-colors duration-300">
          {title}
        </h3>

        {highlight && (
          <div className="inline-block px-8 py-2.5 bg-orange/20 text-orange text-xs font-medium rounded-full mb-6 group-hover:bg-orange/30 group-hover:scale-105 transition-all duration-300 border border-orange/30">
            {highlight}
          </div>
        )}

        <p className="text-gray-light text-sm leading-relaxed group-hover:text-gray-light/90 transition-colors duration-300 max-w-xs mx-auto">
          {description}
        </p>
      </div>

      <div className="mt-12 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
        <div className="w-full h-0.5 bg-orange/30"></div>
      </div>
    </div>
  )
}
