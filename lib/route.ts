export const RouteLink = {
  aboutMe: '/a-propos-de-moi',
  prestations: '/prestations',
  get prestationWeb() { return `${this.prestations}/creation-site-web`; },
  get prestationTma() { return `${this.prestations}/maintenance-site-internet`; },
  get prestationWordPress() { return `${this.prestationWeb}/site-wordpress`; },
  get prestationPrestashop() { return `${this.prestationWeb}/site-prestashop`; },
  portfolio: '/portfolio',
  contact: '/contact',
  blog: '/blog',
  legals: '/mentions-legales',
  sitemap: '/plan-du-site',
};

export default RouteLink;
