import ProjectItem from '@/components/items/ProjectItem';
import { allPortfolios } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';

export default async function LastProjects() {
  const data = allPortfolios
    .filter((post) => post.date)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    })
    .slice(0, 4);
  return (
    <div className='mt-3 grid grid-cols-2 gap-2 sm:mt-0 sm:gap-0 md:grid-cols-4'>
      {data.map((node) => (
        <ProjectItem post={node} key={node.slug} />
      ))}
    </div>
  );
}
