import fs from 'node:fs'
import path from 'node:path'

import { imageSize } from 'image-size'
import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'

import { headingText, slugifyHeading } from '@util/headings'

const dimensions = new Map<string, { width: number; height: number }>()

function localImageSize(src: string) {
  const cached = dimensions.get(src)
  if (cached) return cached
  const file = path.join(process.cwd(), 'public', src)
  const size = imageSize(fs.readFileSync(file))
  if (!size.width || !size.height) {
    throw new Error(`mdx image: unable to read dimensions of ${src}`)
  }
  const result = { width: size.width, height: size.height }
  dimensions.set(src, result)
  return result
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: ({ children, ...props }) => (
      <h2 id={slugifyHeading(headingText(children))} {...props}>
        {children}
      </h2>
    ),
    table: (props) => (
      <div className="overflow-x-auto">
        <table {...props} />
      </div>
    ),
    pre: (props) => (
      <pre
        className="overflow-x-auto py-4 rounded-md bg-muted my-4 [&_[data-line]]:px-4"
        {...props}
      />
    ),
    img: (props) => {
      const { src, alt, width, height, title, ...rest } = props
      const size =
        typeof src === 'string' && src.startsWith('/images/')
          ? localImageSize(src)
          : { width: Number(width) || 1024, height: Number(height) || 768 }
      const image = (
        <Image
          src={src}
          alt={alt || ''}
          width={size.width}
          height={size.height}
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
