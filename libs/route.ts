export const RouteLink = {
  aboutMe: "/a-propos-de-moi",
  prestations: "/prestations",
  get prestationWeb() {
    return `${this.prestations}/creation-site-web`
  },
  get prestationTma() {
    return `${this.prestations}/maintenance-site-internet`
  },
  get prestationWordPress() {
    return `${this.prestationWeb}/site-wordpress`
  },
  get prestationPrestashop() {
    return `${this.prestationWeb}/site-prestashop`
  },
  get prestationSymfony() {
    return `${this.prestationWeb}/symfony`
  },
  get prestationTmaWordPress() {
    return `${this.prestationTma}/maintenance-wordpress`
  },
  get prestationTmaPrestashop() {
    return `${this.prestationTma}/maintenance-prestashop`
  },
  get prestationTmaOnDemand() {
    return `${this.prestationTma}/maintenance-ponctuelle`
  },
  portfolio: "/portfolio",
  contact: "/contact",
  blog: "/blog",
  legals: "/mentions-legales",
  sitemap: "/plan-du-site",
}

export const getCanonicalUrl = (part: string = ""): string => {
  return `${process.env.NEXT_PUBLIC_FRONT_URL}${part}`
}

export const replaceBackendUrlContent = (content: string): string => {
  return content.replace(
    process.env.BACKEND_URL as string,
    process.env.NEXT_PUBLIC_FRONT_URL as string
  )
}

export default RouteLink
