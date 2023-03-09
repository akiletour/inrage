import PostBody from '@component/blog/PostBody';
import PostComments from '@component/blog/PostComments';
import ArticleItem from '@component/items/ArticleItem';
import Layout from '@component/Layout';
import SectionTitle from '@component/SectionTitle';
import allBlogPostsSlug from '@graphql-query/all-blog-posts-slug.graphql';
import getSinglePost from '@graphql-query/single-post.graphql';
import { BlogPostsSlugs, SinglePostType } from '@type/graphql/blog';
import { fetcher } from '@util/index';

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 60;

const getAllBlogPostsSlugs = (): Promise<BlogPostsSlugs> =>
  fetcher(allBlogPostsSlug);

export async function generateStaticParams() {
  const { data } = await getAllBlogPostsSlugs();

  return data.posts.edges.map(({ node }) => ({
    slug: node.slug,
  }));
}

const getData = (slug: string): Promise<SinglePostType> =>
  fetcher(getSinglePost, { id: slug });

export default async function Page({ params }: Props) {
  const {
    data: { post, posts },
  } = await getData(params.slug);

  const shuffled = posts.edges
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  const relatedPosts = shuffled.slice(0, 2);

  return (
    <Layout title={post.title}>
      <div className="container">
        <PostBody content={post.content} />
      </div>

      <PostComments identifier={post.slug} />

      <div className="container">
        <SectionTitle
          content="Retrouvez ci-dessous quelques articles qui pourrait vous intéresser."
          title="Articles reliés"
        />

        <div className="grid md:grid-cols-2 gap-4 mt-6">
          {relatedPosts.map(
            ({ node: { id, slug, featuredImage, title, date, excerpt } }) => (
              <div key={id}>
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
