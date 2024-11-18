import React, { useState, useEffect } from "react";
import menuServices from "../src/services/menu"

const MenuManagement = () => { 
  const [menuItems, setMenuItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const [newPrice, setNewPrice] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Fetch menu items when the component loads
    fetchMenuItems();
  }, []);

  const fetchMenuItems = async () => {
    // Fetch data from your API
    // const response = await fetch("/api/menu-items");
    // const data = await response.json();
    // setMenuItems(data);
      const response = await menuServices.getMenuItems();
      console.log("fetched menu", response)
      setMenuItems(response);
    
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
  const filteredMenuItems = menuItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-6">

      <h3 className="text-2xl font-semibold text-gray-800 mb-6">Menu Management</h3>
          <input
            type="text"
            placeholder="Search Menu Items..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-1/3 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      <table className="min-w-full bg-gray-100 border-collapse border border-gray-200 rounded-lg">
        <thead>
          <tr>
            <th className="py-3 px-4 text-left text-gray-600 border-b">Item ID</th>
            <th className="py-3 px-4 text-left text-gray-600 border-b">Item Name</th>
            <th className="py-3 px-4 text-left text-gray-600 border-b">Current Price</th>
            <th className="py-3 px-4 text-left text-gray-600 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
        {filteredMenuItems.map((item) => (
          // {menuItems.map((item) => (
            <tr key={item.id} className="odd:bg-gray-50 even:bg-gray-100">
              <td className="py-3 px-4 border-b">{item.id}</td>
              <td className="py-3 px-4 border-b">{item.name}</td>
              <td className="py-3 px-4 border-b">
                {editingItem?.id === item.id ? (
                  <input
                    type="number"
                    value={newPrice}
                    onChange={(e) => setNewPrice(e.target.value)} className="px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    // style={{
                    //   width: "100px",
                    // }}
                  />
                ) : (
                  `Rs. ${item.price}`
                )}
              </td>
              <td>
                {editingItem?.id === item.id ? (
                  <button onClick={() => handleSavePrice(item.id)} className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">Save</button>
                ) : (
                  <button onClick={() => handleEditPrice(item.id)} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 mr-2">
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
