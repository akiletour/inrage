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
import styles from './PostBody.module.css';

export default function PostBody({ content }: {content: string}) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div
      className={styles.content}
      dangerouslySetInnerHTML={{
        __html: content,
      }}
    />
  );
}
