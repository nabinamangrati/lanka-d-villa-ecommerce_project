import React, { useState, useEffect } from "react";
import userServices from "../src/services/users"

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [updatedUser, setUpdatedUser] = useState({});

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    console.log("hello");
    let myAxiosPromise =await userServices.getAll();
      setUsers(myAxiosPromise);  
  };

  const handleEditUserRole = (user) => {
    setEditingUser(user);
    setUpdatedUser({...user});
  };

  const handleSaveUserRole = () => {
    const updatedUsers = users.map((user) =>
      // user.id === updatedUser.id ? updatedUser : user
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
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.address}</td>
              <td>{user.phone}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
              <td>{user.role}</td>
              <td>{user.status}</td>
              <td>
                <button onClick={() => handleEditUserRole(user)}>Edit Role</button>
                <button onClick={() => handleToggleUserStatus(user.id)}>
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
                value={updatedUser.role}
                onChange={(e) =>
                  setUpdatedUser({ ...updatedUser, role: e.target.value })
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