import React, { useState, useEffect } from "react";

const RoomBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [editingBooking, setEditingBooking] = useState(null);
  const [editingRoom, setEditingRoom] = useState(null);
  const [updatedBooking, setUpdatedBooking] = useState({});
  const [updatedRoom, setUpdatedRoom] = useState({});

  useEffect(() => {
    fetchBookings();
    fetchRooms();
  }, []);

  const fetchBookings = async () => {
    const mockBookings = [
      {
        id: 1,
        customerName: "John Doe",
        roomNumber: 101,
        checkInDate: "2024-10-30",
        checkOutDate: "2024-11-02",
        status: "Confirmed",
      },
      {
        id: 2,
        customerName: "Jane Smith",
        roomNumber: 102,
        checkInDate: "2024-11-05",
        checkOutDate: "2024-11-07",
        status: "Pending",
      },
    ];
    setBookings(mockBookings);
  };

  const fetchRooms = async () => {
    const mockRooms = [
      { id: 101, type: "Single", price: 100, availability: true },
      { id: 102, type: "Double", price: 150, availability: false },
    ];
    setRooms(mockRooms);
  };

  const handleUpdateBooking = (booking) => {
    setEditingBooking(booking);
    setUpdatedBooking(booking);
  };

  const handleSaveBooking = async () => {
    const updatedBookings = bookings.map((booking) =>
      booking.id === updatedBooking.id ? updatedBooking : booking
    );
    setBookings(updatedBookings);
    setEditingBooking(null);
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
    <div>
      <h3>Room Bookings</h3>
      <table>
        <thead>
          <tr>
            <th>Booking ID</th>
            <th>Customer Name</th>
            <th>Room Number</th>
            <th>Check-In</th>
            <th>Check-Out</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.id}</td>
              <td>{booking.customerName}</td>
              <td>{booking.roomNumber}</td>
              <td>{booking.checkInDate}</td>
              <td>{booking.checkOutDate}</td>
              <td>{booking.status}</td>
              <td>
                <button onClick={() => handleUpdateBooking(booking)}>
                  Update
                </button>
                <button onClick={() => handleCancelBooking(booking.id)}>
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editingBooking && (
        <div className="modal">
          <h3>Update Booking</h3>
          <form>
            <label>
              Customer Name:
              <input
                type="text"
                value={updatedBooking.customerName}
                onChange={(e) =>
                  setUpdatedBooking({
                    ...updatedBooking,
                    customerName: e.target.value,
                  })
                }
              />
            </label>
            <label>
              Room Number:
              <input
                type="number"
                value={updatedBooking.roomNumber}
                onChange={(e) =>
                  setUpdatedBooking({
                    ...updatedBooking,
                    roomNumber: e.target.value,
                  })
                }
              />
            </label>
            <label>
              Check-In Date:
              <input
                type="date"
                value={updatedBooking.checkInDate}
                onChange={(e) =>
                  setUpdatedBooking({
                    ...updatedBooking,
                    checkInDate: e.target.value,
                  })
                }
              />
            </label>
            <label>
              Check-Out Date:
              <input
                type="date"
                value={updatedBooking.checkOutDate}
                onChange={(e) =>
                  setUpdatedBooking({
                    ...updatedBooking,
                    checkOutDate: e.target.value,
                  })
                }
              />
            </label>
            <label>
              Status:
              <select
                value={updatedBooking.status}
                onChange={(e) =>
                  setUpdatedBooking({
                    ...updatedBooking,
                    status: e.target.value,
                  })
                }
              >
                <option value="Confirmed">Confirmed</option>
                <option value="Pending">Pending</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </label>
            <button type="button" onClick={handleSaveBooking}>
              Save
            </button>
            <button type="button" onClick={() => setEditingBooking(null)}>
              Cancel
            </button>
          </form>
        </div>
      )}

      <h3>Room Management</h3>
      <table>
        <thead>
          <tr>
            <th>Room Number</th>
            <th>Type</th>
            <th>Price</th>
            <th>Availability</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((room) => (
            <tr key={room.id}>
              <td>{room.id}</td>
              <td>{room.type}</td>
              <td>{room.price}</td>
              <td>{room.availability ? "Available" : "Not Available"}</td>
              <td>
                <button onClick={() => handleUpdateRoom(room)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editingRoom && (
        <div className="modal">
          <h3>Update Room</h3>
          <form>
            <label>
              Room Number:
              <input
                type="number"
                value={updatedRoom.id}
                onChange={(e) =>
                  setUpdatedRoom({ ...updatedRoom, id: e.target.value })
                }
                disabled
              />
            </label>
            <label>
              Type:
              <input
                type="text"
                value={updatedRoom.type}
                onChange={(e) =>
                  setUpdatedRoom({ ...updatedRoom, type: e.target.value })
                }
              />
            </label>
            <label>
              Price:
              <input
                type="number"
                value={updatedRoom.price}
                onChange={(e) =>
                  setUpdatedRoom({ ...updatedRoom, price: e.target.value })
                }
              />
            </label>
            <label>
              Availability:
              <select
                value={updatedRoom.availability ? "Available" : "Not Available"}
                onChange={(e) =>
                  setUpdatedRoom({
                    ...updatedRoom,
                    availability: e.target.value === "Available",
                  })
                }
              >
                <option value="Available">Available</option>
                <option value="Not Available">Not Available</option>
              </select>
            </label>
            <button type="button" onClick={handleSaveRoom}>
              Save
            </button>
            <button type="button" onClick={() => setEditingRoom(null)}>
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default RoomBookings;