// In /pages/api/read-cookie.js
import cookie from 'cookie';
import { jwtVerify } from 'jose';
import { NextApiRequest, NextApiResponse } from 'next';




export default async function GET(req : NextApiRequest, res : NextApiResponse) {
  const cookies = cookie.parse(req.headers.cookie ?? '');

  if (!cookies.token) {
    return res.status(200).json({ role: 'none' });
  }

  try {

    const { payload } = await jwtVerify(cookies.token, 
        new TextEncoder().encode(process.env.JWT_SECRET));

    return res.status(200).json({ role: payload.role });
  } catch (error) {
    console.error('JWT Verification Error:', error);
    return res.status(401).json({ role: 'none' }); // Unauthorized
  }
}
