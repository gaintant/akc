"use client";
import { useEffect, useState } from "react";
import { addUser } from "~/types/loginDetails";
import { PreRegistrationData } from "~/types/preRegistration";

const UsersPage = () => {
  const [users, setUsers] = useState<PreRegistrationData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/admin/getUsers");
        const data = (await response.json()) as PreRegistrationData[];
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };
    async () => {
      await fetchUsers();
    };
  }, []);

  const handleVerify = async (email: string) => {
    try {
      await fetch("/api/admin/addUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, verified: "verified" } as addUser),
      });
      setUsers(users.filter((user) => user.contactEmail !== email));
    } catch (error) {
      console.error("Error verifying user:", error);
    }
  };

  const handleRemove = async (email: string) => {
    try {
      await fetch("/api/addUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, verified: "rejected" } as addUser),
      });
      setUsers(users.filter((user) => user.contactEmail !== email));
    } catch (error) {
      console.error("Error removing user:", error);
    }
  };

  return (
    <div>
      <h1>Unverified users</h1>
      <div className="gremail gremail-cols-1 md:gremail-cols-2 lg:gremail-cols-3 gap-4">
        {users.map((user) => (
          <div key={user.contactEmail} className="rounded border p-4 shadow-lg">
            <h2 className="text-lg font-bold">{user.contactEmail}</h2>
            <p className="mt-2">
              <strong>First Name:</strong> {user.firstName ?? "N/A"}
            </p>
            <p className="mt-2">
              <strong>Surname:</strong> {user.surname ?? "N/A"}
            </p>
            <p className="mt-2">
              <strong>School Name:</strong> {user.schoolName ?? "N/A"}
            </p>
            <p className="mt-2">
              <strong>School Address:</strong> {user.schoolAddress ?? "N/A"}
            </p>
            <p className="mt-2">
              <strong>School City:</strong> {user.schoolCity ?? "N/A"}
            </p>
            <p className="mt-2">
              <strong>School State:</strong> {user.schoolState ?? "N/A"}
            </p>
            <p className="mt-2">
              <strong>School Pincode:</strong> {user.schoolPincode ?? "N/A"}
            </p>
            <p className="mt-2">
              <strong>School Website:</strong> {user.schoolWebsite ?? "N/A"}
            </p>
            <p className="mt-2">
              <strong>Coordinator Mobile No:</strong>{" "}
              {user.coordinatorMobileNo ?? "N/A"}
            </p>

            <div className="mt-4 flex space-x-2">
              <button
                onClick={() => handleVerify(user.contactEmail)}
                className="rounded bg-blue-500 px-4 py-2 text-white"
              >
                Verify
              </button>
              <button
                onClick={() => handleRemove(user.contactEmail)}
                className="rounded bg-red-500 px-4 py-2 text-white"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
