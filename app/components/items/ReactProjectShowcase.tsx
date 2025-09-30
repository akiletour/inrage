import { ReactNode } from 'react'

type Props = {
  title: string
  description: string
  technologies: string[]
  metrics?: {
    label: string
    value: string
  }[]
  codeIcon?: ReactNode
  githubUrl?: string
}

export default function ReactProjectShowcase({
  title,
  description,
  technologies,
  metrics = [],
  codeIcon,
  githubUrl,
}: Props) {
  return (
    <div className="bg-gray-dark rounded-xl overflow-hidden group hover:bg-gray-dark/80 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange/10 border border-transparent hover:border-orange/20">
      <div className="relative h-32 bg-orange/15 flex items-center justify-between px-12">
        <div className="flex space-x-4">
          <div className="w-6 h-6 bg-orange rounded-full animate-pulse"></div>
          <div
            className="w-6 h-6 bg-orange-dark rounded-full animate-pulse"
            style={{ animationDelay: '0.2s' }}
          ></div>
          <div
            className="w-6 h-6 bg-orange rounded-full animate-pulse"
            style={{ animationDelay: '0.4s' }}
          ></div>
        </div>
        {codeIcon && githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-orange/60 transition-all duration-300 transform group-hover:scale-110 hover:bg-orange/80"
            title="Voir le code source sur GitHub"
          >
            {codeIcon}
          </a>
        )}
        {codeIcon && !githubUrl && (
          <div className="w-16 h-16 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-orange/60 transition-all duration-300 transform group-hover:scale-110">
            {codeIcon}
          </div>
        )}
      </div>

      <div className="p-12">
        <h3 className="text-xl font-semibold text-white mb-6 group-hover:text-orange transition-colors duration-300">
          {title}
        </h3>

        <p className="text-gray-light text-sm mb-8 leading-relaxed group-hover:text-gray-light/90 transition-colors duration-300">
          {description}
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-6 py-2 bg-orange/20 text-orange text-xs font-medium rounded-full border border-orange/30 group-hover:bg-orange/30 group-hover:scale-105 transition-all duration-300 hover:shadow-sm"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {tech}
            </span>
          ))}
        </div>

        {metrics.length > 0 && (
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray/20 group-hover:border-orange/30 transition-colors duration-300">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="text-center transform group-hover:scale-105 transition-all duration-300"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-sm font-bold text-white group-hover:text-orange transition-colors duration-300 mb-2">
                  {metric.value}
                </div>
                <div className="text-xs text-gray-light group-hover:text-gray-light/90 transition-colors duration-300">
                  {metric.label}
                </div>
                <div
                  className="w-full h-0.5 bg-orange/30 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ transitionDelay: `${index * 100 + 150}ms` }}
                ></div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
