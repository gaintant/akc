import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../server/db"; // Your Drizzle ORM DB connection
import { students } from "../../server/db/schema"; // Your students table schema
import { z } from "zod";
import { studentSchema } from "~/lib/zod-schema";
import { eq } from "drizzle-orm";

// API handler for student operations
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET":
      return getStudents(req, res);
    case "POST":
      return createStudent(req, res);
    case "PUT":
      return updateStudent(req, res);
    case "DELETE":
      return deleteStudent(req, res);
    default:
      return res.status(405).json({ message: "Method Not Allowed" });
  }
};

// Get all students
const getStudents = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const allStudents = await db.select().from(students);
    res.status(200).json(allStudents);
  } catch (error) {
    console.error("Error fetching students:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Create a new student
const createStudent = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const parsedData = studentSchema.parse(req.body);
    await db.insert(students).values(parsedData);
    res.status(201).json({ message: "Student created successfully" });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ message: error.errors });
    }
    console.error("Error creating student:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Update a student
const updateStudent = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const parsedData = studentSchema.parse(req.body);
    if (!parsedData.studentId) {
      return res.status(400).json({ message: "ID is required for update" });
    }
    await db
      .update(students)
      .set(parsedData)
      .where(eq(students.studentId, parsedData.studentId));
    res.status(200).json({ message: "Student updated successfully" });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ message: error.errors });
    }
    console.error("Error updating student:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Delete a student
const deleteStudent = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.query;
    console.log("Delete id", id);
    if (typeof id !== "string") {
      return res.status(400).json({ message: "Invalid ID" });
    }
    await db.delete(students).where(eq(students.studentId, parseInt(id, 10)));
    res.status(200).json({ message: "Student deleted successfully" });
  } catch (error) {
    console.error("Error deleting student:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default handler;
