import Image from 'next/image';
import sanitize from 'sanitize-html';

import PostBody from '@component/blog/PostBody';
import Layout from '@component/Layout';
import allProjectsSlugs from '@graphql-query/all-projects-slug.graphql';
import SingleProjectData from '@graphql-query/single-project.graphql';
import { ProjectsSlugs, SingleProject } from '@type/graphql/portfolio';
import { fetcher } from '@util/index';

type Props = {
  params: {
    project: string;
  };
};

export const revalidate = 60;

const getAllProjectsSlugs = (): Promise<ProjectsSlugs> =>
  fetcher(allProjectsSlugs);

export async function generateStaticParams() {
  const { data } = await getAllProjectsSlugs();

  return data.projets.edges.map(({ node }) => ({
    slug: node.slug,
  }));
}

const getSingleProject = (slug: string): Promise<SingleProject> =>
  fetcher(SingleProjectData, { id: slug });

export default async function Page({ params }: Props) {
  const {
    data: { projet: data },
  } = await getSingleProject(params.project);
  return (
    <Layout>
      <div className="flex items-center mb-10 flex-col md:flex-row">
        <div className="md:w-2/5 text-center md:text-right">
          <div className="text-4xl text-white font-bold">{data.title}</div>

          <a
            className="block text-3xl"
            href={data.detail.websiteLink}
            target="_blank"
            rel="noreferrer nofollow"
          >
            {data.detail.websiteLink.replace(/(^\w+:|^)\/\//, '')}
          </a>

          <div className="my-4 text-lg">
            {sanitize(data.detail.excerpt, {
              allowedTags: [],
            })}
          </div>

          <div className="my-4">
            <div className="text-white text-xl font-light uppercase tracking-widest">
              Date
            </div>
            <div className="text-white font-bold text-3xl">
              {data.detail.year}
            </div>
          </div>

          <div className="my-4">
            <div className="text-white text-xl font-light uppercase tracking-widest mb-2">
              Technologies
            </div>
            <div className="text-white font-medium text-sm flex space-x-2 justify-center flex-wrap md:justify-end">
              {data.technologies.edges.map((techno) => (
                <div
                  key={techno.node.name}
                  className="flex items-center flex-col w-[80px] text-center"
                >
                  {techno.node.acfDetail?.image?.sourceUrl && (
                    <div className="w-6 h-6 relative">
                      {/* @ts-ignore */}
                      <Image
                        src={techno.node.acfDetail.image.sourceUrl}
                        alt={techno.node.name}
                        fill
                        sizes="100vw"
                      />
                    </div>
                  )}

                  <div className="mt-1">{techno.node.name}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="text-white text-xl font-light uppercase tracking-widest">
              Missions
            </div>
            <div>
              {data.detail.missions.split('<br />').map((mission) => (
                <div key={mission}>{mission}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="md:w-3/5 mt-4 md:mt-0 md:pl-4">
          <Image
            src={data.featuredImage.node.sourceUrl}
            width={640}
            height={1136}
            alt={data.title}
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        </div>
      </div>

      {data.content && (
        <div className="my-8">
          <PostBody content={data?.content || ''} />
        </div>
      )}
    </Layout>
  );
}
