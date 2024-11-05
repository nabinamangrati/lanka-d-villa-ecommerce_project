import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Booking = () => {
  const { roomId } = useParams(); // Get room ID from URL
  const [isRoomAvailable, setIsRoomAvailable] = useState(false);
  const [bookingData, setBookingData] = useState({
    roomId: roomId || "",
    checkinDate: "",
    checkoutDate: "",
    guestName: "",
    guestEmail: "",
  });

  useEffect(() => {
    if (roomId) {
      checkRoomAvailability(roomId);
    }
  }, [roomId]);

  const checkRoomAvailability = async (roomId) => {
    // Mock room availability check (replace with actual API call)
    const availableRooms = ["101", "103"]; // Mock available rooms
    setIsRoomAvailable(availableRooms.includes(roomId));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (!isRoomAvailable) {
      alert("Room is not available.");
      return;
    }
    console.log("Booking data submitted:", bookingData);
    // Send bookingData to backend API
  };

  return (
    <div>
      <h3>Room Booking</h3>
      <form onSubmit={handleBookingSubmit}>
        <label>
          Room:
          <select
            name="roomId"
            value={bookingData.roomId}
            onChange={handleInputChange}
            disabled={!!roomId} // Disable room selection if roomId is provided
          >
            <option value="">Select Room</option>
            <option value="101">Room 101</option>
            <option value="102">Room 102</option>
            <option value="103">Room 103</option>
            <option value="104">Room 104</option>
          </select>
        </label>

        {!isRoomAvailable && <p style={{ color: "red" }}>Room is unavailable</p>}

        <label>
          Check-In Date:
          <input
            type="date"
            name="checkinDate"
            value={bookingData.checkinDate}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Check-Out Date:
          <input
            type="date"
            name="checkoutDate"
            value={bookingData.checkoutDate}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Guest Name:
          <input
            type="text"
            name="guestName"
            value={bookingData.guestName}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Guest Email:
          <input
            type="email"
            name="guestEmail"
            value={bookingData.guestEmail}
            onChange={handleInputChange}
          />
        </label>

        <button type="submit" disabled={!isRoomAvailable}>Book Room</button>
      </form>
    </div>
  );
};

export default Booking;
