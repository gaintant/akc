// pages/api/readData.js

import { jwtVerify } from "jose";
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import { db } from "../../../server/db"; // Import your database connection
import { users } from "~/server/db/schema";
import { eq } from 'drizzle-orm'; 

export default async function handler(req: NextApiRequest,
    res: NextApiResponse,) {
    if (req.method === 'POST') {
      const { newPassword } = req.body as {newPassword : string}; 
  
      // Reading cookies from the request
      const token = req.cookies['token'] as string ;
  
      const { payload } = await jwtVerify(
        token,
        new TextEncoder().encode(process.env.JWT_SECRET as string),
      );
      const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update the user's password in the database
    const result = await db
      .update(users)
      .set({ password: hashedPassword })
      .where(eq(users.email, payload.email as string));
      return res.status(200) 
    } else {
      res.status(405).json({ message: 'Only POST requests are allowed' });
    }
  }
  