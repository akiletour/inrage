export const RouteLink = {
  aboutMe: '/a-propos-de-moi',
  developpeurLaRochelle: '/developpeur-web-la-rochelle',
  auditGratuit: '/audit-site-internet-gratuit',
  prestations: '/prestations',
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
  get prestationReact() {
    return `${this.prestations}/react`
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
  get prestationHosting() {
    return `${this.prestations}/hebergement-site-internet`
  },
  portfolio: '/portfolio',
  contact: '/contact',
  blog: '/blog',
  legals: '/mentions-legales',
  sitemap: '/plan-du-site',
}

export const SITE_URL =
  process.env.NEXT_PUBLIC_FRONT_URL || 'https://www.inrage.fr'

export const getCanonicalUrl = (part: string = ''): string => {
  return `${SITE_URL}${part}`
}

export default RouteLink
