import { NextApiRequest, NextApiResponse } from 'next';

import { fetchBlogComments } from '@lib/blog';

interface ExtendedNextApiRequest extends NextApiRequest {
  query: {
    id: string;
  };
}

export default async function handler(
  req: ExtendedNextApiRequest,
  res: NextApiResponse
) {
  const data = await fetchBlogComments(Number(req.query.id));
  res.status(200).json(data);
}
