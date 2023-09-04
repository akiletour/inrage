import Link from '@component/NoScrollLink';

type Props = {
  title: string;
  subject: string;
  excerpt: string;
  position?: 'left' | 'right';
  cta: {
    text: string;
    link: string;
  };
};

export default function TmaItem({
  title,
  subject,
  excerpt,
  cta,
  position = 'left',
}: Props) {
  return (
    <div
      className={`${
        position === 'left' ? 'md:pl-4 md:text-left' : 'md:pr-4 md:text-right'
      } flex-1`}
    >
      <h2 className="text-2xl font-light text-white">
        {title}
        <span className="block text-4xl font-black">{subject}</span>
      </h2>
      <p className="my-2">{excerpt}</p>
      <Link href={cta.link}>
        <span className="button">{cta.text}</span>
      </Link>
    </div>
  );
}
