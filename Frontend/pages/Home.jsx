import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="font-sans">
    {/* //   Navbar
    //   <nav className="bg-gray-100 p-4">
    //     <div className="container mx-auto flex justify-between items-center">
    //       <Link to="/" className="text-2xl font-bold text-green-600">Lanka D Village</Link>
    //       <div className="space-x-4">
    //         <Link to="/about" className="text-gray-700 hover:text-green-600">About</Link>
    //         <Link to="/menu" className="text-gray-700 hover:text-green-600">Menu</Link>
    //         <Link to="/booking" className="text-gray-700 hover:text-green-600">Booking</Link>
    //       </div>
    //     </div>
    //   </nav> */}

      {/* Hero Section */}
      <section className="bg-green-50 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6 text-green-800">
          Nature's Comfort Awaits at Lanka D Village Resort and Restaurant
        </h2>
        <Link to="/menu">
          <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition duration-300">View Menu</button>
        </Link>
      </section>

      {/* About Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4 text-green-700">Welcome to Lanka D Village Resort and Restaurant</h2>
          <p className="mb-6 text-gray-600">
            Your perfect getaway with luxurious rooms, fine dining, and unmatched hospitality.
          </p>
          <Link to="/about">
            <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition duration-300">Learn More</button>
          </Link>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4 text-green-700">Discover Our Restaurant</h2>
          <p className="mb-6 text-gray-600">Indulge in culinary delights from our award-winning chefs.</p>
          <Link to="/menu">
            <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition duration-300">View Menu</button>
          </Link>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="py-16 bg-white">
        <h2 className="text-3xl font-semibold mb-8 text-center text-green-700">Our Rooms</h2>
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-2 text-green-600">Deluxe Room</h3>
          <p className="mb-4 text-gray-600">Comfort and elegance for a relaxing stay.</p>
          <Link to="/booking">
            <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition duration-300">Book Now</button>
          </Link>
        </div>
      </section>

      {/* Private Dining Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-center text-green-700">Private Dining</h2>
          <p className="mb-6 text-gray-600 text-center max-w-3xl mx-auto">
            Discover the elegance and exclusivity of our private dining experience. Whether you're planning an intimate gathering or a special celebration, our luxurious settings and personalized service will make your event truly unforgettable. Enjoy a tailor-made menu crafted by our expert chefs, designed to suit your taste and occasion.
          </p>
          <div className="text-center">
            <Link to="/private-events">
              <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition duration-300">Learn More</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-white">
        <h2 className="text-3xl font-semibold mb-8 text-center text-green-700">Gallery</h2>
        {/* Add your gallery content here */}
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8 text-green-700">What Our Guests Say</h2>
          <blockquote className="text-xl italic text-gray-600">"Amazing experience with excellent service!"</blockquote>
        </div>
      </section>
    </div>
  );
};

export default Home;