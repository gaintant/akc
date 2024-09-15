// pages/api/list/remove.js
import instance from '../../../data/list';

export default async function handler(req, res) {
  const { email } = req.body;

  await instance.removeFromList(email);
  res.status(200).json({ message: 'Item removed' });
}
