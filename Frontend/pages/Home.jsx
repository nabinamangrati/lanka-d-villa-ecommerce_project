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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            quaerat labore error voluptatibus itaque quo totam sint impedit
            dignissimos animi fugit, rem, incidunt dolorem possimus aut beatae,
            excepturi minima voluptate.
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
