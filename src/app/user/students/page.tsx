"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { StudentModal } from "../../(components)/studentComponents/StudentModal";
import { StudentForm } from "../../(components)/studentComponents/StudentForm";
import { Student } from "~/lib/zod-schema";

const StudentPage = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch students on component mount
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get<Student[]>("/api/students");
        setStudents(response.data);
        console.log(response.data);
      } catch (error) {
        console.log("Error fetching students", error);
      }
    };
    void fetchStudents();
  }, []);

  const handleDelete = async (studentId: number) => {
    try {
      await axios.delete(`/api/students?id=${studentId}`);
      setStudents(
        students.filter((student) => student.studentId !== studentId),
      );
    } catch (error) {
      console.log("Error deleting student", error);
    }
  };

  const handleAddEdit = async (studentData: Student) => {
    try {
      if (selectedStudent) {
        await axios.put(`/api/students`, studentData);
      } else {
        await axios.post("/api/students", studentData);
      }
      setIsModalOpen(false);
      // Refetch students after adding/editing
      const response = await axios.get<Student[]>("/api/students");
      setStudents(response.data);
    } catch (error) {
      console.log("Error while editing student detail", error);
    }
  };

  const filteredStudents = students.filter((student) =>
    student.firstName.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4 flex flex-col items-center justify-between sm:flex-row">
        <input
          type="text"
          placeholder="Search by name"
          className="mb-2 w-full rounded border p-2 sm:mb-0 sm:w-1/3"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="rounded bg-blue-500 p-2 text-white transition duration-200 hover:bg-blue-600"
          onClick={() => {
            setSelectedStudent(null);
            setIsModalOpen(true);
          }}
        >
          Add Student
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="mt-4 w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200">
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
              <tr key={student.studentId} className="border-b">
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
                <td className="flex justify-center border px-4 py-2">
                  <button
                    className="mr-2 rounded bg-yellow-500 p-1 text-white transition duration-200 hover:bg-yellow-600"
                    onClick={() => {
                      setSelectedStudent(student);
                      setIsModalOpen(true);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="rounded bg-red-500 p-1 text-white transition duration-200 hover:bg-red-600"
                    onClick={() => handleDelete(student.studentId!)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <StudentModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        >
          <StudentForm
            initialValues={selectedStudent!}
            onSubmit={handleAddEdit}
            isUpdateMode={!!selectedStudent}
          />
        </StudentModal>
      )}
    </div>
  );
};

export default StudentPage;
