interface TimelineItem {
  time: string
  title: string
  description?: string
  tone?: 'team' | 'external'
  highlight?: boolean
  gap?: { value: string; label: string }
}

interface TimelineProps {
  caption: string
  items: TimelineItem[]
}

type Column =
  | { kind: 'item'; item: TimelineItem }
  | { kind: 'gap'; value: string; label: string }

const dashedX =
  'bg-[repeating-linear-gradient(to_right,#e57e21_0_5px,transparent_5px_11px)]'
const dashedY =
  'bg-[repeating-linear-gradient(to_bottom,#e57e21_0_4px,transparent_4px_10px)]'

function timeClass(item: TimelineItem) {
  return item.tone === 'external' ? 'text-gray' : 'text-orange'
}

function titleClass(item: TimelineItem) {
  return item.highlight ? 'text-orange' : 'text-white'
}

function Dot({ item }: { item: TimelineItem }) {
  return (
    <span
      aria-hidden
      className={`relative size-3 shrink-0 rounded-full ${
        item.tone === 'external'
          ? 'border-2 border-gray bg-gray-dark'
          : 'bg-orange'
      } ${item.highlight ? 'ring-4 ring-orange/25' : ''}`}
    />
  )
}

export default function Timeline({ caption, items }: TimelineProps) {
  const columns: Column[] = items.flatMap((item) =>
    item.gap
      ? [
          { kind: 'item' as const, item },
          { kind: 'gap' as const, ...item.gap },
        ]
      : [{ kind: 'item' as const, item }]
  )
  const template = columns
    .map((column) => (column.kind === 'gap' ? '1.5fr' : '1fr'))
    .join(' ')

  return (
    <figure className="not-prose article-wide my-14">
      <div className="hidden lg:block">
        <div className="grid" style={{ gridTemplateColumns: template }}>
          {columns.map((column, index) => (
            <p
              key={index}
              className="flex items-end pr-4 pb-3 text-sm font-semibold tabular-nums"
            >
              {column.kind === 'item' ? (
                <span className={timeClass(column.item)}>
                  {column.item.time}
                </span>
              ) : (
                <span className="-mb-1 text-4xl leading-none font-bold tracking-tight text-orange">
                  {column.value}
                </span>
              )}
            </p>
          ))}
        </div>

        <div
          className="grid h-3 items-center"
          style={{ gridTemplateColumns: template }}
          aria-hidden
        >
          {columns.map((column, index) => {
            const isLast = index === columns.length - 1
            const nextIsGap = columns[index + 1]?.kind === 'gap'

            return column.kind === 'gap' ? (
              <span key={index} className={`h-px ${dashedX}`} />
            ) : (
              <span key={index} className="flex items-center">
                <Dot item={column.item} />
                {!isLast && (
                  <span
                    className={`h-px flex-1 ${nextIsGap ? dashedX : 'bg-[#444]'}`}
                  />
                )}
              </span>
            )
          })}
        </div>

        <ol className="grid" style={{ gridTemplateColumns: template }}>
          {columns.map((column, index) =>
            column.kind === 'item' ? (
              <li key={index} className="pt-3 pr-5">
                <p
                  className={`text-[15px] leading-snug font-semibold text-balance ${titleClass(column.item)}`}
                >
                  {column.item.title}
                </p>
                {column.item.description && (
                  <p className="mt-1 text-sm leading-snug text-gray-light">
                    {column.item.description}
                  </p>
                )}
              </li>
            ) : (
              <li key={index} className="pt-3 pr-5 text-sm text-gray-light">
                {column.label}
              </li>
            )
          )}
        </ol>
      </div>

      <ol className="lg:hidden">
        {items.map((item, index) => {
          const isLast = index === items.length - 1

          return (
            <li key={item.time + item.title}>
              <div className="grid grid-cols-[12px_1fr] gap-x-4">
                <span aria-hidden className="relative flex justify-center">
                  {!isLast && (
                    <span
                      className={`absolute top-3 bottom-0 w-px ${
                        item.gap ? dashedY : 'bg-[#444]'
                      }`}
                    />
                  )}
                  <span className="relative mt-1 flex">
                    <Dot item={item} />
                  </span>
                </span>
                <div className={item.gap ? 'pb-1' : isLast ? '' : 'pb-6'}>
                  <p
                    className={`text-sm font-semibold tabular-nums ${timeClass(item)}`}
                  >
                    {item.time}
                  </p>
                  <p
                    className={`mt-0.5 text-base leading-snug font-semibold ${titleClass(item)}`}
                  >
                    {item.title}
                  </p>
                  {item.description && (
                    <p className="mt-1 text-sm leading-relaxed text-gray-light">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
              {item.gap && (
                <div className="grid grid-cols-[12px_1fr] gap-x-4">
                  <span aria-hidden className="relative flex justify-center">
                    <span className={`absolute inset-y-0 w-px ${dashedY}`} />
                  </span>
                  <p className="flex items-baseline gap-3 py-6">
                    <span className="text-4xl leading-none font-bold tracking-tight text-orange">
                      {item.gap.value}
                    </span>
                    <span className="text-sm text-gray-light">
                      {item.gap.label}
                    </span>
                  </p>
                </div>
              )}
            </li>
          )
        })}
      </ol>

      <figcaption className="mt-8 text-sm text-gray">{caption}</figcaption>
    </figure>
  )
}
