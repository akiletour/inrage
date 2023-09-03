import ProjectItem from "@component/items/ProjectItem";
import { Portfolio } from "contentlayer/generated";

type Props = {
  projects: Portfolio[];
};

export default async function PortfolioGrid({ projects }: Props) {
  return (
    <div className="grid grid-cols-2 gap-4 md:gap-0 md:grid-cols-3">
      {projects.map((post) => (
        <ProjectItem key={post.slug} xl post={post} />
      ))}
    </div>
  );
}
