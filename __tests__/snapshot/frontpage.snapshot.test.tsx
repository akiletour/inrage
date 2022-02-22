import { render } from '@testing-library/react';

import Frontpage from '../../pages/index';

it('renders frontpage without changing', () => {
  const lastProjects = {
    edges: [
      {
        node: {
          id: 1,
          title: 'string',
          slug: 'string',
          status: 'private',
          featuredImage: {
            node: {
              sourceUrl: 'string',
            },
          },
          supports: {
            edges: [
              {
                node: {
                  name: 'string',
                  slug: 'string',
                },
              },
            ],
          },
        },
      },
    ],
  };

  const articles = {
    edges: [
      {
        node: {
          title: 'Hello',
          slug: 'hello',
          excerpt: 'publish',
          date: '2020-01-01 00:00:00',
          featuredImage: { node: { sourceUrl: 'http://' } },
        },
      },
    ],
  };
  const { container } = render(
    <Frontpage lastProjects={lastProjects} articles={articles} />
  );
  expect(container).toMatchSnapshot();
});
