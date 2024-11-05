import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Menu from "../pages/Menu";
import PrivateEvent from "../pages/PrivateEvent";
import Navigation from "../components/navigation/Navigation";
import Footer from "../pages/Footer";
import Booking from "../pages/Booking";
import Room from "../pages/Room";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Admin from "../admin page/Admin";
import Gallery from "../pages/Gallery";
import RoomDetails from "../pages/RoomDetails";

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/room" element={<Room />} />
        <Route path="/gallery" element={<Gallery />} />

        <Route path="/private-events" element={<PrivateEvent />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/room/:id" element={<RoomDetails />} />

      </Routes>

      <Footer />
    </Router>
  );
};
export default App;
