import { NextApiRequest, NextApiResponse } from "next";
import formidable, { File } from "formidable";
import fs from "fs";
import { z } from "zod";
import { db } from "../../server/db"; // Your Drizzle ORM DB connection
import { students } from "../../server/db/schema"; // Your students table schema
import { parse } from "csv-parse";
import * as XLSX from "sheetjs-style";
import { studentSchema } from "~/lib/zod-schema";

// Mapping of CSV/Excel column names to database column names
const columnMapping: Record<string, string> = {
  "First Name": "firstName",
  "Middle Name": "middleName",
  Surname: "surName",
  "Date Of Birth": "dateOfBirth",
  Gender: "gender",
  "Guardian Name": "guardianName",
  "Guardian Email": "guardianEmail",
  "Guardian Phone Number": "guardianPhoneNumber",
};

// Helper function to rename columns
const renameColumns = (
  record: Record<string, string>,
  mapping: Record<string, string>,
) => {
  const renamedRecord: Record<string, string> = {};

  Object.keys(record).forEach((key) => {
    const dbColumn = mapping[key.trim()] ?? key; // Use mapping if exists, else keep original
    renamedRecord[dbColumn] = String(record[key] ?? ""); // Ensure value is a string, fallback to ""
  });

  return renamedRecord;
};

// Helper function to parse CSV/Excel
const parseFile = async (
  filePath: string,
  fileType: string,
): Promise<Record<string, string>[]> => {
  const results: Record<string, string>[] = [];

  if (fileType === "csv") {
    const fileContent = fs.readFileSync(filePath);
    const parser = parse(fileContent, {
      columns: true,
      skip_empty_lines: true,
    });

    for await (const record of parser) {
      const filteredRecord = Object.fromEntries(
        Object.entries(record as Record<string, unknown>)
          .filter(([_, value]) => value !== "")
          .map(([key, value]) => [key, String(value)]),
      ) as Record<string, string>;
      const renamedRecord = renameColumns(filteredRecord, columnMapping); // Apply renaming
      results.push(renamedRecord);
    }
  } else if (fileType === "xlsx") {
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0]; // Get the first sheet name

    if (!sheetName) {
      throw new Error("The uploaded Excel file does not contain any sheets");
    }
    const sheet = workbook.Sheets[sheetName]!;
    const rows = XLSX.utils.sheet_to_json<Record<string, string>>(sheet);

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

    form.parse(req, (err, fields, files) => {
      if (err) {
        console.error("Error parsing form:", err);
        return res.status(500).json({ message: "Error parsing form data" });
      }

      (async () => {
        const file = Array.isArray(files.file) ? files.file[0] : files.file; // Handle file array
        if (!file) {
          return res.status(400).json({ message: "File not provided" });
        }

        const filePath = (file as File).filepath; // Handle older versions of formidable
        const fileType =
          file.originalFilename?.split(".").pop()?.toLowerCase() ?? "csv"; // Get the file extension with nullish coalescing

        try {
          const records = await parseFile(filePath, fileType); // Parse CSV or Excel
          console.log(records);

          const errors: string[] = [];

          for (const record of records) {
            // Add schoolId manually and rename columns
            const renamedRecord = {
              ...record,
              schoolId: 1, // You can replace this with a dynamic value later
            };

            try {
              const validatedStudent = studentSchema.parse(renamedRecord); // Validate each row
              console.log(validatedStudent);
              await db.insert(students).values(validatedStudent); // Insert into DB
            } catch (e) {
              if (e instanceof z.ZodError) {
                errors.push(
                  `Error in row: ${JSON.stringify(renamedRecord)} - ${e.errors.map((err) => err.message).join(", ")}`,
                );
              } else {
                const postgresError = e as { detail?: string }; // Cast to better type
                errors.push(
                  `Error in row: ${JSON.stringify(renamedRecord)} - ${postgresError.detail ?? "Unknown error"}`,
                );
                console.log(e);
              }
            }
          }

          if (errors.length) {
            res.status(400).json({ errors });
          } else {
            res
              .status(200)
              .json({ message: "Students uploaded successfully!" });
          }
        } catch (error) {
          console.error("Error processing file:", error);
          res.status(500).json({ message: "Server error occurred" });
        } finally {
          // Cleanup the file (optional, depending on your server)
          fs.unlinkSync(filePath);
        }
      })().catch((error) => {
        console.error("Error in async function:", error);
        res.status(500).json({ message: "Error in file processing" });
      });
    });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
};

export default handleUpload;
