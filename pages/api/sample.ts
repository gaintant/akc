// File: /pages/api/users.ts (or /app/api/users/route.ts)
import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../src/server/db'; // Import your database connection
import { Users, NewUser } from '../../src/server/db/schema'; // Import your Users table schema
import bcrypt from 'bcryptjs';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const hashedPassword = await bcrypt.hash("password123", 10); // Hash the password

    const newUser: NewUser = {
      email: "test1@example.com",
      role: "admin",
      verified: "pending", // Enum-like value
      password: hashedPassword,
    };
  
    try {
      // Insert the user data into the Users table
      await db.insert(Users).values(newUser);
      console.log("User data inserted successfully");
    } catch (error) {
      console.error("Error inserting user data:", error);
    }
}
