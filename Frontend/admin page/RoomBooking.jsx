import React, { useState, useEffect } from "react";

const RoomBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Fetch bookings data when the component loads
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    // Fetch data from your API
    // const response = await fetch("/api/booking");
    // const data = await response.json();
    // setBookings(data);
    const mockData = [
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
    setBookings(mockData);
  };

  const handleUpdateBooking = (bookingId) => {
    // Logic to open a modal or form to update booking details
  };

  const handleCancelBooking = (bookingId) => {
    // Logic to cancel a booking by ID
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
                <button onClick={() => handleUpdateBooking(booking.id)}>
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
    </div>
  );
};

export default RoomBookings;
