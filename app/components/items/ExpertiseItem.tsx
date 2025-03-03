import Image, { StaticImageData } from 'next/image'

import ButtonLink from '@component/ButtonLink'

type Props = {
  image: string | StaticImageData
  title: string
  excerpt: string
  link: string
}

export default function ExpertiseItem({ image, title, excerpt, link }: Props) {
  return (
    <div className="grid gap-x-3 grid-cols-[80px_auto] md:grid-cols-[120px_auto] items-center">
      <div className="relative mr-2 w-10 h-10 md:w-15 md:h-15 row-span-2">
        <Image src={image} alt={title} fill sizes="100vw" />
      </div>
      <h3 className="text-white font-medium text-xl md:text-2xl">{title}</h3>
      <div className="col-auto">
        <p className="mb-1 text-sm sm:text-md md:text-base">{excerpt}</p>
        <ButtonLink href={link}>En savoir plus</ButtonLink>
      </div>
    </div>
  )
}
