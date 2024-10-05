import { Link } from "react-router-dom";

const Room = () => {
  return (
    <>
      <div>
        <Link to="/private-events"> room1</Link>
        <Link to="/private-events"> room2</Link>
        <Link to="/private-events"> room3</Link>
        <Link to="/private-events"> room4</Link>
      </div>
    </>
  );
};
export default Room;
