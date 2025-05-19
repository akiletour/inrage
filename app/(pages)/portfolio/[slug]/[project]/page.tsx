import React from 'react'
import Image from 'next/image'
import ProjectItem from '@component/items/ProjectItem'
import Layout from '@component/Layout'
import SectionTitle from '@component/SectionTitle'
import { getCanonicalUrl, RouteLink } from '@lib/router'
import { notFound } from 'next/navigation'
import {
  getAllMdxSlugs,
  getMdx,
  getRelatedMdx,
  PortfolioMdxMetadata,
} from '@util/mdx'
import { portfolioCategories, portfolioTools } from '@lib/portfolio'

type Props = {
  params: Promise<{
    project: string
    slug: string
  }>
}

export const dynamic = 'force-static'

export async function generateStaticParams() {
  const projects = await getAllMdxSlugs('portfolio')

  return projects.map((project) => ({
    slug: project.slug,
    project: project.project,
  }))
}

export async function generateMetadata(props: Props) {
  const params = await props.params

  const mdxContent = await getMdx<'portfolio'>('portfolio', params.project)

  if (!mdxContent) {
    return {}
  }

  const { metadata } = mdxContent

  return {
    title: `${metadata.title} - Portfolio`,
    description: metadata.excerpt ?? '',
    alternates: {
      canonical: getCanonicalUrl(
        `${RouteLink.portfolio}/${metadata.category}/${params.project}`
      ),
    },
  }
}

export default async function Page(props: Props) {
  const params = await props.params

  const mdxResult = await getMdx<'portfolio'>('portfolio', params.project)

  if (!mdxResult) {
    return notFound()
  }

  const {
    content,
    metadata,
  }: { content: React.ComponentType; metadata: PortfolioMdxMetadata } =
    mdxResult

  const category =
    portfolioCategories[metadata.category as keyof typeof portfolioCategories]

  const relatedProjects = await getRelatedMdx({
    frontmatterKey: 'category',
    type: 'portfolio',
    currentSlug: params.project,
    limit: 4,
    category: params.slug,
    sort: 'random',
  })

  const MdxContent = content

  return (
    <Layout
      breadcrumbs={[
        { link: RouteLink.portfolio, title: 'Portfolio' },
        {
          link: `${RouteLink.portfolio}/${String(metadata.category)}`,
          title: category.title || '',
        },
      ]}
      title={metadata.title}
    >
      <div className="container">
        <div className="flex items-center mb-10 flex-col md:flex-row">
          <div className="md:w-2/5 text-center md:text-right">
            <div className="text-4xl text-white font-bold">
              {metadata.title}
            </div>

            <a
              className="block text-3xl"
              href={metadata.website}
              target="_blank"
              rel="noreferrer nofollow"
            >
              {metadata.website.replace(/(^\w+:|^)\/\//, '')}
            </a>

            <div className="my-4 text-lg">{metadata.summary}</div>

            <div className="my-4">
              <div className="text-white text-xl font-light uppercase tracking-widest">
                Date
              </div>
              <div className="text-white font-bold text-3xl">
                {metadata.year}
              </div>
            </div>

            <div className="my-4">
              <div className="text-white text-xl font-light uppercase tracking-widest mb-2">
                Technologies
              </div>
              <div className="text-white font-medium text-sm flex space-x-2 justify-center flex-wrap md:justify-end">
                {metadata.tools.map((techno) => {
                  const tool =
                    portfolioTools[techno as keyof typeof portfolioTools]

                  if (!tool) {
                    return null
                  }

                  return (
                    <div
                      key={tool.title}
                      className="flex items-center flex-col w-[80px] text-center"
                    >
                      <div className="w-6 h-6 relative">
                        <Image
                          src={`/images/portfolio/tools/${tool.icon}`}
                          alt={tool.title}
                          fill
                          sizes="100vw"
                        />
                      </div>

                      <div className="mt-1">{tool.title}</div>
                    </div>
                  )
                })}
              </div>
            </div>
            <div>
              <div className="text-white text-xl font-light uppercase tracking-widest">
                Missions
              </div>
              <div>
                {metadata.actions.map((mission: string) => (
                  <div key={mission}>{mission}</div>
                ))}
              </div>
            </div>
          </div>
          <div className="md:w-3/5 max-w-[650px] mt-4 md:mt-0 md:pl-4">
            <Image
              src={`/images/portfolio/${metadata.image.large}`}
              width={650}
              priority
              height={1150}
              alt={metadata.title}
              className="w-full h-auto max-w-none"
            />
          </div>
        </div>

        {content && (
          <div className="my-8 prose prose-lg prose-invert !max-w-5xl mx-auto">
            <MdxContent />
          </div>
        )}

        {relatedProjects.length > 0 && (
          <>
            <SectionTitle
              title={category.title}
              content={`Retrouvez des projets similaires développés avec ${category.title} qui pourraient correspondre à ${metadata.title}`}
            />

            <div className="grid gap-2 sm:gap-0 grid-cols-2 md:grid-cols-4 mt-4">
              {relatedProjects.map(({ title, image, slug, support }) => (
                <ProjectItem
                  key={title}
                  image={`/images/portfolio/${image}`}
                  title={title}
                  slug={slug}
                  support={support}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </Layout>
  )
}
