import Layout from '@component/Layout'
import SupportSwitcher from '@component/portfolio/SupportSwitcher'
import SectionTitle from '@component/SectionTitle'
import { getCanonicalUrl, RouteLink } from '@lib/router'

import PortfolioGrid from './PortfolioGrid'
import { getPortfolioItems } from '@lib/portfolio'

export const metadata = {
  title: 'Portfolio des projets de création de site Internet',
  description:
    "Retrouvez la liste des projets de création de site web, de boutique e-commerce ou encore d'application web",
  alternates: {
    canonical: getCanonicalUrl(RouteLink.portfolio),
  },
}

export default async function Page() {
  const data = await getPortfolioItems()

  return (
    <Layout title="Portfolio">
      <div className="container">
        <SectionTitle
          content={
            "Pour toute demande ou devis, n'hésitez pas à me contacter en remplissant le formulaire de la page contact, je serai ravi de vous répondre."
          }
          title="Portfolio"
        />
        <SupportSwitcher pathname="/portfolio" />

        <PortfolioGrid projects={data} />
      </div>
    </Layout>
  )
}
