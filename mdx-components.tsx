import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    pre: (props) => (
      <pre
        className="overflow-x-auto py-4 rounded-md bg-muted my-4 [&_[data-line]]:px-4"
        {...props}
      />
    ),
  }
}
