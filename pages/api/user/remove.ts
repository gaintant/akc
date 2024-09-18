// pages/api/list/remove.js
import { NextApiRequest, NextApiResponse } from 'next';
import instance from '../../../data/list';

export default async function handler(req : NextApiRequest, res : NextApiResponse) {
  const { email } = req.body;

  await instance.removeFromList(email);
  res.status(200).json({ message: 'Item removed' });
}
