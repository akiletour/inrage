import { AkismetClient } from 'akismet-api';
import { NextRequest } from 'next/server';

const Client = new AkismetClient({
  key: process.env.AKISMET_API_KEY as string,
  blog: 'https://www.inrage.fr',
});

export const isAkismetSpam = async (
  request: NextRequest,
  author: string,
  email: string,
  content: string
): Promise<boolean> => {
  try {
    const userAgent = request.headers.get('user-agent') ?? '';
    const userIp = request.ip || '127.0.0.1';

    const isSpam = await Client.checkSpam({
      user_ip: userIp,
      user_agent: userAgent,
      comment_author: author,
      comment_author_email: email,
      comment_content: content,
    });

    if (isSpam) {
      return true;
    }

    return false;
  } catch (error) {
    return true;
  }
};
