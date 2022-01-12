import { NextApiRequest, NextApiResponse } from 'next';
import { fetchBlogComments } from '@lib/blog';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = await fetchBlogComments(req.query.id);
  res.status(200).json(data);
}
