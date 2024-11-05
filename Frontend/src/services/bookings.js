import axios from "axios";

const baseUrl = "http://localhost:3001/bookings";

const getBookings = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};
const updateBooking = async (bookingId, updatedBooking) => {
  const response = await axios.put(`${baseUrl}/${bookingId}`, updatedBooking);
  return response.data;
};
export default { getBookings,updateBooking };
