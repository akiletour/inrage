import { AkismetClient } from 'akismet-api';
import Mailjet from 'node-mailjet';
import { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  msg: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const blog = 'https://www.inrage.fr';
  const client = new AkismetClient({ key: process.env.AKISMET_API_KEY as string, blog });

  const forwarded = req.headers['x-forwarded-for'];
  const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;

  try {
    const isValid = await client.verifyKey();

    if (!isValid) {
      res.status(500);
      return res;
    }
  } catch (err) {
    res.status(500);
    return res;
  }

  const {
    email, name, content,
  } = req.body;

  const comment = {
    ip,
    useragent: req.headers['user-agent'] || '',
    content,
    email,
    name,
  };

  try {
    const isSpam = await client.checkSpam(comment);

    if (isSpam) {
      res.status(404).json({ msg: 'spam' });
      return res;
    }
  } catch (err) {
    res.status(500);
    return res;
  }

  const mailjet = Mailjet.connect(process.env.MJ_APIKEY_PUBLIC, process.env.MJ_APIKEY_PRIVATE);

  const request = mailjet
    .post('send', { version: 'v3.1' })
    .request({
      Messages: [{
        From: {
          Email: 'pascal@inrage.fr',
          Name: 'Pascal GAULT',
        },
        To: [{
          Email: 'pascal@inrage.fr',
          Name: 'Pascal GAULT',
        }],
        Subject: '[inRage] Formulaire de contact',
        HTMLPart: content,
      }],
    });
  request
    .then(() => {
      res.status(200).json({ msg: 'Ok' });
    })
    .catch(() => {
      res.status(500);
      return res;
    });

  return res;
}
