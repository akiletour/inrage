import { NextSeo } from 'next-seo';
import ErrorPage from 'next/error';
import { useRouter } from 'next/router';

import PostBody from '@component/blog/PostBody';
import PostComments from '@component/blog/PostComments';
import ArticleItem from '@component/items/ArticleItem';
import Layout from '@component/layouts/Layout';
import SectionTitle from '@component/SectionTitle';
import { getAllArticlesWithSlug, getSingleArticle } from '@lib/blog';
import { BlogItem, BlogFullArticleType } from '@type/blog';
import { RouteLink } from '@lib/route';

type BlogType = {
  post: BlogFullArticleType;
  relatedArticles: Array<{ node: BlogItem }>;
};

export default function BlogDetail({ post, relatedArticles }: BlogType) {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  if (router.isFallback) {
    return <p>Chargement en cours</p>;
  }

  return (
    <Layout>
      <NextSeo
        title={post.seo.title}
        description={post.seo.metaDesc}
        canonical={post.seo.canonical}
      />
      <div className="container">
        <PostBody content={post?.content || ''} />
      </div>
      {post?.id && <PostComments id={post?.postId} />}

      <div className="container">
        <SectionTitle
          content="Retrouvez ci-dessous quelques articles qui pourrait vous intéresser."
          title="Articles reliés"
        />
        <div className="grid md:grid-cols-2 gap-4 -mb-8 mt-6">
          {relatedArticles.map(
            ({ node: { slug, title, featuredImage, excerpt, date } }) => (
              <div key={slug}>
                <ArticleItem
                  slug={slug}
                  featuredImage={featuredImage}
                  title={title}
                  date={date}
                  excerpt={excerpt}
                />
              </div>
            )
          )}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const { post, posts } = await getSingleArticle(params.slug);

  const firstArticle =
    posts.edges[Math.floor(Math.random() * posts.edges.length)];
  const secondArticle =
    posts.edges[Math.floor(Math.random() * posts.edges.length)];

  return {
    props: {
      pageTitle: post.title,
      post,
      relatedArticles: [firstArticle, secondArticle],
      breadcrumb: [
        {
          title: 'Blog',
          link: RouteLink.blog,
        },
      ],
    },
  };
}

type StaticProps = {
  node: {
    slug: string;
  };
};

export async function getStaticPaths() {
  const allPosts = await getAllArticlesWithSlug();

  return {
    paths:
      allPosts.edges.map(({ node }: StaticProps) => `/blog/${node.slug}`) || [],
    fallback: true,
  };
}
