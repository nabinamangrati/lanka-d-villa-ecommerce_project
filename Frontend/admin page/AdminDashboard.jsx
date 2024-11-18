import { useState } from "react";
import RoomBookings from "./RoomBooking";
import MenuManagement from "./MenuManagement";
import UserManagement from "./UserManagement";

export default function AdminDashboard() {
  const [activeSection, setActiveSection] = useState(null); // Track the active section

  // Function to set active section
  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-green-700 mb-6">Admin Dashboard</h1>

        {/* Buttons to switch between sections */}
        <div className="flex gap-6 mb-6">
          <button 
            onClick={() => handleButtonClick('userManagement')}
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            User Management
          </button>
          <button 
            onClick={() => handleButtonClick('roomBookings')}
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            Room Bookings
          </button>
          <button 
            onClick={() => handleButtonClick('menuManagement')}
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            Menu Management
          </button>
        </div>

        {/* Conditionally render the "Select a management option" message */}
        {activeSection === null && (
  <div className="text-center text-lg text-gray-600 mb-6">
    <div className="border-2 border-gray-300 p-4 rounded-md shadow-sm bg-gray-50">
      <p>Select a management option to view details</p>
    </div>
  </div>
)}

        {/* Conditionally render sections based on activeSection state */}
        <div className="grid grid-cols-1 gap-6">
          {activeSection === 'userManagement' && (
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-green-600 mb-4">User Management</h2>
                <UserManagement />
              </div>
            </div>
          )}

          {activeSection === 'roomBookings' && (
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-green-600 mb-4">Room Bookings</h2>
                <RoomBookings />
              </div>
            </div>
          )}

          {activeSection === 'menuManagement' && (
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-green-600 mb-4">Menu Management</h2>
                <MenuManagement />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
