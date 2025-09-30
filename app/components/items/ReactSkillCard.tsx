import { ReactNode } from 'react'

type Props = {
  icon: ReactNode
  title: string
  description: string
  features: string[]
}

export default function ReactSkillCard({
  icon,
  title,
  description,
  features,
}: Props) {
  return (
    <div className="group bg-gray-dark p-12 rounded-xl h-full flex flex-col transform transition-all duration-300 hover:scale-105 hover:bg-gray-dark/80 hover:shadow-2xl hover:shadow-orange/10 border border-transparent hover:border-orange/20">
      <div className="flex items-center mb-12">
        <div className="w-28 h-28 flex items-center justify-center bg-gradient-to-br from-orange to-orange-dark rounded-xl mr-8 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg group-hover:shadow-orange/25">
          <div className="transform group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-semibold text-white group-hover:text-orange transition-colors duration-300">
          {title}
        </h3>
      </div>

      <p className="text-gray-light mb-12 flex-1 leading-relaxed group-hover:text-gray-light/90 transition-colors duration-300">
        {description}
      </p>

      <ul className="space-y-6">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-center text-sm text-gray-light group-hover:text-white transition-all duration-300"
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            <div
              className="w-4 h-4 bg-orange rounded-full mr-6 flex-shrink-0 transform group-hover:scale-125 group-hover:bg-orange-dark transition-all duration-300"
              style={{ transitionDelay: `${index * 50}ms` }}
            />
            <span
              className="transform group-hover:translate-x-2 transition-transform duration-300"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
