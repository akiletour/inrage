import { NextRequest, NextResponse } from 'next/server';
import { isAkismetSpam } from '@/utils/akismet';
import { Mailjet } from '@/utils/mailjet';

export const dynamic = 'force-dynamic';

export const POST = async (request: NextRequest) => {
  console.log(request.headers.get('user-agent'));
  try {
    const { email, name, content, phone } = await request.json();

    if (!email || !name || !content || !phone) {
      throw new Error('Missing parameters');
    }

    // Check if the request is a spam
    const isSpam = await isAkismetSpam(request, name, email, content);

    if (isSpam) {
      return new NextResponse(
        JSON.stringify({ message: 'Message marked as spam' }),
        {
          status: 422,
        }
      );
    }

    const mailjetApi = new Mailjet(
      name,
      email,
      phone,
      content,
      request.headers.get('referer') ?? ''
    );

    mailjetApi.send();

    return NextResponse.json({ success: true, message: 'Message sent' });
  } catch (error) {
    return new NextResponse(JSON.stringify({ message: 'Bad request' }), {
      status: 400,
    });
  }
};
