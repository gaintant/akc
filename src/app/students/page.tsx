"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { StudentModal } from "../(components)/studentComponents/StudentModal";
import { StudentForm } from "../(components)/studentComponents/StudentForm";
import { Student } from "~/lib/zod-schema";

const StudentPage = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch students on component mount
  useEffect(() => {
    const fetchStudents = async () => {
      const response = await axios.get("/api/students");
      setStudents(response.data);
    };
    fetchStudents();
  }, []);

  const handleDelete = async (studentId: number) => {
    await axios.delete(`/api/students/${studentId}`);
    setStudents(students.filter((student) => student.studentId !== studentId));
  };

  const handleAddEdit = async (studentData: any) => {
    if (selectedStudent) {
      await axios.put(
        `/api/students/${selectedStudent.studentId}`,
        studentData,
      );
    } else {
      await axios.post("/api/students", studentData);
    }
    setIsModalOpen(false);
    // Refetch students after adding/editing
    const response = await axios.get("/api/students");
    setStudents(response.data);
  };

  const filteredStudents = students.filter((student) =>
    student.firstName.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-between">
        <input
          type="text"
          placeholder="Search by name"
          className="rounded border p-2"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="rounded bg-blue-500 p-2 text-white"
          onClick={() => {
            setSelectedStudent(null);
            setIsModalOpen(true);
          }}
        >
          Add Student
        </button>
      </div>

      <table className="mt-4 w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">First Name</th>
            <th className="px-4 py-2">Middle Name</th>
            <th className="px-4 py-2">Surname</th>
            <th className="px-4 py-2">Date of Birth</th>
            <th className="px-4 py-2">Gender</th>
            <th className="px-4 py-2">Guardian Name</th>
            <th className="px-4 py-2">Guardian Email</th>
            <th className="px-4 py-2">Guardian Phone Number</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student) => (
            <tr key={student.studentId}>
              <td className="border px-4 py-2">{student.firstName}</td>
              <td className="border px-4 py-2">{student.middleName}</td>
              <td className="border px-4 py-2">{student.surName}</td>
              <td className="border px-4 py-2">{student.dateOfBirth}</td>
              <td className="border px-4 py-2">{student.gender}</td>
              <td className="border px-4 py-2">{student.guardianName}</td>
              <td className="border px-4 py-2">{student.guardianEmail}</td>
              <td className="border px-4 py-2">
                {student.guardianPhoneNumber}
              </td>
              <td className="border px-4 py-2">
                <button
                  className="mr-2 rounded bg-yellow-500 p-1 text-white"
                  onClick={() => {
                    setSelectedStudent(student);
                    setIsModalOpen(true);
                  }}
                >
                  Edit
                </button>
                <button
                  className="rounded bg-red-500 p-1 text-white"
                  onClick={() => handleDelete(student.studentId as number)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <StudentModal onClose={() => setIsModalOpen(false)}>
          <StudentForm
            initialValues={selectedStudent as Student}
            onSubmit={handleAddEdit}
          />
        </StudentModal>
      )}
    </div>
  );
};

export default StudentPage;
