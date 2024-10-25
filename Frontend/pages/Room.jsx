import { Link } from "react-router-dom";

const Room = () => {
  return (
    <>
      <div>
        <Link to="/room/1"> room 1</Link>
        <Link to="/room/2"> room2</Link>
        <Link to="/room/3"> room3</Link>
        <Link to="/room/4"> room4</Link>
      </div>
    </>
  );
};
export default Room;
