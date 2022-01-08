import NavPrimary from '@component/layouts/NavPrimary';
import Diagonal from '@component/layouts/Diagonal';
import { pageExcerptType, pageTitleType } from '@type/header';
import Link from '@component/NoScrollLink';
import { RouteLink } from '@lib/route';

type Props = {
  pageTitle: pageTitleType;
  excerpt: pageExcerptType;
}

export default function HeaderTma({ pageTitle, excerpt }: Props) {
  return (
    <div className="relative h-auto w-full bg-gray-darker">
      <NavPrimary />

      <div className="container text-center -mb-10">
        <h1 className="text-5xl font-thin text-white mt-6">
          {Array.isArray(pageTitle) ? pageTitle.map((ttl) => <span className="block" key={ttl}>{ttl}</span>) : pageTitle}
        </h1>

        <div className="max-w-xl w-full mx-auto text-white font-light mb-4 text-xl">
          {Array.isArray(excerpt) ? excerpt.map((exc) => <span className="block mt-4" key={exc}>{exc}</span>) : excerpt}
        </div>

        <Link href={RouteLink.contact}>
          <a className="button">Demandez un devis</a>
        </Link>
      </div>

      <Diagonal preserveRatio bgCorner="fill-orange" bgClass="fill-gray-dark" className="h-auto w-full" />
    </div>
  );
}
