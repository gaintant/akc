import { NextApiRequest, NextApiResponse } from "next";
import formidable, { File } from "formidable";
import fs from "fs";
import { z } from "zod";
import { db } from "../../server/db"; // Your Drizzle ORM DB connection
import { students } from "../../server/db/schema"; // Your students table schema
import { parse } from "csv-parse";
import * as XLSX from "sheetjs-style";

// Zod schema for validating each student entry
const studentSchema = z.object({
  firstName: z.string().min(1).max(255),
  middleName: z.string().optional(),
  surName: z.string().optional(),
  dateOfBirth: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Invalid date format",
  }),
  gender: z.string().max(10),
  guardianName: z.string().min(1).max(255),
  guardianEmail: z.string().email().optional(),
  guardianPhoneNumber: z.string().length(10, "Phone number must be 10 digits"),
  schoolId: z.number(),
});

// Mapping of CSV/Excel column names to database column names
const columnMapping: { [key: string]: string } = {
  "First Name": "firstName",
  "Middle Name": "middleName",
  Surname: "surName",
  "Date of Birth": "dateOfBirth",
  Gender: "gender",
  "Guardian Name": "guardianName",
  "Guardian Email": "guardianEmail",
  "Guardian Phone": "guardianPhoneNumber",
};

// Helper function to rename columns
const renameColumns = (record: any, mapping: { [key: string]: string }) => {
  const renamedRecord: { [key: string]: any } = {};

  Object.keys(record).forEach((key) => {
    const dbColumn = mapping[key.trim()] || key; // Use mapping if exists, else keep original
    renamedRecord[dbColumn] = record[key];
  });

  return renamedRecord;
};

// Helper function to parse CSV/Excel
const parseFile = async (filePath: string, fileType: string) => {
  const results: any[] = [];

  if (fileType === "csv") {
    const fileContent = fs.readFileSync(filePath);
    const parser = parse(fileContent, {
      columns: true,
      skip_empty_lines: true,
    });

    for await (const record of parser) {
      const renamedRecord = renameColumns(record, columnMapping); // Apply renaming
      results.push(renamedRecord);
    }
  } else if (fileType === "xlsx") {
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0]; // Get the first sheet name

    if (!sheetName) {
      throw new Error("The uploaded Excel file does not contain any sheets");
    }
    const sheet = workbook.Sheets[sheetName] as XLSX.WorkSheet;
    const rows = XLSX.utils.sheet_to_json(sheet);

    rows.forEach((row) => {
      const renamedRecord = renameColumns(row, columnMapping); // Apply renaming
      results.push(renamedRecord);
    });
  }

  return results;
};

// Configuring formidable to parse form-data and file
export const config = {
  api: {
    bodyParser: false, // Disables the built-in body parser to handle multipart form-data
  },
};

const handleUpload = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const form = formidable();

    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error("Error parsing form:", err);
        return res.status(500).json({ message: "Error parsing form data" });
      }

      const file = Array.isArray(files.file) ? files.file[0] : files.file; // Handle file array
      if (!file) {
        return res.status(400).json({ message: "File not provided" });
      }

      const filePath = (file as File).filepath; // Handle older versions of formidable
      const fileType = file.originalFilename?.split(".").pop()?.toLowerCase(); // Get the file extension

      try {
        const records = await parseFile(filePath, fileType || "csv"); // Parse CSV or Excel
        console.log(records);

        const results: any[] = [];
        const errors: string[] = [];

        for (const record of records) {
          // Add schoolId manually and rename columns
          const renamedRecord = {
            ...record,
            schoolId: 1, // You can replace this with a dynamic value later
          };

          try {
            const validatedStudent = studentSchema.parse(renamedRecord); // Validate each row
            await db.insert(students).values(validatedStudent); // Insert into DB
          } catch (e) {
            if (e instanceof z.ZodError) {
              errors.push(
                `Error in row: ${JSON.stringify(renamedRecord)} - ${e.errors.map((err) => err.message).join(", ")}`,
              );
            }
          }
        }

        if (errors.length) {
          res.status(400).json({ errors });
        } else {
          res.status(200).json({ message: "Students uploaded successfully!" });
        }
      } catch (error) {
        console.error("Error processing file:", error);
        res.status(500).json({ message: "Server error occurred" });
      } finally {
        // Cleanup the file (optional, depending on your server)
        fs.unlinkSync(filePath);
      }
    });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
};

export default handleUpload;
