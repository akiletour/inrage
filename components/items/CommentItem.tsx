import Prism from 'prismjs';
import moment from 'moment';
import { useEffect } from 'react';
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

export type CommentItemType = {
  id: string;
  content: string;
  dateGmt: Date;
  author: {
    node: {
      name: string;
    }
  }
  replies?: {
    nodes: CommentItemType[];
  }
  isChild?: boolean;
}

export default function CommentItem({
  author, content, dateGmt, isChild, replies,
}: CommentItemType) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div className={`${isChild ? 'ml-2 pl-2 border-l-2 border-orange' : ''}`}>
      <div className="bg-gray-dark p-2 mt-4">
        <div className="flex justify-between mb-2">
          <div className="text-xl font-medium text-white">{author.node.name}</div>
          <div>{moment(dateGmt).format('lll')}</div>
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        />
      </div>

      {replies?.nodes && replies.nodes.length > 0 && (
        <div>
          {replies.nodes.map((reply) => (
            <CommentItem key={reply.id} {...reply} isChild />
          ))}
        </div>
      )}
    </div>
  );
}
