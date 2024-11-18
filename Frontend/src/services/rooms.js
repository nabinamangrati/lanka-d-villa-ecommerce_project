import axios from "axios";

const baseUrl = "http://localhost:3001/rooms";

const getRooms = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const getRoomById = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`);
  return response.data;
};
export default { getRooms, getRoomById };
