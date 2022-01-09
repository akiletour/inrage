import Layout from '@component/layouts/Layout';
import { NextSeo } from 'next-seo';
import ArticleItem from '@component/items/ArticleItem';
import { BlogPosts } from '@lib/blog';
import { BlogPostType } from '@type/blog';

type Props = {
  posts: {
    edges: BlogPostType[];
  }
}

export default function BlogList({ posts: { edges } }: Props) {
  return (
    <Layout>
      <NextSeo
        title="Liste des articles de développement - inRage"
        description={'Passionné par les nouvelles technologies, J&#039;adore partager mes compétences et mes découvertes avec des personnes qui ont cette même passion pour le web !'}
      />

      <div className="container mb-10">
        <div className="grid md:grid-cols-2 gap-4 -mb-8 mt-6">
          {edges.map(({
            node: {
              title, slug, excerpt, date, featuredImage,
            },
          }) => (
            <ArticleItem
              slug={slug}
              key={slug}
              featuredImage={featuredImage}
              title={title}
              excerpt={excerpt}
              date={date}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = await BlogPosts();

  return {
    props: {
      posts,
      pageTitle: 'Blog sur le développement web',
    },
  };
}
