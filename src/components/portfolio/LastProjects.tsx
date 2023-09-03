import ProjectItem from "@component/items/ProjectItem";
import { allPortfolios } from "contentlayer/generated";
import { compareDesc } from "date-fns";

export default async function LastProjects() {
  const data = allPortfolios
    .filter((post) => post.date)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    })
    .slice(0, 4);
  return (
    <div className="mt-3 sm:mt-0 grid gap-2 sm:gap-0 grid-cols-2 md:grid-cols-4">
      {data.map((node) => (
        <ProjectItem post={node} key={node.slug} />
      ))}
    </div>
  );
}
