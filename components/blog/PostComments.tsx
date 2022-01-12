import useSWR from 'swr';
import Diagonal from '@component/layouts/Diagonal';
import styles from '@component/blog/PostBody.module.css';
import Prism from 'prismjs';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-php';
import { useEffect } from 'react';
import CommentItem, { CommentItemType } from '@component/items/CommentItem';
import { Merge } from 'type-fest';

const fetcher = (url: string) => fetch(url, {
  headers: {
    'Content-Type': 'application/json',
  },
}).then((r) => r.json());

type Props = {
  id: string;
}

export default function PostComments({ id }: Props) {
  const { data, error } = useSWR<Array<{node: CommentItemType}>>(`/api/comments?id=${id}`, fetcher);

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  if (error) return <div>failed to load</div>;

  if (!data && !error) return <div>loading...</div>;

  return (
    <div className="bg-gray-darker">
      <Diagonal bgClass="fill-gray-dark" bgCorner="fill-orange" flipX flipY />
      <div className="container relative z-10 -my-10">
        {data && data.map(({ node }) => (
          <div className="mt-4">
            <CommentItem
              key={node.id}
              {...node}
            />
          </div>
        ))}
      </div>
      <Diagonal bgClass="fill-gray-dark" bgCorner="fill-orange" />
    </div>
  );
}
