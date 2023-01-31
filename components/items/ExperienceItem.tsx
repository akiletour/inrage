import Image, { StaticImageData } from 'next/image';

type Props = {
  logo: string | StaticImageData;
  title: string;
  company: string;
  year: string;
  excerpt: string;
};

export default function ExperienceItem({
  logo,
  title,
  company,
  year,
  excerpt,
}: Props) {
  return (
    <div className="grid md:grid-cols-[250px_1fr] items-start justify-start">
      <div className="flex justify-center row-span-4">
        <Image
          src={logo}
          alt={company}
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
      </div>
      <div className="text-white text-2xl font-medium">{title}</div>
      <div className="uppercase text-white">{company}</div>
      <div>{year}</div>
      <p className="mt-2 max-w-2xl leading-5">{excerpt}</p>
    </div>
  );
}
