import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../server/db"; // Your Drizzle ORM DB connection
import { students } from "../../server/db/schema"; // Your students table schema
import { z } from "zod";
import { studentSchema } from "~/lib/zod-schema";

// Helper function to handle the response
const handleResponse = (res: NextApiResponse, status: number, data: any) => {
  res.status(status).json(data);
};

// API handler for student operations
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET":
      return getStudents(req, res);
    case "POST":
      return createStudent(req, res);
    // case "PUT":
    //   return updateStudent(req, res);
    // case "DELETE":
    //   return deleteStudent(req, res);
    default:
      return handleResponse(res, 405, { message: "Method Not Allowed" });
  }
};

// Get all students
const getStudents = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const allStudents = await db.select().from(students);
    handleResponse(res, 200, allStudents);
  } catch (error) {
    console.error("Error fetching students:", error);
    handleResponse(res, 500, { message: "Internal Server Error" });
  }
};

// Create a new student
const createStudent = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const parsedData = studentSchema.parse(req.body);
    await db.insert(students).values(parsedData);
    handleResponse(res, 201, { message: "Student created successfully" });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return handleResponse(res, 400, { message: error.errors });
    }
    console.error("Error creating student:", error);
    handleResponse(res, 500, { message: "Internal Server Error" });
  }
};

// Update a student
// const updateStudent = async (req: NextApiRequest, res: NextApiResponse) => {
//   try {
//     const parsedData = studentSchema.parse(req.body);
//     if (!parsedData.studentId) {
//       return handleResponse(res, 400, { message: "ID is required for update" });
//     }
//     await db
//       .update(students)
//       .set(parsedData)
//       .where(students.studentId.eq(parsedData.studentId as number));
//     handleResponse(res, 200, { message: "Student updated successfully" });
//   } catch (error) {
//     if (error instanceof z.ZodError) {
//       return handleResponse(res, 400, { message: error.errors });
//     }
//     console.error("Error updating student:", error);
//     handleResponse(res, 500, { message: "Internal Server Error" });
//   }
// };

// // Delete a student
// const deleteStudent = async (req: NextApiRequest, res: NextApiResponse) => {
//   try {
//     const { id } = req.query;
//     if (typeof id !== "string") {
//       return handleResponse(res, 400, { message: "Invalid ID" });
//     }
//     await db.delete(students).where(students.studentId.eq(parseInt(id, 10)));
//     handleResponse(res, 200, { message: "Student deleted successfully" });
//   } catch (error) {
//     console.error("Error deleting student:", error);
//     handleResponse(res, 500, { message: "Internal Server Error" });
//   }
// };

export default handler;
