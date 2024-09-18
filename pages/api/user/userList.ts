// pages/api/users/unverified.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import instance from '../../../data/list'; // Update path as necessary
import { List } from 'postcss/lib/list';

interface User {
  email: string;
  password: string;
  verified: boolean;
  role: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Filter out verified users
    const users: User[] =  await instance.unverfiedUser() 
    res.status(200).json({users : users});
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
