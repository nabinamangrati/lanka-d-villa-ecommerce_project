import React, { useState, useEffect } from "react";

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const mockUsers = [
      { id: 1, username: "johndoe", email: "john@example.com", role: "user", status: "active" },
      { id: 2, username: "janesmith", email: "jane@example.com", role: "guest", status: "inactive" },
    ];
    setUsers(mockUsers);
  };

  const handleEditUserRole = () => { /* Logic to edit role */ };
  const handleToggleUserStatus = () => { /* Logic to toggle status */ };

  return (
    <div>
      <h3>User Management</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user.status}</td>
              <td>
                <button onClick={() => handleEditUserRole(user.id)}>Edit Role</button>
                <button onClick={() => handleToggleUserStatus(user.id)}>
                  {user.status === "active" ? "Disable" : "Enable"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
