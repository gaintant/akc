// pages/api/emailsNotInUsers.js

import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../src/server/db'; 
import { pre_registration_data, Users } from '../../../src/server/db/schema'; 
import { eq, isNull } from 'drizzle-orm';

export default async function handler(req : NextApiRequest, res : NextApiResponse) {
  try {
    if (req.method === 'GET') {
      const emailsNotInUsers = await db
        .select({
          schoolId: pre_registration_data.schoolId,
          schoolName: pre_registration_data.schoolName,
          schoolAddress: pre_registration_data.schoolAddress,
          schoolCity: pre_registration_data.schoolCity,
          schoolState: pre_registration_data.schoolState,
          schoolPincode: pre_registration_data.schoolPincode,
          schoolWebsite: pre_registration_data.schoolWebsite,
          firstName: pre_registration_data.firstName,
          surname: pre_registration_data.surname,
          coordinatorMobileNo: pre_registration_data.coordinatorMobileNo,
          contactEmail: pre_registration_data.contactEmail
        })
        .from(pre_registration_data)
        .leftJoin(
          Users,
          eq(pre_registration_data.contactEmail, Users.email)
        )
        .where(isNull(Users.email));

      // Respond with the result
      return res.status(200).json(emailsNotInUsers);
    }

    // Handle any other HTTP method
    return res.setHeader('Allow', ['GET']).status(405).end(`Method ${req.method} Not Allowed`);
  } catch (error) {
    console.error('Error fetching emails:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
