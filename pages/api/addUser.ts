// File: /pages/api/users.ts (or /app/api/users/route.ts)
import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../src/server/db'; // Import your database connection
import { Users } from '../../src/server/db/schema'; // Import your Users table schema

interface RequestBody {
  email: string;
  role: string;
  verified: boolean;
  password: string;
}

export default async function handler(req: NextApiRequest & { body: RequestBody }, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, role, verified, password } = req.body;

    try {
      // Insert a new user into the Users table
      await db.insert(Users).values({
        email,
        role,
        verified, // Should be one of: 'pending', 'verified', 'rejected'
        password, // Ideally, this should be hashed before saving
      });

      return res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      console.error('Error inserting user:', error);
      return res.status(500).json({ error: 'Failed to create user' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
