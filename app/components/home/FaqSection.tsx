import Reveal from '@component/home/Reveal'
import type { FaqItem } from '@util/seo-generators'

export default function FaqSection({
  title,
  intro,
  items,
  tone = 'plain',
}: {
  title: string
  intro: string
  items: FaqItem[]
  tone?: 'plain' | 'deep'
}) {
  const sectionClass =
    tone === 'deep'
      ? 'home-oblique-both relative isolate scroll-mt-28 overflow-hidden bg-(--home-bg-deep) py-24 md:py-32'
      : 'container scroll-mt-28 py-20 md:py-28'

  return (
    <section id="faq" className={sectionClass}>
      <div
        className={`grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 ${tone === 'deep' ? 'container' : ''}`}
      >
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-balance text-white md:text-5xl">
            {title}
          </h2>
          <span className="home-rule mt-5" aria-hidden />
          <p className="mt-5 max-w-[44ch] leading-7 text-(--home-muted)">
            {intro}
          </p>
        </Reveal>
        <div className="divide-y divide-white/10">
          {items.map((item, i) => (
            <Reveal key={item.question} i={i}>
              <details className="group py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 rounded-sm text-lg font-medium text-white outline-offset-4 focus-visible:outline-2 focus-visible:outline-white/70 [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <span
                    aria-hidden
                    className="mt-1 shrink-0 text-(--home-muted) group-open:rotate-45 motion-safe:transition-transform"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-[64ch] leading-7 text-(--home-muted)">
                  {item.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
