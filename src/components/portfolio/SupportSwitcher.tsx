import Image from "next/image";

import Link from "@component/NoScrollLink";
import { RouteLink } from "@lib/route";

import { ProjectSupports } from "content/config/portfolio";

export default async function SupportSwitcher({
  pathname,
}: {
  pathname: string;
}) {
  const data = Object.keys(ProjectSupports).map((key) => ({
    id: key,
    ...ProjectSupports[key],
  }));

  return (
    <div className="my-6 grid grid-cols-4 gap-4 text-center">
      <Link href={RouteLink.portfolio}>
        <span
          className={
            pathname === RouteLink.portfolio ? "text-orange" : "text-white"
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto h-6 w-6 md:h-10 md:w-10"
            viewBox="0 0 320 512"
          >
            <path
              fill="#fff"
              d="M96 32H32C14.33 32 0 46.33 0 64v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32zm0 160H32c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zm0 160H32c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zM288 32h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32zm0 160h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zm0 160h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32z"
            />
          </svg>
          <span className="mt-1 block text-sm md:text-lg">
            Tous les projets
          </span>
        </span>
      </Link>
      {data.map((support) => (
        <Link key={support.id} href={`${RouteLink.portfolio}/${support.id}`}>
          <div
            className={
              pathname === `${RouteLink.portfolio}/${support.id}`
                ? "text-orange"
                : "text-white"
            }
          >
            <div className="relative mx-auto h-6 w-6 md:h-10 md:w-10">
              <Image
                src={support.image}
                alt={support.name}
                fill
                sizes="100vw"
              />
            </div>
            <span className="mt-1 block text-sm md:text-lg">
              {support.name}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
