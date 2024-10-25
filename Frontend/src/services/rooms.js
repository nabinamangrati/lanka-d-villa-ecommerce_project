import axios from "axios";

const baseUrl = "/api/room";

const getRooms = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};
export default { getRooms };
