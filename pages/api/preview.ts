import { NextApiRequest, NextApiResponse } from 'next';

export default async function preview(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { secret } = req.query;

  // Check the secret and next parameters
  // This secret should only be known by this API route
  if (
    !process.env.WORDPRESS_PREVIEW_SECRET ||
    secret !== process.env.WORDPRESS_PREVIEW_SECRET
  ) {
    throw new Error('API throw error test');
  }

  res.setPreviewData({});

  res.writeHead(307, { Location: `/portfolio` });
  return res.end();
}
