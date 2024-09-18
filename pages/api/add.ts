// pages/api/list/add.js
import { NextApiRequest, NextApiResponse } from 'next';
import instance from '../../data/list';
import bcrypt from 'bcryptjs';

const saltRounds = 12;
export default async function handler(req : NextApiRequest, res : NextApiResponse) {
  const { item } = req.body;
  const hashedPassword = await bcrypt.hash("password", saltRounds);
  const hasheditem = {...item, password : hashedPassword}
  if (!hasheditem) {
    return res.status(400).json({ error: 'Item is required' });
  }
   
  const str = instance.addToList(hasheditem);
  res.status(200).json({ message: 'str' });
}
