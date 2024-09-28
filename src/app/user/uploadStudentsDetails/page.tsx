"use client";
import { useState } from "react";
import UploadStudentsErrorModal from "../../(components)/studentComponents/UploadStudentsErrorModal";
// import { useRouter } from "next/router";

const BulkUploadPage = () => {
  const [file, setFile] = useState<File | undefined>(undefined);
  const [uploading, setUploading] = useState(false);
  const [uploadErrors, setUploadErrors] = useState<string[]>([]);
  // const router = useRouter();

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    setFile(fileList?.[0]);
  };

  // Upload file function
  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/upload-students", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        // router.push("/students"); // Redirect on success
      } else {
        const { errors } = (await response.json()) as {
          errors: string[];
        };
        setUploadErrors(errors); // Display errors in modal
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-2xl font-bold">Bulk Upload Students Details</h1>

      <p className="mb-4">
        Please follow the constraints below to ensure a successful upload:
      </p>
      <ul className="mb-6">
        <li>1. `firstName`, `dateOfBirth`, and `guardianName` are required.</li>
        <li>
          2. Maximum length for `firstName`, `surName`, etc. is 255 characters.
        </li>
        <li>3. `guardianPhoneNumber` must be 10 digits.</li>
        {/* <!-- Add more constraints here --> */}
      </ul>

      <div className="mb-4">
        <a
          href="/template/student_template.xlsx"
          download
          className="text-blue-500 underline"
        >
          Download Template
        </a>
      </div>

      <input
        type="file"
        accept=".csv,.xlsx"
        onChange={handleFileChange}
        className="mb-4"
      />

      <button
        onClick={handleUpload}
        disabled={!file || uploading}
        className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      >
        {uploading ? "Uploading..." : "Upload Student Details"}
      </button>

      {/* Modal for upload errors */}
      {uploadErrors.length > 0 && (
        <UploadStudentsErrorModal
          title="Upload Errors"
          onClose={() => setUploadErrors([])}
        >
          <ul>
            {uploadErrors.map((error, idx) => (
              <li key={idx} className="text-red-500">
                {error}
              </li>
            ))}
          </ul>
        </UploadStudentsErrorModal>
      )}
    </div>
  );
};

export default BulkUploadPage;
