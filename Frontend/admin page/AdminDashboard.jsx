import RoomBookings from "./RoomBooking";
import MenuManagement from "./MenuManagement";
import UserManagement from "./UserManagement";
const AdminDashboard = () => {
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <UserManagement />
      <RoomBookings />
      <MenuManagement />
    </div>
  );
};
export default AdminDashboard;
