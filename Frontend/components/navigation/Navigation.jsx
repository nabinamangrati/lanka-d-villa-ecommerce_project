import { Link } from "react-router-dom";
import logo from "../../images/logo.jpeg";
const Navigation = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="resort logo" />
          </Link>
        </div>
        <div className="nav-links">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/about">
            About Us
          </Link>
          <Link className="nav-link" to="/menu">
            Menu
          </Link>
          <Link className="nav-link" to="/room">
            Rooms
          </Link>
          <Link className="nav-link" to="/gallery">
            Gallery
          </Link>
          <Link className="nav-link" to="/private-events">
            Private Dinning
          </Link>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
