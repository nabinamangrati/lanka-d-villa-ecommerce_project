import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RoomDetail = () => {
  const { id } = useParams(); // Get room ID from the URL
  const [room, setRoom] = useState(null);

  useEffect(() => {
    fetchRoomDetails(id); // Fetch details for a specific room
  }, [id]);

  const fetchRoomDetails = async (roomId) => {
    // Mock data for room details
    const mockRoomData = {
      1: { room_id: 1, type: "Single", room_no: 101, availability: true, price: 100 },
      2: { room_id: 2, type: "Double", room_no: 102, availability: false, price: 150 },
      // add more mock data if needed
    };
    setRoom(mockRoomData[roomId]);
  };

  if (!room) return <p>Loading...</p>;

  return (
    <div>
      <h2>Room {room.room_no} Details</h2>
      <p>Type: {room.type}</p>
      <p>Availability: {room.availability ? "Available" : "Unavailable"}</p>
      <p>Price per night: ${room.price}</p>
      {/* You can add more details as needed */}
    </div>
  );
};

export default RoomDetail;
