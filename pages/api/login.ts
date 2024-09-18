import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

      const response = await axios(`http://localhost:3000/api/user/${email}`);
      const user = response.data;

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    if ( user.verified === false) {
      return res.status(401).json({ message: 'please wait for the admins to verify the email adress' });
    }

    // Validate password    
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    const secret = process.env.JWT_SECRET;
    if (!secret) {
      throw new Error("JWT_SECRET is not defined. Please check your environment variables.");
    }
    // Create JWT token
    const token = jwt.sign(
      { userId: user.id, email: user.email, role: user.role },
      secret,
      { expiresIn: '1h' }
    );

    // Set token in cookies (optional) or send it in the response
    res.setHeader('Set-Cookie', `token=${token}; HttpOnly; Path=/;`);

    res.status(200).json({ token });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
