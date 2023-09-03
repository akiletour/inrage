import Image from "next/image";
import { notFound } from "next/navigation";

import Layout from "@component/Layout";
import RouteLink from "@lib/route";
import { allPortfolios } from "contentlayer/generated";

import {
  ProjectSupports,
  ProjectTechnologies,
} from "../../../../../content/config/portfolio";
import SectionTitle from "@component/SectionTitle";
import ProjectItem from "@component/items/ProjectItem";
import { absoluteUrl } from "@util/index";

interface PostPageProps {
  params: {
    category: string;
    slug: string;
  };
}

export async function generateStaticParams() {
  return allPortfolios.map((post) => ({
    category: post.slugAsParams.split("/")[0],
    slug: post.slugAsParams.split("/")[1],
  }));
}

export async function generateMetadata({ params }: PostPageProps) {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} - Portfolio - ${ProjectSupports[post.category].name}`,
    description: post.excerpt ?? "",
    openGraph: {
      title: post.title,
      description: post.excerpt ?? "",
      type: "article",
      url: absoluteUrl(post.slug),
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt ?? "",
      images: [post.image],
    },
  };
}

async function getPostFromParams(params: PostPageProps["params"]) {
  const post = allPortfolios.find(
    (p) => p.slugAsParams === `${params.category}/${params.slug}`,
  );

  if (!post) {
    return null;
  }

  return post;
}

async function getRelatedPosts(post: any) {
  const relatedPosts = allPortfolios
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .sort(() => {
      return 0.5 - Math.random();
    })
    .slice(0, 4);

  return relatedPosts;
}

export default async function ProjectPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params);
  const relatedPosts = await getRelatedPosts(post);

  if (!post) {
    notFound();
  }

  const postSupport = ProjectSupports[post.category];

  return (
    <Layout
      breadcrumbs={[
        { link: RouteLink.portfolio, title: "Portfolio" },
        {
          link: `${RouteLink.portfolio}/${params.category}`,
          title: postSupport.name,
        },
      ]}
      title={post.title}
    >
      <div className="container">
        <div className="flex items-center mb-10 flex-col md:flex-row">
          <div className="md:w-2/5 text-center md:text-right">
            <div className="text-4xl text-white font-bold">{post.title}</div>

            {post.website && (
              <a
                className="block text-3xl"
                href={post.website}
                target="_blank"
                rel="noreferrer nofollow"
              >
                {post.website.replace(/(^\w+:|^)\/\//, "")}
              </a>
            )}

            <div className="my-4 text-lg">{post.excerpt}</div>

            <div className="my-4">
              <div className="text-white text-xl font-light uppercase tracking-widest">
                Date
              </div>
              <div className="text-white font-bold text-3xl">{post.date}</div>
            </div>

            {post.technologies && (
              <div className="my-4">
                <div className="text-white text-xl font-light uppercase tracking-widest mb-2">
                  Technologies
                </div>
                <div className="text-white font-medium text-sm flex space-x-2 justify-center flex-wrap md:justify-end">
                  {post.technologies.map((techno) => {
                    const item = ProjectTechnologies.find(
                      (r) => r.name === techno,
                    );

                    if (!item) {
                      return null;
                    }

                    return (
                      <div
                        key={item.name}
                        className="flex items-center flex-col w-[80px] text-center"
                      >
                        <div className="w-6 h-6 relative">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            sizes="100vw"
                          />
                        </div>

                        <div className="mt-1">{item.name}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            <div>
              <div className="text-white text-xl font-light uppercase tracking-widest">
                Missions
              </div>
              {post.missions && (
                <div>
                  {post.missions.map((mission) => (
                    <div key={mission}>{mission}</div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="md:w-3/5 mt-4 md:mt-0 md:pl-4">
            <Image
              src={post.image}
              width={640}
              height={1136}
              alt={post.title}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>

        <SectionTitle
          content={`Retrouvez des projets similaires développés avec ${postSupport.name} qui pourrait correspondre à ${post.title}`}
          title={postSupport.name}
        />

        <div className="grid gap-2 sm:gap-0 grid-cols-2 md:grid-cols-4 mt-4">
          {relatedPosts.length > 0 &&
            relatedPosts.map((rPost) => (
              <ProjectItem key={rPost.slug} post={rPost} />
            ))}
        </div>
      </div>
    </Layout>
  );
}
