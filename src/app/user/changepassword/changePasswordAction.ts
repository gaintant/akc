// import { cookies } from 'next/headers';
// import jwt from 'jsonwebtoken';
// import bcrypt from 'bcryptjs';
// import { db } from '../../../server/db'; 
// import { Users } from '../../../server/db/schema'; 
// import { jwtVerify } from 'jose';
// import { tokenDetails } from 'types/loginDetails';
// import { eq } from 'drizzle-orm';

// const handleChangePassword = async (newPassword : string ): Promise<void> => {
//     "use server";
//     const cookieStore = cookies(); 
//     const token = cookieStore.get('token')?.value as string;
//     try {
//         const { payload } = await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET as string)) ;
//         const email = payload.email; // Extract email from decoded token
  
//       // Step 2: Find the user by email in the database
//       const user = await db.query.Users.findFirst({
//         where: (users, { eq }) => eq(users.email, email),
//       });
//       if (!user) {
//         return res.status(404).json({ error: 'User not found' });
//       }
  
//       // Step 3: Hash the new password
//       const hashedPassword = await bcrypt.hash(newPassword, 10); // Salt rounds = 10
  
//       // Step 4: Update the password in the database
//       await db
//         .update(Users)
//         .set({ password: hashedPassword })
//         .where({ email });
  
//       return res.status(200).json({ message: 'Password updated successfully' });
//     } catch (error) {
//       console.error('Error decoding JWT or updating password:', error);
//       return res.status(500).json({ error: 'Failed to update password' });
//     }
  
//   };

