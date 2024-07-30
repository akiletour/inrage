import { cache } from "react"

export const getApi = process.env.WORDPRESS_API_URL as string

type HeaderType = {
  "Content-Type": string
  Authorization?: string
}

export const REVALIDATE = {
  ONE_DAY: 60 * 60 * 24,
  ONE_HOUR: 60 * 60,
  ONE_MINUTE: 60,
}

type VariableProps = {
  id?: string
  authorEmail?: string
  comment?: string
  author?: string
  parent?: string
}

export const fetcher = cache(
  async (query: string, variables: VariableProps = {}) => {
    const headers: HeaderType = { "Content-Type": "application/json" }

    const res = await fetch(getApi, {
      method: "POST",
      headers,
      body: JSON.stringify({
        query,
        variables,
      }),
    })

    return res.json()
  }
)

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`
}
