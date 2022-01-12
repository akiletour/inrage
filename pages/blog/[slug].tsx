import Layout from '@component/layouts/Layout';
import ErrorPage from 'next/error';
import { useRouter } from 'next/router';
import { getAllArticlesWithSlug, getSingleArticle } from '@lib/blog';
import PostBody from '@component/blog/PostBody';
import PostComments from '@component/blog/PostComments';

type BlogFullArticleType = {
  id: string;
  title: string;
  slug: string;
  content: string;
}

type BlogType = {
  post: BlogFullArticleType;
}

export default function BlogDetail({ post }: BlogType) {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout>
      <div className="container">
        <PostBody
          content={post?.content || ''}
        />
      </div>
      {post?.id && <PostComments id={post?.id} />}
    </Layout>
  );
}

export async function getStaticProps({ params }: {params: { slug: string } }) {
  const { post } = await getSingleArticle(params.slug);
  return {
    props: {
      pageTitle: post.title,
      post,
      breadcrumb: [{
        title: 'Blog',
        link: '/blog',
      }],
    },
  };
}

type StaticProps = {
  node: {
    slug: string;
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllArticlesWithSlug();

  return {
    paths: allPosts.edges.map(({ node }: StaticProps) => `/blog/${node.slug}`) || [],
    fallback: true,
  };
}
