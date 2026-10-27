import { ReactNode } from 'react'

export type FaqItem = {
  question: string
  answer: string
}

type Props = {
  title?: string
  intro: string
  items: FaqItem[]
  aside?: ReactNode
}

export function buildFaqJsonLd(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }
}

export default function FaqSection({
  title = 'Questions fréquentes',
  intro,
  items,
  aside,
}: Props) {
  return (
    <section className="bg-gray-darker py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildFaqJsonLd(items)),
        }}
      />
      <div className="container grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
        <div>
          <h2 className="text-white text-3xl font-bold text-balance">
            {title}
          </h2>
          <p className="mt-4 text-gray-light">{intro}</p>
          {aside}
        </div>
        <div className="divide-y divide-[#2f2f2f] border-y border-[#2f2f2f]">
          {items.map((item) => (
            <details key={item.question} className="group py-5">
              <summary className="flex items-start justify-between gap-6 cursor-pointer list-none text-white font-medium text-lg [&::-webkit-details-marker]:hidden">
                <span>{item.question}</span>
                <span
                  aria-hidden="true"
                  className="flex-none mt-1 text-orange text-2xl leading-none transition-transform duration-150 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 pr-10 text-gray-light max-w-[65ch]">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
