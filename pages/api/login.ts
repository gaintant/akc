import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { db } from '../../src/server/db'; // Import your database connection
import { Users } from '../../src/server/db/schema'; // Import your Users table schema
import {loginDetails} from "../../types/loginDetails"
// JWT Secret from environment variables
const JWT_SECRET = process.env.JWT_SECRET!  || "your sercet"; // Use a strong secret and keep it in .env

function successResponse(res: NextApiResponse, data: string) {

  res.setHeader('Set-Cookie', `token=${data}; HttpOnly; Path=/; Max-Age=3600; Secure; SameSite=Strict`);
            
  return res.status(200).json({message : "login success"});
}

function errorResponse(res: NextApiResponse, error: string, statusCode = 400) {
  
            
  return res.status(statusCode).json({message :error});
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body as loginDetails;

    try {
      const user = await db.query.Users.findFirst({
        where: (users, { eq }) => eq(users.email, email),
      });
      if (user === undefined) {
          return errorResponse(res, 'Invalid email or password', 401);
        }
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid || user.verified !== "verified") {
        return errorResponse(res, 'Invalid email or password', 401);
      }

      const token = jwt.sign(
        {
          email: user.email,
          role: user.role,
        },
        JWT_SECRET, 
        { expiresIn: '1h' }
      );

      // Send the token with a fixed response structure
      return successResponse(res, token);
    } catch (error) {
      console.error('Error during login:', error);
      return errorResponse(res, 'Internal server error', 500);
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return errorResponse(res, `Method ${req.method} not allowed`, 405);
  }
}
