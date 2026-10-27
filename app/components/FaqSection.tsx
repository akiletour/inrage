import Diagonal from '@component/Diagonal'
import SectionTitle from '@component/SectionTitle'

export type FaqItem = {
  question: string
  answer: string
}

type Props = {
  intro: string
  items: FaqItem[]
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

export default function FaqSection({ intro, items }: Props) {
  return (
    <div className="bg-gray-darker mt-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildFaqJsonLd(items)),
        }}
      />
      <Diagonal
        flipX
        flipY
        className="h-16 md:h-32 lg:h-48"
        bgClass="fill-gray-dark"
        bgCorner="fill-gray-darker"
      />
      <section className="container py-12 lg:py-0" aria-labelledby="faq-title">
        <SectionTitle title={['Questions', 'fréquentes']} content={intro} />
        <div className="mt-10 lg:ml-[calc(390px+8rem)] divide-y divide-[#2f2f2f] border-y border-[#2f2f2f]">
          {items.map((item) => (
            <details key={item.question} className="group py-5">
              <summary className="flex items-start justify-between gap-6 cursor-pointer list-none text-white font-medium text-lg [&::-webkit-details-marker]:hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/80 rounded-sm">
                <span className="text-balance">{item.question}</span>
                <span
                  aria-hidden="true"
                  className="flex-none mt-1 text-orange text-2xl leading-none transition-transform duration-150 motion-reduce:transition-none group-open:rotate-45"
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
      </section>
      <Diagonal
        className="h-16 md:h-32 lg:h-48"
        bgClass="fill-gray-dark"
        bgCorner="fill-gray-darker"
      />
    </div>
  )
}
