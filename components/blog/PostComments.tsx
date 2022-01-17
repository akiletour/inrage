import useSWR from 'swr';

import CommentItem, { CommentItemType } from '@component/items/CommentItem';
import Diagonal from '@component/layouts/Diagonal';
import SectionTitle from '@component/SectionTitle';

import CommentForm from './CommentForm';

const fetcher = (url: string) =>
  fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((r) => r.json());

type Props = {
  id: number;
};

export default function PostComments({ id }: Props) {
  const { data, error } = useSWR<Array<{ node: CommentItemType }>>(
    `/api/comments?id=${id}`,
    fetcher
  );

  if (error) return <div>failed to load</div>;

  if (!data && !error) return <div>loading...</div>;

  return (
    <div className="bg-gray-darker">
      <Diagonal bgClass="fill-gray-dark" bgCorner="fill-orange" flipX flipY />
      <div className="container relative z-10 -my-10">
        <SectionTitle
          title="Commentaires"
          content={
            "N'hésitez pas à me laisser un petit commentaire pour que l'on discute ensemble de cet article. Les commentaires doivent rester un lieu d’échange courtois et agréable."
          }
        />
        {data &&
          data.map(({ node }) => (
            <div className="mt-4" key={node.commentId}>
              <CommentItem {...node} />
            </div>
          ))}

        <CommentForm />
      </div>
      <Diagonal bgClass="fill-gray-dark" bgCorner="fill-orange" />
    </div>
  );
}
