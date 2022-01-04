import Link from '@component/NoScrollLink';

type Props = {
  title: string;
  subject: string;
  excerpt: string;
  position?: 'left' | 'right';
  cta: {
    text: string;
    link: string;
  }
}

export default function TmaItem({
  title, subject, excerpt, cta, position = 'left',
}: Props) {
  return (
    <div className={`${position === 'left' ? 'text-left pl-4' : 'text-right pr-4'} flex-1`}>
      <h2 className="font-light text-2xl text-white">
        {title}
        <span className="text-4xl block font-black">{subject}</span>
      </h2>
      <p className="my-2">{excerpt}</p>
      <Link href={cta.link}>
        <a className="button">{cta.text}</a>
      </Link>
    </div>
  );
}
