import React, { useState, useEffect } from "react";
import userServices from "../src/services/users";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [updatedUser, setUpdatedUser] = useState({});
  const [searchQuery, setSearchQuery] = useState("");


  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    let myAxiosPromise = await userServices.getAll();
    setUsers(myAxiosPromise);  
  };

  const handleEditUserRole = (user) => {
    setEditingUser(user);
    setUpdatedUser({ ...user });
  };

  const handleSaveUserRole = () => {
    const updatedUsers = users.map((user) =>
      user.id === updatedUser.id ? { ...user, role: updatedUser.role } : user
    );
    setUsers(updatedUsers);
    setEditingUser(null);
  };

  const handleToggleUserStatus = (userId) => {
    const updatedUsers = users.map((user) =>
      user.id === userId
        ? { ...user, status: user.status === "active" ? "inactive" : "active" }
        : user
    );
    setUsers(updatedUsers);
  };
  const filteredUsers = users.filter(user =>
    user.first_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
       <div className="flex items-center justify-between mb-6">

      <h3 className="text-2xl font-semibold text-gray-800 mb-6">User Management</h3>
      <input
            type="text"
            placeholder="Search users by first name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-1/3 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
      </div>
      <table className="min-w-full bg-gray-100 border-collapse border border-gray-200 rounded-lg">
        <thead>
          <tr>
            <th className="py-3 px-4 text-left text-gray-600 border-b">ID</th>
            <th className="py-3 px-4 text-left text-gray-600 border-b">First Name</th>
            <th className="py-3 px-4 text-left text-gray-600 border-b">Last Name</th>
            <th className="py-3 px-4 text-left text-gray-600 border-b">Address</th>
            <th className="py-3 px-4 text-left text-gray-600 border-b">Phone</th>
            <th className="py-3 px-4 text-left text-gray-600 border-b">Email</th>
            <th className="py-3 px-4 text-left text-gray-600 border-b">Age</th>
            <th className="py-3 px-4 text-left text-gray-600 border-b">Role</th>
            <th className="py-3 px-4 text-left text-gray-600 border-b">Status</th>
            <th className="py-3 px-4 text-left text-gray-600 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id} className="odd:bg-gray-50 even:bg-gray-100">
              <td className="py-3 px-4 border-b">{user.id}</td>
              <td className="py-3 px-4 border-b">{user.first_name}</td>
              <td className="py-3 px-4 border-b">{user.last_name}</td>
              <td className="py-3 px-4 border-b">{user.address}</td>
              <td className="py-3 px-4 border-b">{user.phone}</td>
              <td className="py-3 px-4 border-b">{user.email}</td>
              <td className="py-3 px-4 border-b">{user.age}</td>
              <td className="py-3 px-4 border-b">{user.role}</td>
              <td className="py-3 px-4 border-b">{user.status}</td>
              <td className="py-3 px-4 border-b">
                <button
                  onClick={() => handleEditUserRole(user)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 mr-2"
                >
                  Edit Role
                </button>
                <button
                  onClick={() => handleToggleUserStatus(user.id)}
                  className={`px-4 py-2 rounded-md ${user.status === "active" ? "bg-red-600" : "bg-green-600"} text-white hover:${user.status === "active" ? "bg-red-700" : "bg-green-700"}`}
                >
                  {user.status === "active" ? "Disable" : "Enable"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editingUser && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Edit User Role</h3>
            <form>
              <label className="block text-gray-700 mb-2">Role:</label>
              <select
                value={updatedUser.role}
                onChange={(e) =>
                  setUpdatedUser({ ...updatedUser, role: e.target.value })
                }
                className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="admin">Admin</option>
                <option value="user">User</option>
                <option value="guest">Guest</option>
              </select>
              <div className="mt-4 flex gap-2 justify-end">
                <button
                  type="button"
                  onClick={handleSaveUserRole}
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setEditingUser(null)}
                  className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
