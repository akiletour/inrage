'use client';

import { useEffect, useState } from 'react';

import moment from 'moment';
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
import 'moment/locale/fr';
import CommentForm from '@component/blog/CommentForm';
import { ButtonLinkRaw } from '@component/ButtonLink';

import style from './PostComments.module.css';

export type CommentItemType = {
  id: string;
  databaseId: number;
  content: string;
  dateGmt: Date;
  author: {
    node: {
      name: string;
    };
  };
  replies?: {
    nodes: CommentItemType[];
  };
  isChild?: boolean;
  postId?: number;
};

export default function CommentItem({
  author,
  content,
  dateGmt,
  isChild = false,
  replies,
  postId,
  databaseId,
}: CommentItemType) {
  const [isReplying, setReplying] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className={`${isChild ? 'ml-2 pl-2 border-l-2 border-orange' : ''}`}>
      <div className="bg-gray-dark py-2 px-3 mt-4">
        <div className="flex justify-between mb-2">
          <div className="text-xl font-medium text-white">
            {author.node.name}
          </div>
          <div>{moment(dateGmt).format('lll')}</div>
        </div>
        <div
          className={style.content}
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        />

        {isChild === false && (
          <div className="mt-2">
            <ButtonLinkRaw
              as="button"
              type="button"
              onClick={() => setReplying((r) => !r)}
            >
              Répondre
            </ButtonLinkRaw>
          </div>
        )}
      </div>

      {isChild === false && isReplying === true && (
        <CommentForm
          parentAuthor={author.node.name}
          parent={databaseId}
          postId={postId as number}
        />
      )}

      {replies?.nodes && replies.nodes.length > 0 && (
        <div>
          {replies.nodes.map((reply) => (
            <CommentItem postId={postId} key={reply.id} {...reply} isChild />
          ))}
        </div>
      )}
    </div>
  );
}
