import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'

import { headingText, slugifyHeading } from '@util/headings'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: ({ children, ...props }) => (
      <h2 id={slugifyHeading(headingText(children))} {...props}>
        {children}
      </h2>
    ),
    pre: (props) => (
      <pre
        className="overflow-x-auto py-4 rounded-md bg-muted my-4 [&_[data-line]]:px-4"
        {...props}
      />
    ),
    img: (props) => {
      const { src, alt, width, height, title, ...rest } = props
      const image = (
        <Image
          src={src}
          alt={alt || ''}
          width={Number(width) || 1024}
          height={Number(height) || 768}
          {...rest}
        />
      )

      if (!title) {
        return image
      }

      return (
        <>
          {image}
          <span className="article-caption">{title}</span>
        </>
      )
    },
    ...components,
  }
}
