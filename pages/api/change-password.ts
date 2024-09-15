// pages/api/change-password.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { jwtVerify } from 'jose'; // Edge-compatible JWT library
import bcrypt from 'bcryptjs';
import instance from '../../data/list'; // Adjust path as necessary

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { oldPassword, newPassword } = req.body;

    // Retrieve token from cookies
    const token = req.cookies.token || '';

    if (!token || typeof token !== 'string') {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    try {
      // Verify JWT token
      const { payload } = await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET as string));
      // Find the user in the list
      const user = instance.findUser( payload.email);

      if (!user) {
        return res.status(401).json({ error: 'User not found' });
      }

      // Validate old password
      const isOldPasswordValid = await bcrypt.compare(oldPassword, user.password);

      if (!isOldPasswordValid) {
        return res.status(401).json({ error: 'Old password is incorrect' });
      }

      // Hash new password and update user
      const hashedNewPassword = await bcrypt.hash(newPassword, 10);
      user.password = hashedNewPassword;

      // Save the updated list (implement persistence as needed)
      // Example: await saveListToDatabase(list); // if using a database

      return res.status(200).json({ message: 'Password changed successfully' });
    } catch (error) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
