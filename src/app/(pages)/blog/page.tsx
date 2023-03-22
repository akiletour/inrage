import ArticleItem from '@component/items/ArticleItem';
import Layout from '@component/Layout';
import posts from '@graphql-query/all-blog-posts.graphql';
import { ArticleList, List } from '@type/graphql';
import { fetcher } from '@util/index';

export const metadata = {
  title: 'Liste des articles de développement - inRage',
  description:
    'Passionné par les nouvelles technologies, J&#039;adore partager mes compétences et mes découvertes avec des personnes qui ont cette même passion pour le web !',
};

const allPosts = (): Promise<List<ArticleList>> => fetcher(posts);

export default async function BlogList() {
  const { data } = await allPosts();
  return (
    <Layout title="Blog sur le développement web">
      <div className="container mb-10">
        <div className="grid md:grid-cols-2 gap-4 -mb-8 mt-6">
          {data?.posts?.edges.map(
            ({ node: { title, slug, excerpt, date, featuredImage } }) => (
              <ArticleItem
                slug={slug}
                key={slug}
                featuredImage={featuredImage}
                title={title}
                excerpt={excerpt}
                date={date}
              />
            )
          )}
        </div>
      </div>
    </Layout>
  );
}
