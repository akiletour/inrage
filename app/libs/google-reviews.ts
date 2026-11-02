const PLACE_ID = 'ChIJ2b4tvsBTAUgRJHLaTXQI9jU'
const PLACE_DETAILS_URL = `https://places.googleapis.com/v1/places/${PLACE_ID}`
const ONE_DAY_IN_SECONDS = 86400

export type GoogleReviewsSummary = {
  rating: number
  count: number
}

export const GOOGLE_REVIEWS_FALLBACK: GoogleReviewsSummary = {
  rating: 5,
  count: 11,
}

type PlaceDetailsResponse = {
  rating?: number
  userRatingCount?: number
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
        'X-Goog-FieldMask': 'rating,userRatingCount',
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

    return { rating: data.rating, count: data.userRatingCount }
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
