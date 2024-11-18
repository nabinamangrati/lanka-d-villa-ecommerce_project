import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import roomServices from "../src/services/rooms"

const RoomDetail = () => {
  const { id } = useParams(); // Get room ID from the URL
  const [room, setRoom] = useState(null);

  useEffect(() => {
    fetchRoomDetails(id); // Fetch details for a specific room
  }, [id]);

  const fetchRoomDetails = async (roomId) => {
    try {
      const response = await roomServices.getRoomById(roomId);
      console.log("Fetched room details:", response);
      setRoom(response);
    } catch (error) {
      console.error("Error fetching room details:", error);
    }
  }

  if (!room) return <p>Loading...</p>;

  return (
    <div>
      <h2>Room {room.room_no} Details</h2>
      <p>Type: {room.type}</p>
      <p>Price per night: ${room.price}</p>
      {/* You can add more details as needed */}
    </div>
  );
};

export default RoomDetail;
