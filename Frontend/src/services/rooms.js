import axios from "axios";

const baseUrl = "http://localhost:3001/rooms";

const getRooms = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};
export default { getRooms };
