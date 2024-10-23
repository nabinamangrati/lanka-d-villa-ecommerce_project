import resort from "../images/resort.jpeg";

const About = () => {
  return (
    <>
      <div className="about-section">
        <img src={resort} alt="Resort" className="about-image" />
        <div className="about-content">
          <h1>About Our Resort</h1>
          <p>
            Welcome to our resort, where luxury meets nature. Nestled in the
            heart of breathtaking landscapes, our resort offers a unique blend
            of elegance, comfort, and adventure. Whether you’re here for
            relaxation or an active getaway, we promise an unforgettable
            experience.
          </p>
          <p>
            Since opening our doors in [YEAR], we've been committed to providing
            top-tier service and unforgettable stays. With world-class
            amenities, including private dining experiences, spa services, and
            recreational activities, we ensure that every guest leaves with
            cherished memories.
          </p>
          <p>
            Our resort is more than just a place to stay—it's a destination
            where guests can unwind, reconnect, and rejuvenate. We take pride in
            our eco-friendly practices, locally sourced cuisine, and dedicated
            staff who are here to make your stay perfect.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
