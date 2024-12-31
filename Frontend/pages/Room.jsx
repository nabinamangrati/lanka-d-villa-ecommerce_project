import { useState } from "react";
import { Link } from "react-router-dom";
import resortImage from "../images/resort.jpeg"

const Room = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [roomDetails, setRoomDetails] = useState(null);

  const rooms = {
    group: {
      name: "Group Room",
      description:
        "Spacious rooms designed for groups with amenities like 24/7 room service, A/C, and more.",
      price: "Rs. 2000 per person",
      image: resortImage,
      facilities: ["24/7 Room Service", "Air Conditioning", "Free Wi-Fi"],
    },
    couple: {
      name: "Couple Room",
      description:
        "Cozy and romantic room perfect for couples, with a beautiful view and privacy.",
      price: "Rs. 2500",
      image: resortImage,
      facilities: ["Private Balcony", "Free Breakfast", "Romantic Lighting"],
    },
  };
  const handleDetailsClick = (roomType) => {
    setRoomDetails(rooms[roomType]);
    setShowDetails(true);
  };

  

  // const handleDetailsClick = (roomType) => {
  //   if (roomType === "group") {
  //     setRoomDetails({
  //       name: "Group Room",
  //       description:
  //         "Spacious rooms designed for groups with amenities like 24/7 room service, A/C, and more.",
  //       picture:{resortImage},
  //     });
  //   } else if (roomType === "couple") {
  //     setRoomDetails({
  //       name: "Couple Room",
  //       description:
  //         "Cozy and romantic room perfect for couples, with a beautiful view and privacy.",
  //       price: "Rs. 2500",
  //     });
  //   }
  //   setShowDetails(true);
  // };

  const closeDetailsPopup = () => {
    setShowDetails(false);
    setRoomDetails(null);
  };

  return (
    <div className="font-sans">
      {/* Featured Rooms Section with Background Image */}
      <section
        className="py-16 bg-cover bg-center"
        style={{
          backgroundImage: `url(${resortImage})`, // Add your desired background image URL here
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="text-4xl font-bold mb-8 text-center text-white shadow-lg">
          ~Explore Our Rooms~
        </h2>

        <div className="container mx-auto w-[80%] px-10">
          {/* Group Room */}
          <div className="border rounded-lg shadow-xl bg-white bg-opacity-70 p-6 mb-8 hover:shadow-2xl transform hover:scale-105 transition duration-300">
            <img
              src={resortImage}
              alt="Group Room"
              className="w-full h-64 object-cover rounded-t-lg mb-4"
            />
            <h4 className="text-2xl font-bold text-green-900 mb-2">Group Room</h4>
            <p className="text-lg font-medium text-gray-700 mb-4">
              Rs. 2000 per person
            </p>
            <div className="flex justify-between items-center">
              <button
                onClick={() => handleDetailsClick("group")}
                className="bg-green-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-green-700 hover:shadow-lg transition duration-300"
              >
                Details
              </button>
              <Link
                to="/availability/"
                className="bg-green-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-green-700 hover:shadow-lg transition duration-300"
              >
                Availability
              </Link>
            </div>
          </div>

          {/* Couple Room */}
          <div className="border rounded-lg shadow-xl bg-white bg-opacity-70 p-6 mb-8 hover:shadow-2xl transform hover:scale-105 transition duration-300">
            <img
              src={resortImage}
              alt="Couple Room"
              className="w-full h-64 object-cover rounded-t-lg mb-4"
            />
            <h4 className="text-2xl font-bold text-green-900 mb-2">
              Couple Room
            </h4>
            <p className="text-lg font-medium text-gray-700 mb-4">Rs. 2500</p>
            <div className="flex justify-between items-center">
              <button
                onClick={() => handleDetailsClick("couple")}
                className="bg-green-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-green-700 hover:shadow-lg transition duration-300"
              >
                Details
              </button>
              <Link
                to="/availability/"
                className="bg-green-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-green-700 hover:shadow-lg transition duration-300"
              >
                Availability
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Popup for Room Details */}
      {showDetails && roomDetails && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-3xl max-w-2xl w-[100vw] h-[40vw]">
          <img
        src={roomDetails.image}
        alt={roomDetails.name}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
            <h3 className="text-2xl font-bold mb-4 text-blue-700">
              {roomDetails.name}
            </h3>
            <p className="text-gray-700 mb-4">{roomDetails.description}</p>
            <p className="text-xl font-medium text-gray-600 mb-6">
              {roomDetails.price}
            </p>
            <ul className="text-gray-700 mb-4 list-disc list-inside">
        {roomDetails.facilities.map((facility, index) => (
          <li key={index}>{facility}</li>
        ))}
      </ul>
            <div className="flex justify-end">
              <button
                onClick={closeDetailsPopup}
                className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Room;
