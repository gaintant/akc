"use client";
import React, { useState, useEffect } from "react";
import { studentSchema, StudentFormValues } from "~/lib/zod-schema";

interface StudentFormProps {
  initialValues?: StudentFormValues; // Accepting initial values as a prop
  onSubmit: (values: StudentFormValues) => void;
}

export const StudentForm: React.FC<StudentFormProps> = ({
  initialValues,
  onSubmit,
}) => {
  const [formData, setFormData] = useState<StudentFormValues>({
    firstName: "",
    middleName: "",
    surName: "",
    dateOfBirth: "",
    gender: "Male", // default to 'Male'
    guardianName: "",
    guardianEmail: undefined,
    guardianPhoneNumber: undefined,
    schoolId: 1,
    ...initialValues, // Use initial values if provided
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof StudentFormValues, string>>
  >({});

  useEffect(() => {
    // Set form data when initial values change
    if (initialValues) {
      setFormData(initialValues);
    }
  }, [initialValues]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const parsedData = studentSchema.safeParse(formData);

    if (parsedData.success) {
      setErrors({});
      onSubmit(parsedData.data); // Call the onSubmit function passed as a prop
    } else {
      const fieldErrors: Partial<Record<keyof StudentFormValues, string>> = {};
      parsedData.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as keyof StudentFormValues] = err.message;
        }
      });
      setErrors(fieldErrors);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-lg space-y-6 rounded-md bg-white p-6 shadow-md"
    >
      <h2 className="mb-4 text-xl font-semibold text-gray-700">Student Form</h2>

      <div>
        <label className="mb-1 block text-sm text-gray-600">First Name</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          className="w-full rounded-md border px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          placeholder="Enter first name"
        />
        {errors.firstName && (
          <p className="text-sm text-red-500">{errors.firstName}</p>
        )}
      </div>

      <div>
        <label className="mb-1 block text-sm text-gray-600">
          Date of Birth
        </label>
        <input
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleInputChange}
          className="w-full rounded-md border px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
        />
        {errors.dateOfBirth && (
          <p className="text-sm text-red-500">{errors.dateOfBirth}</p>
        )}
      </div>

      <div>
        <label className="mb-1 block text-sm text-gray-600">Gender</label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleInputChange}
          className="w-full rounded-md border px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        {errors.gender && (
          <p className="text-sm text-red-500">{errors.gender}</p>
        )}
      </div>

      <div>
        <label className="mb-1 block text-sm text-gray-600">
          Guardian Name
        </label>
        <input
          type="text"
          name="guardianName"
          value={formData.guardianName}
          onChange={handleInputChange}
          className="w-full rounded-md border px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          placeholder="Enter guardian's name"
        />
        {errors.guardianName && (
          <p className="text-sm text-red-500">{errors.guardianName}</p>
        )}
      </div>

      <div>
        <label className="mb-1 block text-sm text-gray-600">
          Guardian Email
        </label>
        <input
          type="email"
          name="guardianEmail"
          value={formData.guardianEmail}
          onChange={handleInputChange}
          className="w-full rounded-md border px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          placeholder="Enter guardian's email (optional)"
        />
        {errors.guardianEmail && (
          <p className="text-sm text-red-500">{errors.guardianEmail}</p>
        )}
      </div>

      <div>
        <label className="mb-1 block text-sm text-gray-600">
          Guardian Phone Number
        </label>
        <input
          type="text"
          name="guardianPhoneNumber"
          value={formData.guardianPhoneNumber}
          onChange={handleInputChange}
          className="w-full rounded-md border px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          placeholder="Enter phone number (optional)"
        />
        {errors.guardianPhoneNumber && (
          <p className="text-sm text-red-500">{errors.guardianPhoneNumber}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full rounded-md bg-blue-600 px-4 py-2 text-white transition duration-200 hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};
