'use client';

import { useEffect, useState } from 'react';

import Prism from 'prismjs';

import styles from './PostBody.module.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-php';

type Props = {
  content: string;
};

function highlightCodeInHTML(html: string): string {
  const container = document.createElement('div');
  container.innerHTML = html; // unsafe but whatever

  Prism.highlightAllUnder(container);

  return container.innerHTML;
}

export default function PostBody({ content }: Props) {
  const [post, setPost] = useState('');
  useEffect(() => {
    setPost(`${highlightCodeInHTML(content)}`);
  }, [content]);

  return (
    <div
      className={styles.content}
      dangerouslySetInnerHTML={{
        __html: post,
      }}
    />
  );
}
