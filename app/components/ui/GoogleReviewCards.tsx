import Image from 'next/image'

import { GOOGLE_PLACE_URL } from '@component/about/data'
import Glass from '@component/home/Glass'
import Reveal from '@component/home/Reveal'
import { GoogleReview } from '@lib/google-reviews'

type Props = {
  reviews: GoogleReview[]
  count: number
}

export default function GoogleReviewCards({ reviews, count }: Props) {
  return (
    <>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {reviews.map((review, i) => {
          const stars = Math.min(5, Math.max(0, Math.round(review.rating)))
          return (
            <Reveal key={`${review.author}-${i}`} i={i} className="h-full">
              <Glass className="flex h-full flex-col p-7">
                <span className="home-quote" aria-hidden>
                  “
                </span>
                <blockquote className="-mt-6 leading-7 text-white/85">
                  {review.text}
                </blockquote>
                <footer className="mt-auto flex items-center gap-4 pt-6">
                  {review.authorPhotoUri && (
                    <Image
                      src={review.authorPhotoUri}
                      alt=""
                      width={48}
                      height={48}
                      className="size-12 shrink-0 rounded-full"
                    />
                  )}
                  <div>
                    <div
                      className="home-stars text-sm"
                      aria-label={`${stars} étoiles sur 5`}
                    >
                      {'★'.repeat(stars)}
                      {'☆'.repeat(5 - stars)}
                    </div>
                    <div className="mt-1 font-medium text-white">
                      {review.authorUri ? (
                        <a
                          href={review.authorUri}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="hover:underline"
                        >
                          {review.author}
                        </a>
                      ) : (
                        review.author
                      )}
                    </div>
                    <div className="text-sm text-(--home-muted)">
                      {review.meta} · Avis Google
                    </div>
                  </div>
                </footer>
              </Glass>
            </Reveal>
          )
        })}
      </div>
      <div className="mt-12 flex justify-center">
        <a
          href={GOOGLE_PLACE_URL}
          target="_blank"
          rel="noreferrer noopener"
          className="home-btn-ghost home-glassy"
        >
          Lire les {count} avis sur Google
        </a>
      </div>
    </>
  )
}
