import React, { useState, useEffect } from "react";

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
    const mockBookings = [
      {
        booking_id: 1,
        checkin_date: "2024-10-30",
        checkout_date: "2024-11-02",
        status: "Confirmed",
        total_price: 300,
        payment: "Paid",
        user_id: 1,
        room_id: 101,
        remark: "No special requests",
      },
      {
        booking_id: 2,
        checkin_date: "2024-11-05",
        checkout_date: "2024-11-07",
        status: "Pending",
        total_price: 200,
        payment: "Pending",
        user_id: 2,
        room_id: 102,
        remark: "Late check-in",
      },
    ];
    setBookings(mockBookings);
  };

  const fetchRooms = async () => {
    const mockRooms = [
      { id: 101, type: "Single", price: 100, availability: true },
      { id: 102, type: "Double", price: 150, availability: false },
      { id: 103, type: "Suite", price: 200, availability: true },
      { id: 104, type: "Single", price: 100, availability: true },
      { id: 105, type: "Double", price: 150, availability: false },
      { id: 106, type: "Suite", price: 200, availability: true },
      { id: 107, type: "Single", price: 100, availability: true },
      { id: 108, type: "Double", price: 150, availability: false },
    ];
    setRooms(mockRooms);
  };

  const handleUpdateBooking = (booking) => {
    setEditingBooking(booking);
    setUpdatedBooking(booking);
  };

  const handleSaveBooking = async () => {
    const updatedBookings = bookings.map((booking) =>
      booking.booking_id === updatedBooking.booking_id ? updatedBooking : booking
    );
    setBookings(updatedBookings);
    setEditingBooking(null);
  };

  const handleCancelBooking = async (bookingId) => {
    setBookings(bookings.filter((booking) => booking.booking_id !== bookingId));
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
            <th>Check-In Date</th>
            <th>Check-Out Date</th>
            <th>Status</th>
            <th>Total Price</th>
            <th>Payment</th>
            <th>User ID</th>
            <th>Room ID</th>
            <th>Remark</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.booking_id}>
              <td>{booking.booking_id}</td>
              <td>{booking.checkin_date}</td>
              <td>{booking.checkout_date}</td>
              <td>{booking.status}</td>
              <td>{booking.total_price}</td>
              <td>{booking.payment}</td>
              <td>{booking.user_id}</td>
              <td>{booking.room_id}</td>
              <td>{booking.remark}</td>
              <td>
                <button onClick={() => handleUpdateBooking(booking)}>
                  Update
                </button>
                <button onClick={() => handleCancelBooking(booking.booking_id)}>
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
              Check-In Date:
              <input
                type="date"
                value={updatedBooking.checkin_date}
                onChange={(e) =>
                  setUpdatedBooking({
                    ...updatedBooking,
                    checkin_date: e.target.value,
                  })
                }
              />
            </label>
            <label>
              Check-Out Date:
              <input
                type="date"
                value={updatedBooking.checkout_date}
                onChange={(e) =>
                  setUpdatedBooking({
                    ...updatedBooking,
                    checkout_date: e.target.value,
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
            <label>
              Total Price:
              <input
                type="number"
                value={updatedBooking.total_price}
                onChange={(e) =>
                  setUpdatedBooking({
                    ...updatedBooking,
                    total_price: e.target.value,
                  })
                }
              />
            </label>
            <label>
              Payment:
              <input
                type="text"
                value={updatedBooking.payment}
                onChange={(e) =>
                  setUpdatedBooking({
                    ...updatedBooking,
                    payment: e.target.value,
                  })
                }
              />
            </label>
            <label>
              User ID:
              <input
                type="number"
                value={updatedBooking.user_id}
                onChange={(e) =>
                  setUpdatedBooking({
                    ...updatedBooking,
                    user_id: e.target.value,
                  })
                }
              />
            </label>
            <label>
              Room ID:
              <input
                type="number"
                value={updatedBooking.room_id}
                onChange={(e) =>
                  setUpdatedBooking({
                    ...updatedBooking,
                    room_id: e.target.value,
                  })
                }
              />
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