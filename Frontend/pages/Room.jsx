import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import roomServices from "../src/services/rooms"

const Room = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRooms(); 
  }, []);

 const fetchRooms = async () => {
   
    try {
      const response = await roomServices.getRooms();
      console.log("Fetched rooms from room.jsx:", response); 
      setRooms(response);
      setLoading(false)
    } catch (error) {
      console.error("Error fetching rooms:", error);
    }
  };

  if (loading) return <p>Loading...</p>;

 

  return (
    <div>
      {rooms.map((room) => (
        <div key={room.id}>
          <Link to={`/room/${room.id}`}>
            <h4>Room {room.type}</h4>
            <p>Price: ${room.price} per night</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Room;
