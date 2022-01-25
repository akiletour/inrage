import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, name, content, phone } = req.body;

  return fetch(process.env.SLACK_WEBHOOK_URL as string, {
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
              text: `*Depuis* : ${req.headers.referer}`,
            },
          ],
        },
      ],
    }),
  }).then(() => {
    res.status(200).json({
      message: 'Success',
    });
  });
}
