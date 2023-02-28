import { cache } from 'react';

export const getApi = process.env.WORDPRESS_API_URL as string;

type HeaderType = {
  'Content-Type': string;
  Authorization?: string;
};

export const REVALIDATE = {
  ONE_DAY: 60 * 60 * 24,
  ONE_HOUR: 60 * 60,
  ONE_MINUTE: 60,
};

export const fetcher = cache(async (query: string) => {
  const headers: HeaderType = { 'Content-Type': 'application/json' };

  const res = await fetch(getApi, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query,
    }),
  });

  return res.json();
});
