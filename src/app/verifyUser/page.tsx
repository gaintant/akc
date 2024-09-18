"use client";
import { useEffect, useState } from 'react';

interface User {
  id: number;
  email: string;
  verified: boolean;
  role: string;
}

const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/user/userList');
        // const data : = await response.json();
        // setUsers(data.users);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers().catch(error => {
      console.error('Error in fetchUsers:', error);
    });
  }, []);

  const handleVerify = async (email: string) => {
    try {
      await fetch('/api/user/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email :email }),
      });
      setUsers(users.filter(user => user.email !== email));
    } catch (error) {
      console.error('Error verifying user:', error);
    }
  };

  const handleRemove = async (email: string) => {
    try {
      await fetch('/api/user/remove', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email :email }),
      });
      setUsers(users.filter(user => user.email !== email));
    } catch (error) {
      console.error('Error removing user:', error);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Unverified Users</h1>
      <div className="gremail gremail-cols-1 md:gremail-cols-2 lg:gremail-cols-3 gap-4">
        {users.map(user => (
          <div key={user.email} className="border p-4 rounded shadow-lg">
            <h2 className="text-lg font-bold">{user.email}</h2>
            <p>Status: {user.verified ? 'Verified' : 'Unverified'}</p>
            <div className="mt-4 flex space-x-2">
              <button onClick={() => handleVerify(user.email)} className="bg-blue-500 text-white px-4 py-2 rounded">Verify</button>
              <button onClick={() => handleRemove(user.email)} className="bg-red-500 text-white px-4 py-2 rounded">Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
