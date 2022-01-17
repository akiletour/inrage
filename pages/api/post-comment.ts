import { Client } from '@lib/akismet';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const isKeyValid = await Client.verifyKey();

    if (!isKeyValid) {
      throw Error('Not a valid key');
    }
  } catch (err: any) {
    res.status(500).end();
  }

  res.status(200).json({ state: 'success' });
}
