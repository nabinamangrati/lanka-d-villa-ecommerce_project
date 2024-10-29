import React, { useState, useEffect } from "react";

const MenuManagement = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const [newPrice, setNewPrice] = useState("");

  useEffect(() => {
    // Fetch menu items when the component loads
    fetchMenuItems();
  }, []);

  const fetchMenuItems = async () => {
    // Fetch data from your API
    // const response = await fetch("/api/menu-items");
    // const data = await response.json();
    // setMenuItems(data);
    const mockData = [
      { id: 1, name: "Burger", price: 599 },
      { id: 2, name: "Pizza", price: 899 },
    ];
    setMenuItems(mockData);
  };

  const handleEditPrice = (itemId) => {
    // Set the editing item and initialize newPrice with the current price
    const item = menuItems.find((item) => item.id === itemId);
    setEditingItem(item);
    setNewPrice(item.price);
  };

  const handleSavePrice = (itemId) => {
    // Logic to update the item's price in the backend
    // After saving, reset editing states
    const updatedMenuItems = menuItems.map((item) =>
      item.id === itemId ? { ...item, price: newPrice } : item
    );
    setMenuItems(updatedMenuItems);
    setEditingItem(null);
    setNewPrice("");
  };

  return (
    <div>
      <h3>Menu Management</h3>
      <table>
        <thead>
          <tr>
            <th>Item ID</th>
            <th>Item Name</th>
            <th>Current Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {menuItems.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>
                {editingItem?.id === item.id ? (
                  <input
                    type="number"
                    value={newPrice}
                    onChange={(e) => setNewPrice(e.target.value)}
                  />
                ) : (
                  `Rs. ${item.price}`
                )}
              </td>
              <td>
                {editingItem?.id === item.id ? (
                  <button onClick={() => handleSavePrice(item.id)}>Save</button>
                ) : (
                  <button onClick={() => handleEditPrice(item.id)}>
                    Edit Price
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MenuManagement;
