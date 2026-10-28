import Image from 'next/image'

import Reveal from '@component/home/Reveal'

import { TIMELINE } from './data'

export default function Timeline() {
  return (
    <ol className="home-timeline mt-14">
      {TIMELINE.map((step, i) => (
        <li key={`${step.year}-${step.title}`} className="home-timeline-item">
          <Reveal i={i}>
            <div className="grid gap-x-8 gap-y-3 md:grid-cols-[140px_1fr_160px] md:items-start">
              <div className="home-num text-2xl font-semibold text-white md:text-3xl">
                {step.year}
              </div>
              <div>
                <h3 className="text-xl font-medium text-white md:text-2xl">
                  {step.title}
                </h3>
                <div className="mt-1 text-xs tracking-widest text-(--home-orange-text) uppercase">
                  {step.company}
                </div>
                <p className="mt-3 max-w-[60ch] leading-7 text-(--home-muted)">
                  {step.text}
                </p>
              </div>
              {step.logo && (
                <div className="hidden justify-end md:flex">
                  <Image
                    src={step.logo}
                    alt=""
                    className={`${step.logoClassName} w-auto opacity-70`}
                  />
                </div>
              )}
            </div>
          </Reveal>
        </li>
      ))}
    </ol>
  )
}
