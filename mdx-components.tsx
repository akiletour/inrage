import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    pre: (props) => (
      <pre
        className="overflow-x-auto py-4 rounded-md bg-muted my-4 [&_[data-line]]:px-4"
        {...props}
      />
    ),
    img: (props) => {
      const { src, alt, width, height, ...rest } = props
      return (
        <Image
          src={src}
          alt={alt || ''}
          width={Number(width) || 800}
          height={Number(height) || 450}
          {...rest}
        />
      )
    },
    ...components,
  }
}
