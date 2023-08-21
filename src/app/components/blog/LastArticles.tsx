import { compareDesc } from 'date-fns';

import ArticleItem from '@component/items/ArticleItem';
import { allPosts } from 'contentlayer/generated';

export default function LastArticles() {
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    })
    .slice(0, 2);

  return (
    <div className="grid md:grid-cols-2 gap-4 mb-8 lg:-mb-8 mt-6">
      {posts.length &&
        posts.map(({ slug, title, image, excerpt, date }) => (
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
  );
}
