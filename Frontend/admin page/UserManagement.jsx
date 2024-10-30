import React, { useState, useEffect } from "react";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [updatedUser, setUpdatedUser] = useState({});

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const mockUsers = [
      {
        user_id: 1,
        user_role: "user",
        first_name: "John",
        last_name: "Doe",
        address: "123 Main St",
        user_ph: "123-456-7890",
        user_email: "john@example.com",
        user_age: 30,
        status: "active",
      },
      {
        user_id: 2,
        user_role: "guest",
        first_name: "Jane",
        last_name: "Smith",
        address: "456 Elm St",
        user_ph: "987-654-3210",
        user_email: "jane@example.com",
        user_age: 25,
        status: "inactive",
      },
    ];
    setUsers(mockUsers);
  };

  const handleEditUserRole = (user) => {
    setEditingUser(user);
    setUpdatedUser(user);
  };

  const handleSaveUserRole = () => {
    const updatedUsers = users.map((user) =>
      user.user_id === updatedUser.user_id ? updatedUser : user
    );
    setUsers(updatedUsers);
    setEditingUser(null);
  };

  const handleToggleUserStatus = (userId) => {
    const updatedUsers = users.map((user) =>
      user.user_id === userId
        ? { ...user, status: user.status === "active" ? "inactive" : "active" }
        : user
    );
    setUsers(updatedUsers);
  };

  return (
    <div>
      <h3>User Management</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Age</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.user_id}>
              <td>{user.user_id}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.address}</td>
              <td>{user.user_ph}</td>
              <td>{user.user_email}</td>
              <td>{user.user_age}</td>
              <td>{user.user_role}</td>
              <td>{user.status}</td>
              <td>
                <button onClick={() => handleEditUserRole(user)}>Edit Role</button>
                <button onClick={() => handleToggleUserStatus(user.user_id)}>
                  {user.status === "active" ? "Disable" : "Enable"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editingUser && (
        <div className="modal">
          <h3>Edit User Role</h3>
          <form>
            <label>
              Role:
              <select
                value={updatedUser.user_role}
                onChange={(e) =>
                  setUpdatedUser({ ...updatedUser, user_role: e.target.value })
                }
              >
                <option value="admin">Admin</option>
                <option value="user">User</option>
                <option value="guest">Guest</option>
              </select>
            </label>
            <button type="button" onClick={handleSaveUserRole}>
              Save
            </button>
            <button type="button" onClick={() => setEditingUser(null)}>
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default UserManagement;