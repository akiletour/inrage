import Diagonal from '@component/Diagonal';
import SectionTitle from '@component/SectionTitle';
import BlogCommentsQuery from '@graphql-query/blog-comments.graphql';
import { List } from '@type/graphql';
import { CommentItemType } from '@type/graphql/comment';
import { fetcher } from '@util/index';

import CommentForm from './CommentForm';
import CommentItem from './CommentItem';

type Props = {
  postDatabaseId: number;
  identifier: string;
};

const getComments = (postId: string): Promise<List<CommentItemType>> =>
  fetcher(BlogCommentsQuery, {
    id: postId,
  });

export default async function PostComments({
  postDatabaseId,
  identifier,
}: Props) {
  const { data } = await getComments(identifier);

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
        {data?.comments?.edges &&
          data?.comments?.edges.map(({ node }) => (
            <div className="mt-4" key={node.databaseId}>
              <CommentItem postId={postDatabaseId} {...node} />
            </div>
          ))}

        <CommentForm postId={postDatabaseId} />
      </div>
      <Diagonal bgClass="fill-gray-dark" bgCorner="fill-orange" />
    </div>
  );
}
