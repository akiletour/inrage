import { AkismetClient } from 'akismet-api';
import { NextApiRequest } from 'next';
import requestIp from 'request-ip';

export const Client = new AkismetClient({
  key: process.env.AKISMET_API_KEY as string,
  blog: 'https://www.inrage.fr',
});

export const checkSpam = async (
  req: NextApiRequest,
  content: string,
  email: string,
  name: string
): Promise<404 | 500 | 200> => {
  try {
    const isSpam = await Client.checkSpam({
      ip: requestIp.getClientIp(req) || '127.0.0.1',
      useragent: req.headers['user-agent'] || '',
      content,
      email,
      name,
    });

    if (isSpam) {
      return 404;
    }
  } catch (err) {
    return 500;
  }

  return 200;
};
