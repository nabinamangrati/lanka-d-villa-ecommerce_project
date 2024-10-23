import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      {/* start  */}
      <section>
        <h2>
          Nature's Comfort Awaits at Lanka D Village Resort and Restaurant
        </h2>
        <Link to="/menu">
          <button>View Menu</button>
        </Link>
      </section>

      {/* about us */}
      <section>
        <div>
          <h2>Welcome to Lanka D Village Resort and Restaurant</h2>
          <p>
            Your perfect getaway with luxurious rooms, fine dining, and
            unmatched hospitality.
          </p>
          <Link to="/about">
            <button>Learn More</button>
          </Link>
        </div>
      </section>
      {/* menu section */}
      <section>
        <div>
          <h2>Discover Our Restaurant</h2>
          <p>Indulge in culinary delights from our award-winning chefs.</p>
          <Link to="/menu">
            <button>View Menu</button>
          </Link>
        </div>
      </section>

      {/* Featured Rooms */}
      <section>
        <h2>Our Rooms</h2>
        <div>
          <h3>Deluxe Room</h3>
          <p>Comfort and elegance for a relaxing stay.</p>
          <Link to="/booking">
            <button>Book Now</button>
          </Link>
        </div>
      </section>

      {/* private dinning section */}
      <section>
        <h2>Private Dinning</h2>
        <div>
          <p>
            Discover the elegance and exclusivity of our private dining
            experience. Whether you're planning an intimate gathering or a
            special celebration, our luxurious settings and personalized service
            will make your event truly unforgettable. Enjoy a tailor-made menu
            crafted by our expert chefs, designed to suit your taste and
            occasion.
          </p>
          <Link to="/private-events">
            <button>Learn More</button>
          </Link>
        </div>
      </section>

      {/* gallery */}
      <section>
        <h2>Gallery</h2>
      </section>

      {/* Testimonials */}
      <section>
        <h2>What Our Guests Say</h2>
        <blockquote>"Amazing experience with excellent service!"</blockquote>
      </section>
    </div>
  );
};
export default Home;
