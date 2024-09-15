// pages/api/users/[email].js

import instance from '../../../data/list';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { email } = req.query; // Get the email from the query string
    // Find the user by email from the imported list
    const user = await instance.findUser(email);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Send user data
    res.status(200).json(user);
  } else {
    // Handle other HTTP methods
    res.status(405).json({ message: 'Method not allowed' });
  }
}
