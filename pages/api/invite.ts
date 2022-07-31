// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiResponse } from 'next';

export default function handler(_: unknown, res: NextApiResponse) {
  res.redirect(
    'https://discord.com/oauth2/authorize?client_id=928357222617055372&scope=bot+applications.commands&permissions=8'
  );
}
