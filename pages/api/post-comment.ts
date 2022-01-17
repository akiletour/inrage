import { NextApiRequest, NextApiResponse } from 'next';

import { checkSpam, Client } from '@lib/akismet';
import { submitNewComment } from '@lib/blog';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const isKeyValid = await Client.verifyKey();

    if (!isKeyValid) {
      throw Error('Not a valid key');
    }
  } catch (err: any) {
    res.status(500).end();
  }

  const { email, name, content, postId } = req.body;

  try {
    const isCommentSpam = await checkSpam(req, content, email, name);

    if (isCommentSpam !== 200) {
      throw Error('Not a valid comment');
    }
  } catch (err: any) {
    res.status(400).end();
  }

  try {
    const submitComment = await submitNewComment(postId, email, content, name);
    if (!submitComment) {
      throw Error('Error submitting comment');
    }
  } catch (err: any) {
    res.status(500).end();
  }

  res.status(200).json({ state: 'success' });
}
