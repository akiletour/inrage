import { NextApiRequest, NextApiResponse } from 'next';

import { submitNewComment } from '@lib/blog';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, name, content, postId, parent } = req.body;

  try {
    const submitComment = await submitNewComment(
      postId,
      email,
      content,
      name,
      parent
    );
    if (!submitComment) {
      throw Error('Error submitting comment');
    }
  } catch (err: any) {
    res.status(500).end();
  }

  res.status(200).json({ state: 'success' });
}
