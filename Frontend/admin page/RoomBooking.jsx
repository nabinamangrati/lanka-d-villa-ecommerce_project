import React, { useState, useEffect } from "react";
import bookingServices from "../src/services/bookings";
import roomServices from "../src/services/rooms"

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
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.booking_id}>
              <td>{booking.id}</td>
              <td>{booking.check_in}</td>
              <td>{booking.check_out}</td>
              <td>{booking.status}</td>
              <td>{booking.total_price}</td>
              <td>{booking.payment_status}</td>
              <td>{booking.user_id}</td>
              <td>{booking.room_id}</td>
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
                value={updatedBooking.check_in}
                onChange={(e) =>
                  setUpdatedBooking({
                    ...updatedBooking,
                    check_in: e.target.value,
                  })
                }
              />
            </label>
            <label>
              Check-Out Date:
              <input
                type="date"
                value={updatedBooking.check_out}
                onChange={(e) =>
                  setUpdatedBooking({
                    ...updatedBooking,
                    check_out: e.target.value,
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
              <select
                value={updatedBooking.payment_status}
                onChange={(e) =>
                  setUpdatedBooking({
                    ...updatedBooking,
                    payment_status: e.target.value,
                  })
                }
              >
                <option value="Paid">Paid</option>
                <option value="Unpaid">Unpaid</option>
              </select>
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