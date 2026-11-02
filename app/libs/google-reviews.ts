const PLACE_ID = 'ChIJ2b4tvsBTAUgRJHLaTXQI9jU'
const PLACE_DETAILS_URL = `https://places.googleapis.com/v1/places/${PLACE_ID}?languageCode=fr`
const ONE_DAY_IN_SECONDS = 86400

export type GoogleReview = {
  author: string
  authorUri?: string
  authorPhotoUri?: string
  meta: string
  rating: number
  text: string
}

export type GoogleReviewsSummary = {
  rating: number
  count: number
  reviews: GoogleReview[]
}

export const GOOGLE_REVIEWS_FALLBACK: GoogleReviewsSummary = {
  rating: 5,
  count: 11,
  reviews: [
    {
      author: 'Ricardo Pinto Maia',
      meta: 'Client depuis plus de 7 ans',
      rating: 5,
      text: 'Il ne se contente jamais d’exécuter un brief : il le dépasse, propose, améliore et tire systématiquement le projet vers le haut. Ses conseils sont toujours pertinents, son suivi irréprochable, et son code propre, clair et facilement exploitable par toute équipe technique.',
    },
    {
      author: 'Parapharmacie Moins Chère',
      meta: '6 ans de collaboration',
      rating: 5,
      text: 'Réactifs et à l’écoute, ils ont su nous aider sur tous les plans de développement de notre site. Évidemment par la conception, l’hébergement ou encore la TMA. Au-delà de ça, l’équipe et particulièrement Pascal font preuve de réactivité et d’un accompagnement sans faille !',
    },
    {
      author: 'Frédéric C.',
      meta: 'Client depuis plusieurs années',
      rating: 5,
      text: 'Expertise technique, écoute, conseils et réactivité sont les atouts majeurs de Pascal. C’est en toute confiance que je lui confie les projets de développement ou de mise à jour de mes différents sites web depuis plusieurs années maintenant. Avec un résultat qui dépasse souvent mes espérances !',
    },
  ],
}

type PlaceReview = {
  rating?: number
  relativePublishTimeDescription?: string
  text?: { text?: string }
  authorAttribution?: { displayName?: string; uri?: string; photoUri?: string }
}

type PlaceDetailsResponse = {
  rating?: number
  userRatingCount?: number
  reviews?: PlaceReview[]
}

function toGoogleReview(review: PlaceReview): GoogleReview | null {
  const text = review.text?.text
  const author = review.authorAttribution?.displayName
  if (!text || !author || typeof review.rating !== 'number') {
    return null
  }

  return {
    author,
    authorUri: review.authorAttribution?.uri,
    authorPhotoUri: review.authorAttribution?.photoUri,
    meta: review.relativePublishTimeDescription ?? 'Avis Google',
    rating: review.rating,
    text,
  }
}

export async function getGoogleReviewsSummary(): Promise<GoogleReviewsSummary> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY
  if (!apiKey) {
    return GOOGLE_REVIEWS_FALLBACK
  }

  try {
    const response = await fetch(PLACE_DETAILS_URL, {
      headers: {
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': 'rating,userRatingCount,reviews',
      },
      next: { revalidate: ONE_DAY_IN_SECONDS },
    })

    if (!response.ok) {
      console.error(`Google Places API responded with HTTP ${response.status}`)
      return GOOGLE_REVIEWS_FALLBACK
    }

    const data = (await response.json()) as PlaceDetailsResponse
    if (
      typeof data.rating !== 'number' ||
      typeof data.userRatingCount !== 'number'
    ) {
      return GOOGLE_REVIEWS_FALLBACK
    }

    const reviews = (data.reviews ?? [])
      .map(toGoogleReview)
      .filter((review) => review !== null)

    return {
      rating: data.rating,
      count: data.userRatingCount,
      reviews: reviews.length > 0 ? reviews : GOOGLE_REVIEWS_FALLBACK.reviews,
    }
  } catch (error) {
    console.error('Google Places API request failed', error)
    return GOOGLE_REVIEWS_FALLBACK
  }
}

export function formatRating(rating: number) {
  return rating.toLocaleString('fr-FR', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  })
}
