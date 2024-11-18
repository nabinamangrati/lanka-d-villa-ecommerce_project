import React, { useState, useEffect } from "react";
import bookingServices from "../src/services/bookings";
import roomServices from "../src/services/rooms";

const RoomBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [editingBooking, setEditingBooking] = useState(null);
  const [updatedBooking, setUpdatedBooking] = useState({});
  const [editingRoom, setEditingRoom] = useState(null);
  const [updatedRoom, setUpdatedRoom] = useState({});

  useEffect(() => {
    fetchBookings();
    fetchRooms();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await bookingServices.getBookings();
      console.log("Fetched bookings:", response);
      setBookings(response);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  const fetchRooms = async () => {
    try {
      const response = await roomServices.getRooms();
      console.log("Fetched rooms:", response);
      setRooms(response);
    } catch (error) {
      console.error("Error fetching rooms:", error);
    }
  };

  const handleUpdateBooking = (booking) => {
    setEditingBooking(booking);
    setUpdatedBooking({ ...booking });
  };

  const handleSaveBooking = async () => {
    try {
      await bookingServices.updateBooking(updatedBooking.id, updatedBooking);
      const updatedBookings = bookings.map((booking) =>
        booking.id === updatedBooking.id ? updatedBooking : booking
      );
      setBookings(updatedBookings);
      setEditingBooking(null);
    } catch (error) {
      console.error("Error updating booking:", error);
    }
  };

  const handleCancelBooking = async (bookingId) => {
    setBookings(bookings.filter((booking) => booking.id !== bookingId));
  };

  const handleUpdateRoom = (room) => {
    setEditingRoom(room);
    setUpdatedRoom(room);
  };

  const handleSaveRoom = async () => {
    const updatedRooms = rooms.map((room) =>
      room.id === updatedRoom.id ? updatedRoom : room
    );
    setRooms(updatedRooms);
    setEditingRoom(null);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6">Room Management</h3>
      <table className="min-w-full bg-gray-100 border-collapse border border-gray-200 rounded-lg">
        <thead>
          <tr>
            <th className="py-3 px-4 text-left text-gray-600 border-b">Room Number</th>
            <th className="py-3 px-4 text-left text-gray-600 border-b">Type</th>
            <th className="py-3 px-4 text-left text-gray-600 border-b">Price/Person</th>
            <th className="py-3 px-4 text-left text-gray-600 border-b">Price for room only</th>
            <th className="py-3 px-4 text-left text-gray-600 border-b">Price with dinner & breakfast</th>
            <th className="py-3 px-4 text-left text-gray-600 border-b">Availability</th>
            <th className="py-3 px-4 text-left text-gray-600 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((room) => (
            <tr key={room.id} className="odd:bg-gray-50 even:bg-gray-100">
              <td className="py-3 px-4 border-b">{room.id}</td>
              <td className="py-3 px-4 border-b">{room.type}</td>
              <td className="py-3 px-4 border-b">{room.price_person}</td>
              <td className="py-3 px-4 border-b">{room.room_only}</td>
              <td className="py-3 px-4 border-b">{room.price_with_BF}</td>
              <td className="py-3 px-4 border-b">{room.availability ? "Available" : "Not Available"}</td>
              <td className="py-3 px-4 border-b">
                <button
                  onClick={() => handleUpdateRoom(room)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 mr-2"
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editingRoom && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Update Room</h3>
            <form>
              <label className="block text-gray-700 mb-2">Room Number:</label>
              <input
                type="number"
                className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                value={updatedRoom.id}
                onChange={(e) => setUpdatedRoom({ ...updatedRoom, id: e.target.value })}
                disabled
              />
              <label className="block text-gray-700 mb-2 mt-4">Type:</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                value={updatedRoom.type}
                onChange={(e) => setUpdatedRoom({ ...updatedRoom, type: e.target.value })}
              />
              <label className="block text-gray-700 mb-2 mt-4">Price/person:</label>
              <input
                type="number"
                className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                value={updatedRoom.price_person}
                onChange={(e) => setUpdatedRoom({ ...updatedRoom, price_person: e.target.value })}
              />
              <label className="block text-gray-700 mb-2 mt-4">Room Only:</label>
              <input
                type="number"
                className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                value={updatedRoom.room_only}
                onChange={(e) => setUpdatedRoom({ ...updatedRoom, room_only: e.target.value })}
              />
              <label className="block text-gray-700 mb-2 mt-4">Price with dinner/bf:</label>
              <input
                type="number"
                className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                value={updatedRoom.price_with_BF}
                onChange={(e) => setUpdatedRoom({ ...updatedRoom, price_with_BF: e.target.value })}
              />
              <label className="block text-gray-700 mb-2 mt-4">Availability:</label>
              <select
                className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                value={updatedRoom.availability ? "Available" : "Not Available"}
                onChange={(e) =>
                  setUpdatedRoom({ ...updatedRoom, availability: e.target.value === "Available" })
                }
              >
                <option value="Available">Available</option>
                <option value="Not Available">Not Available</option>
              </select>
              <div className="mt-4 flex gap-2 justify-end">
                <button
                  type="button"
                  onClick={handleSaveRoom}
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setEditingRoom(null)}
                  className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-6">Room Bookings</h3>
      <table className="min-w-full bg-gray-100 border-collapse border border-gray-200 rounded-lg">
        <thead>
          <tr>
            <th className="py-3 px-4 text-left text-gray-600 border-b">Booking ID</th>
            <th className="py-3 px-4 text-left text-gray-600 border-b">Check-In Date</th>
            <th className="py-3 px-4 text-left text-gray-600 border-b">Check-Out Date</th>
            <th className="py-3 px-4 text-left text-gray-600 border-b">Status</th>
            <th className="py-3 px-4 text-left text-gray-600 border-b">Total Price</th>
            <th className="py-3 px-4 text-left text-gray-600 border-b">Payment</th>
            <th className="py-3 px-4 text-left text-gray-600 border-b">User ID</th>
            <th className="py-3 px-4 text-left text-gray-600 border-b">Room ID</th>
            <th className="py-3 px-4 text-left text-gray-600 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id} className="odd:bg-gray-50 even:bg-gray-100">
              <td className="py-3 px-4 border-b">{booking.id}</td>
              <td className="py-3 px-4 border-b">{booking.check_in}</td>
              <td className="py-3 px-4 border-b">{booking.check_out}</td>
              <td className="py-3 px-4 border-b">{booking.status}</td>
              <td className="py-3 px-4 border-b">{booking.total_price}</td>
              <td className="py-3 px-4 border-b">{booking.payment_status}</td>
              <td className="py-3 px-4 border-b">{booking.user_id}</td>
              <td className="py-3 px-4 border-b">{booking.room_id}</td>
              <td className="py-3 px-4 border-b">
                <button
                  onClick={() => handleUpdateBooking(booking)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 mr-2"
                >
                  Update
                </button>
                <button
                  onClick={() => handleCancelBooking(booking.id)}
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                >
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editingBooking && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Update Booking</h3>
            <form>
              <label className="block text-gray-700 mb-2">Check-In Date:</label>
              <input
                type="date"
                className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                value={updatedBooking.check_in}
                onChange={(e) => setUpdatedBooking({ ...updatedBooking, check_in: e.target.value })}
              />
              <label className="block text-gray-700 mb-2 mt-4">Check-Out Date:</label>
              <input
                type="date"
                className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                value={updatedBooking.check_out}
                onChange={(e) => setUpdatedBooking({ ...updatedBooking, check_out: e.target.value })}
              />
              <label className="block text-gray-700 mb-2 mt-4">Status:</label>
              <select
                className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                value={updatedBooking.status}
                onChange={(e) => setUpdatedBooking({ ...updatedBooking, status: e.target.value })}
              >
                <option value="Confirmed">Confirmed</option>
                <option value="Pending">Pending</option>
                <option value="Cancelled">Cancelled</option>
              </select>
              <label className="block text-gray-700 mb-2 mt-4">Total Price:</label>
              <input
                type="number"
                className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                value={updatedBooking.total_price}
                onChange={(e) => setUpdatedBooking({ ...updatedBooking, total_price: e.target.value })}
              />
              <label className="block text-gray-700 mb-2 mt-4">Payment:</label>
              <select
                className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                value={updatedBooking.payment_status}
                onChange={(e) =>
                  setUpdatedBooking({ ...updatedBooking, payment_status: e.target.value })
                }
              >
                <option value="Paid">Paid</option>
                <option value="Unpaid">Unpaid</option>
              </select>
              <label className="block text-gray-700 mb-2 mt-4">User ID:</label>
              <input
                type="number"
                className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                value={updatedBooking.user_id}
                onChange={(e) => setUpdatedBooking({ ...updatedBooking, user_id: e.target.value })}
              />
              <label className="block text-gray-700 mb-2 mt-4">Room ID:</label>
              <input
                type="number"
                className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                value={updatedBooking.room_id}
                onChange={(e) => setUpdatedBooking({ ...updatedBooking, room_id: e.target.value })}
              />
              <div className="mt-4 flex gap-2 justify-end">
                <button
                  type="button"
                  onClick={handleSaveBooking}
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setEditingBooking(null)}
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

export default RoomBookings;