
import type { NextApiRequest, NextApiResponse } from 'next';
import instance from '../../../data/list'; // Update path as necessary

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email } = req.body;
    
    if (typeof email !== 'string') {
      return res.status(400).json({ error: 'Invalid ID' });
    }
    
    instance.verifyUserByEmail(email)
    res.status(200).json({ message: 'User verified successfully' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
