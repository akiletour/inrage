import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { email, name, content, phone } = await req.json();

    if (!email || !name || !content || !phone) {
      throw new Error('Missing parameters');
    }

    if (!process.env.SLACK_WEBHOOK_URL) {
      return new NextResponse(
        JSON.stringify({ message: 'Slack webhook URL is not defined' }),
        {
          status: 500,
        }
      );
    }

    fetch(process.env.SLACK_WEBHOOK_URL as string, {
      method: 'POST',
      body: JSON.stringify({
        blocks: [
          {
            type: 'header',
            text: {
              type: 'plain_text',
              text: 'Demande de contact',
            },
          },
          {
            type: 'section',
            text: {
              type: 'plain_text',
              text: content,
              emoji: true,
            },
          },
          {
            type: 'divider',
          },
          {
            type: 'context',
            elements: [
              {
                type: 'mrkdwn',
                text: `*Identité* : ${name}`,
              },
              {
                type: 'mrkdwn',
                text: `*E-mail* : ${email}`,
              },
              {
                type: 'mrkdwn',
                text: `*Téléphone* : ${phone}`,
              },
            ],
          },
          {
            type: 'context',
            elements: [
              {
                type: 'mrkdwn',
                text: `*Depuis* : ${req.headers.get('referer')}`,
              },
            ],
          },
        ],
      }),
    });

    return NextResponse.json({ success: true, message: 'Message sent' });
  } catch (error) {
    return new NextResponse(JSON.stringify({ message: 'Bad request' }), {
      status: 400,
    });
  }
}
