import { ReactNode } from 'react'

import Reveal from './Reveal'

export default function SectionHeading({
  children,
  text,
}: {
  children: ReactNode
  text?: string
}) {
  return (
    <Reveal>
      <div className="flex flex-col items-center text-center">
        <h2 className="text-3xl font-bold tracking-tight text-balance text-white md:text-5xl">
          {children}
        </h2>
        {text && (
          <>
            <span className="home-rule mt-5" aria-hidden />
            <p className="mt-5 max-w-[62ch] leading-7 text-(--home-muted)">
              {text}
            </p>
          </>
        )}
      </div>
    </Reveal>
  )
}
