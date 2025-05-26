import Layout from '@component/Layout'
import SupportSwitcher from '@component/portfolio/SupportSwitcher'
import SectionTitle from '@component/SectionTitle'
import { portfolioCategories } from '@lib/portfolio'
import { getCanonicalUrl, RouteLink } from '@lib/router'

import PortfolioGrid from '../PortfolioGrid'
import { getRelatedMdx } from '@util/mdx'
import { notFound } from 'next/navigation'

type Props = {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata(props: Props) {
  const params = await props.params

  const category =
    portfolioCategories[params.slug as keyof typeof portfolioCategories]

  return {
    title: `${category.title} - Portfolio`,
    description: '',
    alternates: {
      canonical: getCanonicalUrl(`${RouteLink.portfolio}/${category.slug}`),
    },
  }
}

export async function generateStaticParams() {
  return Object.keys(portfolioCategories).map(async (slug) => ({ slug }))
}

export default async function Page(props: Props) {
  const params = await props.params
  const data = await getRelatedMdx({
    frontmatterKey: 'category',
    type: 'portfolio',
    currentSlug: undefined,
    category: params.slug,
  })

  const category =
    portfolioCategories[params.slug as keyof typeof portfolioCategories]

  if (!category) {
    return notFound()
  }

  return (
    <Layout
      breadcrumbs={[{ link: RouteLink.portfolio, title: 'Portfolio' }]}
      title={category.title}
    >
      <div className="container">
        <SectionTitle
          content={
            "Pour toute demande ou devis, n'hésitez pas à me contacter en remplissant le formulaire de la page contact, je serai ravi de vous répondre."
          }
          title={category.title}
        />
        <SupportSwitcher pathname={`/portfolio/${category.slug}`} />

        <PortfolioGrid projects={data} />
      </div>
    </Layout>
  )
}
