import * as React from "react"
import Image, { ImageProps } from "next/image"
import { Callout } from "@component/callout"
import { cn } from "@lib/utils"
import { useMDXComponent } from "next-contentlayer/hooks"

export const components = {
  h1: ({ className, ...props }: React.HTMLProps<HTMLHeadingElement>) => (
    <h1
      className={cn(
        "mt-2 scroll-m-20 text-4xl font-bold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.HTMLProps<HTMLHeadingElement>) => (
    <h2
      className={cn(
        "mt-10 scroll-m-20 pb-1 text-3xl font-bold leading-snug tracking-tight text-white first:mt-0",
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.HTMLProps<HTMLHeadingElement>) => (
    <h3
      className={cn(
        "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight text-white",
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: React.HTMLProps<HTMLHeadingElement>) => (
    <h4
      className={cn(
        "mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }: React.HTMLProps<HTMLHeadingElement>) => (
    <h5
      className={cn(
        "mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }: React.HTMLProps<HTMLHeadingElement>) => (
    <h6
      className={cn(
        "mt-8 scroll-m-20 text-base font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  a: ({ className, ...props }: React.HTMLProps<HTMLAnchorElement>) => (
    <a
      className={cn(
        "font-medium text-orange underline underline-offset-4 hover:text-orange-dark",
        className
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }: React.HTMLProps<HTMLParagraphElement>) => (
    <p className={cn("[&:not(:first-child)]:mt-2", className)} {...props} />
  ),
  ul: ({ className, ...props }: React.HTMLProps<HTMLUListElement>) => (
    <ul className={cn("my-6 ml-6 list-disc", className)} {...props} />
  ),
  ol: ({ className, ...props }: React.OlHTMLAttributes<HTMLOListElement>) => (
    <ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
  ),
  li: ({ className, ...props }: React.HTMLProps<HTMLLIElement>) => (
    <li className={cn("mt-2", className)} {...props} />
  ),
  blockquote: ({
    className,
    ...props
  }: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className={cn(
        "[&>*]:text-muted-foreground mt-6 border-l-2 pl-6 italic",
        className
      )}
      {...props}
    />
  ),
  hr: ({ ...props }: React.HTMLProps<HTMLHRElement>) => (
    <hr className="my-4 md:my-8" {...props} />
  ),
  pre: ({ className, ...props }: React.HTMLProps<HTMLPreElement>) => (
    <pre
      className={cn(
        "bg-black -mx-4 mb-4 mt-6 overflow-x-auto rounded-lg border p-2",
        className
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }: React.HTMLProps<HTMLElement>) => (
    <code
      className={cn(
        "relative rounded bg-gray-darker px-[0.3rem] py-[0.2rem] font-mono text-sm text-white",
        className
      )}
      {...props}
    />
  ),
  Image: ({ className, alt, ...props }: ImageProps) => (
    <Image
      className={cn("mt-2 rounded-md border", className)}
      alt={alt ?? ""}
      {...props}
    />
  ),
  Callout,
}

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return (
    <div className="mdx">
      <Component components={components} />
    </div>
  )
}
