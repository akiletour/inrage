import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import ArticleItem from '@component/items/ArticleItem';
import Layout from '@component/Layout';
import { Mdx } from '@component/mdx-components';
import SectionTitle from '@component/SectionTitle';
import { RouteLink } from '@lib/route';
import { absoluteUrl } from '@util/index';
import { allPosts } from 'contentlayer/generated';

import '../mdx.css';

interface PostPageProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostPageProps['params']) {
  const slug = params?.slug?.join('/');
  const post = allPosts.find((p) => p.slugAsParams === slug);

  if (!post) {
    return null;
  }

  return post;
}

export async function generateStaticParams(): Promise<
  PostPageProps['params'][]
> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split('/'),
  }));
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    authors: post.authors.map((author) => ({
      name: author,
    })),
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
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
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params);

  if (!post) {
    notFound();
  }

  const relatedPosts = allPosts
    .filter((p) => p.slug !== post.slug)
    .sort(() => {
      return 0.5 - Math.random();
    })
    .slice(0, 2);

  return (
    <Layout
      breadcrumbs={[{ link: RouteLink.blog, title: 'Blog' }]}
      title={post.title}
    >
      <div className="container">
        <div className="mx-auto w-full max-w-5xl text-xl">
          <Mdx code={post.body.code} />
        </div>

        <div className="mt-10">
          <SectionTitle
            content="Retrouvez ci-dessous quelques articles qui pourrait vous intéresser."
            title="Articles reliés"
          />

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {relatedPosts.map(({ slug, image, title, date, excerpt }) => (
              <div key={slug}>
                <ArticleItem
                  slug={slug}
                  image={image}
                  title={title}
                  date={date}
                  description={excerpt}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
