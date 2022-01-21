import { NextApiRequest, NextApiResponse } from 'next';

import { checkSpam, Client } from '@lib/akismet';

type Data = {
  msg: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
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

  const { email, name, content, phone } = req.body;

  try {
    const isCommentSpam = await checkSpam(req, content, email, name);

    if (isCommentSpam !== 200) {
      throw Error('Not a valid message');
    }
  } catch (err: any) {
    res.status(400).end();
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
        Subject: `[inRage] Demande de contact ${name}`,
        HTMLPart: `
          <p>
            <strong>Provenant de :</strong> ${req.headers.referer}<br />
            <strong>Nom :</strong> ${name}<br />
            <strong>Email :</strong> ${email}<br />
            <strong>Téléphone :</strong> ${phone}<br />
            <strong>Message :</strong> ${content}
          </p>`,
        ReplyTo: {
          Email: email,
          Name: name,
        },
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
  }).catch(() => {
    res.status(500).end();
  });

  res.status(200).json({ msg: 'Ok' });
}
