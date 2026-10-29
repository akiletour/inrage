import Image from 'next/image'

interface FigureProps {
  src: string
  alt: string
  width: number
  height: number
  caption?: string
}

export default function Figure({
  src,
  alt,
  width,
  height,
  caption,
}: FigureProps) {
  return (
    <figure className="not-prose article-wide my-14">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(min-width: 1024px) 960px, 100vw"
        className="h-auto w-full select-none"
      />
      {caption && (
        <figcaption className="mt-5 text-sm text-gray">{caption}</figcaption>
      )}
    </figure>
  )
}
