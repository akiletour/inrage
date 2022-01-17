import { NextApiRequest, NextApiResponse } from 'next';
import requestIp from 'request-ip';

import { Client } from '@lib/akismet';

type Data = {
  msg: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const ip = requestIp.getClientIp(req) || '127.0.0.1';

  try {
    const isValid = await Client.verifyKey();

    if (!isValid) {
      res.status(500);
      return res;
    }
  } catch (err) {
    res.status(500);
    return res;
  }

  const { email, name, content } = req.body;

  const comment = {
    ip,
    useragent: req.headers['user-agent'] || '',
    content,
    email,
    name,
  };

  try {
    const isSpam = await Client.checkSpam(comment);

    if (isSpam) {
      res.status(404).json({ msg: 'spam' });
      return res;
    }
  } catch (err) {
    res.status(500);
    return res;
  }
  const mailjetToken = Buffer.from(
    `${process.env.MJ_APIKEY_PUBLIC as string}:${
      process.env.MJ_APIKEY_PRIVATE as string
    }`
  ).toString('base64');

  const postBody = {
    Messages: [
      {
        From: {
          Email: 'pascal@inrage.fr',
          Name: 'Pascal GAULT',
        },
        To: [
          {
            Email: 'pascal@inrage.fr',
            Name: 'Pascal GAULT',
          },
        ],
        Subject: '[inRage] Formulaire de contact',
        HTMLPart: content,
      },
    ],
  };

  await fetch('https://api.mailjet.com/v3.1/send', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${mailjetToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postBody),
  })
    .then(() => {
      res.status(200).json({ msg: 'Ok' });
    })
    .catch(() => {
      res.status(500);
      return res;
    });

  return res;
}
