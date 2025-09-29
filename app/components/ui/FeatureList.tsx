interface FeatureListProps {
  title: string
  items: Array<string | { label: string; description?: string }>
  className?: string
}

export default function FeatureList({ title, items, className = '' }: FeatureListProps) {
  return (
    <div className={className}>
      <h3 className="font-medium text-orange mb-3 text-base lg:text-lg">{title}</h3>
      <ul className="space-y-2 text-gray-light text-sm lg:text-base">
        {items.map((item, index) => {
          const label = typeof item === 'string' ? item : item.label
          const description = typeof item === 'object' ? item.description : undefined

          return (
            <li key={index} className="flex items-start">
              <span className="text-orange mr-2 font-bold">•</span>
              <span>
                {label}
                {description && <span className="text-gray text-xs block mt-1">{description}</span>}
              </span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}