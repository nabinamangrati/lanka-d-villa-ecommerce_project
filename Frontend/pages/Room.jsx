import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Room = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRooms(); // Using mock data for now
  }, []);

  const fetchRooms = async () => {
    // Mock data - simulate backend data
    const mockRooms = [
      { room_id: 1, room_type: "Single", room_no: 101, room_availability: true, room_perday: 100 },
      { room_id: 2, room_type: "Double", room_no: 102, room_availability: false, room_perday: 150 },
      { room_id: 3, room_type: "Suite", room_no: 201, room_availability: true, room_perday: 200 },
      { room_id: 4, room_type: "Deluxe", room_no: 202, room_availability: true, room_perday: 250 },
    ];
    setRooms(mockRooms); // Set the mock data to state
    setLoading(false);
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h3>Available Rooms</h3>
      {rooms.map((room) => (
        <div key={room.room_id}>
          <Link to={`/room/${room.room_id}`}>
            Room {room.room_no}: {room.room_type} - ${room.room_perday} per night{" "}
            {room.room_availability ? "(Available)" : "(Unavailable)"}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Room;
