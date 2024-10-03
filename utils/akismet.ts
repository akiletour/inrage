import { Author, Blog, Client, Comment, CommentType } from '@cedx/akismet';
import { NextRequest } from 'next/server';

const blog = new Blog({
  url: 'https://www.inrage.fr',
});

export const isAkismetSpam = async (
  request: NextRequest,
  authorName: string,
  email: string,
  content: string
): Promise<boolean> => {
  try {
    const userAgent = request.headers.get('user-agent') ?? 'unknown';
    console.log(userAgent);
    const userIp = request.ip ?? '127.0.0.1';

    const author = new Author({
      email,
      ipAddress: userIp,
      name: authorName,
      role: 'guest',
      userAgent: userAgent,
    });

    const comment = new Comment({
      author,
      date: new Date(),
      content,
      type: CommentType.contactForm,
    });

    const akismet = new Client(process.env.AKISMET_API_KEY as string, blog);

    const isSpam = await akismet.checkComment(comment);

    if (isSpam) {
      return true;
    }

    return false;
  } catch (error) {
    return true;
  }
};
