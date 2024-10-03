import ArticleItem from '@/components/items/ArticleItem';
import Layout from '@/components/Layout';
import { getCanonicalUrl, RouteLink } from '@/libs/route';
import { allPosts } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';

export const metadata = {
  title: 'Liste des articles de développement - inRage',
  description:
    'Passionné par les nouvelles technologies, J&#039;adore partager mes compétences et mes découvertes avec des personnes qui ont cette même passion pour le web !',
  alternates: {
    canonical: getCanonicalUrl(RouteLink.blog),
  },
};

export default async function BlogList() {
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    });
  return (
    <Layout title='Blog sur le développement web'>
      <div className='container mb-10'>
        <div className='-mb-8 mt-6 grid gap-4 md:grid-cols-2'>
          {posts.map(({ title, slug, excerpt, date, image }) => (
            <ArticleItem
              slug={slug}
              key={slug}
              image={image}
              title={title}
              description={excerpt}
              date={date}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
