import { Link } from "react-router-dom";

const Navigation = () => {
  const padding = {
    padding: 5,
  };

  return (
    <div>
      <Link style={padding} to="/">
        Home
      </Link>
      <Link style={padding} to="/about">
        About Us
      </Link>
      <Link style={padding} to="/menu">
        Menu
      </Link>
      <Link style={padding} to="/room">
        Rooms
      </Link>
      <Link style={padding} to="/private-events">
        Private Dinning
      </Link>
      <Link style={padding} to="/contact">
        Contact
      </Link>
    </div>
  );
};
export default Navigation;
