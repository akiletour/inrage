import ProjectItem from "@component/items/ProjectItem";
import { Portfolio } from "contentlayer/generated";

type Props = {
  projects: Portfolio[];
};

export default async function PortfolioGrid({ projects }: Props) {
  const sortedProjects = projects.sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-0">
      {sortedProjects.map((post) => (
        <ProjectItem key={post.slug} xl post={post} />
      ))}
    </div>
  );
}
