// File: /pages/api/login.ts (or /app/api/login/route.ts if using App Router)
import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { db } from '../../src/server/db'; // Import your database connection
import { Users } from '../../src/server/db/schema'; // Import your Users table schema
import {loginDetails} from "../../types/loginDetails"
// JWT Secret from environment variables
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'; // Use a strong secret and keep it in .env

// Common response utilities
type ApiResponse<T> = {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
};

function successResponse<T>(res: NextApiResponse, data: T, message: string = "Request successful") {
  const response: ApiResponse<T> = {
    success: true,
    message,
    data,
  };
  return res.status(200).json(response);
}

function errorResponse(res: NextApiResponse, error: string, statusCode: number = 400) {
  const response: ApiResponse<null> = {
    success: false,
    message: "Request failed",
    error,
  };
  return res.status(statusCode).json(response);
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

      if (!isPasswordValid) {
        return errorResponse(res, 'Invalid email or password', 401);
      }

      const token = jwt.sign(
        {
          id: user.id,
          email: user.email,
          role: user.role,
        },
        JWT_SECRET, 
        { expiresIn: '1h' }
      );

      // Send the token with a fixed response structure
      return successResponse(res, { token }, 'Login successful');
    } catch (error) {
      console.error('Error during login:', error);
      return errorResponse(res, 'Internal server error', 500);
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return errorResponse(res, `Method ${req.method} not allowed`, 405);
  }
}
